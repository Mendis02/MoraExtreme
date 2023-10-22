var Ox = "3-5+10*11/7";

function evaluateExpression1(expression) {
    var res = eval(expression);
    return res;
}

var conv = Ox
  .replace(/-/g, "|")  // Replace '-' with '|'
  .replace(/\+/g, "-")  // Replace '+' with '-'
  .replace(/\|/g, "+")
  .replace(/\*/g, "}")
  .replace(/\//g, "*")
  .replace(/\}/g, "/")

const ans = evaluateExpression(conv)
  

console.log(ans);
