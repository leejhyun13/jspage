//1.
const breads = {
  creamBread: "크림빵",
  chocoBread: "초코빵",
  saltBread: "소금빵",
  count: 15,
};

for (const key in breads) {
  console.log(key + ':' + breads[key]);
}

//2. 

const coffee = ["아메리카노", "카페라떼", "에스프레소"];

for (const key of coffee) {
  console.log(key);
}

//3.문제 : number가 10보다 크면 "크다", 10보다 작으면 "작다", 
//        10과 같으면 "같다"를 콘솔에 출력하는 if 문을 작성하세요.

const number = 0;

if (number > 10) {
  console.log("크다");
}else if (number < 10){
  console.log("작다");
}else {
  console.log("같다");
}

//4. 문제 : color 변수의 값에 따라 다른 메시지를 콘솔에 출력하는 switch 문을 작성하세요.  
// "빨간색"인 경우 "정지", "녹색"인 경우 "진행", 그 외의 색상인 경우 "주의"를 출력하세요.

const color = "녹색";

switch (color) {
  case "빨간색":
    console.log("정지");
    break;
  case "녹색":
    console.log("진행");
    break;
  default:
    console.log("주의");
    break;
}

//5. 문제 : 버튼을 클릭하면 input 필드에 있는 텍스트를 콘솔에 출력하는 이벤트 리스너를 작성하세요.

document.getElementById("sumbmitButton").addEventListener("sumbmitButton", function () {
  const text = document.getElementById("textInput").value;
  console.log(text);
});