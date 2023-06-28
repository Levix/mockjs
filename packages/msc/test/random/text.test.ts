import { it, expect, describe } from 'vitest';
import { Random } from '../../src/index';
import { getReg } from '../../src/helper';

describe('随机生成一个单词Random.word', () => {
  it('Random.word )： 不传入参数', () => {
    const data = Random.word();
    const reg = getReg('lower', '{3,10}');

    expect(data).toMatch(reg);
  });

  it('Random.word( length )传入一个参数', () => {
    const data = Random.word(5);
    const reg = getReg('lower', '{5}');

    expect(data).toMatch(reg);
  });

  it('Random.word( min, max )：传入两个参数', () => {
    const data = Random.word(4, 7);
    const reg = getReg('lower', '{4,7}');
    expect(data).toMatch(reg);
  });
});

describe('随机生成一个句子Random.sentence', () => {
  it('Random.sentence )： 不传入参数', () => {
    const data = Random.sentence();
    const reg = /^[A-Z][a-z ]{12,110}\.$/;

    expect(data).toMatch(reg);
  });

  it('Random.sentence( length )传入一个参数', () => {
    const data = Random.sentence(5);
    const reg = /^[A-Z][a-z ]{20,55}\.$/;

    expect(data).toMatch(reg);
  });

  it('Random.sentence( min, max )：传入两个参数', () => {
    const data = Random.sentence(5, 8);

    const reg = /^[A-Z][a-z ]{20,88}\.$/;
    expect(data).toMatch(reg);
  });
});

describe('随机生成一个段落Random.paragraph', () => {
  it('Random.paragraph )： 不传入参数', () => {
    const data = Random.paragraph();
    const reg = /^([A-Z][a-z ]{12,110}\.\s?){3,11}$/;

    expect(data).toMatch(reg);
  });

  it('Random.paragraph( length )传入一个参数', () => {
    const data = Random.paragraph(5);
    const reg = /^([A-Z][a-z ]{12,110}\.\s?){5}$/;

    expect(data).toMatch(reg);
  });

  it('Random.paragraph( min, max )：传入两个参数', () => {
    const data = Random.paragraph(4, 7);
    const reg = /^([A-Z][a-z ]{12,110}\.\s?){4,7}$/;

    expect(data).toMatch(reg);
  });
});

describe('随机生成几个汉字Random.cword', () => {
  const pool = '[\u4e00-\u9f99]';
  it('Random.cword )： 不传入参数', () => {
    const data = Random.cword();
    const reg = getReg(pool, '{3,10}');

    expect(data).toMatch(reg);
  });

  it('Random.cword( length )传入一个参数', () => {
    const data = Random.cword(5);
    const reg = getReg(pool, '{5}');

    expect(data).toMatch(reg);
  });

  it('Random.cword( min, max )：传入两个参数', () => {
    const data = Random.cword(4, 7);

    const reg = getReg(pool, '{4,7}');
    expect(data).toMatch(reg);
  });
});

describe('随机生成一个中文句子Random.csentence', () => {
  it('Random.csentence )： 不传入参数', () => {
    const data = Random.csentence();

    const reg = /^[\u4e00-\u9f99]{10,110}。$/;

    expect(data).toMatch(reg);
  });

  it('Random.csentence( length )传入一个参数', () => {
    const data = Random.csentence(5);
    const reg = /^[\u4e00-\u9f99]{16,51}。$/;

    expect(data).toMatch(reg);
  });

  it('Random.csentence( min, max )：传入两个参数', () => {
    const data = Random.csentence(5, 8);

    const reg = /^[\u4e00-\u9f99]{16,81}。$/;
    expect(data).toMatch(reg);
  });
});

describe('随机生成一个中文段落Random.cparagraph', () => {
  it('Random.cparagraph )： 不传入参数', () => {
    const data = Random.cparagraph();
    const reg = /^([\u4e00-\u9f99]{10,110}。){3,10}$/;
    console.log(data);
    expect(data).toMatch(reg);
  });

  it('Random.cparagraph( length )传入一个参数', () => {
    const data = Random.cparagraph(5);
    const reg = /^([\u4e00-\u9f99]{10,110}。){5}$/;

    expect(data).toMatch(reg);
  });

  it('Random.cparagraph( min, max )：传入两个参数', () => {
    const data = Random.cparagraph(4, 7);
    const reg = /^([\u4e00-\u9f99]{10,110}。){4,7}$/;

    expect(data).toMatch(reg);
  });
});
