# mockjs

### 实例化mock对象

```
const mock = new Mock();
```

### mock.string(pool?: string, length?: number): string

从指定的字符串池pool中返回指定长度length的随机字符串

```
const str = mock.string('abcdefghij', 5);
// str 'abcde'
```

### mock.number.natural(min?: number, max?: number): number

返回一个随机的自然数

```
const natural = mock.number.natural(10, 20);
// natural 15
```

### mock.number.integer(min?: number, max?: number): number

返回一个随机整数

```
const int = mock.number.integer(0, 100);
// int 99
```

### mock.number.float(min?: number, max?: number): number

返回一个随机的浮点数

```
const float = mock.number.float(1, 10);
// float 9.9999
```

### mock.boolean(): boolean

返回随机的布尔值

```
const boolean = mock.boolean();
// boolean true
```

### mock.date(format?: string): string

返回一个随机的时间字符串

```
const date1 = mock.date();
const date2 = mock.date('yy-mm-dd');
// date1 2023-06-03
// date2 23-06-03
```

### mock.object(keys): { [key: string]: any }

根据传入数组生成对象

```
const obj1 = mock.object([
  {
    key: 'numberKey',
    value: mock.number.natural,
  },
  {
    key: 'stringKey',
    value: mock.string,
  },
]);
// obj1 { numberKey: 1, stringKey: 'abc' }
```

### mock.array(length: number, fn): Array\<any\>

返回长度为length的数组，数组每一项根据fn生成

```
const arr = mock.array(2, mock.number.natural);
// arr [1, 2];
```

### mock.self.phone(region): string

根据传入区域，返回对应区域的电话号码

```
const phone = mock.self.phone('zh-cn ');
// phone 13612345075
```

### mock.self.id(region): string

根据传入区域，返回对应区域的身份证号码

```
const id = mock.self.id('zh-cn');
// id 440582199912122345
```

### mock.template(template): any

根据传入模板，返回对应的数据

```
const data = mock.template('{"name": "John Doe", "age": 30, "city": "New York"}')
// data { name: 'John Doe', age: 30, city: 'New York' }
```

### mock.large(100): Array\<any\>

生成大量数据

```
const data = mock.large(100);
// data [1, 2, ...., 3]  data.length === 100
```
