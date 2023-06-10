export function isUndefined(value: any): value is undefined {
    return Object.prototype.toString.call(value) === '[object Undefined]';
}

export function isNull(value: any): value is null {
    return Object.prototype.toString.call(value) === '[object Null]';
}

export function isBoolean(value: any): value is boolean {
    return Object.prototype.toString.call(value) === '[object Boolean]';
}

export function isNumber(value: any): value is number {
    return Object.prototype.toString.call(value) === '[object Number]';
}

export function isString(value: any): value is string {
    return Object.prototype.toString.call(value) === '[object String]';
}

export function isSymbol(value: any): value is symbol {
    return Object.prototype.toString.call(value) === '[object Symbol]';
}

export function isArray<T = any>(value: any): value is Array<T> {
    return Object.prototype.toString.call(value) === '[object Array]';
}

export function isObject<T = any>(value: any): value is Object {
    return Object.prototype.toString.call(value) === '[object Object]';
}

export function isFunction<T = any>(value: any): value is Function {
    return Object.prototype.toString.call(value) === '[object Function]';
}
