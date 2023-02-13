/* 
    task01.html
*/

/* 
    td 객체만 가져와서 확인해야 한다.
    DOM tree를 사용해서 tr태그를 가져와야한다.
    굳이 class명을 줄 필요가 없다.
*/
/* temp안에 tr이 담겨야 하기 때문에 전역변수로 선언 함수 안에 있으면 실행될때마다 초기화됨 */
globalThis.temp;

function confirm() {
    /* 사용자가 입력한 값 */
    const input = document.querySelector("input").value;/* input태그의 value값 */
    /* tr 행을 가져와서 접근 trs */
    const trs = document.querySelectorAll("tbody tr");/* tbody의 tr을 가져와라 3개의 행 */
    /* 잘못 입력했을때 if문에 한번도 안들어 갔을때 */
    let check = false;

    /* 이전의 객체가 무엇인지 담아두기 위해서 temp를 사용 */
    /* 반복을 돌리기 전에 temp가 하나라도 들어가 있다면 바뀐애가 있다는 뜻이니까 if문으로 들어옴 */
    if(globalThis.temp) {
        globalThis.temp.style.background = "#fff";/* 화이트로 바꿔줌 */
        /* 별을 떼줘야 함 replace사용 */
        globalThis.temp.firstElementChild.innerHTML = temp.firstElementChild.innerHTML.replace("★", "");
    }

    for (let i = 0; i < trs.length; i++) {
        /* 클래스명을 주지 않고 tr태그의 자식값인 td의 첫번째 값을 td에 담았다. */
        
        /* 구분으로 확인해야 하기 때문에 첫번재 자식요소만 가져온다. */
        let td = tr.firstElementChild;
        /*  */
        if(td.innerHTML == input) {
            /* 한번이라도 들어가면 check를 true로 바꿔준다. */
            check = true;
            /* temp에 tr을 담아준다. */
            globalThis.temp = tr;
            /* tr의 스타일을 준다. */
            tr.style.background = "#ef5350";
            /* td 앞에 ★을 붙인다. */
            td.innerHTML = "★" + td.innerHTML;
        }
    }

    // trs.forEach(tr => {
    //     let td = tr.firstElementChild;
    //     if(td.innerHTML == input) {
    //         check = true;
    //         globalThis.temp = tr;
    //         tr.style.background = "#ef5350";
    //         td.innerHTML = "★" + td.innerHTML;
    //     }
    // });

    if(!check) {
        /* check가 true가 아닐경우 경고창 띄우기 */
        alert("다시 시도해주세요.");
    }
}