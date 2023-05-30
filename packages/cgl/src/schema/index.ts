import { getRandomInRange } from "../core/basic";
import { TRuleKeyType, TRuleParamsType } from "../interface"
import type { getRuleInstance } from "../rules";

type SchemaItemType = [TRuleKeyType, TRuleParamsType, [number, number?]?];

export interface ISchemaTemplate {
    [key: string]: SchemaItemType
}

const getSchema = (Rule: ReturnType<typeof getRuleInstance>) => {
    const walkTemplate = (key: string, shcemaItem: SchemaItemType) => {
        const [ruleName, params, [min = 0, max = 0] = []] = shcemaItem;
        const range = getRandomInRange(min, max);
        console.log(ruleName, params);

        if (!range) {
            return Rule.generate(ruleName, params);;
        }

        const result = [];
        for (let i = 0; i < range; i++) {
            result.push(Rule.generate(ruleName, params));
        }
        return result;
    }

    const schema = (template: ISchemaTemplate): Record<string, any> => {
        return Object.entries(template).reduce((obj, [key, item]) => {
            obj[key] = walkTemplate(key, item);
            return obj;
        }, {} as Record<string, any>);
    }

    return schema;
}

export default getSchema;
