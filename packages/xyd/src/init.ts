import Mock from './index';
import { injectMethodsMap } from './const'

type MockConstructor = typeof Mock;

function injectInstanceMethods (constructor: MockConstructor) {
  Object.keys(injectMethodsMap).forEach(key => {
    constructor.prototype[key] = injectMethodsMap[key];
  })
}

function initConstructorProto (constructor: MockConstructor) {
  constructor.prototype.init = function () {
    injectInstanceMethods(constructor)
  }
}

function injectStaticMethods (constructor: MockConstructor) {
  Object.keys(injectMethodsMap).forEach(key => {
    constructor[key] = injectMethodsMap[key];
  })
}

function initConstructorStatic (constructor: MockConstructor) {
  injectStaticMethods(constructor)
}

export function initMock(constructor: MockConstructor) {
  initConstructorProto(constructor);
  initConstructorStatic(constructor)
}