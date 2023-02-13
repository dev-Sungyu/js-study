/* 
    task01.html
*/
// temp를 전역변수로 선언해 놓는다.
globalThis.temp;
// 버튼을 클릭했을때의 실행되는 함수 선언
function confirm() {
    // quarySelector를 이용해서 input에 들어오는 value 값을 const input에 담아놓는다.
    const input = document.querySelector("input").value;
    //  tbody 에 있는 tr들을 전부 가져와서 trs에 Array객체로 가져온다.
    const trs = document.querySelectorAll("tbody tr");
    // ?
    let check = false;
// 만약 temp가 들어오면 temp의 백그라운드 색깔을 흰색으로 바꿔주고 temp에 tr의 자식의 첫번째 요소를 담아 놓았으니 
// replace를 사용해서 별을 아무것도 없는거로 바꿔준다.
    if(globalThis.temp) {
        globalThis.temp.style.background = "#fff";
        globalThis.temp.firstElementChild.innerHTML = temp.firstElementChild.innerHTML.replace("★", "");
    }
// trs에 담겨있는걸 td를 선언 하면서 tr.firstElementChild 에 있는 주소값을 담음
// 만약
    trs.forEach(tr => {
        let td = tr.firstElementChild;
        if(td.innerHTML == input) {
            check = true;
            globalThis.temp = tr;
            tr.style.background = "#ef5350";
            td.innerHTML = "★" + td.innerHTML;
        }
    });

    if(!check) {
        alert("다시 시도해주세요.");
    }
}