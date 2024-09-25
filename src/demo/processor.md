---
title: 自定义注解处理器
icon: fab fa-markdown
order: 2
cover: 	
category:
  - Java
tag:
  - APT
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
import org.springframework.javapoet.FieldSpec;
import org.springframework.javapoet.JavaFile;
import org.springframework.javapoet.ParameterSpec;
import org.springframework.javapoet.TypeSpec;

import javax.annotation.processing.ProcessingEnvironment;
import javax.annotation.processing.Processor;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.annotation.processing.SupportedSourceVersion;
import javax.lang.model.SourceVersion;
import javax.lang.model.element.ElementKind;
import javax.lang.model.element.Modifier;
import javax.lang.model.element.TypeElement;
import javax.lang.model.type.MirroredTypeException;
import javax.lang.model.type.TypeMirror;
import java.util.List;

@SupportedSourceVersion(SourceVersion.RELEASE_17)
@SupportedAnnotationTypes("ext.zhibilin.coding.processor.annotations.template.TemplateInitEnum")
@AutoService(Processor.class)
public class TemplateInitEnumProcessor extends SimpleProcessor {
    @Override
    public synchronized void init(ProcessingEnvironment processingEnv) {
        super.init(processingEnv);
    }


    @Override
    protected Boolean filter(TypeElement typeElement) {
        if (ElementKind.ENUM.equals(typeElement.getKind())) {
            return false;
        }

        TemplateInitEnum annotation = typeElement.getAnnotation(TemplateInitEnum.class);

        if (ObjUtil.isNotEmpty(annotation)) {

            if ("false".equals(typeElement.getAnnotation(TemplateInitEnum.class).isFirstCompiled())) {
                return false;
            }
        }
        return true;
    }

    @Override
    protected Boolean processing(TypeElement element) {
        TemplateInitEnum annotation = element.getAnnotation(TemplateInitEnum.class);

        Class<?> typeClass = null;
        TypeMirror typeMirror = null;
        try {
            typeClass = annotation.type();
        } catch (MirroredTypeException mte) {
            typeMirror = mte.getTypeMirror();

        }
        typeClass = getTypeClass(typeMirror);

        String type = typeClass.getName();
        String enumName = annotation.enumName();
        String enumValue = annotation.enumValue();

        TypeSpec.Builder targetEnumBuilder = createPublicTypeSpecBuilder(element.getSimpleName().toString(), ElementKind.ENUM)
                .addAnnotation(createBaseAnnotationBuilder(TemplateInitEnum.class)
                        .addMember("type", "$T.class", typeClass)
                        .addMember("isFirstCompiled", "$L", "\"false\"")
                        .build());
        if (notExistsDeclaraField(enumName)) {
            FieldSpec field = createBaseFieldBuilder(enumName, String.class, Modifier.PRIVATE)
                    .addAnnotation(createBaseAnnotation(JsonValue.class))
                    .build();
            targetEnumBuilder
                    .addField(field)
                    .addMethod(createGetMethod(field, String.class));
        }
        if (notExistsDeclaraField(enumValue)) {
            String type1 = type;

            FieldSpec field = createBaseFieldBuilder(enumValue, typeClass, Modifier.PRIVATE)
                    .addAnnotation(createBaseAnnotation(EnumValue.class))
                    .build();
            targetEnumBuilder.addField(field)
                    .addMethod(createGetMethod(field, typeClass));
        }
        //是否存在无参构造函数
        if (notExistsDeclaraMethod("<init>", null, "")) {
            targetEnumBuilder.addMethod(createDefaultNoArgsContructor());
        }
        //是否存在全参构造函数
        if (notExistsDeclaraMethod("<init>", null, type + " " + enumValue + "," + "java.lang.String" + " " + enumName)) {
            List<FieldSpec> fields = targetEnumBuilder.fieldSpecs;
            //当前枚举没有字段时，生成的全参构造函数名==无参构造函数名 会报错
            if (CollUtil.isNotEmpty(fields)) {
                List<ParameterSpec> parameterSpecs = convertParameterSpecs(fields);

                targetEnumBuilder.addMethod(createAllArgsContructor(element.getSimpleName().toString(), parameterSpecs, fields));

            }

        }
        //生成java文件
        TypeSpec myEnum = targetEnumBuilder.addEnumConstant("UNUSED").build();
        JavaFile javaFile = genarateJavaFile(myEnum, currentAnnotatedElement);
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
:::
