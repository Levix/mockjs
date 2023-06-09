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
  randomNumber: (digit = 1) => getNumber(digit),
  randomString: (...args) => getString(...args),
  randomWord: (start = 1, end = 10) => getWord(start, end),
  randomBoolean: () => getBoolean(),
  randomDate: (...args) => getDate(...args),
  randomTime: (showSecend = false) => getTime(showSecend),
  randomPhone: () => getPhone(),
  randomUuid: () => getUuid()
}
