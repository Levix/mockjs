# mockJs

### 实例化mock对象

```
const mock = new Mock();
```

### mock.string.zh(unit)

返回指定长度unit的中文字符串

```
const str = mock.string.zh(5);
// str '偒抴近蘷贷'
```

### mock.string.en(unit)

返回指定长度unit的英文字符串

```
const str = mock.string.en(5);
// str 'abcde'
```

### mock.string.num(unit)

返回指定长度unit的数字字符串

```
const str = mock.string.num(5)
// str '12345'
```

### mock.string.zh_en(unit)

返回指定长度unit的中英文字符串

```
const str = mock.string.zh_en(5)
// str 'abc一二'
```

### mock.string en_num(unit)

返回指定长度unit的英文数字字符串

```
const str = mock.string.en_num(5)

// str 'abc12'
```

### mock.boolean()

返回随机布尔值

```
const bool = mock.boolean()
// bool true
```

### mock.number.range(min, max)

返回[min, max]范围内的随机数字

```
const num = mock.number.range(0, 10)
// num 5
```

### mock.number.natural(min, max)

返回[min, max]范围内的自然数

```
const num = mock.number.natural(5, 10)
// num 8
```

### mock.number.positive(min, max)

返回[min, max]范围内的正数


```
const num = mock.number.positive(1, 10)
// num 5
```

### mock.number.negative(min, max)

返回[min, max]范围内的负数

```
const num = mock.number.negative(-1, -10)
// num -5
```

### mock.number.float(min, max, decimal)

返回[min, max]范围内，小数位数为decimal的浮点数

```
const num = mock.number.float(1, 10, 2)
// num 5.55
```

### mock.date.random()

返回随机的日期对象

```
const date = mock.date.random();
// date  Mon Jan 28 1985 04:05:30 GMT+0800 (中国标准时间)
```

### mock.date.format('yyyy-mm-dd');

返回日期格式为yyyy-mm-dd的日期

```
const date = mock.date.format('yyyy-mm-dd');
// date 2023-06-17;
```

### mock.date.format('yy-mm-dd');

返回日期格式为yy-mm-dd的日期

```
const date = mock.date.format('yy-mm-dd');
// date 23-06-17;
```

### mock.object.random()

返回长度为2的对象

```
const obj = mock.object.random(2)
// obj { key0: true, key1: false }
```

### mock.object.array2Object(arr)

根据传入的数组返回对象

```
const arr = [
  {
    key: 'name',
    value: () => string.en(2),
  },
  {
    key: 'age',
    value: () => number.range(10, 20),
  },
]
const obj = mock.object.array2Object(arr)
// { name: 'zs', age: 18 }
```

### mock.array.number(length)

生成length长度的数组，数组每一项都是number

```
const arr = mock.array.number(1)
arr // [1]
```

### mock.array.string(length)

生成length长度的数组，数组每一项都是string

```
const arr = mock.array.string(1)
arr // ['a']
```

### mock.array.boolean(length)

生成length长度的数组，数组的每一项都是boolean

```
const arr = mock.array.boolean(1)
arr // [true]
```

### mock.rules.phone()

生成手机号

```
const phone = mock.rules.phone()
phone // 13412341234
```

### mock.rules.id()

生成身份证号码

```
const id = mock.rules.id()
id // 440582199912122345
```

### mock.template.json(jsonData)

根据json生成数据

```
const jsonData = '{"name": "John", "age": 30, "city": "New York"}';
const data = mock.template.json(jsonData)
// obj { name: 'John', age: 30, city: 'New York' }
```

### mock.large(num)

生成长度为length的数组

```
const arr = mock.large(100);
// arr.length 100
```
