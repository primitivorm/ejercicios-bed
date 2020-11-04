import myReduce from './four';

const testFour = () => {
    const arr = [3,2,5,9,1,3];
    const result = myReduce(arr);
    expect(result).toEqual([3,2,5,9,1]);
};

describe("Test for exercise four", () => {
    it("With example values: [3,2,5,9,1,3]", testFour);
  });