export interface AddFunction {
    (a: number, b: number): number;
}

export const add: AddFunction = (a: number, b: number): number => {
    return a + b;
};

console.log(add(3, 5)); //output: 8