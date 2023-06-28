# API

## extend

扩展数据生成规则方法、自定义数据生成规则方法

### extend.use(name)

使用自定义数据生成规则方法

#### name

必选

规则名

```
extend.use(Rule1) => 'a';

```



### extend.add(name,rule)

添加自定义数据生成规则方法

#### name

必选

要添加的规则名

#### rule

必选

要添加的规则方法

```
extend.add(rule1,()=>{
retrun 'a'
})
```



### extend.remove(name)

移除自定义数据生成规则方法

#### name

必选

要移除的规则名



```
extend.remove(Rule1) 
```



## Random

生成随机数据

### Random.boolean()

- Random.boolean()
- 返回一个随机的布尔值。



```js
Random.boolean()
// =>  true

```

### Random.character(  pool? )

返回一个随机字符。

- Random.character()

- Random.character(pool)：传入自定义字符串池

- Random.character( 'lower') 

- Random.character( 'upper')

- Random.character( 'number')

- Random.character( 'symbol')

  

#### pool

可选。

字符串。表示字符池，将从中选择一个字符返回。

内置关键词字符串池有 

- lower 小写字母字符串池

- upper 大写字母字符串池

- number 数字字符串池

- symbol 特殊符号字符串池

  



```js
Random.character()
// => 'a'
Random.character('wsss')
// =>  's'
// 内置关键词字符串池
Random.character( 'lower') 
// =>  'a'
Random.character( 'upper')
// =>  'A'
Random.character( 'number')
// =>  '0'
Random.character( 'symbol') 
// =>  '!'
```





### Random.string(  pool?, min?, max?  )

返回一个随机字符串。

- Random.string()
- Random.string( length )
- Random.string( pool)
- Random.string( pool, length )
- Random.string( min, max )
- Random.string( pool, min, max )



#### pool

可选。

字符串。表示字符池，将从中选择一个字符返回。

#### min

可选。

随机字符串的最小长度。默认值为 3。

#### max

可选。

随机字符串的最大长度。默认值为 7。-

```
Random.string()
// => "pJjDUe"
Random.string( 5 )
// => "GaadY"
Random.string( 'qwsqwqwqw' )
// => "swqq"
Random.string('wwqwsaasasassa', 5 )
// => "wqwsa"
Random.string( 7, 10 )
// => "UuGQgSYk"
Random.string( 'aeiou', 1, 3 )
// => "ea"

```



### Random.natural( min?, max? )

- Random.natural()
- Random.natural( min )
- Random.natural( min, max )

返回一个随机的自然数（大于等于 0 的整数）。

#### min

可选。

指示随机自然数的最小值。默认值为 0。

#### max

可选。

指示随机自然数的最大值。默认值为 9007199254740992。

```
Random.natural()
// => 1002794054057984
Random.natural(10000)
// => 71529071126209
Random.natural(60, 100)
// => 77
```

### Random.integer( min?, max? )

- Random.integer()
- Random.integer( min )
- Random.integer( min, max )

返回一个随机的整数。

#### min

可选。

指示随机整数的最小值。默认值为 -9007199254740992。

#### max

可选。

指示随机整数的最大值。默认值为 9007199254740992。

```
Random.integer()
// => -3815311811805184
Random.integer(10000)
// => 4303764511003750
Random.integer(60,100)
// => 96
```

### Random.float( min?, max?, dmin?, dmax? )

- Random.float()
- Random.float( min )
- Random.float( min, max )
- Random.float( min, max, dmin )
- Random.float( min, max, dmin, dmax )

返回一个随机的浮点数。

#### min

可选。

整数部分的最小值。默认值为 -9007199254740992。

#### max

可选。

整数部分的最大值。默认值为 9007199254740992。

#### dmin

可选。

小数部分位数的最小值。默认值为 0。

#### dmax

可选。

小数部分位数的最大值。默认值为 17。

```
Random.float()
// => -1766114241544192.8
Random.float(0)
// => 556530504040448.25
Random.float(60, 100)
// => 82.56779679549358
Random.float(60, 100, 3)
// => 61.718533677927894
Random.float(60, 100, 3, 5)
// => 70.6849
```

### Random.uuid()

- Random.uuid()
- 返回一个随机16位的id



```js
Random.uuid()
// =>  85347fb9-59f3-47ce-8d50-31de1077af7b

```



### Random.idCard()

- Random.idCard()
- 返回一个随机的身份证



```js
Random.idCard()
// => 350000201104245512

```

### Random.mobile ()

- Random.mobile ()
- 返回一个随机的手机号



```js
Random.mobile ()
// =>  18344058221

```



### Random.word( min?, max? )

- Random.word()
- Random.word( length)
- Random.word( min, max )

返回一个随机的英文单词。

#### min

可选。

指示生成的单词的位数最小值。默认值为 3。

#### max

可选。

指示生成的单词的位数最小值。默认值为 10

```
Random.word()
// => 'assasa'
Random.word(5)
// => 'sssqq'
Random.word(4, 7)
// => 'sssqsq'
```

### Random.sentence( min?, max? )

- Random.sentence()
- Random.sentence( length)
- Random.sentence( min, max )

返回一个随机的英文句子。

#### min

可选。

指示生成的单词的位数最小值。默认值为 3。

#### max

可选。

指示生成的单词的位数最小值。默认值为 10

```
Random.sentence()
// => 'Spbchwknxp iwlevkh wkqdlqphh sgwgsw.'
Random.sentence(5)
// => 'Spbchwknxp iwlevkh wsassa wkqdlqphh sgwgsw.'
Random.sentence(4, 7)
// => 'Qzkep uodwmpt nlgsdrjwv lbzx mxbwovcy.'
```



### Random.paragraph( min?, max? )

- Random.paragraph()
- Random.paragraph( length)
- Random.paragraph( min, max )

返回一个随机的英文段落。

#### min

可选。

指示生成的单词的位数最小值。默认值为 3。

#### max

可选。

指示生成的单词的位数最小值。默认值为 10

```
Random.paragraph()
// => 'Iwllohxwm qpjprj iwlmkxy blgyxmnvw svgpicxcb ycooe gwfgojy wfkuqxp vswr. Euohhbpyy meorgwxk hxzqsvu siktfrh kicwhcf ijecvepnt lywl enhd. Nwzvj oebjnk jypy qov cjetlfb fwdmfull idpmonbl eylnvjuut rbqfdx. Vmljcsg edmqivjdvb uyhvrdf beihn.'
Random.paragraph(5)
// => 'Imnofhlnd kjjp etdr bniy wiuvcixb. Cggqnxyv oqippqfob zlfe nyxuo niaxhdytfh myvcay jmvs mion qbre. Xrksxeewk fykdl dntvxjkkz xkkbocd uxyuil wjkw enugvb qsh qtexodv. Dbcj pyviy bbpg ibfe xskvlqrfo morbtbmmdh sgun. Lbtli mbtz 
snqclqgoq xdepvdqao uonw cxdn pkjtguh egorsr rscs yotulmtmr.
'
Random.paragraph(4, 7)
// => 'Ygwpetlj bcegey gfhp gohufqhg jrnaw vlkphftoq yjusb wnpu. Qfyuvo xqupxv wywnwnzbo xcpyq wwfgjlv wxo avipdb ovhm. Hsgcjhhkcs mipfcvzl pnfswwsf tsgmdkiltv wgjpdx auwkkaieui thbc iouflzt xwuyfg. Basty ajptuu cimqyc yrm hsexdmevv wxcghgxlc jvxqhucpip. Rpjpmraqk ptymlj twkrql vjhizc uuvjtby petbejpsz bfhkdl lmwwtfpr ebhdqknf. Hhyh ifnhy vqrbcq ewjfwdbp ytene taoxlujn.
'
```

### Random.cword( min?, max? )

- Random.cword()
- Random.cword( length)
- Random.cword( min, max )

返回一个随机的中文汉字。

#### min

可选。

指示生成的单词的位数最小值。默认值为 3。

#### max

可选。

指示生成的单词的位数最小值。默认值为 10

```
Random.cword()
// => '其带组方共义你研她布'
Random.cword(5)
// => '用权己最南'
Random.cword(4, 7)
// => '非处二红给'
```



### Random.csentence( min?, max? )

- Random.csentence()
- Random.csentence( length)
- Random.csentence( min, max )

返回一个随机的中文句子。

#### min

可选。

指示生成的单词的位数最小值。默认值为 3。

#### max

可选。

指示生成的单词的位数最小值。默认值为 10

```
Random.csentence()
// => '众美天构又场使战们取林上海素总目亲般管天决省给斗般观什组群入即受集着由决代特至上照转最行机历本节何己参但间可铁观石心战集而书他。'
Random.csentence(5)
// => '好任界和外置治主教文并每很化强有应参边火全问由说亲华四称教精看育为持直个。'
Random.csentence(5, 8)
// => '争次价民出命团前厂几断太人和山那就正严革容没还构点们内来百照济部说身元素无率品习还。'
```



### Random.cparagraph( min?, max? )

- Random.cparagraph()
- Random.cparagraph( length)
- Random.cparagraph( min, max )

返回一个随机的中文段落。

#### min

可选。

指示生成的单词的位数最小值。默认值为 3。

#### max

可选。

指示生成的单词的位数最小值。默认值为 10

```
Random.cparagraph()
// => '或需通易存行世度八形容了今书做比得状信与学小果复持直将组今育运。作为二值从战高决只办由受做计原加队从头四技门及律劳提严个组专列月不存办里写是文权西龙音群传取从火。存历查才完水厂出查理别得史便知其龙自状没人石七影难展题便名世率
打工火铁劳发阶号使划部十间究信接方四产关养过处即风加市土话热战眼西不。工发而技义称而点技情则集道回广率转号具高王里几务南事难果构物被合步又新里。因光众始运知包器图相广速安公者通。明先约持极向然马利门般保界大联合导金族老火因北
利花组历多位于话业造往料切程维听包况收物果素论。
'
Random.cparagraph(5)
// => '许响线调取色千改话反铁政斯各强干等很争感人动做几义消。真间动制上己确制和之按种代经照如起八真式它权所二局存则干得温名属说导力历品十数管边路以断花率参精政那且叫。分认安技程红温外志看示圆标三政有复眼头眼十布备精低分南京条选世命
识系青维或身长一研在米支。选已安不型厂意于局光车一之两划红常划日动类团想先一事光石则亲响般究至员近石效用很时史传总济政此至价命全做干表党。究低会严性法用少压群号议示交大意产持声交和二质应速老省。
'
Random.cparagraph(4, 7)
// => '标队没天京政下金月标史花原族想今清广定四国就进须以至情数准后采。说选参革你发处日必究保量年程已美传变确的单来公利取想了万省的。世统原近什大算及已种界切日门同斯按经则战加带半说记你图支且门必图院八进各叫叫查情产除半金段众起。出
除周三每存干四机角内它积么号所型较集重报分叫习县京军段程易完养命自眼前。'
```



### Random.date( format? )

- date()
- date(format)

返回一个随机的日期字符串。

#### format

可选。

指示生成的日期字符串的格式。默认值为 `yyyy-MM-dd`。

```
Random.date()
// => "2002-10-23"
Random.date('yyyy-MM-dd')
// => "1983-01-29"
Random.date('yy-MM-dd')
// => "79-02-14"
Random.date('y-MM-dd')
// => "81-05-17"
Random.date('y-M-d')
// => "84-6-5"
```



### Random.time( format? )

- Random.time()
- Random.time( format )

返回一个随机的时间字符串。

#### format

可选。

指示生成的时间字符串的格式。默认值为 `HH：mm：ss`。

```
Random.time()
// => "00：14：47"
Random.time('A HH：mm：ss')
// => "PM 20：47：37"
Random.time('a HH：mm：ss')
// => "pm 17：40：00"
Random.time('HH：mm：ss')
// => "03：57：53"
Random.time('H：m：s')
// => "3：5：13"
```

### Random.datetime( format? )

- Random.datetime()
- Random.datetime( format )

返回一个随机的日期和时间字符串。

#### format

可选。

指示生成的日期和时间字符串的格式。默认值为 `yyyy-MM-dd HH：mm：ss`。

```
Random.datetime()
// => "1977-11-17 03：50：15"
Random.datetime('yyyy-MM-dd A HH：mm：ss')
// => "1976-04-24 AM 03：48：25"
Random.datetime('yy-MM-dd a HH：mm：ss')
// => "73-01-18 pm 22：12：32"
Random.datetime('y-MM-dd HH：mm：ss')
// => "79-06-24 04：45：16"
Random.datetime('y-M-d H：m：s')
// => "02-4-23 2：49：40"
```

### now(  format? )

- Random.now()

- Random.now( format )

  返回当前的日期和时间字符串。

#### format

可选。

指示生成的日期和时间字符串的格式。默认值为 `yyyy-MM-dd HH：mm：ss`。

```
Random.now()
// => "2014-04-29 20：08：38 "
Random.now('yyyy-MM-dd HH：mm：ss SS')
// => "2014-04-29 20：08：38 157"

```

## mock

mock(template)

支持根据数据模板生成数据

### 数据模板定义

#### 属性值是字符串 **String**

##### 'name|min-max'： string

通过重复 `string` 生成一个字符串，重复次数大于等于 `min`，小于等于 `max`。

```
Mock.mock({
  "string|1-10"： "★"
})
```

Result

```
{
  "string"： "★★★"
}
```



##### 'name|count'： string

通过重复 `string` 生成一个字符串，重复次数等于 `count`。

##### Data Template

```
Mock.mock({
  "string|3"： "★★★"
})
```

Result

```
{
  "string"： "★★★★★★★★★"
}
```



##### 'name|min-max'： string

通过重复 `string` 生成一个字符串，重复次数在min-max之间。

##### Data Template

```
Mock.mock({
  "string|1-5"： "★"
})
```

Result

```
{
  "string"： "★★★"
}
```



#### 属性值是数字 **Number**

##### 'name|min-max'： number

生成一个大于等于 `min`、小于等于 `max` 的整数，属性值 `number` 只是用来确定类型

Data Template

```
Mock.mock({
  "number|1-100"： 100
})
```

Result

```
{
  "number"： 49
}
```



##### 'name|min-max.dmin-dmax'： number

生成一个浮点数，整数部分大于等于 `min`、小于等于 `max`，小数部分保留 `dmin` 到 `dmax` 位。

Data Template

```
Mock.mock({
    'number1|1-100.1-10'： 1,
    'number2|123.1-10'： 1,
    'number3|123.3'： 1,
    'number4|123.10'： 1.123
})


```

Result

```
{
    "number1"： 12.92,
    "number2"： 123.51,
    "number3"： 123.777,
    "number4"： 123.1231091814
}
```





#### 属性值是布尔型 **Boolean**



##### 'name'： boolean

随机生成一个布尔值，

Data Template

```
Mock.mock({
  "boolean"： true
})
```

Result

```
{
  "boolean"： true
}
```





#### 属性值是对象 **Object**

##### 'name|count'： object

从属性值 `object` 中随机选取 `count` 个属性。

Data Template

```
Mock.mock({
  "object|2"： {
    "310000"： "上海市",
    "320000"： "江苏省",
    "330000"： "浙江省",
    "340000"： "安徽省"
  }
})
```

Result

```
{
  "object"： {
    "330000"： "浙江省",
    "340000"： "安徽省"
  }
}
```



##### 'name|min-max'： object

从属性值 `object` 中随机选取 `min` 到 `max` 个属性。

Data Template

```
Mock.mock({
  "object|2-4"： {
    "110000"： "北京市",
    "120000"： "天津市",
    "130000"： "河北省",
    "140000"： "山西省"
  }
})
```

Result

```
{
  "object"： {
    "110000"： "北京市",
    "130000"： "河北省",
    "140000"： "山西省"
  }
}
```



#### 属性值是数组 **Array**

##### 'name|1'： array

从属性值 `array` 中随机选取 1 个元素，作为最终值。

Data Template

```
Mock.mock({
  "array|1"： [
    "AMD",
    "CMD",
    "UMD"
  ]
})
```

Result

```
{
  "array"： "CMD"
}
```



##### 'name|+1'： array

从属性值 `array` 中顺序选取 1 个元素，作为最终值。

Data Template

```
Mock.mock({
  "array|+1"： [
    "AMD",
    "CMD",
    "UMD"
  ]
})
```

Result

```
{
  "array"： "AMD"
}
```

Data Template

```
Mock.mock({
  "array|1-10"： [
    {
      "name|+1"： [
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
  "array"： [
    {
      "name"： "Hello"
    },
    {
      "name"： "Mock.js"
    },
    {
      "name"： "!"
    },
    {
      "name"： "Hello"
    },
    {
      "name"： "Mock.js"
    },
    {
      "name"： "!"
    }
  ]
}
```



##### 'name|min-max'： array

通过重复属性值 `array` 生成一个新数组，重复次数大于等于 `min`，小于等于 `max`。

Data Template

```
Mock.mock({
  "array|1-10"： [
    "Mock.js"
  ]
})
```

Result

```
{
  "array"： [
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
Mock.mock({
  "array|1-10"： [
    "Hello",
    "Mock.js",
    "!"
  ]
})
```

Result

```
{
  "array"： [
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



##### 'name|count'： array

通过重复属性值 `array` 生成一个新数组，重复次数为 `count`。

Data Template

```
Mock.mock({
  "array|3"： [
    "Mock.js"
  ]
})
```

Result

```
{
  "array"： [
    "Mock.js",
    "Mock.js",
    "Mock.js"
  ]
}
```



Data Template

```
Mock.mock({
  "array|3"： [
    "Hello",
    "Mock.js",
    "!"
  ]
})
```

Result

```
{
  "array"： [
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





## 数据占位符定义规范

*占位符* 只是在属性值字符串中占个位置，并不出现在最终的属性值中。

*占位符* 的格式为：

```
@占位符
@占位符(参数 [, 参数])
```

**注意：**

1. 用 `@` 来标识其后的字符串是 *占位符*。

2. *占位符* 引用的是 `Mock.Random` 中的方法。

   

```
Mock.mock('@boolean(1, 9, true)') //false
Mock.mock('@natural(60, 100)') //81
Mock.mock('@integer(60, 100)') //82
Mock.mock('@float(60, 100, 3)') //83.325
Mock.mock('@string("aeiou", 5)') //"iuoou"
Mock.mock('@date("yyyy-MM-dd")') //"2008-05-11"
Mock.mock('@time("H：m：s")') // 14：58：3"
Mock.mock('@datetime()') // "2021-03-21 14：05：27"
Mock.mock('@now()') // "2023-06-03 16：16：18"
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