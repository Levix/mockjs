[@cgl/mockjs](../README.md) / [Exports](../modules.md) / RuleGenerator

# Class: RuleGenerator<T\>

## Type parameters

| Name | Description |
| :------ | -- |
| `T` | 规则生成值的类型 |

## Implements

- `IRuleGenerator`<`T`\>

## Table of contents

### Constructors

- [constructor](RuleGenerator.md#constructor)

### Methods

- [exec](RuleGenerator.md#exec)
- [generate](RuleGenerator.md#generate)

## Constructors

### constructor

• **new RuleGenerator**<`T`\>()

#### Type parameters

| Name | Description |
| :------ | -- |
| `T` | 规则生成值的类型 |

## Methods

### exec

▸ **exec**(`val?`): `undefined` \| `T`

> 执行生成函数，内置容错处理

#### Parameters

| Name | Type | Description |
| :------ | :------ | -- |
| `val?` | `any` | 规则参数 |

#### Returns

`undefined` \| `T`

#### Implementation of

IRuleGenerator.exec

#### Defined in

[generator.ts:10](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/rules/generator.ts#L10)

___

### generate

▸ `Abstract` **generate**(`val?`): `T`
> 根据输入参数生成随机值

#### Parameters

| Name | Type | Description |
| :------ | :------ | -- |
| `val?` | `any` | 规则生成值所需参数 |

#### Returns

`T`

#### Implementation of

IRuleGenerator.generate

#### Defined in

[generator.ts:7](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/rules/generator.ts#L7)
