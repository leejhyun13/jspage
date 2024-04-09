// 자바스크립트 변수, 자료형, 함수, 조건문, 반복문

// 변수
var message1 = "coffee"; // 재할당 가능
let message2 = "cake"; // 재할당 가능
const message3 = "bread"; // 재할당 불가

console.log(message1);
console.log(message2);
console.log(message3);

// message3 = "cake";  => massage3는 const로 선언되어 재할당이 불가능하다.
// console.log(message3);

let ice; // 변수만 선언
let coffee = "아메리카노"; // 변수 선언 후 값 할당

ice = coffee; // coffee 변수의 값을 복사해서 ice 변수에 할당

console.log(`coffee : ${coffee}, ice : ${ice}`);
console.log(`coffee : coffee, ice : ice`);

// 자료형
/**
 * Primitive Types
 * 1). Number
 * 2). BigInt
 * 3). String 
 * 4). Boolean
 * 5). Symbol
 * 6). Undefined
 * 7). Null
 * 
 * Complex Types
 * 1). Array
 * 2). Object
 * 3). Function
 */
//2. 문자열 (string)
//문자열은 큰따옴표, 작은따옴표, 또는 백틱으로 둘러싸여 표현됩니다.
let cafe = "커피";
let chocobread = '"초코"빵';
let set = `${cafe} ${chocobread} 세트`;
console.log(set);

//3. 타입 체크 (typeof)
//자바스크립트는 동적 타입 언어 (타입과 값을 바꿀 수 있는 언어)

cafe = 100;
console.log(typeof(cafe));

cafe = "아메리카노";
console.log(typeof(cafe));

let donut = "20";
console.log(typeof(donut)); // string

let choco = Number(donut);
console.log(typeof(choco)); // number

//객체

// 일반 객체
const person = { name: 'Alice', age: 27, isOpen: true };
person.house = '서울';
person.isOpen = false;    // 속성 값 변경
console.log(person);      // 객체의 전체 데이터 확인
console.log(person.name); // Alice

// 배열
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[1]); // banana

// 함수
function greet(name) {
  return 'Hello ' + name;
}
console.log(greet('Alice')); // Hello Alice

// 날짜
const studyDay = new Date();
const studyString = studyDay.toISOString().split('T')[0];
console.log(studyString);
console.log(studyDay);
console.log(studyDay.toString());
console.log(studyDay.getFullYear(), studyDay.getMonth(), studyDay.getDate())

// 정규표현식
const pattern = /[a-zA-Z]+/g;
const result = pattern.test('Hello');
console.log(result); // true

// 에러
try {
  throw new Error('Something went wrong');
} catch (e) {
  console.error(e.message); // Something went wrong
}

// 내장 객체
console.log(Math.random()); // 0과 1 사이의 랜덤한 숫자
console.log(Number.parseInt('10', 10)); // 10

// 전역 객체
console.log(globalThis.location.href); // 브라우저 환경
console.log(globalThis.process.version); // Node.js 환경

const bakery = {
  saltBread: "소금빵",
  chocoBread: "초코빵",
  cheeseBread: "치즈빵"
};

// Object.entries()
//객체의 [키, 값]을 담은 배열을 반환합니다.
const bakeryEntries = Object.entries(bakery);
console.log("Object.entries():", bakeryEntries);
// 출력: Object.entries(): [ [ 'saltBread', '소금빵' ], [ 'chocoBread', '초코빵' ], [ 'cheeseBread', '치즈빵' ] ]

// Object.keys()
//객체의 '키'만 담은 배열을 반환합니다.
const bakeryKeys = Object.keys(bakery);
console.log("Object.keys():", bakeryKeys);
// 출력: Object.keys(): [ 'saltBread', 'chocoBread', 'cheeseBread' ]

// Object.values()
//객체의 '값'만 담은 배열을 반환합니다.
const bakeryValues = Object.values(bakery);
console.log("Object.values():", bakeryValues);
// 출력: Object.values(): [ '소금빵', '초코빵', '치즈빵' ]

// Object.freeze()
//객체를 동결하여 '수정할 수 없도록' 만듭니다.
Object.freeze(bakery);
bakery.cheeseBread = "Baguettes"; // 변경이 적용되지 않음
console.log("Object.freeze():", bakery);
// 출력: Object.freeze(): { saltBread: '소금빵', chocoBread: '초코빵', cheeseBread: '치즈빵' }

// Object.seal()
// 객체를 밀봉하여 새 속성 추가는 금지하지만, 기존 속성의 수정은 허용합니다.
Object.seal(bakery);
bakery.chocoBread = "456 Bread Avenue"; // 변경이 허용됨
console.log("Object.seal():", bakery);
// 출력: Object.seal(): { saltBread: '소금빵', chocoBread: '456 Bread Avenue', cheeseBread: '치즈빵' }

// Object.is()
// 두 값이 같은지를 확인합니다. NaN을 NaN과 같은 값으로 간주하지 않습니다.
console.log("Object.is(10, 10):", Object.is(10, 10));     // true
console.log("Object.is(10, '10'):", Object.is(10, '10')); // false

// Object.assign()
//하나 이상의 소스 객체로부터 대상 객체로 속성을 복사합니다.
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const mergedObject = Object.assign({}, target, source);
console.log("Object.assign():", mergedObject);
// 출력: Object.assign(): { a: 1, b: 3, c: 4 }

//배열
const breads = [];
// 배열에 요소 추가
breads.push ("소금빵", "초코빵", "치즈빵");
console.log(breads);

//인덱스에 새 요소 추가
breads[5] = "식빵";
console.log(breads[5]);
console.log(Object.keys(breads));
console.log(breads.length);

// 빈 슬롯 추가로 배열 확장
breads.length = 10;
console.log(breads);
console.log(Object.keys(breads));
console.log(breads.length);
console.log(breads[8]); // undefined

// 길이를 줄여 요소를 삭제
breads.length = 2;
console.log(Object.keys(breads));
console.log(breads.length);
console.log(breads); 

// 배열 메서드

// concat()
//두 개 이상의 배열을 병합하는 데 사용, 새 배열을 반환
const breads = ['바게트', '치아바타'];
const pastries = ['크루아상', '데니쉬'];
const menuItems = breads.concat(pastries);
console.log(menuItems); // ['바게트', '치아바타', '크루아상', '데니쉬']

// filter()
//주어진 배열의 일부에 대한 얕은 복사본을 생성하고, 주어진 함수에 의해 구현된 테스트를 통과한 요소로만 필터링
const coffeePrices = [3.5, 4.0, 2.5, 3.0, 4.5];
const affordableCoffees = coffeePrices.filter(price => price < 4);
console.log(affordableCoffees); // [3.5, 2.5, 3.0]

// map()
// 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
const coffees = ['에스프레소', '라떼', '카푸치노'];
const menuDisplay = coffees.map(coffee => coffee.toUpperCase());
console.log(menuDisplay); // ['에스프레소', '라떼', '카푸치노']

// slice()
//어떤 배열의 begin 부터 end 까지('end 미포함')에 대한 얕은 복사본을 새로운 배열 객체로 반환
const cafeMenu = ['커피', '차', '샌드위치', '샐러드', '케이크'];
const beverageMenu = cafeMenu.slice(0, 2);
console.log(beverageMenu); // ['커피', '차']

// sort()
// 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
const pastryTypes = ['크루아상', '데니쉬', '에클레어', '스콘'];
pastryTypes.sort();
console.log(pastryTypes); // ['크루아상', '데니쉬', '에클레어', '스콘']

// splice()
// 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
const menu = ['커피', '차', '주스'];
menu.splice(2, 0, '에스프레소', '라떼');
console.log(menu); // ['커피', '차', '에스프레소', '라떼', '주스']

// forEach()
//각 배열 요소에 대해 제공된 함수를 한 번씩 실행
const bakeryItems = ['커피', '빵', '케이크'];
bakeryItems.forEach(item => {
  console.log(item);
});
// 커피
// 빵
// 케이크

// find()
//제공된 테스트 함수를 만족하는 첫 번째 요소를 반환
const temperatures = [72, 68, 75, 80, 77];
const idealTemp = temperatures.find(temp => temp === 75);
console.log('커피 온도는 :' + idealTemp); // 75

// join()
// 배열의 모든 요소를 쉼표나 지정된 구분 문자열로 구분하여 연결한 새 문자열을 만들어 반환
const coffeeTypes = ['에스프레소', '라떼', '카푸치노'];
console.log(coffeeTypes.join(', ')); // '에스프레소, 라떼, 카푸치노'

// reduce()
// 배열의 각 요소에 대해 함수를 실행하고 단일 출력 값을 반환
const orderTotals = [4.25, 3.50, 2.75];
const total = orderTotals.reduce((total, current) => total + current, 0);
console.log(total); // 10.50

// push()
// 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새 길이를 반환
const cakes = ['초콜릿', '바닐라'];
const updatedLength = cakes.push('레드 벨벳');
console.log(cakes); // ['초콜릿', '바닐라', '레드 벨벳']
console.log(updatedLength); // 3

// pop()
// 배열의 '마지막 요소' 를 제거하고 그 요소를 반환
const teaFlavors = ['얼그레이', '녹차', '페퍼민트', '모카라떼'];
const lastTea = teaFlavors.pop();
console.log(teaFlavors); // ['얼그레이', '녹차', '페퍼민트']
console.log(lastTea); // '모카라떼'
// 함수

// 함수 선언식 (Function Declaration)
//함수를 정의하고 이름을 지정하는 방식으로, function 키워드를 사용하여 함수를 선언합니다.	
function bread() {
  console.log("This is a bread function declaration");
}

// 함수 표현식 (Function Expression)
// 변수에 함수를 할당하는 방식으로, 익명 함수를 만들고 변수에 할당하여 사용합니다.	
const breadFunc = function() {
  console.log("This is a bread function expression");
};

// 화살표 함수 (Arrow Function)
// ES6에서 도입된 간결한 문법으로, => 기호를 사용하여 함수를 선언합니다.	
const breadArrow = () => {
  console.log("This is a bread arrow function");
};

// 익명 함수 (Anonymous Function)
// 이름이 없는 함수로, 함수 표현식이나 콜백 함수로 주로 사용됩니다.	
setTimeout(function() {
  console.log('Hello');
}, 1000);

// 즉시 실행 함수 (Immediately Invoked Function Expression, IIFE)
// 정의되자마자 즉시 실행되는 함수로, 함수를 선언하고 즉시 괄호로 둘러싸서 호출합니다.	
(function() {
  console.log('I am invoked immediately');
})();

// 지역변수
// 함수 내부에서 선언된 변수로, 해당 함수 내부에서만 접근할 수 있습니다.
function bakery() {
  const cheeseBread = "치즈빵"; // 함수 내부에서만 접근할 수 있는 지역 변수
  console.log(cheeseBread);
}

bakery(); // 출력: 치즈빵
// console.log(cheeseBread); // 오류: cheeseBread is not defined (지역 변수이므로 함수 외부에서 접근 불가)

//전역변수
// 함수 외부에서 선언된 변수로, 스크립트 전체에서 접근할 수 있습니다.
const saltBreadd = "소금빵";

function cafe() {
  console.log(saltBread); // 함수 내부에서 전역 변수에 접근 가능
}

cafe(); // 출력: 소금빵
console.log(saltBread); // 출력: 소금빵 (전역 변수라서 함수 외부에서도 접근 가능)

//매개변수 와 전달인자
// 매개변수 : 함수 안에서의 정의 및 사용에 나열되어 있는 변수들을 의미합니다.
// 전달인자 : 함수를 호출할 때 전달되는 실제 값을 의미합니다.
function shop(bread) {
  // 함수 내에서 사용되는 변수 'bread'는 매개변수(parameter)입니다.
  console.log("맛있는 " + bread + "!");
}

const saltBread = "소금빵";
const chocoBread = "초코빵";
// shop(saltBread)에서 saltBread가 인자입니다.
shop(saltBread); // 맛있는 소금빵!

//메서드
// 현재 실행 중인 코드에서 사용되는 객체를 가리키는 키워드로, 주로 메서드 내부에서 사용됩니다.
// 해당 메서드를 호출한 객체를 가리키거나, 함수가 어디서 호출되었는지에 따라 동적으로 결정될 수 있습니다.
// ES2015에서는 화살표 함수에서는 자체적인 this 바인딩을 제공하지 않습니다.
const order = {
  drink: "아메리카노",
  size: "Tall",
  makeDrink: function() {
    // makeDrink 메서드 내부에서 this.drink와 this.size를 사용하면 현재 order 객체의 속성에 접근할 수 있습니다. 
    // this는 메서드가 호출될 때 호출된 객체에 바인딩되므로, makeDrink 메서드가 order 객체에서 호출될 때 this는 order 객체를 가리키게 됩니다.
    // 객체 내에 함수로 정의된 속성은 키(key)로도 부를 수 있고, 메서드로도 부를 수 있습니다. 
    console.log("사이즈 : " + this.drink + ", 종류 : " + this.size);
  }
};

order.makeDrink(); // 사이즈 : 아메리카노, 종류 : Tall

//new function
// new Function을 사용하여 함수 생성
let sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 3)); // 5

// 여러 매개변수와 복잡한 로직을 포함하는 함수
let complexFunction = new Function('a', 'b', 'if(a > b) { return a * b; } else { return a + b; }');

console.log(complexFunction(3, 2)); // 6 (3 * 2)
console.log(complexFunction(2, 3)); // 5 (2 + 3)

const bakery = {
  breadType: "바게트",
  flavor: "허니버터",
};

// 빵 굽기 함수
function bakeBread() {
  console.log("🥖 " + this.breadType + " 빵이 구워졌습니다. 맛은 " + this.flavor + "입니다.");
}

// 빵 굽기 - call 방식
// 함수를 호출하는 메서드로, 특정 객체를 지정하여 해당 함수 내에서의 this를 지정된 객체로 설정합니다. 
// 이때, 함수의 매개변수는 순차적으로 전달됩니다.
bakeBread.call(bakery); // 출력: 🥖 바게트 빵이 구워졌습니다. 맛은 허니버터입니다.

// 빵 굽기 - apply 방식
// 함수를 호출하는 메서드로, 특정 객체를 지정하여 해당 함수 내에서의 this를 지정된 객체로 설정합니다. 
//call()과 유사하지만, 함수의 매개변수를 배열로 전달합니다.

bakeBread.apply(bakery); // 출력: 🥖 바게트 빵이 구워졌습니다. 맛은 허니버터입니다.

// 빵 굽기 - bind 방식
// 함수를 호출하는 메서드로, 특정 객체를 지정하여 해당 함수 내에서의 this를 지정된 객체로 설정한 새로운 함수를 생성합니다. 
// 이때, 기존 함수와 동일한 매개변수를 전달하여 새로운 함수를 호출할 수 있습니다.
const boundBreadFunction = bakeBread.bind(bakery);
boundBreadFunction(); // 출력: 🥖 바게트 빵이 구워졌습니다. 맛은 허니버터입니다.

// 화살표 함수로 빵 굽기
const bakeBreadArrow = () => {
  console.log("🥖 " + this.breadType + " 빵이 구워졌습니다. 맛은 " + this.flavor + "입니다.");
};

bakeBreadArrow.call(bakery); // 출력: 🥖 undefined 빵이 구워졌습니다. 맛은 undefined입니다.
bakeBreadArrow.apply(bakery); // 출력: 🥖 undefined 빵이 구워졌습니다. 맛은 undefined입니다.
const boundBreadFunctionArrow = bakeBreadArrow.bind(bakery);
boundBreadFunctionArrow(); // 출력: 🥖 undefined 빵이 구워졌습니다. 맛은 undefined입니다.

// 조건문
// 주어진 조건의 참/거짓에 따라 서로 다른 코드 블록을 실행하도록 하는 구문입니다. 예를 들어 if, else, else if, switch 등이 여기에 속합니다.

// switch 를 if 문으로 변환
const fruit1 = 'apple';

if (fruit1 === 'apple') {
    console.log('Apple!'); // 'Apple!' 출력
} else if (fruit1 === 'banana') {
    console.log('Banana!');
} else {
    console.log('Unknown fruit1');
}

// if 문 예제
// 주어진 조건이 참일 때 특정 코드 블록을 실행하는 조건문입니다.
let fruits2 = ['apple', 'banana', 'orange'];
if (fruits2.includes('banana')) {
  console.log("바나나가 포함되어 있습니다.");
}

// else 문 예제
// if 조건이 거짓일 때 실행할 코드 블록을 지정하는 추가적인 조건문입니다.
let weather = {
  temperature: 28,
  isSunny: true
};
if (weather.isSunny) {
  console.log("오늘 날씨는 맑습니다.");
} else {
  console.log("오늘은 흐린 날씨입니다.");
}        

// else if 문 예제
//이전 if 문의 조건이 거짓이면, 새로운 조건을 검사하여 해당하는 경우 특정 코드 블록을 실행하는 조건문입니다.
if (age >= 19) {
  console.log("당신은 성인입니다.");
} else if (age >= 13) {
  console.log("당신은 청소년입니다.");
} else {
  console.log("당신은 어린이입니다.");
}

// switch 문 예제
// 주어진 표현식의 값에 따라 여러 경우 중 하나를 선택하여 실행할 코드 블록을 지정하는 조건문입니다.
let dayOfWeek = 'Monday';
switch (dayOfWeek) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log("평일입니다.");
    break;
  case 'Saturday':
    console.log("토요일입니다.");
    break;
  case 'Sunday':
    console.log("일요일입니다.");
    break;
  default:
    console.log("유효하지 않은 요일입니다.");
}

// 반복문
// 같은 코드 블록을 조건에 따라 여러 번 반복해서 실행하도록 하는 구문입니다. 예를 들어 for, while, do...while 등이 있습니다.

// for 반복문 예제
// 가장 기본적인 반복문으로, 특정 조건이 만족될 때까지 반복 실행
for (let i = 0; i < 5; i++) {
  console.log(i); // 0부터 4까지 출력
}

// for...in 반복문 예제
// 객체의 모든 열거 가능한 속성을 순회
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
  console.log(key, object[key]); // 객체의 각 속성과 값을 출력
}

// for...of 반복문 예제
// 반복 가능한 객체의 요소를 순회 (Array, String, Map, Set 등)
const array = [1, 2, 3, 4, 5];
for (const value of array) {
  console.log(value); // 배열의 각 요소를 출력
}

// while 반복문 예제
// 주어진 조건이 거짓이 될 때까지 반복해서 실행
let i = 0;
while (i < 5) {
  console.log(i); // 0부터 4까지 출력
  i++;
}

// do...while 반복문 예제
// 조건을 검사하기 전에 블록 내의 코드를 최소 한 번 실행, 이후 조건이 참인 동안 반복 실행
let j = 0;
do {
  console.log(j); // 0부터 4까지 출력, 최소 한 번은 실행
  j++;
} while (j < 5);

// break 예제
// 반복문(예: for, while, do...while)의 실행을 즉시 중단시키거나, switch 문에서 사용되어 특정 케이스 실행 후 빠져나올 때 사용
for (let k = 0; k < 10; k++) {
  if (k === 5) break; // i가 5에 도달하면 반복문을 중단
  console.log(k); // 0부터 4까지만 출력
}

// continue 예제
// 현재 반복의 나머지 부분을 건너뛰고 반복문의 다음 반복으로 제어를 이동시킴, 
// 주로 for, while, do...while 반복문 내에서 특정 조건에서 추가적인 코드 실행을 건너뛸 때 사용
for (let l = 0; l < 10; l++) {
  if (l % 2 === 0) continue; // l이 짝수이면 다음 반복으로 건너뜀
  console.log(l); // 1, 3, 5, 7, 9 출력
}

// switch 예제
// 다중 조건 분기를 처리하는 데 사용되며, 표현식을 평가하여 그 값에 따라 다른 코드 블록을 실행, 
// 반복문과는 직접적인 연관이 없지만 조건에 따른 작업 수행에 유용
const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('Apple!'); // 'Apple!' 출력
    break;
  case 'banana':
    console.log('Banana!');
    break;
  default:
    console.log('Unknown fruit');
}

