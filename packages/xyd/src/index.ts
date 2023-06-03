import { initMock } from './init';

function Mock () {
  if (!(this instanceof Mock)) {
    console.warn('应该用new执行')
  }

  this.init();
}

initMock(Mock);

console.log(Mock.randomNumber())

export default Mock;

