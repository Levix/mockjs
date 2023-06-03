# mock.js

## Install

```
npm install mock.js --save
```

使用

```
import { mock } from 'mock.js'
```

## API

### getRandomString(len)

生成长度为 len 的随机字符串

```ts
const randomStr = getRandomString();
// return  a,  c,  d, etc

const randomStr = getRandomString(4);
// return  acgd, y36e, 7f83, etc
```

### getRandomNumber(min,max)
生成值为 min 到 max 之间的随机数字

```ts
const number = getRandomNumber(1, 10);
// return  3, 6, 8, 10, 1, etc
const number = getRandomNumber(1, 1);
// return 1
```

### getRandomFloatNumber(min,max,partMin,partMax)

生成整数部分在 min 到 max ，小数位数在 partMin 到 partMax 之间 的随机浮点数

```ts
const floatNumber = getRandomFloatNumber(1, 10, 1, 3);
// return 3.26, 5.1, 7.900, 1.1, 10.890, etc
const floatNumber = getRandomFloatNumber(1, 1, 1, 1);
// return 1.8, 1.6, 1.0, 1.9, etc
```

### getRandomBoolean()

生成随机布尔值

```ts
const bool = getRandomBoolean();
// return true or false
```

### getRandomDate(min,max)

生成 min 到 max 区间的日期，min 默认值为 new Date(0), max默认值为 new Date()

```ts
const date = getRandomDate();
// return 当前日期前的随机日期
const date = getRandomDate(new Date('1998-02-03'), new Date('2024-05-06'));
// return new Date('1998-02-03') 与 new Date('2024-05-06') 之间的随机日期，默认就是Date对象格式
const date = getRandomDate(new Date('1998-02-03'));
// return new Date('1998-02-03') 到当前日期之间的随机日期
```

### formatDate(date,format)

将date转换为format格式

```ts
const date = formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss');
// return 2023-06-03 15:16:30 此为调用时的日期
const date = formatDate(new Date(), 'YYYY-MM-DD');
// return 2023-06-03 此为调用时的日期
const date = formatDate(new Date(), 'YY-M-D HH:mm:ss');
// return 23-6-3 15:16:30 此为调用时的日期
const date = formatDate(new Date(), 'YY-MM-DD');
// return 23-06-03 此为调用时的日期
```

### getRandomTime()

生成随机时间，格式为 HH:mm:ss

```ts
const time = getRandomTime();
// return 21:03:06, 11:23:59, etc
```

### getIdCard()

生成随机18位身份证号

```ts
const id = getIdCard();
// return 516253673829453823, 37364728238435621x, 43647274858435621X, etc
```

### getPhoneNumber()

生成国内随机手机号

```ts
const phone = getPhoneNumber();
// return 13617833950, 18936274850, etc
```

