import { addZero } from "../utils/tool";
import log from '../utils/log';

/**
 * 获取随机日期对象
 * @param min 最小日期值
 * @param max 最大日期值
 */
const getRandomDate = (min?: Date, max?: Date): Date => {
  min = min ?? new Date(0);
  max = max ?? new Date();
  return new Date(Math.floor(Math.random() * (max.getTime() - min.getTime())) + min.getTime());
}

/**
 * formatObject: 日期格式化映射
 */
const formatObject: Record<string, any> = {
  'YYYY': function(date: Date): string {
    return '' + date.getFullYear();
  },
  'YY': function(date: Date): string {
    return date.getFullYear().toString().slice(2);
  },
  'MM': function(date: Date): string {
    const month = date.getMonth() + 1;
    return addZero(month);
  },
  'M': function(date: Date): string {
    return '' + (date.getMonth() + 1);
  },
  'DD': function(date: Date): string {
    const day = date.getDate();
    return addZero(day);
  },
  'D': function(date: Date): string {
    return '' + date.getDate();
  },
  'HH': function(date: Date): string {
    const hour = date.getHours();
    return addZero(hour);
  },
  'H': function(date: Date): string {
    return '' + date.getHours();
  },
  'mm': function(date: Date): string {
    const minutes = date.getMinutes();
    return addZero(minutes);
  },
  'm': function(date: Date): string {
    return '' + date.getMinutes();
  },
  'ss': function(date: Date): string {
    const seconds = date.getSeconds();
    return addZero(seconds);
  },
  's': function(date: Date): string {
    return '' + date.getSeconds();
  }
  
}
/**
 * 
 * @param date 日期
 * @param format 日期格式
 */
const formatDate = (date: Date, format: string = 'YYYY-MM-DD HH:mm:ss'): string | void => {
  var arr = format.split(' ');
  if(arr.length > 2) {
    log.error('不支持此格式');
    return;
  }
  var pre = arr[0].split('-');
  if(pre.length > 3) {
    log.error('不支持此格式');
    return;
  }
  var later: string[] = [];
  if(arr.length === 2) {
    later = arr[1].split(':');
    if(later.length > 3) {
      log.error('不支持此格式');
      return;
    }
  }

  const formatArr = pre.concat(later);
  if(!formatArr.every(item => formatObject[item])) {
    log.error('不支持此格式');
    return;
  }
  return joinFormatStr(date, pre, '-') + (later.length ? ' ' : '') + joinFormatStr(date, later, ':');
}

/**
 * 日期格式拼接
 * @param date 日期
 * @param arr 拼接数组
 * @param joinStr 连接符
 * @returns 
 */
const joinFormatStr = (date: Date, arr: string[], joinStr: string): string => {
  return arr.reduce((result, current, index) => {
    result += formatObject[current](date) + (index === arr.length - 1 ? '' : joinStr);
    return result;
  }, '');
}

export {
  getRandomDate,
  formatDate,
}