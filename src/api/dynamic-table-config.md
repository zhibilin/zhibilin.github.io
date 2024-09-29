---
title: 动态表单配置
icon: fab fa-markdown
order: 2
cover: 
category:
  - docs
tag:
  - api
---

## 更新配置

**接口地址**:`/config/update`

**请求方式**:`POST`

**请求数据类型**:`application/x-www-form-urlencoded`

**响应数据类型**:`*/*`

**接口描述**:

**请求参数**:

| 参数名称      | 参数说明             | 请求类型 | 是否必须 | 数据类型       | schema         |
| ------------- | -------------------- | -------- | -------- | -------------- | -------------- |
| param         |                      | query    | true     | UpdateParam    | UpdateParam    |
| id            | `配置id`             |          | true     | integer(int64) |                |
| extData       | `模板字段数据`       |          | true     | array          | ExtFieldConfig |
|   label         | 前端字段显示名       |          | true     | string         |                |
|   value         | 字段值               |          | true     | object         |                |
|   type          | 模板字段类型         |          | true     | int            |                |
|   fieldLength   | 字段长度             |          | false    | integer        |                |
|   fieldRequired | 模板字段是否必填     |          | true     | int            |                |
|   isBasicField  | 模板字段是否基础字段 |          | true     | int            |                |


**响应状态**:

| 状态码 | 说明 | schema |
| ------ | ---- | ------ |
| 200    | OK   | RVO    |

:::tabs
@tab 响应示例
```json
{
	"code": 0,
	"msg": "",
	"serverTime": "",
	"data": {
		"createAt": "",
		"updateAt": "",
		"id": 0,
		"type": "",
		"extData": [
			{
				"field": "",
				"label": "",
				"value": {},
				"type": "",
				"fieldLength": 0,
				"fieldRequired": "",
				"isBasicField": "",
				"createBy": 0,
				"remark": ""
			}
		],
		"createBy": 0,
		"updateBy": 0
	},
	"show": 0
}
```
:::

## 删除配置字段

**接口地址**:`/config/field/delete`

**请求方式**:`POST`

**请求数据类型**:`application/x-www-form-urlencoded`

**响应数据类型**:`*/*`

**接口描述**:

**请求参数**:

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型       | schema         |
| -------- | -------- | -------- | -------- | -------------- | -------------- |
| param    |          | query    | true     | ExtFieldConfig | ExtFieldConfig |
| label    |          |          | true     | string         |                |


**响应状态**:

| 状态码 | 说明 | schema          |
| ------ | ---- | --------------- |
| 200    | OK   | RExtFieldConfig |
:::tabs
@tab 响应示例
```json
{
	"code": 0,
	"msg": "",
	"serverTime": "",
	"data": {
		"field": "",
		"label": "",
		"value": {},
		"type": "",
		"fieldLength": 0,
		"fieldRequired": "",
		"isBasicField": "",
		"createBy": 0,
		"remark": ""
	},
	"show": 0
}
```
:::
## 添加配置字段

**接口地址**:`/config/field/add`

**请求方式**:`POST`

**请求数据类型**:`application/x-www-form-urlencoded`

**响应数据类型**:`*/*`

**接口描述**:

**请求参数**:

| 参数名称      | 参数说明             | 请求类型 | 是否必须 | 数据类型       | schema         |
| ------------- | -------------------- | -------- | -------- | -------------- | -------------- |
| param         |                      | query    | true     | ExtFieldConfig | ExtFieldConfig |
| label         | 前端字段显示名       |          | true     | string         |                |
| value         | 字段值               |          | true     | object         |                |
| type          | 模板字段类型         |          | true     | int            |                |
| fieldLength   | 字段长度             |          | false    | integer        |                |
| fieldRequired | 模板字段是否必填     |          | true     | int            |                |
| isBasicField  | 模板字段是否基础字段 |          | true     | int            |                |


**响应状态**:

| 状态码 | 说明 | schema          |
| ------ | ---- | --------------- |
| 200    | OK   | RExtFieldConfig |
:::tabs
@tab 响应示例
```json
{
	"code": 0,
	"msg": "",
	"serverTime": "",
	"data": {
		"field": "",
		"label": "",
		"value": {},
		"type": "",
		"fieldLength": 0,
		"fieldRequired": "",
		"isBasicField": "",
		"createBy": 0,
		"remark": ""
	},
	"show": 0
}
```
:::

## 删除配置

**接口地址**:`/config/delete`

**请求方式**:`POST`

**请求数据类型**:`application/x-www-form-urlencoded`

**响应数据类型**:`*/*`

**接口描述**:

**请求参数**:

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型       | schema      |
| -------- | -------- | -------- | -------- | -------------- | ----------- |
| param    |          | query    | true     | UpdateParam    | UpdateParam |
| id       | `配置id` |          | true     | integer(int64) |             |


**响应状态**:

| 状态码 | 说明 | schema |
| ------ | ---- | ------ |
| 200    | OK   | RVO    |
:::tabs
@tab 响应示例
```json
{
	"code": 0,
	"msg": "",
	"serverTime": "",
	"data": {
		"createAt": "",
		"updateAt": "",
		"id": 0,
		"type": "",
		"extData": [
			{
				"field": "",
				"label": "",
				"value": {},
				"type": "",
				"fieldLength": 0,
				"fieldRequired": "",
				"isBasicField": "",
				"createBy": 0,
				"remark": ""
			}
		],
		"createBy": 0,
		"updateBy": 0
	},
	"show": 0
}
```
:::
## 创建配置

**接口地址**:`/config/create`

**请求方式**:`POST`

**请求数据类型**:`application/x-www-form-urlencoded`

**响应数据类型**:`*/*`

**接口描述**:

**请求参数**:

| 参数名称      | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型    | schema         |
| ------------- | ------------------------------------------------------------ | -------- | -------- | ----------- | -------------- |
| param         |                                                              | query    | true     | UpdateParam | UpdateParam    |
| extData       | `模板字段数据`                                               |          | true     | array       | ExtFieldConfig |
| label         | 字段显示名                                                   |          | true     | string      |                |
| value         | 字段值                                                       |          | true     | object      |                |
| type          | 可用值:  BIGDecimal(1),INTEGER(2),STRING(3),LONG(4),BOOLEAN(5), |          | true     | int         |                |
| fieldLength   | 字段长度                                                     |          | false    | integer     |                |
| fieldRequired | 可用值:TRUE(1),FALSE(0),NULL(2)                              |          | true     | int         |                |
| isBasicField  | 可用值:TRUE,FALSE                                            |          | true     | int         |                |

:::tabs
@tab 响应示例
```json
{
    "": "1",
    "": "1",
    "type": "1",
    "extData": [
        {
            "field": "1",
            "label": "1",
            "value": 1,
            "type": "1",
            "fieldLength": 0,
            "fieldRequired": 1,
            "isBasicField": 1,
            "remark": 1
        }
    ],
    ]
}
```
:::


**响应状态**:

| 状态码 | 说明 | schema |
| ------ | ---- | ------ |
| 200    | OK   | RVO    |
:::tabs
@tab 响应示例
```json
{
	"code": 0,
	"msg": "",
	"serverTime": "",
	"data": {
		"createAt": "",
		"updateAt": "",
		"id": 0,
		"type": "",
		"extData": [
			{
				"field": "",
				"label": "",
				"value": {},
				"type": "",
				"fieldLength": 0,
				"fieldRequired": "",
				"isBasicField": "",
				"createBy": 0,
				"remark": ""
			}
		],
		"createBy": 0,
		"updateBy": 0
	},
	"show": 0
}
```
:::

## 分页获取配置

**接口地址**:`/config/page`

**请求方式**:`GET`

**请求数据类型**:`application/x-www-form-urlencoded`

**响应数据类型**:`*/*`

**接口描述**:

**请求参数**:

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| -------- | -------- | -------- | -------- | -------- | ------ |
| size     |          |          | true     |          |        |
| current  |          |          | true     |          |        |
| query    |          | query    | true     | Query    |        |

**响应状态**:

| 状态码 | 说明 | schema           |
| ------ | ---- | ---------------- |
| 200    | OK   | RMapStringObject |




**响应参数**:

| 参数名称   | 参数说明 | 类型              | schema            |
| ---------- | -------- | ----------------- | ----------------- |
| code       |          | integer(int32)    | integer(int32)    |
| msg        |          | string            |                   |
| serverTime |          | string(date-time) | string(date-time) |
| data       |          | object            |                   |
| show       |          | integer(int32)    | integer(int32)    |

:::tabs
@tab 响应示例
```json
{
  "code": 200,
  "msg": "成功",
  "serverTime": "2024-04-10 10:22:48",
  "data": {
    "total": "2",
    "current": "1",
    "pages": "1",
    "size": "5",
    "records": [
      [
        {
          "field": "1",
          "label": "1",
          "value": 1,
          "type": 1,
          "fieldLength": 0,
          "fieldRequired": 1,
          "isBasicField": 1,
          "createBy": "1",
          "remark": "1"
        }
      ]
    ]
  },
  "show": 0
}
```
:::
