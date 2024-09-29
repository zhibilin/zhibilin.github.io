---
title: 自定义注解处理器
icon: fab fa-markdown
order: 2
cover: https://user-images.githubusercontent.com/19292210/60553863-044dd200-9cea-11e9-987e-7db84449f215.png	
category:
  - Java
tag:
  - APT 
  - AOT
---

:::tabs
@tab 处理器
```java
package ext.zhibilin.coding.processor.core;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.util.ObjUtil;
import com.baomidou.mybatisplus.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonValue;
import com.google.auto.service.AutoService;
import ext.zhibilin.coding.processor.annotations.template.TemplateInitEnum;
import ext.zhibilin.coding.processor.common.SimpleProcessor;
import java.util.List;
import javax.annotation.processing.ProcessingEnvironment;
import javax.annotation.processing.Processor;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.annotation.processing.SupportedSourceVersion;
import javax.lang.model.SourceVersion;
import javax.lang.model.element.Element;
import javax.lang.model.element.ElementKind;
import javax.lang.model.element.Modifier;
import javax.lang.model.type.MirroredTypeException;
import javax.lang.model.type.TypeMirror;
import org.springframework.javapoet.FieldSpec;
import org.springframework.javapoet.ParameterSpec;
import org.springframework.javapoet.TypeSpec;

@SupportedSourceVersion(SourceVersion.RELEASE_17)
@SupportedAnnotationTypes({"ext.zhibilin.coding.processor.annotations.template.TemplateInitEnum"})
@AutoService({Processor.class})
public class TemplateInitEnumProcessor extends SimpleProcessor {
    public TemplateInitEnumProcessor() {
    }

    public synchronized void init(ProcessingEnvironment processingEnv) {
        super.init(processingEnv);
    }

    protected Boolean filter(Element element) {
        if (ElementKind.ENUM.equals(element.getKind())) {
            return false;
        } else {
            TemplateInitEnum annotation = (TemplateInitEnum)element.getAnnotation(TemplateInitEnum.class);
            System.out.println(annotation);
            return ObjUtil.isNotEmpty(annotation) && "false".equals(((TemplateInitEnum)element.getAnnotation(TemplateInitEnum.class)).isFirstCompiled()) ? false : true;
        }
    }

    protected Boolean processing(Element element) {
        TemplateInitEnum annotation = (TemplateInitEnum)element.getAnnotation(TemplateInitEnum.class);
        Class<?> typeClass = null;
        TypeMirror typeMirror = null;

        try {
            typeClass = annotation.type();
        } catch (MirroredTypeException var11) {
            typeMirror = var11.getTypeMirror();
        }

        typeClass = this.getTypeClass(typeMirror);
        String type = typeClass.getName();
        String enumName = annotation.enumName();
        String enumValue = annotation.enumValue();
        TypeSpec.Builder targetEnumBuilder = this.createPublicTypeSpecBuilder(element.getSimpleName().toString(), ElementKind.ENUM).addAnnotation(this.createBaseAnnotationBuilder(TemplateInitEnum.class).addMember("type", "$T.class", new Object[]{typeClass}).addMember("isFirstCompiled", "$L", new Object[]{"\"false\""}).build());
        if (this.notExistsDeclaraField(enumName)) {
            FieldSpec field = this.createBaseFieldBuilder(enumName, String.class, Modifier.PRIVATE).addAnnotation(this.createBaseAnnotation(JsonValue.class)).build();
            targetEnumBuilder.addField(field).addMethod(this.createGetMethod(field, String.class));
        }

        if (this.notExistsDeclaraField(enumValue)) {
            FieldSpec field = this.createBaseFieldBuilder(enumValue, typeClass, Modifier.PRIVATE).addAnnotation(this.createBaseAnnotation(EnumValue.class)).build();
            targetEnumBuilder.addField(field).addMethod(this.createGetMethod(field, typeClass));
        }

        if (this.notExistsDeclaraMethod("<init>", (String)null, "")) {
            targetEnumBuilder.addMethod(this.createDefaultNoArgsContructor());
        }

        if (this.notExistsDeclaraMethod("<init>", (String)null, type + " " + enumValue + ",java.lang.String " + enumName)) {
            List<FieldSpec> fields = targetEnumBuilder.fieldSpecs;
            if (CollUtil.isNotEmpty(fields)) {
                List<ParameterSpec> parameterSpecs = this.convertParameterSpecs(fields);
                targetEnumBuilder.addMethod(this.createAllArgsContructor(element.getSimpleName().toString(), parameterSpecs, fields));
            }
        }

        TypeSpec myEnum = targetEnumBuilder.addEnumConstant("UNUSED").build();
        this.genarateJavaFile(myEnum);
        return true;
    }
}



```
@tab 注解
```java
package ext.zhibilin.coding.processor.annotations.template;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;


@Target(ElementType.TYPE)
@Retention(RetentionPolicy.SOURCE)
public @interface TemplateInitEnum  {

    /**
     * 枚举值类型
     *
     */
    Class<?> type() default Object.class;
    String enumName() default "name";

    String enumValue() default "value";

    /**
     * 是否第一次被编译
     */
    String isFirstCompiled() default "true";

}

```
@tab 核心类库
![核心类库](/static/img/blog/屏幕截图-2024-09-27-020307.png)

:::
