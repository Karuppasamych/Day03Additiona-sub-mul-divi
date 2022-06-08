let num1 = prompt('Enter the num1');
let num2 = prompt('Enter the num2');
let opr1 = prompt('Enter the  operator');

//checking the operators//
if(opr1 == "+"){
    let total = num1 + num2
    console.log('Sum value = ',total)
}
else if(opr1 == "-"){
    let total = num1 - num2
    console.log('Substraction value = ',total)
}
else if(opr1 == "*"){
    let total = num1 * num2
    console.log('Multiplication value = ',total)
}
else if(opr1 == "/"){
    let total = num1 / num2
    console.log('Division value = ',total)
}