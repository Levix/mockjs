import Random from "./extends/random";
import Person from "./extends/person";
import getShcema from "./schema";
import { getRuleInstance } from "./rules";

const Rule = getRuleInstance();

const Mock = {
    Rule,
    Random,
    Person,
    Schema: getShcema(Rule),
};

export default Mock;
