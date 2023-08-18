// base Notion formula functions
export const If = (condition: any, then: any, otherwise: any) => condition ? then : otherwise;
export const Format = (expr: any) => expr.toString()
export const Join = (separator: string, str1: string, str2: string) => str1.concat(separator, str2);
export const Empty = (expr: any) => Boolean(expr);
export const Not = (expr: any) => !expr;

// formula fonctions maker
export const makeProp = <T extends Record<string, any>>(item: T) => (propName: keyof T) => item[propName];
