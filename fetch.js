fetch('https://api.thedogapi.com/v1/breeds')
  .then(response => response.json())
  .then( async data => {
    // 전체 데이터
   // console.log(data);
    
    // name에만 해당하는 값 출력
    const name = data.map(item => item.name);
    //console.log(name);
    // id와 name에만 해당하는 값 출력
    const idAndName = data.map(item => ({ id : item.id, name : item.name }));
    //console.log(idAndName);

    // 이미지 id로 이미지 url 받아오기
    let images = [];

    // for ~of를 이용해 데이터를 하나씩 받아오는 방법.  \/

    // for(const item of data){
    //   const result = {
    //     id : item.id,
    //     name : item.name,
    //     image_url : await getImageFromImageId(item.reference_image_id)
    //   }
    //   console.log(result);
    //   images.push(result);
    // }

    // Promise.all을 통해 여러개의 요청을 한번에 처리할 수 있습니다.
    const promises = data.map(item => new Promise((resolve, reject) => { 
      getImageFromImageId(item.reference_image_id)
        .then((image_url) => {
          resolve({
            id: item.id,     // 현재 강아지 종의 ID를 결과 객체에 추가합니다.
            name: item.name, // 현재 강아지 종의 이름을 결과 객체에 추가합니다.
            // 강아지 종의 이미지 URL을 가져오는 getImageFromImageId 함수를 호출하고, 해당 URL을 결과 객체에 추가합니다.
            // getImageFromImageId 함수는 강아지 종의 reference_image_id를 사용하여 이미지 정보를 가져옵니다.
            image_url: image_url  
          })
        })
    }))
    return Promise.all(promises); // 비동기로 여러개가 한번에 실행되서 promise가 반환됨
    // Promise.all 
  })
  // Promise.all 에서 반환된 값을 array로 반환
  .then((dogs) => {
    console.log(dogs); // images 배열을 출력하여 이미지 정보를 확인합니다.
  })
  .catch(error => {
    // 요청 중에 오류가 발생하면 여기에서 처리합니다.
    console.error('Fetch 요청 중 오류 발생:', error);
  });

 // 각 강아지 종의 이미지 주소를 가져오는 함수
async function getImageFromImageId(referenceImageId) {
  try {
    // 강아지 종의 이미지 정보를 가져옵니다.
    const breedImageResponse = await fetch(`https://api.thedogapi.com/v1/images/${referenceImageId}`);
    const breedImageData = await breedImageResponse.json();

    // 강아지 종의 정보와 이미지 URL을 반환합니다.
    return breedImageData.url;
  } catch (error) {
    // 오류가 발생하면 콘솔에 오류 메시지를 출력합니다.
    console.error('오류 발생:', error);
    return null;
  }
}
