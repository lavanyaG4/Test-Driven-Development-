const stringCalculator = require('../src/stringCalculator');

describe('String Calculator', () => {
    test('should return 0for an empty string', () => {
        expect(stringCalculator('')).toBe(0);
    });
});
