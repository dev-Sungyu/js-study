//  JS에서는 매개변수의 개수에 맞추어 값을 전달할 필요가 없다.
//  만약 매개변수 개수보다 부족하게 값을 전달하면 값을 못받은 매개변수에는 undefined가 들어간다.
//  만약 매개변수 개수보다 넘치게 값을 전달하면 잘린다.

// JS에서는 함수를 값으로 취급하기 때문에 매개변수로 전달이 가능하다.
//  현재 함수에서 나온 결과 값을 다른 함수로 전달할 때에는 callback이라는 식별자로 결과 값을 전달받아 온다.


// console.log(average(2,3));
let result = add(2, 3, function(returnfunction){console.log(returnfunction/2)});
result = add(2, 3);

if(result){
    console.log(result);
}

// function add(number1, number2, callback){
//     if(callback){
//         callback(number1 + number2);
//         return;
//     }
//     return number1 + number2;
// }

function average(number1, number2){
    return add(number1, number2) / 2;
}

console.log(
    add(1, 3, function(result){
        return result / 2;
    })
);

function add(number1, number2, callback) {
    if(callback){
        return callback(number1 + number2);
    }
    return number1 + number2;
}
// 상품명, 가격, 개수를 전달받은 뒤 전체 금액을 출력한다.
// 1. 상품명과 가격, 개수는 A함수에서 전달받는다.
// 2. B함수에서는 상품명과 전체 금액을 전달받아서 출력한다.
// 3. A함수는 B함수를 callback함수로 전달받는다.

function productA(name, price, count, callback) {
    result = price * count;
    return callback(name, result);
}

productA("과자", "1000", "5", function(name, result){
    console.log(name, result);
});

// 함수
//    인자(파라미터, parameter, variable): 매개변수(선언부)
//    인수(아규먼트, argument, value): 매개변수에 들어가는 값(사용부, 호출부)

// 함수의 선언
//    function 식별자(arg1, arg2, arg3, ...){
//       실행할 문장;
//       return 리턴 값;
//    }

//    - function: 함수 선언 표시한다
//    - 식별자: 동사로 작성한다
//    - parameter: 여러 개 있을 때에는 콤마로 분리하고 자료형을 따로 작성하지 않는다. 생략도 가능하다
//    - return: 생략이 가능하다. 리턴타입은 따로 작성하지 않고, return을 만나면 함수는 즉시 종료된다

// [task01.html]

//    <!-- 
//         마우스를 올려보세요
//         ----------------------------------------(hr)
//         여기에 마우스를 올리면 배경색이 노란색으로 변합니다.

//         ※ 배경색 변경은 노란색으로 하고, 초기 배경색은 흰색으로 한다.
//         ※ 태그이름.style.background = '색이름';
//      -->

// [task02.html]

//      <!-- 
//         월화수목금토일
//         ---------------------(hr)
//         000은 출근

//         사용자에게 요일을 입력받고 월~목은 출근, 다른 날은 휴일을 출력한다.
//         요일은 "월", "화", ... 형식으로 입력받는다.
//      -->

// [task03.html]

//     <!-- 
//         분석 결과
//         --------------------------(hr)
//         통과!

//         정확한 암호가 입력될 때까지 계속 prompt()를 사용하여 암호를 입력받는다.
//         암호는 "호랑이"이다.

//      -->

// [task04.html]

//     <!-- 
//         pr("%", 5);
//         결과 : %%%%%

//         위의 결과가 나오는 함수를 선언하여 사용한다.
//         출력은 콜백함수를 사용한다.
//      -->


























