[@cgl/mockjs](README.md) / Exports

# @cgl/mockjs

## Table of contents

### Functions

- [getListByCallback](modules.md#getlistbycallback)
- [getListByRuleName](modules.md#getlistbyrulename)
- [list](modules.md#list)

## Functions

### getListByCallback

▸ **getListByCallback**<`T`\>(`getter`, `min`, `max`): `T`[]

通过回调获取随即列表

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `getter` | () => `T` | - |
| `min` | `number` | 最小长度 |
| `max` | `number` | 最大长度 |

#### Returns

`T`[]

#### Defined in

[index.ts:35](https://github.com/turnvoid/mockjs/blob/64cb248/packages/cgl/src/list/index.ts#L35)

___

### getListByRuleName

▸ **getListByRuleName**(`ruleName`, `params`, `min`, `max`): `any`[]

通过规则名获取随即列表

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ruleName` | `string` | 规则名称 |
| `params` | `any` | 规则参数 |
| `min` | `number` | 最小长度 |
| `max` | `number` | 最大长度 |

#### Returns

`any`[]

#### Defined in

[index.ts:17](https://github.com/turnvoid/mockjs/blob/64cb248/packages/cgl/src/list/index.ts#L17)

___

### list

▸ **list**(`ruleName`, `params`, `min`, `max`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ruleName` | `string` |
| `params` | `any` |
| `min` | `number` |
| `max` | `number` |

#### Returns

`any`[]

#### Defined in

[index.ts:46](https://github.com/turnvoid/mockjs/blob/64cb248/packages/cgl/src/list/index.ts#L46)

▸ **list**<`T`\>(`getter`, `min`, `max`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `getter` | () => `T` |
| `min` | `number` |
| `max` | `number` |

#### Returns

`T`[]

#### Defined in

[index.ts:47](https://github.com/turnvoid/mockjs/blob/64cb248/packages/cgl/src/list/index.ts#L47)
