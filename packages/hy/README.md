# mock.js

## Install

```
npm install mock.js --save
```

使用

```
import { random } from 'mock.js'
```

## API

### random.getRandomString(strings: string, len: number): string

strings 表示随机字符串的字符集。

len 表示生成的字符串长度，默认为1。

```ts
const randomStr = random.getRandomString('1234', 1);
// return  1,  4,  2,  3

const randomStr = random.getRandomString('你好呀habc23', 2);
// return  你h, 3呀, 3h, etc
```

### random.getTypeString(type: string, len: number): string

type为字符串类型，目前支持  "number"   "lowerCase"   "upperCase"，分别小时数字字符串，小写字母字符串，大写字母字符串。

len 表示字符串长度，默认为1。

```
const randomStr = random.getTypeString('number', 1);
// return  1,  9,  0, etc

const randomStr = random.getTypeString('lowerCase', 2);
// return  ac, ye, fg, etc
```

### random.getRandomNumber(min: number,max: number): number

生成值为 min 到 max 之间的随机数字

```ts
const number = random.getRandomNumber(1, 10);
// return  3, 6, 8, 10, 1, etc
const number = random.getRandomNumber(1, 1);
// return 1
```

### random.getRandomFloatNumber(min,max,partMin,partMax): string

min: number  表示整数部分最小值

max: number  表示整数部分最大值

partMin: number  表示小数位数最小值

partMax: number  表示小数位数最大值

返回值是浮点数字符串。

生成整数部分在 min 到 max ，小数位数在 partMin 到 partMax 之间 的随机浮点数

```ts
const floatNumber = random.getRandomFloatNumber(1, 10, 1, 3);
// return 3.26, 5.1, 7.900, 1.1, 10.890, etc
const floatNumber = random.getRandomFloatNumber(1, 1, 1, 1);
// return 1.8, 1.6, 1.0, 1.9, etc
```

### random.getRandomBoolean(): boolean

生成随机布尔值

```ts
const bool = random.getRandomBoolean();
// return true or false
```

### random.getRandomDate(min?: Date,max?: Date): Date

生成 min 到 max 区间的日期，min 默认值为 new Date(0), max默认值为 new Date()

```ts
const date = random.getRandomDate();
// return 当前日期前的随机日期
const date = random.getRandomDate(new Date('1998-02-03'), new Date('2024-05-06'));
// return new Date('1998-02-03') 与 new Date('2024-05-06') 之间的随机日期，默认就是Date对象格式
const date = random.getRandomDate(new Date('1998-02-03'));
// return new Date('1998-02-03') 到当前日期之间的随机日期
```

### random.formatDate(date: Date,format: string): string

将date转换为format格式

```ts
const date = random.formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss');
// return 2023-06-03 15:16:30 此为调用时的日期
const date = random.formatDate(new Date(), 'YYYY-MM-DD');
// return 2023-06-03 此为调用时的日期
const date = random.formatDate(new Date(), 'YY-M-D HH:mm:ss');
// return 23-6-3 15:16:30 此为调用时的日期
const date = random.formatDate(new Date(), 'YY-MM-DD');
// return 23-06-03 此为调用时的日期
```

### random.getRandomTime(): string

生成随机时间，格式为 HH:mm:ss

```ts
const time = random.getRandomTime();
// return 21:03:06, 11:23:59, etc
```

### random.getRandomJson(json: JsonTemplate): any

类型如下：

```
type TypeParam = 'string' | 'number' | 'boolean' | 'object' | 'array';

interface JsonFeild {
  fieldName?: string; // 字段名
  type: TypeParam;  // 字段类型
  fnName: string;  // 执行方法名
  params?: any[];  // 执行函数参数
  callback?: () => any; // 自定义执行回调
  children?: JsonFeild[]; // 子元素
}

export type JsonTemplate = JsonFeild[];
```

根据用户传入的json模板生成随机数据，优先判断是否有callback字段，有的话生成数据调用callback，若无callback，则调用fnName函数，若fnName函数不存在，则 返回null

```
const template = [
  {
    "fieldName": "a",
    "type":"object",
    "fnName":"getString",
    "params":["number", 10],
    "callback":() => '123',
    "children":[
      {
        "fieldName": "a",
        "type":"string",
        "fnName":"getTypeString",
        "params":['number', 2],
        "children":[]
      }
    ]  
  },
  {
    "fieldName": "b",
    "type":"number",
    "fnName":"getRandomNumber",
    "params":[1,10],
    "children":[
      {
        "fieldName": "a",
        "type":"string",
        "fnName":"getString",
        "params":[],
        "children":[]
      }
    ]  
  }
]
const data = random.getRandomJson(template,);
// return [ { a: [ '01' ] }, 4 ], etc
```

### random.addType(type: string, callback: () => any)

添加自定义随机数据类型

```
const getRandomPhone = () => {
	return '' ;// 用户自定义返回数据
}
random.addType('phone', getRandomPhone);
```

### random.batchRandomData(len: number, type: string): Array

len：数据条数

type: 生成数据类型，目前只支持string，number，boolean，float，date，time，json

```
const arr = random.batchRandomData(10，'string')('12345', 1);
// return ['1', '3', '1', '2', '6', '3', '2', '4', '5', '2', '1'], etc
const arr = random.batchRandomData(2, 'number')(1, 10);
// return [2, 5], etc
```

