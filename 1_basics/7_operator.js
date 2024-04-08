/**
 * Operators
 * 연산자
 * 
 * 
 * 1). 산술연산자
 *  + - * / %
 */

console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%10);
console.log(10%9);

console.log("--------------------------------------------------------");

/**
 * 2). 증가와 감소
 */

let number = 1;
number ++;
console.log(number);
number--;
console.log(number);
console.log("--------------------------------------------------------");

/**
 * 연산자의 위치
 */

let result = 1;
console.log(result);

result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, - 를 사용하면 어떻게 될까??
 *
 */

let sample = '99';

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = "이정현";
console.log(+sample);
console.log(typeof +sample);

/**
 * 할당 연산자
 */

let number1 = 100;

number1 += 10;
console.log(number1);

number1 -= 10;
console.log(number1);

number1 *= 10;
console.log(number1);

number1 /= 10;
console.log(number1);

number1 %= 10;
console.log(number1);

/**
 * 비교 연산자
 */

console.log( 10 == 10); // true
console.log( 10 == '10'); // true
console.log( 10 === 10); // true
console.log( 10 === '10'); // false

// 위에서 보이는 것처럼 '=='는 값만 비교를 하지만, '==='는 값 뿐만아니라 타입까지 비교를 한다.


