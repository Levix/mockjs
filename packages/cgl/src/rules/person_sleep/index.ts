import { RuleGenerator } from "../../core/rules";
import person from "../../extends/person";
import random from "../../extends/random";

export interface PersonSleepRuleType {
    name: string;
    id: string;
    date: string;
}

/**
 * 睡大觉的人规则
 */
export class PersonSleepRule extends RuleGenerator<PersonSleepRuleType> {
    generate(): PersonSleepRuleType {
        return {
            name: person.cName(),
            id: person.id(),
            date: random.getDate().toString(),
        }
    }
}

/**
 * 获取睡大觉的人规则实例
 */
export const getPersonSleepInstance = () => {
    return new PersonSleepRule();
}
