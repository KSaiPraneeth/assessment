const StringCalculator = require('./stringCalculator'); // Adjust the path as needed

test('empty string returns 0', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("")).toBe(0);
});

test('single number returns that number', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1")).toBe(1);
});

test('two numbers return their sum', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1,5")).toBe(6);
});

test('handles new lines between numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1\n2,3")).toBe(6);
});

test('supports custom delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add("//;\n1;2")).toBe(3);
});

test('throws error for negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test('throws error for multiple negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add("1,-2,-3")).toThrow("negative numbers not allowed: -2, -3");
});
