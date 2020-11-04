import sum from './two';

const testTwo = () => {
    const result = sum(3, 6);
    expect(result).toEqual(18);
};

describe("Test for exercise two", () => {
    it("With example values: 3, 6", testTwo);
  });