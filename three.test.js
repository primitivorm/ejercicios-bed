import kesimo from './three';

const testThree = () => {
    const result = kesimo( [7,2,5,9,8,3] , 2);
    expect(result).toEqual(8);
};

describe("Test for exercise three", () => {
    it("With example values:  [7,2,5,9,8,3] , 2", testThree);
  });