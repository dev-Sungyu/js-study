// function dummy(number1, number2, callback){
//     return callback(number1, number2);
// }

function add(num1, num2){
    return num1 + num2;
}

function add(num1, num2, callback){
    callback(num1 + num2);
    return num1 + num2;
}

// dummy(3, 5, add);

// function test(callback){
//     return callback(3);
// }

// console.log(test(num => num * 3));

function test(num3){
    console.log(num3);

}
test(add(2, 7));
add(2,7,function())