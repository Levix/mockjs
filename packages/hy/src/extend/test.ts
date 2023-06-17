import { JsonTemplate } from './interface';
export const json: JsonTemplate = [
  {
    "fieldName": "a",
    "type":"object",
    "fnName":"getString",
    "params":["number", 10],
    "callback":() => '123',
    "children":[
      {
        "fieldName": "a",
        "type":"string",
        "fnName":"getTypeString",
        "params":['number', 2],
        "children":[]
      }
    ]  
  },
  {
    "fieldName": "b",
    "type":"number",
    "fnName":"getRandomNumber",
    "params":[1,10],
    "children":[
      {
        "fieldName": "a",
        "type":"string",
        "fnName":"getString",
        "params":[],
        "children":[]
      }
    ]  
  }
]