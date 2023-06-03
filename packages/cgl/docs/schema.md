[@cgl/mockjs](README.md) / Exports

# @cgl/mockjs

## Table of contents

### Interfaces

- [ISchemaTemplate](interfaces/ISchemaTemplate.md)

### Functions

- [default](modules.md#default)
- [schema](modules.md#schema)
- [walkTemplate](modules.md#walktemplate)

## Functions

### default

▸ **default**(`Rule`): (`template`: [`ISchemaTemplate`](interfaces/ISchemaTemplate.md)) => `Record`<`string`, `any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Rule` | `Rule` | Rule 规则实例 输入规则组，得到获取schema函数 |

#### Returns

`fn`

▸ (`template`): `Record`<`string`, `any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `template` | [`ISchemaTemplate`](interfaces/ISchemaTemplate.md) |

##### Returns

`Record`<`string`, `any`\>

#### Defined in

[schema/index.ts:48](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/schema/index.ts#L48)

___

### schema

▸ **schema**(`template`, `Rule`): `Record`<`string`, `any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template` | [`ISchemaTemplate`](interfaces/ISchemaTemplate.md) | ISchemaTemplate 遍历模板，根据规则生成随机值 |
| `Rule` | `Rule` | 规则实例 |

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[schema/index.ts:37](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/schema/index.ts#L37)

___

### walkTemplate

▸ **walkTemplate**(`shcemaItem`, `Rule`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shcemaItem` | `SchemaItemType` | SchemaItemType 遍历模板的回调函数，生成模板字段对应的随机值 |
| `Rule` | `Object` | 规则实例 |

#### Returns

`any`

#### Defined in

[schema/index.ts:17](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/schema/index.ts#L17)
