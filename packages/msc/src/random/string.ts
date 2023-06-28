import { integer, natural } from './number';
/**
 * 返回一个随机字符
 */
export const character = function (pool: string = ''): string {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = lower.toUpperCase();
  const number = '0123456789';
  const symbol = '!@#$%^&*()[]';
  const pools = {
    lower,
    upper,
    number,
    symbol,
  };
  if (!pool || typeof pool !== 'string') {
    pool = lower + upper + number + symbol;
  } else {
    pool = pools[pool.toLowerCase()] || pool;
  }
  return pool.charAt(natural(0, pool.length - 1));
};

export const char = character;

// 返回一个随机字符串。
export const string = function (pool?: string | number, min?: number, max?: number) {
  let count = 0;

  const isNumPool = typeof pool === 'number';
  // 传入3个参数
  if (max !== undefined) {
    count = integer(min, max);
    // 传入两个参数
  } else if (min !== undefined) {
    // 使用默认字符串池
    if (isNumPool) {
      count = integer(pool, min);
      pool = '';
      // 使用固定长度字符串
    } else {
      count = +min;
    }
    // 传入一个参数
    // 为字符串长度
  } else if (isNumPool) {
    count = parseInt(pool as string, 10);
    pool = '';
  } else {
    count = integer(3, 7);
  }

  let text = '';
  for (let i = 0; i < count; i++) {
    text += character(pool as string);
  }

  return text;
};

export const str = string;
