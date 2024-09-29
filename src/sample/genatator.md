---
title: 代码生成器
icon: fab fa-markdown
order: 2
cover: https://github.githubassets.com/assets/inbox-zero-86555dddc82e.svg
category:
  - Java
tag:
  - demo
---
## 一、代码生成器
:::tabs 

@tab 核心方法
```java
public class CodeGenerator {
  
    /**
     * web端生成模板代码
     * @param table    数据库表模型
     * @param zip
     */
    public static void generatorCode(DbTable table,
                                     ZipOutputStream zip) {
        List<DbTable.Column> columns = table.getColumns();

        boolean hasBigDecimal = false;
        boolean hasList = false;

        DbTable tableEntity = new DbTable();
        tableEntity.setTableName(table.getTableName());
        tableEntity.setComments(table.getComments());
        //表名转换成Java类名
        String className = tableToJava(tableEntity.getTableName(), config.getStringArray("tablePrefix"));
        tableEntity.setClassName(className);
        tableEntity.setClassname(StringUtils.uncapitalize(className));

        List<DbTable.Column> columsList = new ArrayList<>();
        for (DbTable.Column column : columns) {
            DbTable.Column Column = new DbTable.Column();
            Column.setColumnName(column.getColumnName());
            Column.setDataType(column.getDataType());
            Column.setComments(column.getComments());
            Column.setExtra(column.getExtra());

            //列名转换成Java属性名
            String attrName = columnToJava(Column.getColumnName());
            Column.setAttrName(attrName);
            Column.setAttrname(StringUtils.uncapitalize(attrName));

            //列的数据类型，转换成Java类型
            String attrType = config.getString(Column.getDataType(), columnToJava(Column.getDataType()));
            Column.setAttrType(attrType);


            if (!hasBigDecimal && attrType.equals("BigDecimal")) {
                hasBigDecimal = true;
            }
            if (!hasList && "array".equals(Column.getExtra())) {
                hasList = true;
            }
            //是否主键
            if ("PRI".equalsIgnoreCase(column.getColumnKey()) &&tableEntity.getPk() == null) {
                tableEntity.setPk(Column);
            }

            columsList.add(Column);
        }
        tableEntity.setColumns(columsList);

        if (tableEntity.getPk() == null) {
            tableEntity.setPk(tableEntity.getColumns().get(0));
        }
        CodeGeneratorProperties properties= CodeGeneratorProperties.getIntance()   ;
        HashMap<String,Object> map=new HashMap<>();
        Field[] fields = ClassUtil.getDeclaredFields(CodeGeneratorProperties.class);
        
        try {
            for (Field field : fields) {
                map.put(field.getName(),field.get(properties));
            }
        }catch (Exception e){
            throw new DbGeneratorCodeException("CodeGeneratorProperties异常，获取属性失败");
        }
        VelocityContext context = new VelocityContext(map);

        //获取模板列表
        List<String> templates = getTemplates();
        for (String template : templates) {
            try (
                    //渲染模板
                    StringWriter sw = new StringWriter();
            ) {
                Template tpl = Velocity.getTemplate(template, "UTF-8");
                tpl.merge(context, sw);
                //添加到zip
                zip.putNextEntry(new ZipEntry(getFileName(template, tableEntity.getClassName(), config.getString("package"), config.getString("moduleName"))));
                IOUtils.write(sw.toString(), zip, "UTF-8");
            } catch (IOException e) {
                throw new DbGeneratorCodeException("渲染模板失败，表名：" + tableEntity.getTableName() + "->" + e.getMessage());
            }
        }
        try {
            zip.closeEntry();
        }catch (IOException e){
            throw new DbGeneratorCodeException("渲染模板失败，表名：" + tableEntity.getTableName() + "->" + e.getMessage());
        }
    }

    private static List<String> getTemplates() {
        List<String> templates = new ArrayList<String>();
        templates.add("/vue/menu.sql.vm");
        templates.add("/vue/index.vue.vm");
        templates.add("/vue/update.vue.vm");
        templates.add("/vue/add.vue.vm");
        templates.add("/vue/api.js.vm");
        templates.add("/Entity.java.vm");
        templates.add("/Vo.java.vm");
        templates.add("/Dto.java.vm");
        templates.add("/CreateParam.java.vm");
        templates.add("/DeleteParam.java.vm");
        templates.add("/UpdateParam.java.vm");
        templates.add("/QueryParam.java.vm");
        templates.add("/Mapper.xml.vm");
        templates.add("/Mapper.java.vm");
        templates.add("/Manager.java.vm");
        templates.add("/Service.java.vm");
        templates.add("/ManagerImpl.java.vm");
        templates.add("/Controller.java.vm");
        for (int i = 0; i < templates.size(); i++) {
            templates.set(i, "/templates"+templates.get(i));
        }
        return templates;
    }



    /**
     * 列名转换成Java属性名
     */
    private static String columnToJava(String columnName) {

        return WordUtils.capitalizeFully(columnName, new char[]{'_'}).replace("_", "");
    }

    /**
     * 表名转换成Java类名
     */
    private static String tableToJava(String tableName, String[] tablePrefixArray) {
        if (null != tablePrefixArray && tablePrefixArray.length > 0) {
            for (String tablePrefix : tablePrefixArray) {
                tableName = tableName.replace(tablePrefix, "");
            }
        }
        return columnToJava(tableName);
    }

    /**
     * 获取文件名
     */
    private static String getFileName(String template, String className, String packageName, String moduleName) {
        String packagePath = "main" + File.separator + "java" + File.separator;
        if (StrUtil.isNotBlank(packageName)) {
            packagePath += packageName.replace(".", File.separator) + File.separator + moduleName + File.separator;
        }
        if (template.contains("Controller.java.vm")) {
            return packagePath + "controller" + File.separator + className + "Controller.java";
        }
        if (template.contains("CreateParam.java.vm")) {
            return packagePath + "model" + File.separator + "param" + File.separator + className + "CreateParam.java";
        }
        if (template.contains("DeleteParam.java.vm")){
            return packagePath + "model" + File.separator + "param" + File.separator + className + "DeleteParam.java";
        }
        if (template.contains("UpdateParam.java.vm")){
            return packagePath + "model" + File.separator + "param" + File.separator + className + "UpdateParam.java";
        }
        if (template.contains("QueryParam.java.vm")){
            return packagePath + "model" + File.separator + "param" + File.separator + className + "QueryParam.java";
        }
        if (template.contains("Entity.java.vm") ) {
            return packagePath + "model" + File.separator + "entity" + File.separator + className + "Entity.java";
        }
        if (template.contains("Vo.java.vm")){
            return packagePath + "model" + File.separator + "vo" + File.separator + className + "Vo.java";
        }
        if (template.contains("Dto.java.vm")){
            return packagePath + "model" + File.separator + "dto" + File.separator + className + "Dto.java";
        }
        if (template.contains("Manager.java.vm")){
            return packagePath + "manager" + File.separator + className + "Manager.java";
        }

        if (template.contains("ManagerImpl.java.vm")) {
            return packagePath + "manager" + File.separator + "impl" + File.separator + className + "ManagerImpl.java";
        }

        if (template.contains("Mapper.java.vm")) {
            return packagePath + "mapper" + File.separator + className + "Mapper.java";
        }

        if (template.contains("Mapper.xml.vm")) {
            return "main" + File.separator + "resources" + File.separator + "mapper" + File.separator + moduleName + File.separator + className + "Mapper.xml";
        }

        if (template.contains("Service.java.vm")) {
            return packagePath + "service" + File.separator + className + "Service.java";
        }



        if (template.contains("/vue/menu.sql.vm")) {
            return "main" + File.separator + "sql" +
                    File.separator + moduleName + File.separator + className + ".menu.sql";

        }

        if (template.contains("/vue/index.vue.vm")) {
            return "main" + File.separator + "vue" + File.separator + "src" + File.separator + "views" + File.separator + className +
                    File.separator + moduleName + File.separator  + "index.vue";
        }

        if (template.contains("/vue/add.vue.vm")) {
            return "main" + File.separator + "vue" + File.separator + "src" + File.separator + "views" + File.separator + className +
                    File.separator + moduleName + File.separator  + "add.vue";
        }

        if (template.contains("/vue/update.vue.vm")){
            return "main" + File.separator + "vue" + File.separator + "src" + File.separator + "views" + File.separator + className +
                    File.separator + moduleName + File.separator  + "update.vue";
        }
        if (template.contains("/vue/api.js.vm")){
            return "main" + File.separator + "vue" + File.separator + "src" + File.separator + "api" +
                    File.separator + moduleName + File.separator + className + "API.js";
        }


        return null;
    }
}    
```

@tab 使用示例
```java
public byte[] generatorCode(String[] tableNames) {


        try (
                ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
                ZipOutputStream zip = new ZipOutputStream(outputStream);
        ) {
            for (String tableName : tableNames) {
                //查询表信息
                DbTable table = queryTable(tableName);
                List<DbTable.Column> columns = queryColumns(tableName);
                table.setColumns(columns);
                //生成代码
                MPCodeGeneratorUtil.generatorCode(table, zip);
            }

            return outputStream.toByteArray();

        } catch (Exception e) {
            throw new DbGeneratorCodeException(e.getMessage());
        }


    }
```
  
@tab SQL 示例

```java
    @Select({
            "  select table_name tableName, table_comment comments from information_schema.tables\n" +
                    "where table_schema = (select database())\n" +
                    "order by create_time desc"
    })
    List<DbTable> list();

    @Select({
            "  select column_name columnName, data_type dataType, column_comment comments, column_key columnKey, extra  from information_schema.columns\n" +
                    "where table_name = #{tableName} and table_schema = (select database())\n" +
                    "order by ordinal_position"
    })
    List<DbTable.Column> getColumnsByDbTableName(String tableName) ;
```
:::
<!-- #include-env-start: /home/runner/work/vuepress-theme-hope/vuepress-theme-hope/docs/md-enhance/src/echarts -->
::: echarts Hello World!

```json
{
  "legend": {
    "top": "bottom"
  },
  "toolbox": {
    "show": true,
    "feature": {
      "mark": {
        "show": true
      },
      "dataView": {
        "show": true,
        "readOnly": false
      },
      "restore": {
        "show": true
      },
      "saveAsImage": {
        "show": true
      }
    }
  },
  "series": [
    {
      "name": "赠人玫瑰 手有余香",
      "type": "pie",
      "radius": [20, 100],
      "center": ["50%", "50%"],
      "roseType": "area",
      "itemStyle": {
        "borderRadius": 8
      },
      "data": [
        {
          "value": 40,
          "name": "rose 1"
        },
        {
          "value": 38,
          "name": "rose 2"
        },
        {
          "value": 32,
          "name": "rose 3"
        },
        {
          "value": 30,
          "name": "rose 4"
        },
        {
          "value": 28,
          "name": "rose 5"
        },
        {
          "value": 26,
          "name": "rose 6"
        },
        {
          "value": 22,
          "name": "rose 7"
        },
        {
          "value": 18,
          "name": "rose 8"
        }
      ]
    }
  ]
}
```

:::

<!-- #include-env-end -->