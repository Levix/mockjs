import { describe, expect, it } from "vitest";
import { parseSchemaField } from "../parse";
import { SchemaItemType } from "../../interface";

describe('parseSchemeField', () => {
    it('测试Schema字段', () => {
        const schemaField = ['mockRule', 'mockParams', [2, 5]] as SchemaItemType;
        const { ruleName, params, isList, min, max } = parseSchemaField(schemaField);

        expect(ruleName).toBe('mockRule');
        expect(params).toBe('mockParams');
        expect(isList).toBe(true);
        expect(min).toBe(2);
        expect(max).toBe(5);
    });

    it('测试非列表类型Schema', () => {
        const schemaField = ['mockRule', 'mockParams'] as SchemaItemType;
        const { ruleName, params, isList, min, max } = parseSchemaField(schemaField);

        expect(ruleName).toBe('mockRule');
        expect(params).toBe('mockParams');
        expect(isList).toBe(false);
        expect(min).toBe(0);
        expect(max).toBe(0);
    });
});
