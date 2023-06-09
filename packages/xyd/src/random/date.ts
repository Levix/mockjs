import dayjs from 'dayjs'

function isString (str: any) {
  return Object.prototype.toString.call(str) === '[object String]'
}

function isDate (date: any) {
  return Object.prototype.toString.call(date) === '[object Date]'
}

function getThreeMonthsAgoDate (endDate: Date) {
  return new Date(endDate.getFullYear(), endDate.getMonth() - 3, endDate.getDate());
}

const defaultFormat = 'YYYY-MM-DD HH:mm:ss'

export function getDate (start: Date, end: Date, format: string) {
  // 什么都不传
  if (!arguments.length) {
    end = new Date()
    start = getThreeMonthsAgoDate(end);
    format = defaultFormat
  }

  // 只传了 format
  if (arguments.length === 1 && isString(start)) {
    format = start as unknown as string;
    end = new Date()
    start = getThreeMonthsAgoDate(end);
  }

  // 只传了范围
  if (arguments.length === 2) {
    if (!isDate(arguments[0]) || !isDate(arguments[1])) {
      end = new Date()
      start = getThreeMonthsAgoDate(end);
    }
      
    format = defaultFormat
  }

  const randomTimestamp = Math.floor(Math.random() * (end.getTime() - start.getTime())) + start.getTime();
  return dayjs(new Date(randomTimestamp)).format(format);
}