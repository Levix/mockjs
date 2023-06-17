type TypeParam = 'string' | 'number' | 'boolean' | 'object' | 'array';

interface JsonFeild {
  fieldName?: string;
  type: TypeParam;
  fnName: string;
  params?: any[];
  callback?: () => any;
  children?: JsonFeild[];
}

export type JsonTemplate = JsonFeild[];