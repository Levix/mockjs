import { Rule } from '../core/rules';
import { getMockStringInstance } from './mock_string';
import { getPersonSleepInstance } from './person_sleep';

Rule.register('personSleep', getPersonSleepInstance()).register('mockString', getMockStringInstance());

export { Rule };
