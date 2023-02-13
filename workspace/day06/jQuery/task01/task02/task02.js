document.querySelector("#change").addEventListener("click", e => {getResult(changeToHangle)});

function changeToHangle(number) {
    const numbering = document.querySelector("div#round");
    const resultTag = document.querySelector("#result");
    const hangle = "공일이삼사오육칠팔구";

    let result = "", temp = "", check = false;;
    if(isNaN(number) || number.charAt(0) == '.'){
        resultTag.innerHTML = "숫자만 입력해주세요.";
        numbering.innerHTML = "4";
    }
    if(number < 1) {
        result = "영";
    }
    for(let i in number) {
        temp = hangle[number.charAt(i)];
        if(i == 0 && result == "영"){
            continue;
        }
        if(!temp) {
            check = true;
            result += "점";
            continue;
        }
        result += temp;
        numbering.innerHTML = "3";
        if(check){
            numbering.innerHTML = "2";
        }
    }
    resultTag.innerHTML = result;
}
function getResult(callback){
    const input = document.querySelector("input[name='input']").value;
    if(callback){
        callback(input);
    }
}
<script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
    const change = $("#change");
    $("#change").on("click", e => {});
    function changeToHangle(number) {
        const numbering = $("div#round");
        const resultTag = $("#result");
        const hangle = "공일이삼사오육칠팔구";

        let result = "", temp = "", check = false;;
        if(isNaN(number) || number.charAt(0) == '.'){
            $("resultTag").text("숫자만 입력해주세요.");
            $("numbering").text("4");
        }
        if(number < 1) {
            result = "영";
        }
        for(let i in number) {
            temp = hangle[number.charAt(i)];
            if(i == 0 && result == "영"){
                continue;
            }
            if(!temp) {
                check = true;
                result += "점";
                continue;
            }
            result += temp;
            $("numbering").text("3");
            if(check){
                $("numbering").text("2");
            }
        }
        $("resultTag").text(result);
    }
    function getResult(callback){
        const input = $("input[name='input']").var();
        if(callback){
            callback(input);
        }
    }



    /* 
    day06/jQuery/task02.html
*/

$("#change").on("click", e => {getResult(changeToHangle)});

function changeToHangle(number) {
    const $numbering = $("div#round");
    const $resultTag = $("#result");
    const hangle = "공일이삼사오육칠팔구";
    let result = "", temp = "", check = false;

    if(isNaN(number) || number.charAt(0) == '.'){
        $numbering.text("4");
        $resultTag.text("숫자만 입력해주세요.");
        return;
    }

    if(number < 1) {
        result = "영";
    }

    for(let i in number) {
        temp = hangle[number.charAt(i)];

        if(i == 0 && result == "영"){
            continue;
        }

        if(!temp) {
            check = true;
            result += "점";
            continue;
        }

        result += temp;

        $numbering.text("3");
        
        if(check){
            $numbering.text("2");
        }
    }
    $resultTag.text(result);
}

function getResult(callback){
    const input = $("input[name='input']").val();
    if(callback){
        callback(input);
    }
}
    





