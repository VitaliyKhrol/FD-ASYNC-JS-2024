

const resultofRequest = fetch('./data.json');

resultofRequest
  .then((responce) => {
    return responce.json();
  })
  .then((result) => {
    console.log(result)
    const card = createUserCard(result);
    console.log(card);
   const root =document.querySelector('#root');
   root.append(card);
  })
  .catch((reject) => {
    console.log(reject)
  })


  function createUserCard(user){
    const h2 = crElement('h2', {classNames: ['username']}, user.firstName,user.lastName);
    const p = crElement('p',{}, user.telNum);
    const div = crElement('div',{classNames:['card-wrapper']}, h2, p);
    return div;
    
  }


  function crElement(type,{classNames=[]}, ...children){
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);
    return elem;
}