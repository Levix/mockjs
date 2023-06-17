const MAX_NATURE_NUMBER = 9007199254740992;
const MIN_NATURE_NUMBER = -9007199254740992;

/**
 * 根据 min-max 返回随机数值
 */
export const integer = (min?: any, max?: any) => {
  min = min !== undefined ? parseInt(min, 10) : MIN_NATURE_NUMBER;
  max = max !== undefined ? parseInt(max, 10) : MAX_NATURE_NUMBER; // 2^53
  return Math.round(Math.random() * (max - min)) + min;
};

// 别名
export const int = integer;

/**
 * 返回一个随机的自然数（大于等于 0 的整数）
 */

export const natural = function (min?: any, max?: any) {
  min = min !== undefined ? parseInt(min, 10) : 0;
  max = max !== undefined ? parseInt(max, 10) : MAX_NATURE_NUMBER; // 2^53
  return Math.round(Math.random() * (max - min)) + min;
};

/**
 * 返回一个随机的布尔值
 */
export const boolean = function () {
  return Math.random() >= 0.5;
};

// 别名
export const bool = boolean;

/**
 * 返回一个随机的浮点数。
 */

export const float = function (min?: number, max?: number, dmin?: number, dmax?: number) {
  dmax = dmax || 17;
  dmax = Math.max(Math.min(dmax, 17), 0);
  dmin = dmin || 0;
  dmin = Math.max(Math.min(dmin, 17), 0);

  let ret = integer(min, max) + '.';
  for (let i = 0, dcount = natural(dmin, dmax); i < dcount; i++) {
    const num = i < dcount - 1 ? character('number') : character('123456789');
    ret += num;
  }
  return parseFloat(ret);
};

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
    alpha: lower + upper,
  };
  if (!pool || typeof pool !== 'string') {
    pool = lower + upper + number + symbol;
  } else {
    pool = pools[pool.toLowerCase()] || pool;
  }
  return pool.charAt(natural(0, pool.length - 1));
};

export const char = character;

/**
 * 返回一个随机字符串
 */
// 返回一个随机字符串。
export const string = function (pool?: string, min?: number, max?: number) {
  let count = 0;

  const isNumPool = typeof pool === 'number';

  if (max !== undefined) {
    count = integer(min, max);
  } else if (min !== undefined) {
    if (isNumPool) {
      count = integer(pool, min);
      pool = undefined;
    } else {
      count = +min;
    }
  } else if (isNumPool) {
    count = parseInt(pool as string, 10);
    pool = undefined;
  } else {
    count = integer(3, 7);
  }

  let text = '';
  for (let i = 0; i < count; i++) {
    text += character(pool);
  }

  return text;
};

export const str = string;
