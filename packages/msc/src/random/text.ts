import { natural } from './number';
import { character } from './string';
import { CHINESE } from '../const';
import { capitalize } from '../helper';

/**
 * 随机生成一个单词
 */
export const word = function (min?: number, max?: number) {
  let count = 0;
  if (max !== undefined) {
    count = natural(min, max);
  } else if (min !== undefined) {
    count = +min;
  } else {
    count = natural(3, 10);
  }

  let result = '';

  for (let i = 0; i < count; i++) {
    result += character('lower');
  }

  return result;
};

/**
 * 随机生成一个句子，第一个单词的首字母大写
 */
export const sentence = function (min?: number, max?: number) {
  let count = 0;
  if (max !== undefined) {
    count = natural(min, max);
  } else if (min !== undefined) {
    count = +min;
  } else {
    count = natural(3, 10);
  }

  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(word());
  }
  return `${capitalize(result.join(' '))}.`;
};

/**
 * 随机生成一段文本

 */
export const paragraph = function (min?: number, max?: number) {
  let count = 0;
  if (max !== undefined) {
    count = natural(min, max);
  } else if (min !== undefined) {
    count = +min;
  } else {
    count = natural(3, 10);
  }

  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(sentence());
  }

  return result.join(' ');
};

/**
 * 随机生成一个或多个汉字

 */
export const cword = function (min?: number, max?: number) {
  let count = 0;
  if (max !== undefined) {
    count = natural(min, max);
  } else if (min !== undefined) {
    count = +min;
  } else {
    count = natural(3, 10);
  }

  var text = '';
  for (var i = 0; i < count; i++) {
    text += character(CHINESE);
  }

  return text;
};

/**
 * 随机生成一个中文句子
 */
export const csentence = function (min?: number, max?: number) {
  let count = 0;
  if (max !== undefined) {
    count = natural(min, max);
  } else if (min !== undefined) {
    count = +min;
  } else {
    count = natural(3, 10);
  }

  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(cword());
  }

  return `${result.join('')}。`;
};

/**
 * 随机生成一段中文文本
 */
export const cparagraph = function (min?: number, max?: number) {
  let count = 0;
  if (max !== undefined) {
    count = natural(min, max);
  } else if (min !== undefined) {
    count = +min;
  } else {
    count = natural(3, 10);
  }

  const result = [];

  for (let i = 0; i < count; i++) {
    result.push(csentence());
  }

  return result.join('');
};
