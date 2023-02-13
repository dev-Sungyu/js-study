const hans = "영일이삼사오육칠팔구".split("");
const inputText = document.querySelector("#inputText");
const inputBtn = document.querySelector("#inputBtn");
const output = document.querySelector("#output");
const countDiv = document.querySelector("div.number");
const footer = document.querySelector('footer');
const logListMax = 10;

let count = 0;

inputBtn.addEventListener("click", () => {
    if (inputText.value) {    //  입력이 없으면 반응 없음
        countDiv.innerHTML = ++count;
        // console.log("클릭됨");
        var result = NumToHan(inputText.value);
        output.innerHTML = result;
        createLog(count, result);
        // console.log(output.innerHTML);
    }
});

function NumToHan(input) {
    var arInput = input.split("");
    // console.log(arInput);
    var result = "";
    var dotCount = 0;

    for (let i = 0; i < arInput.length; i++) {
        var han = hans[arInput[i]];
        if (han) {
            result += han;
        } else if (arInput[i] === '.' & dotCount == 0) {
            dotCount++;
            result += '점';
        } else {
            result = "숫자만 입력해주세요.";
            break;
        }
    }
    console.log(result);
    c(result);
    return result;
}

function createLog(count, text) {
    var addDiv = document.createElement('div');
    var addText = document.createTextNode(count + ": " + text);
    if (count >= logListMax) { footer.removeChild(footer.firstChild); }
    addDiv.appendChild(addText);
    footer.appendChild(addDiv);
}

function c(target) {
    console.log(target);
}