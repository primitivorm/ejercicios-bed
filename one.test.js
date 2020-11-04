import arrayBiggest from './one';

const testOne = () => {
    const arr = [3,2,5,9,1,3];
    const result = arrayBiggest(arr);
    expect(result).toEqual([2,5,9]);
};

describe("Test for exercise one", () => {
    it("With example array: [3,2,5,9,1,3]", testOne);
  });