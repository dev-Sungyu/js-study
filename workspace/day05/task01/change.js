/* 
    버튼에다 이벤트를 줘야한다. id = change 
    버튼 : querySelector("#change")
    이벤트 : addEventListener("click", e => {getResult(changeToHangle)
    
*/
document.querySelector("#change").addEventListener("click", e => {getResult(changeToHangle)});

/* 
    document.querySelector("#change").onclik = getResult;

    원래는 getResult만 써야하는데 callback함수로 changeToHangle을 가져왔기때문에
    getResult()로 사용을 했다.
*/


/* 외부에서 숫자(number)을 받아오기 */
function changeToHangle(number) {
    const numbering = document.querySelector("div#round");
    /* p태그의 result값에 전달을 해주기 위해 선언 */
    const resultTag = document.querySelector("#result");
    /* 여기서 찾아내기 */
    const hangle = "공일이삼사오육칠팔구";

    let result = "", temp = "", check = false;;
    /* number가 숫자인지 아닌지 확인 숫자가 아니면 NaN이 뜸 */
    if(isNaN(number) || number.charAt(0) == '.'){
        resultTag.innerHTML = "숫자만 입력해주세요.";
        numbering.innerHTML = "4";
        return;/* 밑으로 안내려가게 막아줌 */
    }

    if(number < 1) {
        result = "영";
    }
    /* number의 갯수만큼 i가 증가한다. index가 필요하기때문에  */
    for(let i in number) {
        /* number.charAt(i)이 hangle(i)번째 방과 동일하다. */
        /* number.charAt(i) 순서대로 하나씩 가져온다. */
        /* split은 forEach문에 준다. */
        temp = hangle[number.charAt(i)];
        
        if(i == 0 && result == "영"){
            continue;
        }
        
        /* 실수에 대한 처리방법 문자가 undifined라면 false */
        /* 
            이미 isNaN을 통과했다면 소숫점이 없거나 1개 있을것이고
            hangle[number.charAt(i)]에서 숫자를 한개씩 검사했을때
            undifined가 나타나면서 temp값이 false 아래의 if문으로 들어간다. 
        */
        if(!temp) {
            check = true;
            /* 기존에 temp의 값이 담기는게 아닌 점이 담기게 된다. */
            result += "점";
            /* 다음반복으로 넘어가 준다. */
            continue;
        }
        /* result엔 temp의 값이 담긴다. */
        result += temp;

        numbering.innerHTML = "3";
        
        if(check){
            numbering.innerHTML = "2";
        }
    }
    resultTag.innerHTML = result;
    /* resultTag에다 result값을 전달 */
}

/* 
    사용자가 입력받은 값 input이 없기때문에
    input에 있는걸 changeToHangle로 작성할꺼니까 함수 선언
    changeToHangle에 전달해야하기 때문에 
    changeToHangle이 callback함수로 전달해야하기 때문에
    result쪽에서 callback함수로 전달하면 된다.


*/

function getResult(callback){
    /* 사용자가 입력한 값 */
    const input = document.querySelector("input[name='input']").value;
    /* callback이 있으면 전달하면 된다. */
    if(callback){
        callback(input);
        /* getResult에서 changeToHangle를 callback함수로 씀*/
        /* input을 number로 받아서 사용 */
    }
}