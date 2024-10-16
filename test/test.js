const stringCalculator = require('../src/stringCalculator');

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(stringCalculator.add("")).toBe(0);
    });

    test('should return sum of numbers for given numbers', () => {
        expect(stringCalculator.add("1")).toBe(1);
    })
   
});
