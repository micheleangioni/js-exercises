import Matrix from "./matrix";

describe('MultiMatrix', () => {
    test('double all values',() => {
        expect(new Matrix([[1,2,3], [4,5,6], [7,8,9]]).doubleWithForLoops().toEqual([[2,4,6], [8,10,12], [14,16,18]]));
        expect(new Matrix([[1,2,3], [4,5,6], [7,8,9]]).double().toEqual([[2,4,6], [8,10,12], [14,16,18]]))
    });

    test('double all values',() => {
        expect(new Matrix([[1,2], [4,5], [7,8]]).doubleWithForLoops().toEqual([[2,4,6], [8,10,12], [14,16,18]]));
        expect(new Matrix([[1,2], [4,5], [7,8]]).double().toEqual([[2,4], [8,10], [14,16]]))
    });

    test('Replace zeros with 10',() => {
        expect(new Matrix([[1,2,0], [4,0,6], [0,8,9]]).replace(0, 10).toEqual([[1,2,10], [4,10,6], [10,8,9]]));
    });

    test('Replace 10 with 0',() => {
        expect(new Matrix([[1,2,10], [4,10,6], [0,8,9]]).replace(0, 10).toEqual([[1,2,0], [4,0,6], [0,8,9]]));
    });

    test('Stringify the matrix to a string, where \n means a new row',() => {
        expect(new Matrix([[1,2,3], [4,5,6], [7,8,9]]).toString().toEqual('123\n456\n789'));
    });
});
