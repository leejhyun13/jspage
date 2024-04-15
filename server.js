const express = require('express');

const path = require('path');
const app = express();
const port = 3000;
const myKey = process.env.API_KEY;
const fs = require('fs'); // nodeJs 파일 시스템에 접근


app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname, './dist/index.html'));
})

app.use(express.static(__dirname));

app.get('/api/data', async (req, res) => {
  try {
    const response = await fetch(`https://apis.data.go.kr/B553530/GHG_LIST_040/GHG_LIST_04_03_20220831_VIEW01?serviceKey=${myKey}&apiType=JSON`)
    //https://apis.data.go.kr/B553530/GHG_LIST_040/GHG_LIST_04_03_20220831_VIEW01?serviceKey=${myKey}&apiType=JSONFZqZWHME7
    const data = await response.json()
    // res.json(data)
    //데이터를 js 형식으로 저장합니다.
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', function (err) {
      if (err) {
        res.status(500).send(err.message);
        console.log('error : ', err)
      } else {
        res.send('The file has been saved!');
      }
    });
  } catch (err) {
    // res.status(500).send('API 요청 중 오류 발생!' + console.log(err.message))

  }
})
//파일에서 데이터를 읽어오는 라우트
app.get('/api/read-data', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("파일을 읽는 중 오류 발생");
    } else {
      res.json(JSON.parse(data));
    }
  })
});
//마지막에 응답하는
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})


//   - 필요한 주소와 파라미터
// 엔드포인트: https://apis.data.go.kr/B553530/GHG_LIST_040/ GHG_LIST_04_03_20220831_VIEW01? serviceKey = ${ myKey }& apiType=JSON
// API 주소: / GHG_LIST_04_03_20220831_VIEW01
// API 나의 키: ? serviceKey = ${ myKey }
// 데이터 타입: & apiType=JSON
//   & pageNo=1
//     & numOfRows=10

//       & q1=2019 & q2=5 % EC % 9D % B8 % 20~% 209 % EC % 9D % B8
//         & q3=% EB % 8C % 80 % EC % A0 % 84
//           & q4=27213 &
//             q5=% EC % A0 % 84 % EB % A0 % A5
//               & q6=% EC % A0 % 84 % EB % A0 % A5