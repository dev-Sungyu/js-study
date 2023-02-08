// 상품명, 가격, 재고를 JS 객체에 프로퍼티로 담는다.
// JSON 형식으로 변환한 뒤, product.json으로 출력한다.
// product.json에 있는 JSON 형식을 JS Object 타입으로 변환하여 각 프로퍼티를 출력한다.
let file = require('fs');
let product = {name: '지우개', price: 300, stock: 35000};

file.writeFile('product.json', JSON.stringify(product), 'utf-8', error => {});
file.readFile('product.json', 'utf-8', (error, content) => {
    console.log(JSON.parse(content));
});



