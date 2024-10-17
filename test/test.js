const stringCalculator = require('../src/stringCalculator');

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(stringCalculator.add("")).toBe(0);
    });

    test('should return sum of numbers for given numbers', () => {
        expect(stringCalculator.add("1")).toBe(1);
    });

    test('should return sum of numbers for given numbers', () => {
        expect(stringCalculator.add("1,5")).toBe(6);
    });
    
    test('should return sum of numbers for given numbers', () => {
        expect(stringCalculator.add("1\n2,3")).toBe(6);
    });

    test('should handle ; as delimiters', () => {
        expect(stringCalculator.add("//;\n1;2")).toBe(3);
    });
    
});
