function convertToDecimal(number, base) {
    function octalToDecimal(number) {
        return parseInt(number, base);
      }
      
      const expression = "10 + 12 * 15"; // Octal numbers
      const decimalExpression = number.replace(/\b[0-7]+\b/g, match => octalToDecimal(match));
    
    return decimalExpression;
}

function calculateExpression(expression) {
    expression = expression.replace(/'/g, '').replace('+', 'temp').replace('-', '+').replace('temp', '-');
    expression = expression.replace('*', 'temp').replace('/', '*').replace('temp', '/');
    return expression;
}

function solveExpression(input) {
    const [base, expression] = input.split(',');
    // const baseValue = parseInt(base);
    const decimalExpression = convertToDecimal(expression, base);
    // const result = eval(calculateExpression(decimalExpression));
    console.log(decimalExpression);
}

// Sample input
const input = '8,17-3/12';
const output = solveExpression(input);
console.log(output); // Output: 180
