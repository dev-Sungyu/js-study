let file = require('fs');
// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.

// shop.json에 변환된 JSON 형식의 문자열을 작성한다.
// shop.json을 읽어 온 뒤 Array 객체로 변환한다.
// 총 가격과 총 재고 수를 Object에 담은 뒤 sum.json으로 출력한다.
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}



let products = [
    new Product('참후레쉬', 1500, 90),
    new Product('참후레쉬', 1500, 60),
    new Product('참후레쉬', 1500, 30)
];
                                                          //  function(error){console.log(error ? error : '성공!')}
file.writeFile('shop.json', JSON.stringify(products), 'utf-8', error => console.log(error ? error : '성공!'));
                                // function(error,content){}
file.readFile('shop.json', 'utf-8', (error,content) => {
    if(error){
        console.log(error);
    }else {
        products = JSON.parse(content);
    }
});
let arinfo = [
    // products 에 있는 Array 객체를 map으로 하나하나 가져와서 product.price로 변환해줌
    // reduce 역할은 오른쪽에 있는걸 += 하는거
    products.map(product => product.price).reduce((total, price) => total + price),
    products.map(product => product.stock).reduce((total, stock) => total + stock)
];
console.log(arinfo);

file.writeFile('sum.json', JSON.stringify(arinfo), 'utf-8', error => console.log(error ? error : '성공!'));

// 준상님 개량 버전
        // /* shop.json의 형식이 JSON이므로 parse하여 객체화 한다. */
        // arContent = JS,.ON.parse(content);
        // /*  shop.json에서 읽어온 각 가격과 재고의 합을 Array에 담음 */
        // let arInfo = [
        //     /* 누적 가격 */
        //     arContent.map(e => e.price).reduce((totalPrice, price) => totalPrice + price),   
        
        //     /* 누적 재고 */
        //     arContent.map(e => e.stock).reduce((totalStock, stock) => totalStock + stock)    
        // ]
        // file.writeFile('sum.json', JSON.stringify(arInfo), 'utf-8', error => console.log(error ? error : "성공!"));

//  강사님꺼
//         let productsJSON = JSON.stringify(products);
// // file.writeFile('shop.json', productsJSON, 'utf-8', error => {});
// file.readFile('shop.json', 'utf-8', (error, contents) => {
//     let products = JSON.parse(contents);
//     let totalPrice = products.map(product => product.price).reduce((totalPrice, price) => totalPrice + price);
//     let totalStock = products.map(product => product.stock).reduce((totalStock, stock) => totalStock + stock);
//     let sum = {totalPrice: totalPrice, totalStock: totalStock};
//     let sumJSON = JSON.stringify(sum);
//     file.writeFile('sum.json', sumJSON, 'utf-8', error => {});
// });


// let productsJSON = JSON.stringify(products);

// 각 상품별 총 가격을 구한 뒤 출력한다.
// callback 함수를 사용한다.
// 외부에서는 JSON 데이터가 전달된다.
// function getTotals(productsJSON, callback) {
//     let products = JSON.parse(productsJSON);
//     let totals = products.map(product => product.price * product.stock);
//     if(callback){
//         callback(totals);
//     }
// }

// getTotals(productsJSON, totals => {totals.forEach(total => console.log(total))});