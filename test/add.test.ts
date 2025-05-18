import { add, AddFunction  } from '../src';

describe('AddFunction', () => {
    const testCases: Array<[number, number, number]> = [
        [2, 3, 5],
        [-2, -3, -5],
        [-2, 3, 1],
        [0, 0, 0],
        [5, 0, 5],
        [0, 5, 5]
    ];

    test.each(testCases)(
        'should add %i and %i to get %i',
        (a: number, b: number, expected: number) => {
            expect(add(a, b)).toBe(expected);
        }
    );
});
