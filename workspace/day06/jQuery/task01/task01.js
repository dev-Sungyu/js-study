/* 
    day06/jQuery/task01.html
*/

globalThis.$temp;

function confirm() {
    const $input = $("input").val()
    const $trs = $("tbody tr");
    let check = false;

    if(globalThis.$temp) {
        globalThis.$temp.css('background', "#fff");
        globalThis.$temp.children().first().text($temp.children().first().text().replace("★", ""));
    }

    $trs.each((i, tr) => {
        let $tr = $(tr);
        let $td = $tr.children().first();
        let text = $td.text().trim();
        console.log(text);
        if(text == $input) {
            check = true;
            globalThis.$temp = $tr;
            $tr.css('background', "#ef5350");
            $td.text("★" + text);
        }
    })

    if(!check) {
        alert("다시 시도해주세요.");
    }
}

{/* <chatgpt> */}
let temp;
function confirm() {
    const input = $("input").val();
    const trs = $("tbody tr");
    let check = false;
    if(temp) {
        $(temp).css("background", "#fff");
        $(temp).find("td").first().html(temp.firstElementChild.innerHTML.replace("★", ""));
    }
    trs.each(function() {
        const td = $(this).find("td").first();
        if(td.html() == input) {
            check = true;
            temp = this;
            $(this).css("background", "#ef5350");
            td.html("★" + td.html());
        }
    });

    if(!check) {
        alert("다시 시도해주세요.");
    }
}
