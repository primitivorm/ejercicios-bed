import isBalanced from './five';

const testFiveEx1 = () => {
    const result = isBalanced('([])');
    expect(result).toEqual(true);
};

const testFiveEx2 = () => {
    const result = isBalanced('([])');
    expect(result).toEqual(true);
};

const testFiveEx3 = () => {
    const result = isBalanced('([)]');
    expect(result).toEqual(false);
};

describe("Test for exercise five", () => {
    it("With example values: '([])'", testFiveEx1);
    it("With example values: '[()[]]'", testFiveEx2);
    it("With example values: '([)]'", testFiveEx3);
  });