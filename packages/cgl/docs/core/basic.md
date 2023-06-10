[@cgl/mockjs](README.md) / Exports

# @cgl/mockjs

## Table of contents

### References

- [getString](modules.md#getstring)

### Functions

- [getBool](modules.md#getbool)
- [getChar](modules.md#getchar)
- [getDate](modules.md#getdate)
- [getFloat](modules.md#getfloat)
- [getInteger](modules.md#getinteger)
- [getRandomInRange](modules.md#getrandominrange)
- [getRandomIndex](modules.md#getrandomindex)
- [getText](modules.md#gettext)
- [getWord](modules.md#getword)

## References

### getString

Renames and re-exports [getWord](modules.md#getword)

## Functions

### getBool

> 生成随机布尔值

▸ **getBool**(`rate?`): `boolean`

#### Parameters

| Name   | Type     | Default value | description      |
| :----- | :------- | :------------ | :--------------- |
| `rate` | `number` | `0.5`         | 返回 True 的概率 |

#### Returns

`boolean`

#### Defined in

[boolean.ts:1](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/basic/boolean.ts#L1)

---

### getChar

▸ **getChar**(`pool?`): `string`

> 生成随机字符

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `pool?` | `string` |

#### Returns

`string`

#### Defined in

[string.ts:5](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/basic/string.ts#L5)

---

### getDate

▸ **getDate**(`start?`, `end?`): `Date`

> 生成随机日期

#### Parameters

| Name    | Type     | Default value  | Description  |
| :------ | :------- | :------------- | :----------- |
| `start` | `string` | `'1970-01-01'` | 起始时间范围 |
| `end`   | `string` | -              | 结束时间范围 |

#### Returns

`Date`

#### Defined in

[date.ts:3](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/basic/date.ts#L3)

---

### getFloat

▸ **getFloat**(`min?`, `max?`, `dmin?`, `dmax?`): `number`

> 生成随机浮点数

#### Parameters

| Name   | Type     | Default value | Description    |
| :----- | :------- | :------------ | -------------- |
| `min`  | `number` | `0`           | 整数位的最小值 |
| `max`  | `number` | `MAX_INT`     | 整数位的最大值 |
| `dmin` | `number` | `0`           | 分数位的最小值 |
| `dmax` | `number` | `1`           | 分数位的最大值 |

#### Returns

`number`

#### Defined in

[number.ts:7](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/basic/number.ts#L7)

---

### getInteger

▸ **getInteger**(`min?`, `max?`): `number`

> 生成随机整数

#### Parameters

| Name  | Type     | Default value | Description |
| :---- | :------- | :------------ | ----------- |
| `min` | `number` | `-MAX_INT`    | 最小值      |
| `max` | `number` | `MAX_INT`     | 最大值      |

#### Returns

`number`

#### Defined in

[number.ts:3](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/basic/number.ts#L3)

---

### getRandomInRange

▸ **getRandomInRange**(`min`, `max`): `number`

> 生成指定范围内的随机整数

#### Parameters

| Name  | Type     | Default value | Description |
| :---- | :------- | ------------- | ----------- |
| `min` | `number` | 必选          | 起始范围    |
| `max` | `number` | 必选          | 结束范围    |

#### Returns

`number`

#### Defined in

[common.ts:1](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/basic/common.ts#L1)

---

### getRandomIndex

▸ **getRandomIndex**(`size`): `number`

> 生成一个列表内的随即下标

#### Parameters

| Name   | Type     | Default value | Description |
| :----- | :------- | ------------- | ----------- |
| `size` | `number` | 必选          | 列表大小    |

#### Returns

`number`

#### Defined in

[common.ts:5](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/basic/common.ts#L5)

---

### getText

▸ **getText**(`minWords`, `maxWords`, `pool?`): `string`

> 生成随机文章

#### Parameters

| Name       | Type     | Default value | Description |
| :--------- | :------- | ------------- | ----------- |
| `minWords` | `number` | 2             | 最少单词数  |
| `maxWords` | `number` | 50            | 最大单词数  |
| `pool?`    | `string` | -             | 字符池      |

#### Returns

`string`

#### Defined in

[string.ts:36](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/basic/string.ts#L36)

---

### getWord

▸ **getWord**(`minLen?`, `maxLen?`, `pool?`): `string`

> 生成随即单词

#### Parameters

| Name     | Type     | Default value | Description  |
| :------- | :------- | :------------ | ------------ |
| `minLen` | `number` | `1`           | 单词最小长度 |
| `maxLen` | `number` | `7`           | 单词最大长度 |
| `pool`   | `string` | `a-zA-Z`      | 字符池       |

#### Returns

`string`

#### Defined in

[string.ts:17](https://github.com/turnvoid/mock_js/blob/cb2f87d/packages/cgl/src/core/basic/string.ts#L17)
