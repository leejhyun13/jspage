/**
 * 1). for
 * 2). while
 */

let square = '';
let side = 6;

for (let i = 0; i < side; i++) {
  for (let j = 0; j < side; j++) {
    square += '* ';
  }
  square += '\n';
}

console.log(square);

/**
 * for,,,in
 * 
 * 인덱스의 값을 가져오고 싶을때는 for..in를 사용할 수 있다.
 */

const team = {
  name: 'tigers',
  rank: 1,
  sponsor: 'kia',
}

for (let key in team) {
  console.log(key);
}

console.log('-----------------------------')

const kiaTigersArray = ['양현종', '박찬호', '정해영', '김선빈', '김도영'];

for (let key in kiaTigersArray) {
  console.log(key);
  console.log(Number(key) + 1 + '번째 선수 : ' + kiaTigersArray[key]);
}
// Array에서는 키값으로 인덱스 값을 받아올 수 있다.

/**
 * for,,of
 * 
 * 값을 가져오고 싶을때는 for..of를 사용할 수 있다.
 */

let i = 1;
for (let value of kiaTigersArray) {
  console.log(i + value);
  i++;
}

/**
 * while
 */

console.log('-----------------------------')

let i2 = 1;

while (i2 < 10) {
  i2++;
}

console.log(i2);

/**
 * break
 */



for (let i = 0; i < 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

console.log('-----------------------------')

let num = 0;

while (num < 10) {
  if (num === 5) {
    break;
  }
  console.log(num);
  num++;
}
console.log('-----------------------------');
console.log(num);

/**
 * continue
 */

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

let num2 = 0;

while (num2 < 10) {
  num2++;

  if (num2 === 5) {
    continue;
  }
  console.log(num2);
}

// 위 출력에서 5가 출력되지 않는것을 볼 수 있는데, continue는 조건에 해당하는 값만 반환하지 않고,
// 다음 반목문으로 진행되게 된다.

