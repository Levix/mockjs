import { getNumber } from './random/number';

export const injectMethodsMap = {
  mock: () => console.log('mock'),
  randomNumber: getNumber,
  randomString: () => '',
}