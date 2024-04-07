/**
 * DataTypes (7가지)
 * 
 * 여섯개의 primitive data types 과 한개의 object data type 이 있다.
 * 
 * 1). Number
 * 2). String
 * 3). Boolean
 * 4). undefined
 * 5). symbol
 * 6). null
 * 
 * 7). Object
 * 
 */

const age = 27;
const temperature = 10;
const pi = 3.14;  

console.log(typeof age); // "number"
console.log(typeof temperature); // "number"
console.log(typeof pi); // "number"
console.log("--------------------------------------------------------");

const infinity = Infinity;
const noinfinity = -Infinity;

console.log(typeof infinity); // "number"
console.log(typeof noinfinity); // "number"
console.log("--------------------------------------------------------");

/**
 * String type 
 */

const codeFactory = '"코드"팩토리';
console.log(codeFactory); // "string"

const tigers = "'기아'타이거즈";
console.log(tigers); // "

/**
 * template literal
 *
 *  Escapting Characters
 * 1). new line -> \n
 * 2). tap -> \t
 * 3). 백슬래시를 스트링으로 표현하고 싶다면 2번 입력하면 된다.
 * 
 */

const bsteam = "두산\n베어스";
console.log(bsteam); 
const mlbTeam = "샌디에이고\t김하성";
console.log(mlbTeam);
const backSlash = "센프란시스코\/\\이정후";
console.log(backSlash);
const small = "다저스\'오타니";
console.log(small);

const bsTeam = `엘지 트윈스 ///\\\\...=--=-=-=-=-`;
console.log(bsTeam);

const groupName = '기아';
console.log(groupName + ` 타이거즈`);
console.log(`${groupName} 타이거즈`);
console.log("--------------------------------------------------------");

/**
 * Boolean type
 */

const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);
console.log(typeof isFalse);
console.log("--------------------------------------------------------");

/**
 * undefined type
 * 
 * 사용자가 직접 값을 초기화 하지 않았을 때
 * 지정되는 값이다.
 * 
 * 직접 값을 undefined로 지정하는것은 하지 말아야 한다.
 * js 세계에서는 미친놈 취급을 받을 수 있다.
 * 
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);
console.log("--------------------------------------------------------");

/**
 * null 타입
 * 
 * undefined과 마찬가지로 값이 없다는 뜻이지만,
 * JS에서는 개발자가 명시적으로 없는 값이다라고 초기화 할 때 사용한다.
 */

let nulInit = null;
console.log(nulInit); // null
console.log(typeof(nulInit)); // "object"
// 원래는 null 타입이 맞지만, 일종의 버그로써 object타입으로 출력된다. 설명할 수 없는 버그...
// 또한 변경이 가능하지만, 현재 null을 object타입으로써 기반을 한 레거시 코드가 너무 많기 떄문에 변경이 되고 있지는 않는다.
// 실제로 원래는 null 타입이다.

/**
 * symbol type
 * 
 * 다른 프리미티브타입과는 다르게 유일무의한 값을 생성할 때 사용한다.
 */

const test1 = 1;
const test2 = 1;
console.log(test1 === test2); // true

// 나중에 오브젝트를 쓸때 '가끔' 유용하게 쓰일 타입이다.
const symbol = Symbol(1);
const symbol2 = Symbol(1);
console.log(symbol === symbol2); //false
console.log("--------------------------------------------------------");

/**
 * 
 * Object type
 * 
 * Map
 * 키 : 벨류의 쌍으로 이루어져 있다.
 * 
 */

const dictionary = {
  red : '빨간색',
  orange : '주황색',
  blue : '파란색',
}

console.log(dictionary);
console.log(dictionary['red']);
console.log(typeof dictionary);

console.log("--------------------------------------------------------");

/**
 * 
 * Array type
 * 
 * 값을 리스트로 나열할 수 있는 타입이다.
 */

const bsTeamArray = ['한화', '기아', '두산', 'LG', '롯데', '삼성', 'KT', '넥센', 'NC', 'SSG'];
console.log(bsTeamArray); 

console.log("--------------------------------------------------------");

/**
 * Index
 * 
 * 0부터 시작해서 1씩 증가한다.
 */

console.log(bsTeamArray[1]);
console.log(bsTeamArray[9]);

bsTeamArray[4] = '쿠팡';
console.log(bsTeamArray); 
console.log(typeof bsTeamArray);

/**
 * static typing -> 변수를 선언할 떄 타입을 명시적으로 선언한다.
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않으며 값에의해 타입을 추론한다.
 * JS -> dynamic typing
 */



