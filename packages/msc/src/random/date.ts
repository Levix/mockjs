import { log } from '../helper';

const _padZero = function (value: number): string {
  return value < 10 ? '0' + value : value.toString();
};

const patternLetters = {
  yyyy: 'getFullYear',

  yy: function (date: Date): string {
    return date.getFullYear().toString().slice(2);
  },

  y: 'yy',

  MM: function (date: Date): string {
    return _padZero(date.getMonth() + 1);
  },

  M: function (date: Date): string {
    return (date.getMonth() + 1).toString();
  },

  dd: function (date: Date): string {
    return _padZero(date.getDate());
  },

  d: 'getDate',

  HH: function (date: Date): string {
    return _padZero(date.getHours());
  },

  H: 'getHours',

  hh: function (date: Date): string {
    return _padZero(date.getHours() % 12);
  },

  h: function (date: Date): string {
    return (date.getHours() % 12).toString();
  },

  mm: function (date: Date): string {
    return _padZero(date.getMinutes());
  },

  m: 'getMinutes',

  ss: function (date: Date): string {
    return _padZero(date.getSeconds());
  },

  s: 'getSeconds',

  SS: function (date: Date): string {
    const ms = date.getMilliseconds();
    return (ms < 10 && '00' + ms) || (ms < 100 && '0' + ms) || ms.toString();
  },

  S: 'getMilliseconds',

  A: function (date: Date): string {
    return date.getHours() < 12 ? 'AM' : 'PM';
  },

  a: function (date: Date): string {
    return date.getHours() < 12 ? 'am' : 'pm';
  },

  T: 'getTime',
};

const _createFormatRE = function (): string {
  const re: string[] = Object.keys(patternLetters);
  return '(' + re.join('|') + ')';
};

const _formatDate = function (date: Date, format: string): string {
  const formatRE = new RegExp(_createFormatRE(), 'g');
  console.log(format);

  return format.replace(formatRE, function createNewSubString($0, flag): string {
    return typeof patternLetters[flag] === 'function'
      ? patternLetters[flag](date)
      : patternLetters[flag] in patternLetters
      ? createNewSubString($0, patternLetters[flag])
      : date[patternLetters[flag]]();
  });
};

// 生成一个随机的 Date 对象。
const _randomDate = function (min: Date = new Date(0), max: Date = new Date()): Date {
  const randomTS = Math.random() * (max.getTime() - min.getTime());
  return new Date(randomTS);
};

// 返回一个随机的日期字符串。
export const date = function (format: string = 'yyyy-MM-dd'): string {
  return _formatDate(_randomDate(), format);
};

// 返回一个随机的时间字符串。
export const time = function (format: string = 'HH:mm:ss'): string {
  return _formatDate(_randomDate(), format);
};

// 返回一个随机的日期和时间字符串。
export const datetime = function (format: string = 'yyyy-MM-dd HH:mm:ss') {
  return _formatDate(_randomDate(), format);
};

// 返回当前的日期和时间字符串。
export const now = function (format: string = 'yyyy-MM-dd hh:mm:ss'): string {
  const date = new Date();

  return _formatDate(date, format);
};
