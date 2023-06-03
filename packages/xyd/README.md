# mockjs

## 目录

- [介绍](#介绍)
- [使用方式](#使用方式)
- [API](#API)
- [内置随机数据生成标记](#内置随机数据生成标记)
- [自定义随机数据生成标记](#自定义随机数据生成标记)
- [随机返回已有的数据](#随机返回已有的数据)
- [生成大批量数据](#生成大批量数据)

## 介绍

> 一个mock数据生成工具，支持生成随机的数据

## 使用方式

```js
import Mock from 'mockjs'

// 方式一
const mockData = Mock.mock()

// 方式二
const m = new Mock()
const mockData = m.mock()
```

## API

- [mock](#mock)
- [randomNumber](#randomNumber)
- [randomString](#randomString)
- [randomWord](#randomWord)
- [randomBoolean](#randomBoolean)
- [randomDate](#randomDate)
- [randomTime](#randomTime)
- [randomPhone](#randomPhone)
- [randomUuid](#randomUuid)

### mock
#### 1. 不传参数

> 如果不传参数，则返回一个基本的响应结构

```js
import Mock from 'mockjs'

function getMockData () {
  return Mock.mock()
}

const data = getMockData()
console.log(data)
/**
  data:
  {
    code: 0,
    message: 'success',
    data: ''
  }
*/
```

#### 2. 传入非对象的参数

> 如果传入一个非对象的值，则该值会被作为响应结构的data值返回

```js
import Mock from 'mockjs'

function getMockData (reqData) {
  return Mock.mock(reqData)
}

const reqData = 123 // '123' || true || [1, 2, 3] || null || undefined
const data = getMockData(reqData)
console.log(data)
/**
  data:
  {
    code: 0,
    message: 'success',
    data: 123 // '123' || true || [1, 2, 3] || null || undefined
  }
*/
```

#### 3. 传入一个对象

> 如果传入一个对象，则返回值就是该对象

```js
import Mock from 'mockjs'

function getMockData (reqData) {
  return Mock.mock(reqData)
}

const reqData = {
  code: 0,
  message: '成功',
  data: ''
}
const data = getMockData(reqData)
console.log(data)
/**
  data:
  {
    code: 0,
    message: '成功',
    data: ''
  }
*/
```

### randomNumber

`randomNumber: () => number`

`randomNumber: (digit) => number`

> 生成一个随机的数字，如果不传参，默认生成一位数的数字

```js
import Mock from 'mock'

const number1 = Mock.randomNumber()
console.log(number1)  // 0 - 9

const number2 = Mock.randomNumber(2)
console.log(number2) // 10- 99
```

### randomString

`randomString: () => string`

`randomString: (start: number, end: number) => string`

`randomString: (customStr: string[]) => string`

`randomString: (start: number, end: number, customStr: string[]) => string`

1. 生成随机的字符串，默认生成1-10个字符的字符串，字符串包含数字、字母（大小写）
2. 支持生成指定长度的字符串
3. 支持加入自定义字符

```js
import Mock from 'mockjs'

const str1 = Mock.randomString()
console.log(str1) // sd67H

const str1 = Mock.randomString(13, 20)
console.log(str2) // H6sy73i5408HgYgh

const str3 = Mock.randomString([',', '?'])
console.log(str3) // Gfd6,Y9?s

const str4 = Mock.randomString(10, 15, ['?'])
console.log(str4) // 7uh?5gds?oh3
```

### randomWord

`randomWord: () => string`

`randomWord: (start: number, end: number) => string`

> 生成随机文字，默认生成1-10位，支持生成指定长度的文字

```js
import Mock from 'mockjs'

const word1 = Mock.randomWord()
console.log(word1) // 混三季度岁

const word2 = Mock.randomWord(13, 20)
console.log(word2) // 护士对话框䅓打荻花爱上读书阿萨德
```

### randomBoolean

`randomBoolean: () => boolean`

> 生成一个随机的布尔值

```js
import Mock from 'mockjs'

const bool = Mock.randomBoolean()
console.log(bool) // true | false
```

### randomDate

`randomDate: () => string`

`randomDate: (format: string) => string`

`randomDate: (start: Date, end: Date) => Date`

`randomDate: (start: Date, end: Date, format: string) => string`

1. 生成一个随机的日期，默认返回最近3个月中的一天，返回类型为Date
2. 支持生成指定范围内的日期
3. 支持序列化返回日期的格式

```js
import Mock from 'mockjs'

const date1 = Mock.randomDate()
console.log(date1) // Date

const date2 = Mock.randomDate(Date, Date)
console.log(date2) // Date

// YYYY 4位数年份 eg：2019
// MM 2位数月份 eg：01-12
// DD 2位数天数 eg：01-31
// HH 2位数小时 eg：00-23
// mm 2位数分钟 eg：00-59
// ss 2位数秒 eg：00-59
const date3 = Mock.randomDate('MM-DD HH:mm')
console.log(date3) // 06-01 15:23
```

### randomTime

`randomTime: () => string`

`randomTime: (showSecend: boolean) => string`

> 随机生成一个时间，默认返回包含时分秒

```js
import Mock from 'mockjs'

const time1 = Mock.randomTime()
console.log(time1) // 15:33:23

const time2 = Mock.randomTime(false)
console.log(time2) // 15:33
```

### randomPhone

`randomPhone: () => string`

> 随机生成一个手机号码

```js
import Mock from 'mockjs'

const phone = Mock.randomPhone()
console.log(phone) // 13578695840
```

### randomUuid

`randomUuid: () => string`

> 随机生成一个id，默认返回长度为10的字符串，字符串包含大写字母和数字

```js
import Mock from 'mockjs'

const id = Mock.randomUuid()
console.log(id) // H2YG645GT3
```

## 内置随机数据生成标记

> API生成数据适用于少量的数据。如果是传入一个复杂一点的对象，且对象里面需要随机数据的话，可以使用 `随机数据生成标记`，mock函数会检测是否有标记去做对应的转化

- [@string](#@string)
- [@number](#@number)
- [@word](#@word)
- [@boolean](#@boolean)
- [@date](#@date)
- [@time](#@time)
- [@phone](#@phone)
- [@uuid](#@uuid)

### @string

> 效果类似 Mock.randomString

```js
import Mock from 'mockjs'

const mockData = Mock.mock({
  code: 0,
  message: 'success',
  data: {
    str: '@string(1,10)'
  }
})

console.log(mockData)
/**
  {
    code: 0,
    message: 'success',
    data: {
      str: 'jugf7D9'
    }
  }
 */

```

### @number

> 效果类似 Mock.randomNumber

`使用：'@number' || '@number(2)'`

### @word

> 效果类似 Mock.randomWord

`使用：'@word(1,10)'`

### @boolean

> 效果类似 Mock.randomBoolean

`使用：'@boolean'`

### @date

> 效果类似 Mock.randomDate

`使用：'@date('YYYY-MM-DD')'`

### @time

> 效果类似 Mock.randomTime

`使用：'@time'`

### @phone

> 效果类似 Mock.randomPhone

`使用：'@phone'`

### @uuid

> 效果类似 Mock.randomUuid

`使用：'@uuid'`

## 自定义随机数据生成标记

> 如果内置的标记不能满足业务开发的需求，可以自定义标记和对应的处理函数

```js
import Mock from 'mockjs'

Mock.customMark({
  '@xxx': (mark: string) => {
    return mark.subString(1) + 'ooo'
  } 
})

const mockData = Mock.mock({
  code: 0,
  message: 'success',
  data: {
    str: '@xxx'
  }
})

console.log(mockData)
/**
  {
    code: 0,
    message: 'success',
    data: {
      str: 'xxxooo'
    }
  }
 */
```

## 随机返回已有的数据

> 上面的操作都是生成新的随机数据，那么如果我已经有了一批随机数据，能不能从这一批已有的数据中随机返回呢？答案是可以的，key值设置成 `'key|1'`

```js
import Mock from 'mockjs'

const names = ['张三'. '李四', '王五']

const mockData = Mock.mock({
  code: 0,
  message: 'success',
  data: {
    'name|1': names
  }
})

console.log(mockData)
/**
  {
    code: 0,
    message: 'success',
    data: {
      name: '李四'
    }
  }
 */

```

## 生成大批量数据

> 如果需要生成100条的随机数据，只需要标识一下key值为 `'key|c'（c大于1）` 即可

```js
import Mock from 'mockjs'

const names = ['张三'. '李四', '王五']

const mockData = Mock.mock({
  code: 0,
  message: 'success',
  data: {
    'items|5': [{
      'name|1': names
    }]
  }
})
console.log(mockData)
/**
  {
    code: 0,
    message: 'success',
    data: {
      items: [
        {
          name: '李四'
        },
        {
          name: '张三'
        },
        {
          name: '张三'
        },
        {
          name: '王五'
        },
        {
          name: '张三'
        },
      ]
    }
  }
 */

```