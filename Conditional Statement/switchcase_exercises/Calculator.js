var num1 = 20;
var num2 = 10;
var op = "*";

switch(op){
    case '+': console.log(`${num1} ${op} ${num2} = ${num1 + num2}`);
              break;
    case '-': console.log(`${num1} ${op} ${num2} = ${num1 - num2}`);
              break;          
    case '*': console.log(`${num1} ${op} ${num2} = ${num1 * num2}`);
              break;
    case '/': console.log(`${num1} ${op} ${num2} = ${num1 / num2}`);
              break;
    case '%': console.log(`${num1} ${op} ${num2} = ${num1 % num2}`);
              break;
    default: console.log("Invalid operator");
}