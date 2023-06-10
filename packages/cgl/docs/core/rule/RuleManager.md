[@cgl/mockjs](../README.md) / [Exports](../modules.md) / RuleManager

# Class: RuleManager

## Table of contents

### Constructors

- [constructor](RuleManager.md#constructor)

### Properties

- [ruleMap](RuleManager.md#rulemap)

### Methods

- [getRule](RuleManager.md#getrule)
- [registerRule](RuleManager.md#registerrule)
- [removeRule](RuleManager.md#removerule)

## Constructors

### constructor

• **new RuleManager**()

#### Defined in

[manager.ts:8](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/rules/manager.ts#L8)

## Properties

### ruleMap

> 规则映射

• `Private` **ruleMap**: `Map`<`string`, `IRuleGenerator`<`any`\>\>

#### Defined in

[manager.ts:6](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/rules/manager.ts#L6)

## Methods

### getRule

▸ **getRule**(`key`): `undefined` \| `IRuleGenerator`<`any`\>

> 获取规则

#### Parameters

| Name | Type | Description |
| :------ | :------ | -- |
| `key` | `string` | 要获取规则的Key |

#### Returns

`undefined` \| `IRuleGenerator`<`any`\>

#### Defined in

[manager.ts:13](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/rules/manager.ts#L13)

___

### registerRule

▸ **registerRule**<`T`\>(`key`, `rule`): `void`

> 注册规则

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | -- |
| `key` | `string` | 要注册规则的Key |
| `rule` | `IRuleGenerator`<`T`\> | 规则实例 |

#### Returns

`void`

#### Defined in

[manager.ts:25](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/rules/manager.ts#L25)

___

### removeRule

▸ **removeRule**(`key`): `void`

> 移除规则

#### Parameters

| Name | Type | Description |
| :------ | :------ | -- |
| `key` | `string` | 要移除规则的Key |

#### Returns

`void`

#### Defined in

[manager.ts:37](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/rules/manager.ts#L37)
