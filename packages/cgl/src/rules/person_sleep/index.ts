import { RuleGenerator } from "../../core/rules";
import persion from "../../extends/person";
import random from "../../extends/random";

export interface PersonSleepRuleType {
    name: string;
    id: string;
    date: string;
}

export class PersonSleepRule extends RuleGenerator<PersonSleepRuleType> {
    generate(): PersonSleepRuleType {
        return {
            name: persion.cName(),
            id: persion.id(),
            date: random.getDate(),
        }
    }
}

export const getPersonSleepInstance = () => {
    return new PersonSleepRule();
}
