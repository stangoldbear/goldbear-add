export interface AddFunction {
    (a: number, b: number): number;
}

export const add: AddFunction = (a: number, b: number): number => {
    return a + b;
};