import { string } from './module/string';
import { number } from './module/number';
import { boolean } from './module/boolean';
import { date } from './module/date';
import { object } from './module/object';
import { array } from './module/array';
import * as rules from './module/rules';

class Mock {
  string = string;

  number = number;

  boolean = boolean;

  data = date;

  object = object;

  array = array;

  rules = rules;
}

const mock = new Mock();
