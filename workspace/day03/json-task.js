//  동물원에 동물이 3마리 있다.
//  각 동물별 정보는 이름, 종, 나이 이다.
function zoo(name, species, age){
    this.name = name;
    this.species = species;
    this.age = age;
}
let animals = [
    new zoo('아깽이', '호랑이', 3),
    new zoo('아장이', '펭귄', 12),
    new zoo('훌렁이', '원숭이', 7)
]
let animalsJSON = JSON.stringify(animals);


// 동물원의 동물 전체 평균 나이를 구한다.

// function avg(animalsJSON){
//     let animals = JSON.parse(animalsJSON);
//     let result = 0;
//     for (let i = 0; i < animals.length; i++) {
//         result += animals[i].age;
//     }
//     return result / animals.length;
// }
function avg(animalsJSON, callback){
    let animals = JSON.parse(animalsJSON);
    let total = 0;
    animals.foreach(e => total += e.age)
    if(callback){
        callback(animals);
    }
}
avg(animalsJSON, total => {totals.forEach(total => console.log(total))});

// getTotals(productsJSON, totals => {totals.forEach(total => console.log(total))});

// 강사님꺼
function Animal(name, kind, age) {
    this.name = name;
    this.kind = kind;
    this.age = age;
}

let animals = [
    new Animal('구름이', '양', 4),
    new Animal('뽀삐', '소', 8),
    new Animal('바둑이', '기린', 9)
];

let animalsJSON = JSON.stringify(animals);

// 동물원의 동물 전체 평균 나이를 구한다.
function average(animalsJSON, callback) {
    let animals = JSON.parse(animalsJSON);
    // reduce(total, data)일 경우 항상 total값의 타입은 data의 타입과 동일하게 설정된다.
    let total = animals.map(animal => animal.age).reduce((total, age) => total + age);
    let average = total / animals.length;
    if(callback) {
        callback(average);
    }
    return average;
}

average(animalsJSON, average => console.log(average));