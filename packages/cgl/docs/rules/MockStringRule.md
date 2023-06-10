[@cgl/mockjs](../README.md) / [Exports](../modules.md) / MockStringRule

# Class: MockStringRule

> Mock字符串规则，继承自RuleGenerator

## Methods

### exec

▸ **exec**(`val?`): `undefined` \| `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | -- |
| `val?` |  [`MockStringParamsType`](../interfaces/MockStringParamsType.md) | 生成随机字符串参数 |

#### Returns

`undefined` \| `string`

#### Inherited from

RuleGenerator.exec

#### Defined in

[core/rules/generator.ts:10](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/rules/generator.ts#L10)

___

### generate

▸ **generate**(`params`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | -- |
| `params` | [`MockStringParamsType`](../interfaces/MockStringParamsType.md) | 生成随机字符串参数 |

#### Returns

`string`

#### Overrides

RuleGenerator.generate

#### Defined in

[rules/mock_string/index.ts:14](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/rules/mock_string/index.ts#L14)
