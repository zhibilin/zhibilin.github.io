---
title: 动态表单
icon: fab fa-markdown
order: 2
cover: 	
category:
  - docs
tag:
  - api
---

## tb_form_bank_company_transfer_in

> 跨公司转入款单表
>
> 由跨公司转出款单显示状态”已执行完成(300)“，自动创建,


| 字段名称            | 字段类型                        | 字段描述         |
| ------------------- | ------------------------------- | ---------------- |
| id                  | bigint(20) NOT NULL             | 跨公司转入款单Id |
| out_bank_account_id | bigint(20)  NOT NULL            | 转出账户id       |
| voucher             | varchar(255)  NULL DEFAULT NULL | 凭证字号         |
| out_company_id      | bigint(20)  NOT NULL            | 转出公司id       |



## 查看

**接口地址**:`/api/v1/formBankCompanyTransferIn/info`

**请求方式**:`GET`

**请求数据类型**:`application/x-www-form-urlencoded`

**响应数据类型**:`*/*`

**接口描述**:

**请求参数**:

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型       | schema |
| -------- | -------- | -------- | -------- | -------------- | ------ |
| id       |          | query    | true     | integer(int64) |        |

**响应状态**:

| 状态码 | 说明 | schema    |
| ------ | ---- | --------- |
| 200    | OK   | RFormBase |

**响应示例**:

```javascript
{
  "code": 200,
  "serverTime": "2024-04-23 17:24:08",
  "data": {
    "createTime": "2024-04-23 17:24:08",
    "updateTime": "2024-04-23 17:24:08",
    "id": "12",
    "code": "YZSQ2024-04-23-QZF4",
    "statusInfo": "执行完成",
    "status": 300,
    "formType": 50000,
    "ownAccountId": "3",
    "calcAccountId": "3",
    "companyId": "1",
    "remark": "",
    "amount": 0,
    "bankAccountId": "0",
    "partnerId": "1",
    "workflowConfig": [
      {
        "intoName": "待xxxx",
        "name": "xxxx",
        "returnName": "xxxx退回",
        "repeatSkip": true,
        "minAuditNum": 1,
        "orderNo": 1,
        "stepList": [
          {
            "roleList": [
              "-1",
              "2"
            ],
            "accountList": [
              "1"
            ],
            "userType": "上级主管",
            "ruleList": [
              {
                "ruleType": "满足条件自动审核",
                "attr": "金额",
                "condition": "小于",
                "value": "100"
              }
            ],
            "isAudit": true,
            "auditTime": "2024-04-23 17:24:08"
          }
        ],
        "isAudit": true,
        "auditTime": "2024-04-23 17:24:08"
      }
    ],
    "currentAuditIndex": 1,
    "currentAuditAccountIds": "0,0",
    "alreadyAuditAccountIds": "0,1,0",
    "noAuditAccountIds": "0,0",
    "executeTime": "2024-04-23 17:24:08",
    "auditTime": "2024-04-23 17:24:08",
    "createBy": "3",
    "updateBy": "3",
    "partnerName": "杭州效果科技有限公司",
    "outBankAccountId": "1",
    "voucher": "",
    "outCompanyId": "0"
  },
  "show": 0
}
```

## 修改凭证字号

**接口地址**:`/api/v1/formBankCompanyTransferIn/updateVoucher`

**请求方式**:`POST`

**请求数据类型**:`application/x-www-form-urlencoded,application/json`

**响应数据类型**:`*/*`

**接口描述**:

**请求示例**:

```javascript
{
    "id":12,
  "outBankAccountId": 1,
  "voucher": "1"
}
```

**请求参数**:

| 参数名称                     | 参数说明             | 请求类型 | 是否必须 | 数据类型       | schema |
| ---------------------------- | -------------------- | -------- | -------- | -------------- | ------ |
| &emsp;&emsp;id               | 草稿(0), 待审核(100) |          | true     | string         |        |
| &emsp;&emsp;outBankAccountId | 转入账户             |          | true     | integer(int64) |        |
| &emsp;&emsp;voucher          | _凭证字号_           |          | true     | string         |        |

**响应状态**:

| 状态码 | 说明 | schema    |
| ------ | ---- | --------- |
| 200    | OK   | RFormBase |

**响应示例**:

```javascript
{
  "code": 200,
  "serverTime": "2024-04-25 18:50:33",
  "data": {
    "createTime": "2024-04-23 17:24:08",
    "updateTime": "2024-04-25 18:30:02",
    "id": "12",
    "code": "YZSQ2024-04-23-QZF4",
    "statusInfo": "执行完成",
    "status": 300,
    "formType": 90000,
    "ownAccountId": "3",
    "calcAccountId": "3",
    "companyId": "1",
    "remark": "",
    "amount": 0,
    "bankAccountId": "1",
    "partnerId": "1",
    "workflowConfig": [
      {
        "intoName": "待xxx",
        "name": "xxx",
        "returnName": "xxx退回",
        "repeatSkip": true,
        "minAuditNum": 1,
        "orderNo": 1,
        "stepList": [
          {
            "roleList": [],
            "accountList": [
              "1",
              "3",
              "2"
            ],
            "userType": "指定角色",
            "ruleList": [
              {
                "ruleType": "满足条件自动审核",
                "attr": "金额",
                "condition": "小于",
                "value": "100"
              }
            ],
            "isAudit": true,
            "auditTime": "2024-04-25 18:30:02"
          }
        ],
        "isAudit": true,
        "auditTime": "2024-04-25 18:30:02"
      }
    ],
    "currentAuditIndex": 1,
    "currentAuditAccountIds": "0,0",
    "alreadyAuditAccountIds": "0,1,3,2,0",
    "noAuditAccountIds": "0,0",
    "executeTime": "2024-04-25 18:30:02",
    "auditTime": "2024-04-25 18:30:02",
    "createBy": "2",
    "updateBy": "3",
    "outBankAccountId": "1",
    "voucher": "1",
    "outCompanyId": "1",
    "formCode": "KGSZCK2024-04-25-LS0J"
  },
  "show": 0
}
```



# 跨公司转出款单API

## tb_form_bank_company_transfer_out

> 跨公司转出款单表


| 字段名称           | 字段类型                        | 字段描述         |
| ------------------ | ------------------------------- | ---------------- |
| id                 | bigint(20) NOT NULL             | 跨公司转出款单Id |
| in_bank_account_id | bigint(20)  NOT NULL            | 转入账户id       |
| voucher            | varchar(255)  NULL DEFAULT NULL | 凭证字号         |
| in_company_id      | bigint(20)  NOT NULL            | 转入公司id       |

## 修改

**接口地址**:`/api/v1/formBankCompanyTransferOut/update`

**请求方式**:`POST`

**请求数据类型**:`application/x-www-form-urlencoded,application/json`

**响应数据类型**:`*/*`

**接口描述**:

**请求示例**:

```javascript
{
    "id":193,
  "status": 100,
  "companyId": 1,
  "bankAccountId": 1783074944869511169,
  "inCompanyId": 7,
  "partnerId": 1,
  "inBankAccountId": 1,
  "voucher": "1",
  "remark": "",
  "amount": 80000
}
```

**请求参数**:

| 参数名称                    | 参数说明             | 请求类型 | 是否必须 | 数据类型       | schema |
| --------------------------- | -------------------- | -------- | -------- | -------------- | ------ |
| &emsp;&emsp;status          | 草稿(0), 待审核(100) |          | true     | string         |        |
| &emsp;&emsp;companyId       | *所属抬头*ID         |          | true     | integer(int64) |        |
| &emsp;&emsp;remark          | 备注                 |          | false    | string         |        |
| &emsp;&emsp;amount          | 金额                 |          | false    | number         |        |
| &emsp;&emsp;bankAccountId   | 转出账户             |          | true     | integer(int64) |        |
| &emsp;&emsp;inBankAccountId | _转入账户\*\*id_     |          | true     | integer(int64) |        |
| &emsp;&emsp;voucher         | _凭证字号_           |          | true     | string         |        |
| &emsp;&emsp;inCompanyId     | _转入公司\*\*id_     |          | true     | integer(int64) |        |

**响应状态**:

| 状态码 | 说明 | schema    |
| ------ | ---- | --------- |
| 200    | OK   | RFormBase |

**响应示例**:

```javascript
{
  "code": 200,
  "serverTime": "2024-04-26 13:40:28",
  "data": {
    "createTime": "2024-04-26 13:20:03",
    "updateTime": "2024-04-26 13:40:28",
    "id": "193",
    "code": "KGSZCK2024-04-26-YJXE",
    "statusInfo": "待xxx",
    "status": 100,
    "formType": 90000,
    "ownAccountId": "3",
    "calcAccountId": "3",
    "companyId": "1",
    "remark": "",
    "amount": 80000,
    "bankAccountId": "1783074944869511169",
    "partnerId": "1",
    "workflowConfig": [
      {
        "intoName": "待xxx",
        "name": "xxx",
        "returnName": "xxx退回",
        "repeatSkip": true,
        "minAuditNum": 1,
        "orderNo": 1,
        "stepList": [
          {
            "roleList": [],
            "accountList": [
              "1",
              "3",
              "2"
            ],
            "userType": "指定角色",
            "ruleList": [
              {
                "ruleType": "满足条件自动审核",
                "attr": "金额",
                "condition": "小于",
                "value": "100"
              }
            ],
            "isAudit": false
          }
        ],
        "isAudit": false
      }
    ],
    "currentAuditIndex": 1,
    "currentAuditAccountIds": "0,1,3,2,0",
    "alreadyAuditAccountIds": "0,0",
    "noAuditAccountIds": "0,1,3,2,0",
    "executeTime": "2024-04-26 13:39:58",
    "auditTime": "2024-04-26 13:39:58",
    "createBy": "3",
    "updateBy": "3",
    "partnerName": "杭州效果科技有限公司",
    "inBankAccountId": "1",
    "voucher": "1",
    "inCompanyId": "7"
  },
  "show": 0
}
```

## 创建

**接口地址**:`/api/v1/formBankCompanyTransferOut/create`

**请求方式**:`POST`

**请求数据类型**:`application/x-www-form-urlencoded,application/json`

**响应数据类型**:`*/*`

**接口描述**:

**请求示例**:

```javascript
{
  "status": 100,
  "companyId": 1,
  "bankAccountId": 1783074944869511169,
  "inCompanyId": 7,
  "partnerId": 1,
  "inBankAccountId": 1,
  "voucher": "1",
  "remark": "",
  "amount": 800000
}
```

**请求参数**:

| 参数名称                    | 参数说明             | 请求类型 | 是否必须 | 数据类型       | schema |
| --------------------------- | -------------------- | -------- | -------- | -------------- | ------ |
| &emsp;&emsp;status          | 草稿(0), 待审核(100) |          | true     | string         |        |
| &emsp;&emsp;companyId       | *所属抬头*ID         |          | true     | integer(int64) |        |
| &emsp;&emsp;remark          | 备注                 |          | false    | string         |        |
| &emsp;&emsp;amount          | 金额                 |          | false    | number         |        |
| &emsp;&emsp;bankAccountId   | 转出账户             |          | true     | integer(int64) |        |
| &emsp;&emsp;partnerId       |                      |          | true     | integer(int64) |        |
| &emsp;&emsp;inBankAccountId | _转入账户\*\*id_     |          | true     | integer(int64) |        |
| &emsp;&emsp;voucher         | _凭证字号_           |          | true     | string         |        |
| &emsp;&emsp;inCompanyId     | _转入公司\*\*id_     |          | true     | integer(int64) |        |

**响应状态**:

| 状态码 | 说明 | schema    |
| ------ | ---- | --------- |
| 200    | OK   | RFormBase |

**响应示例**:

```javascript
{
  "code": 200,
  "serverTime": "2024-04-23 17:24:08",
  "data": {
    "createTime": "2024-04-23 17:24:08",
    "updateTime": "2024-04-23 17:24:08",
    "id": "12",
    "code": "YZSQ2024-04-23-QZF4",
    "statusInfo": "执行完成",
    "status": 300,
    "formType": 50000,
    "ownAccountId": "3",
    "calcAccountId": "3",
    "companyId": "1",
    "remark": "",
    "amount": 0,
    "bankAccountId": "0",
    "partnerId": "1",
    "workflowConfig": [
      {
        "intoName": "待xxxx",
        "name": "xxxx",
        "returnName": "xxxx退回",
        "repeatSkip": true,
        "minAuditNum": 1,
        "orderNo": 1,
        "stepList": [
          {
            "roleList": [
              "-1",
              "2"
            ],
            "accountList": [
              "1"
            ],
            "userType": "上级主管",
            "ruleList": [
              {
                "ruleType": "满足条件自动审核",
                "attr": "金额",
                "condition": "小于",
                "value": "100"
              }
            ],
            "isAudit": true,
            "auditTime": "2024-04-23 17:24:08"
          }
        ],
        "isAudit": true,
        "auditTime": "2024-04-23 17:24:08"
      }
    ],
    "currentAuditIndex": 1,
    "currentAuditAccountIds": "0,0",
    "alreadyAuditAccountIds": "0,1,0",
    "noAuditAccountIds": "0,0",
    "executeTime": "2024-04-23 17:24:08",
    "auditTime": "2024-04-23 17:24:08",
    "createBy": "3",
    "updateBy": "3",
    "partnerName": "杭州效果科技有限公司",
    "inBankAccountId": "1",
    "voucher": "",
    "inCompanyId": "0"
  },
  "show": 0
}
```

## 查看

**接口地址**:`/api/v1/formBankCompanyTransferOut/info`

**请求方式**:`GET`

**请求数据类型**:`application/x-www-form-urlencoded`

**响应数据类型**:`*/*`

**接口描述**:

**请求参数**:

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型       | schema |
| -------- | -------- | -------- | -------- | -------------- | ------ |
| id       |          | query    | true     | integer(int64) |        |

**响应状态**:

| 状态码 | 说明 | schema    |
| ------ | ---- | --------- |
| 200    | OK   | RFormBase |

**响应示例**:

```javascript
{
  "code": 200,
  "serverTime": "2024-04-23 17:24:08",
  "data": {
    "createTime": "2024-04-23 17:24:08",
    "updateTime": "2024-04-23 17:24:08",
    "id": "12",
    "code": "YZSQ2024-04-23-QZF4",
    "statusInfo": "执行完成",
    "status": 300,
    "formType": 50000,
    "ownAccountId": "3",
    "calcAccountId": "3",
    "companyId": "1",
    "remark": "",
    "amount": 0,
    "bankAccountId": "0",
    "partnerId": "1",
    "workflowConfig": [
      {
        "intoName": "待xxxx",
        "name": "xxxx",
        "returnName": "xxxx退回",
        "repeatSkip": true,
        "minAuditNum": 1,
        "orderNo": 1,
        "stepList": [
          {
            "roleList": [
              "-1",
              "2"
            ],
            "accountList": [
              "1"
            ],
            "userType": "上级主管",
            "ruleList": [
              {
                "ruleType": "满足条件自动审核",
                "attr": "金额",
                "condition": "小于",
                "value": "100"
              }
            ],
            "isAudit": true,
            "auditTime": "2024-04-23 17:24:08"
          }
        ],
        "isAudit": true,
        "auditTime": "2024-04-23 17:24:08"
      }
    ],
    "currentAuditIndex": 1,
    "currentAuditAccountIds": "0,0",
    "alreadyAuditAccountIds": "0,1,0",
    "noAuditAccountIds": "0,0",
    "executeTime": "2024-04-23 17:24:08",
    "auditTime": "2024-04-23 17:24:08",
    "createBy": "3",
    "updateBy": "3",
    "partnerName": "杭州效果科技有限公司",
    "inBankAccountId": "1",
    "voucher": "",
    "inCompanyId": "0"
  },
  "show": 0
}
```



# 借入款单API

## tb_form_lend_in

> 借入款单


| 字段名称         | 字段类型                        | 字段描述   |
| ---------------- | ------------------------------- | ---------- |
| id               | bigint(20) NOT NULL             | 借入款单Id |
| his_bank_account | varchar(128)  NOT NULL          | 对方账户   |
| voucher          | varchar(255)  NULL DEFAULT NULL | 凭证字号   |
| his_bank_name    | varchar(128)  NOT NULL          | 对方开户行 |

## 修改

**接口地址**:`/api/v1/formLendIn/update`

**请求方式**:`POST`

**请求数据类型**:`application/x-www-form-urlencoded,application/json`

**响应数据类型**:`*/*`

**接口描述**:

**请求示例**:

```javascript
{
  "id": 12,
  "status": 100,
  "companyId": 1,
  "remark": "",
  "amount": 0,
  "bankAccountId": 0,
  "partnerId": 1,
  "hisBankAccount": "",
  "voucher": "1",
  "hisBankName": ""
}
```

**请求参数**:

| 参数名称                   | 参数说明             | 请求类型 | 是否必须 | 数据类型       | schema |
| -------------------------- | -------------------- | -------- | -------- | -------------- | ------ |
| &emsp;&emsp;id             |                      |          | true     | integer(int64) |        |
| &emsp;&emsp;status         | 草稿(0), 待审核(100) |          | true     | string         |        |
| &emsp;&emsp;companyId      | *所属抬头*ID         |          | true     | integer(int64) |        |
| &emsp;&emsp;remark         | 备注                 |          | false    | string         |        |
| &emsp;&emsp;amount         | 金额                 |          | true     | number         |        |
| &emsp;&emsp;bankAccountId  |                      |          | true     | integer(int64) |        |
| &emsp;&emsp;partnerId      |                      |          | true     | integer(int64) |        |
| &emsp;&emsp;hisBankAccount | 对方账户             |          | true     | integer(int64) |        |
| &emsp;&emsp;voucher        | 凭证字号             |          | true     | string         |        |
| &emsp;&emsp; hisBankName   | 对方开户行           |          | true     | integer(int64) |        |

**响应状态**:

| 状态码 | 说明 | schema    |
| ------ | ---- | --------- |
| 200    | OK   | RFormBase |

**响应示例**:

```javascript
{
  "code": 200,
  "serverTime": "2024-04-25 17:56:01",
  "data": {
    "createTime": "2024-04-23 17:24:08",
    "updateTime": "2024-04-25 17:56:01",
    "id": "12",
    "code": "YZSQ2024-04-23-QZF4",
    "statusInfo": "待xxxx",
    "status": 100,
    "formType": 90002,
    "ownAccountId": "3",
    "calcAccountId": "3",
    "companyId": "1",
    "remark": "",
    "amount": 0,
    "bankAccountId": "0",
    "partnerId": "1",
    "workflowConfig": [
      {
        "intoName": "待xxxx",
        "name": "xxxx",
        "returnName": "xxxx退回",
        "repeatSkip": true,
        "minAuditNum": 1,
        "orderNo": 1,
        "stepList": [
          {
            "roleList": [
              "-1",
              "2"
            ],
            "accountList": [
              "1",
              "2",
              "3"
            ],
            "userType": "指定角色",
            "ruleList": [
              {
                "ruleType": "满足条件自动审核",
                "attr": "金额",
                "condition": "小于",
                "value": "100"
              },
              {
                "ruleType": "满足条件自动审核",
                "attr": "金额",
                "condition": "包含",
                "value": "1"
              }
            ],
            "isAudit": false
          }
        ],
        "isAudit": false
      }
    ],
    "currentAuditIndex": 1,
    "currentAuditAccountIds": "0,1,2,3,0",
    "alreadyAuditAccountIds": "0,0",
    "noAuditAccountIds": "0,1,2,3,0",
    "executeTime": "2024-04-24 14:09:12",
    "auditTime": "2024-04-24 14:09:12",
    "createBy": "2",
    "updateBy": "3",
    "partnerName": "杭州效果科技有限公司"
  },
  "show": 0
}
```

## 创建

**接口地址**:`/api/v1/formLendIn/create`

**请求方式**:`POST`

**请求数据类型**:`application/x-www-form-urlencoded,application/json`

**响应数据类型**:`*/*`

**接口描述**:

**请求示例**:

```javascript
{
  "status": 300,
  "companyId": 0,
  "remark": "",
  "amount": 0,
  "bankAccountId": 0,
  "partnerId": 0,
  "hisBankAccount": "",
  "voucher": "",
  "hisBankName": ""
}
```

**请求参数**:

| 参数名称                   | 参数说明             | 请求类型 | 是否必须 | 数据类型       | schema |
| -------------------------- | -------------------- | -------- | -------- | -------------- | ------ |
| &emsp;&emsp;status         | 草稿(0), 待审核(100) |          | true     | string         |        |
| &emsp;&emsp;companyId      | *所属抬头*ID         |          | true     | integer(int64) |        |
| &emsp;&emsp;remark         | 备注                 |          | false    | string         |        |
| &emsp;&emsp;amount         | 金额                 |          | true     | number         |        |
| &emsp;&emsp;bankAccountId  |                      |          | true     | integer(int64) |        |
| &emsp;&emsp;partnerId      |                      |          | true     | integer(int64) |        |
| &emsp;&emsp;hisBankAccount | 对方账户             |          | true     | integer(int64) |        |
| &emsp;&emsp;voucher        | 凭证字号             |          | true     | string         |        |
| &emsp;&emsp;hisBankName    | 对方开户行           |          | true     | integer(int64) |        |

**响应状态**:

| 状态码 | 说明 | schema    |
| ------ | ---- | --------- |
| 200    | OK   | RFormBase |

**响应示例**:

```javascript
{
	"code": 0,
	"msg": "",
	"serverTime": "",
	"data": {
		"createTime": "",
		"updateTime": "",
		"id": 0,
		"code": "",
		"statusInfo": "",
		"status": 300,
		"formType": "",
		"ownAccountId": 0,
		"calcAccountId": 0,
		"companyId": 0,
		"remark": "",
		"amount": 0,
		"bankAccountId": 0,
		"partnerId": 0,
		"projectId": 0,
		"storeId": 0,
		"workflowConfig": [
			{
				"intoName": "",
				"name": "",
				"returnName": "",
				"repeatSkip": true,
				"minAuditNum": 0,
				"orderNo": 0,
				"stepList": [
					{
						"roleList": [],
						"accountList": [],
						"userType": "",
						"ruleList": [
							{
								"ruleType": "",
								"attr": "",
								"condition": "",
								"value": ""
							}
						],
						"isAudit": true,
						"auditTime": ""
					}
				],
				"isAudit": true,
				"auditTime": ""
			}
		],
		"currentAuditIndex": 0,
		"currentAuditAccountIds": "",
		"alreadyAuditAccountIds": "",
		"noAuditAccountIds": "",
		"executeTime": "",
		"auditTime": "",
		"createBy": 0,
		"updateBy": 0
	},
	"show": ""
}
```

## 查看

**接口地址**:`/api/v1/formLendIn/info`

**请求方式**:`GET`

**请求数据类型**:`application/x-www-form-urlencoded`

**响应数据类型**:`*/*`

**接口描述**:

**请求参数**:

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型       | schema |
| -------- | -------- | -------- | -------- | -------------- | ------ |
| id       |          | query    | true     | integer(int64) |        |

**响应状态**:

| 状态码 | 说明 | schema    |
| ------ | ---- | --------- |
| 200    | OK   | RFormBase |

**响应示例**:

```javascript
{
  "code": 200,
  "serverTime": "2024-04-23 13:55:58",
  "data": {
    "createTime": "2024-04-23 13:19:00",
    "updateTime": "2024-04-23 13:19:00",
    "id": "1",
    "code": "1",
    "statusInfo": "1",
    "ownAccountId": "1",
    "calcAccountId": "1",
    "companyId": "1",
    "remark": "1",
    "amount": 1,
    "bankAccountId": "1",
    "partnerId": "1",
    "projectId": "1",
    "storeId": "1",
      "workflowConfig": [
      {
        "intoName": "待xxxx",
        "name": "xxxx",
        "returnName": "xxxx退回",
        "repeatSkip": true,
        "minAuditNum": 1,
        "orderNo": 1,
        "stepList": [
          {
            "roleList": [
              "-1",
              "2"
            ],
            "accountList": [
              "1"
            ],
            "userType": "上级主管",
            "ruleList": [
              {
                "ruleType": "满足条件自动审核",
                "attr": "金额",
                "condition": "小于",
                "value": "100"
              }
            ],
            "isAudit": true,
            "auditTime": "2024-04-23 16:38:08"
          }
        ],
        "isAudit": true,
        "auditTime": "2024-04-23 16:38:08"
      }
    ],
    "currentAuditIndex": 1,
    "currentAuditAccountIds": "0,0",
    "alreadyAuditAccountIds": "0,1,0",
    "noAuditAccountIds": "0,0",
    "executeTime": "2024-04-23 16:38:09",
    "auditTime": "2024-04-23 16:38:09",
    "createBy": "1",
    "updateBy": "1",
    "partnerName": "杭州效果科技有限公司",

	"hisBankAccount": "1",

	"voucher": "1",

	"hisBankName": "1",
  },
  "show": 0
}
```

