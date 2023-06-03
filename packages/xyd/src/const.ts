import { mock } from './mock';
import { getBoolean } from './random/boolean';
import { getDate } from './random/date';
import { getNumber } from './random/number';
import { getPhone } from './random/phone';
import { getString } from './random/string';
import { getTime } from './random/time';
import { getUuid } from './random/uuid';
import { getWord } from './random/word';

export const injectMethodsMap = {
  mock: mock,
  randomNumber: (digit = 2) => getNumber(digit),
  randomString: (start = 1, end = 20) => getString(start, end),
  randomWord: (start = 1, end = 10) => getWord(start, end),
  randomBoolean: () => getBoolean(),
  randomDate: (format = 'yyyy-mm-dd') => getDate(format),
  randomTime: () => getTime(),
  randomPhone: () => getPhone(),
  randomUuid: () => getUuid()
}
