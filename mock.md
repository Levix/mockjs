# API

## random.boolean( min?, max?, current? )

- random.boolean()
- random.boolean( min, max, default )

返回一个随机的布尔值。

### min

可选。

指示参数 default出现的概率。。

### max

可选。

指示参数 current 的相反值 `!default` 出现的概率。

### default

可选。

可选值为布尔值 `true` 或 `false`。如果未传入任何参数，则返回 `true` 和 `false` 的概率各为 50%。

```
random.boolean()
// => true
random.boolean(1, 9, true)
// => false

```

## random.string(  pool?, min?, max?  )

- random.string()
- random.string( length )
- random.string( pool, length )
- random.string( min, max )
- random.string( pool, min, max )

返回一个随机字符串。

### pool

可选。

字符串。表示字符池，将从中选择一个字符返回。

### min

可选。

随机字符串的最小长度。默认值为 3。

### max

可选。

随机字符串的最大长度。默认值为 7。

```
random.string()
// => "pJjDUe"
random.string( 5 )
// => "GaadY"
random.string('wwqwsaasasassa', 5 )
// => "wqwsa"
random.string( 7, 10 )
// => "UuGQgSYk"
random.string( 'aeiou', 1, 3 )
// => "ea"

```



## random.natural( min?, max? )

- random.natural()
- random.natural( min )
- random.natural( min, max )

返回一个随机的自然数（大于等于 0 的整数）。

### min

可选。

指示随机自然数的最小值。默认值为 0。

### max

可选。

指示随机自然数的最大值。默认值为 9007199254740992。

```
random.natural()
// => 1002794054057984
random.natural(10000)
// => 71529071126209
random.natural(60, 100)
// => 77
```

## random.integer( min?, max? )

- random.integer()
- random.integer( min )
- random.integer( min, max )

返回一个随机的整数。

### min

可选。

指示随机整数的最小值。默认值为 -9007199254740992。

### max

可选。

指示随机整数的最大值。默认值为 9007199254740992。

```
random.integer()
// => -3815311811805184
random.integer(10000)
// => 4303764511003750
random.integer(60,100)
// => 96
```

## random.float( min?, max?, dmin?, dmax? )

- random.float()
- random.float( min )
- random.float( min, max )
- random.float( min, max, dmin )
- random.float( min, max, dmin, dmax )

返回一个随机的浮点数。

### min

可选。

整数部分的最小值。默认值为 -9007199254740992。

### max

可选。

整数部分的最大值。默认值为 9007199254740992。

### dmin

可选。

小数部分位数的最小值。默认值为 0。

### dmax

可选。

小数部分位数的最大值。默认值为 17。

```
random.float()
// => -1766114241544192.8
random.float(0)
// => 556530504040448.25
random.float(60, 100)
// => 82.56779679549358
random.float(60, 100, 3)
// => 61.718533677927894
random.float(60, 100, 3, 5)
// => 70.6849
```

## random.date( format? )

- date()
- date(format)

返回一个随机的日期字符串。

### format

可选。

指示生成的日期字符串的格式。默认值为 `yyyy-MM-dd`。

```
random.date()
// => "2002-10-23"
random.date('yyyy-MM-dd')
// => "1983-01-29"
random.date('yy-MM-dd')
// => "79-02-14"
random.date('y-MM-dd')
// => "81-05-17"
random.date('y-M-d')
// => "84-6-5"
```

## random.time( format? )

- random.time()
- random.time( format )

返回一个随机的时间字符串。

### format

可选。

指示生成的时间字符串的格式。默认值为 `HH:mm:ss`。

```
random.time()
// => "00:14:47"
random.time('A HH:mm:ss')
// => "PM 20:47:37"
random.time('a HH:mm:ss')
// => "pm 17:40:00"
random.time('HH:mm:ss')
// => "03:57:53"
random.time('H:m:s')
// => "3:5:13"
```

## random.datetime( format? )

- random.datetime()
- random.datetime( format )

返回一个随机的日期和时间字符串。

### format

可选。

指示生成的日期和时间字符串的格式。默认值为 `yyyy-MM-dd HH:mm:ss`。

```
random.datetime()
// => "1977-11-17 03:50:15"
random.datetime('yyyy-MM-dd A HH:mm:ss')
// => "1976-04-24 AM 03:48:25"
random.datetime('yy-MM-dd a HH:mm:ss')
// => "73-01-18 pm 22:12:32"
random.datetime('y-MM-dd HH:mm:ss')
// => "79-06-24 04:45:16"
random.datetime('y-M-d H:m:s')
// => "02-4-23 2:49:40"
```

## now( unit?, format? )

- random.now()

- random.now( format )

  返回当前的日期和时间字符串。

### format

可选。

指示生成的日期和时间字符串的格式。默认值为 `yyyy-MM-dd HH:mm:ss`。可选的占位符参考自 [Ext.Date](http://docs.sencha.com/ext-js/4-1/#!/api/Ext.Date)，请参见 [date(format)](https://github.com/nuysoft/Mock/wiki/Date#date)。

```
random.now()
// => "2014-04-29 20:08:38 "
random.now('day', 'yyyy-MM-dd HH:mm:ss SS')
// => "2014-04-29 00:00:00 000"
random.now('day')
// => "2014-04-29 00:00:00 "
random.now('yyyy-MM-dd HH:mm:ss SS')
// => "2014-04-29 20:08:38 157"

```

## generate

generate(template)

支持根据数据模板生成数据

### 数据模板定义

#### 属性值是字符串 **String**

##### 'name|min-max': string

通过重复 `string` 生成一个字符串，重复次数大于等于 `min`，小于等于 `max`。

```
Mock.mock({
  "string|1-10": "★"
})
```

Result

```
{
  "string": "★★★"
}
```



##### 'name|count': string

通过重复 `string` 生成一个字符串，重复次数等于 `count`。

##### Data Template

```
Mock.mock({
  "string|3": "★★★"
})
```

Result

```
{
  "string": "★★★★★★★★★"
}
```





#### 属性值是数字 **Number**

##### 'name|+1': number

属性值自动加 1，初始值为 `number`。

Data Template

```
Mock.generate({
  "number|+1": 202
})
```

Result

```
{
  "number": 203
}
```



##### 'name|min-max': number

生成一个大于等于 `min`、小于等于 `max` 的整数，属性值 `number` 只是用来确定类型

Data Template

```
Mock.generate({
  "number|1-100": 100
})
```

Result

```
{
  "number": 49
}
```



##### 'name|min-max.dmin-dmax': number

生成一个浮点数，整数部分大于等于 `min`、小于等于 `max`，小数部分保留 `dmin` 到 `dmax` 位。

Data Template

```
Mock.generate({
    'number1|1-100.1-10': 1,
    'number2|123.1-10': 1,
    'number3|123.3': 1,
    'number4|123.10': 1.123
})


```

Result

```
{
    "number1": 12.92,
    "number2": 123.51,
    "number3": 123.777,
    "number4": 123.1231091814
}
```





#### 属性值是布尔型 **Boolean**



##### 'name|1': boolean

随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。

Data Template

```
Mock.generate({
  "boolean|1": true
})
```

Result

```
{
  "boolean": true
}
```



##### 'name|min-max': boolean

随机生成一个布尔值，值为 `value` 的概率是 `min / (min + max)`，值为 `!value` 的概率是 `max / (min + max)`。

Data Template

```
Mock.generate({
  "boolean|1-2": true
})
```

Result

```
{
  "boolean": true
}
```



#### 属性值是对象 **Object**

##### 'name|count': object

从属性值 `object` 中随机选取 `count` 个属性。

Data Template

```
Mock.mock({
  "object|2": {
    "310000": "上海市",
    "320000": "江苏省",
    "330000": "浙江省",
    "340000": "安徽省"
  }
})
```

Result

```
{
  "object": {
    "330000": "浙江省",
    "340000": "安徽省"
  }
}
```



##### 'name|min-max': object

从属性值 `object` 中随机选取 `min` 到 `max` 个属性。

Data Template

```
Mock.generate({
  "object|2-4": {
    "110000": "北京市",
    "120000": "天津市",
    "130000": "河北省",
    "140000": "山西省"
  }
})
```

Result

```
{
  "object": {
    "110000": "北京市",
    "130000": "河北省",
    "140000": "山西省"
  }
}
```



#### 属性值是数组 **Array**

##### 'name|1': array

从属性值 `array` 中随机选取 1 个元素，作为最终值。

Data Template

```
Mock.generate({
  "array|1": [
    "AMD",
    "CMD",
    "UMD"
  ]
})
```

Result

```
{
  "array": "CMD"
}
```



##### 'name|+1': array

从属性值 `array` 中顺序选取 1 个元素，作为最终值。

Data Template

```
Mock.generate({
  "array|+1": [
    "AMD",
    "CMD",
    "UMD"
  ]
})
```

Result

```
{
  "array": "AMD"
}
```

Data Template

```
Mock.generate({
  "array|1-10": [
    {
      "name|+1": [
        "Hello",
        "Mock.js",
        "!"
      ]
    }
  ]
})
```

Result

```
{
  "array": [
    {
      "name": "Hello"
    },
    {
      "name": "Mock.js"
    },
    {
      "name": "!"
    },
    {
      "name": "Hello"
    },
    {
      "name": "Mock.js"
    },
    {
      "name": "!"
    }
  ]
}
```



##### 'name|min-max': array

通过重复属性值 `array` 生成一个新数组，重复次数大于等于 `min`，小于等于 `max`。

Data Template

```
Mock.generate({
  "array|1-10": [
    "Mock.js"
  ]
})
```

Result

```
{
  "array": [
    "Mock.js",
    "Mock.js",
    "Mock.js",
    "Mock.js",
    "Mock.js",
    "Mock.js"
  ]
}
```



Data Template

```
Mock.generate({
  "array|1-10": [
    "Hello",
    "Mock.js",
    "!"
  ]
})
```

Result

```
{
  "array": [
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!"
  ]
}
```



##### 'name|count': array

通过重复属性值 `array` 生成一个新数组，重复次数为 `count`。

Data Template

```
Mock.generate({
  "array|3": [
    "Mock.js"
  ]
})
```

Result

```
{
  "array": [
    "Mock.js",
    "Mock.js",
    "Mock.js"
  ]
}
```



Data Template

```
Mock.mock({
  "array|3": [
    "Hello",
    "Mock.js",
    "!"
  ]
})
```

Result

```
{
  "array": [
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!",
    "Hello",
    "Mock.js",
    "!"
  ]
}
```



####  属性值是函数 **Function**

##### 'name': function

执行函数 `function`，取其返回值作为最终的属性值，函数的上下文为属性 `'name'` 所在的对象。

Data Template

```
Mock.generate({
  'foo': 'Syntax Demo',
  'name': function() {
    return this.foo
  }
})
```

Result

```
{
  "foo": "Syntax Demo",
  "name": "Syntax Demo"
}
```



####  属性值是正则表达式 **RegExp**

##### 'name': regexp

根据正则表达式 `regexp` 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。

Data Template

```
Mock.generate({
  'regexp': /[a-z][A-Z][0-9]/
})
```

Result

```
{
  "regexp": "qH8"
}
```

Data Template

```
Mock.generate({
  'regexp': /\w\W\s\S\d\D/
})
```

Result

```
{
  "regexp": "y`\nd1P"
}
```



Data Template

```
Mock.generate({
  'regexp': /\d{5,10}/
})
```

Result

```
{
  "regexp": "57172670"
}
```



Data Template

```
Mock.generate({
  'regexp|3': /\d{5,10}\-/
})
```

Result

```
{
  "regexp": "8171154-1254364-47339672-4513135-"
}
```



Data Template

```
Mock.generate({
  'regexp|1-5': /\d{5,10}\-/
})
```

Result

```
{
  "regexp": "65086786-246817263-18453602-"
}
```

## 数据占位符定义规范

*占位符* 只是在属性值字符串中占个位置，并不出现在最终的属性值中。

*占位符* 的格式为：

```
@占位符
@占位符(参数 [, 参数])
```

**注意：**

1. 用 `@` 来标识其后的字符串是 *占位符*。

2. *占位符* 引用的是 `Mock.random` 中的方法。

   

```
Mock.generate('@boolean(1, 9, true)') //false
Mock.generate('@natural(60, 100)') //81
Mock.generate('@integer(60, 100)') //82
Mock.generate('@float(60, 100, 3)') //83.325
Mock.generate('@string("aeiou", 5)') //"iuoou"
Mock.generate('@date("yyyy-MM-dd")') //"2008-05-11"
Mock.generate('@time("H:m:s")') // 14:58:3"
Mock.generate('@datetime()') // "2021-03-21 14:05:27"
Mock.generate('@now()') // "2023-06-03 16:16:18"
```

# 设计约束（DFX）



## 	资源约束

​		数据模板的格式必须符合 JSON 格式，且支持部分 JavaScript 语法；
​				数据模板中的占位符必须使用 @ 符号进行标识，如 @string、@integer 等
​				数据模板中的占位符可以嵌套使用，但不能循环嵌套；
​				Mock.js 支持的数据类型和数据结构有限，不能完全模拟真实数据；

## 	安全性

​		单元测试覆盖
​				错误日志处理
​				各个API相互独立，互不影响

## 	可复用性

​		各个API可以相互调用
​				公共方法单独抽离出来方便各API调用

## 	可扩展性

​		可以通过extend方法扩展
​				可以自定义规则生成数据

## 	可测试性

​		各个API方法相互独立可单独独立测试，且出错不影响其他API功能

## 	可调试性

​		可以准确定位错误原因和位置
​				运行到相应步骤有相应的提示