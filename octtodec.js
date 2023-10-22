
function octalToDecimal(octal) {
    return parseInt(octal, 8);
  }
  
  const expression = "10 + 12 * 15"; // Octal numbers
  const decimalExpression = expression.replace(/\b[0-7]+\b/g, match => octalToDecimal(match));
  
  console.log(decimalExpression); // This will print the expression with decimal numbers
  