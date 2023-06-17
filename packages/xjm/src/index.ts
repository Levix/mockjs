import { info } from './config/logger';
import { string } from './module/string';
import { number } from './module/number';
import { boolean } from './module/boolean';
import { date } from './module/date';
import { object } from './module/object';
import { array } from './module/array';
import { template } from './module/template';
import * as rules from './module/rules';

class Mock {
  string = string;

  number = number;

  boolean = boolean;

  data = date;

  object = object;

  array = array;

  rules = rules;

  template = template;

  constructor() {
    info('mock init');
  }

}

const mock = new Mock();
