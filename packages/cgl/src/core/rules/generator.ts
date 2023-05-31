import { log } from "../../helper/logger";
import type { IRuleGenerator } from "../interface";

export abstract class RuleGenerator<T> implements IRuleGenerator<T> {
    // 生成Mock数据
    abstract generate(val?: any): T;

    // 执行规则
    public exec(val?: any) {
        try {
            return this.generate(val);
        } catch (error) {
            log.alert('【RuleGenerator.exec】', '生成Mock数据失败，原因：', error);
        };
    }
}
