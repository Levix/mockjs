[@cgl/mockjs](README.md) / Exports

# @cgl/mockjs

## Table of contents

### Functions

- [getRuleInstance](modules.md#getruleinstance)

## Functions

### getRuleInstance

▸ **getRuleInstance**(): `RuleObject`

#### Returns

`RuleObject`

| Name | Type | Description |
| :------ | :------ | -- |
| `generate` | (`key`: `string`, `params?`: `any`) => `any` | 根据规则key以及参数生成随机值 |
| `register` | <T\>(`key`: `string`, `rule`: `RuleGenerator`<`T`\>) => this | 根据key以及规则实例注册规则 |
| `remove` | (`key`: `string`) => this | 根据key移除规则 |

#### Defined in

[index.ts:6](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/rules/index.ts#L6)
