

const resultofRequest = fetch('./data.json');
console.log(resultofRequest);

resultofRequest.then((responce)=>{
  return responce.json()})
  .then ((result)=>{
    console.log(result)
  })
  .catch((data)=>{
    console.log(data)
  })

