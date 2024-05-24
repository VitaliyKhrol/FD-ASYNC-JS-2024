

const resultofRequest = fetch('https://dummyjson.com/products');
const root =document.querySelector('#root');
const spinner = document.createElement('div');
spinner.classList.add('loader');
root.append(spinner);



resultofRequest
  .then((responce) => {
  const arr = responce.json()
    return arr;
  })
  .then((result) => {
    console.log(result)
    const productArray = result.products.map((user)=>createProductCard(user));
    console.log(productArray);
     root.append(...productArray);
  })
  .catch((reject) => {
    console.log(reject)
  })
  .finally(()=>{
    spinner.remove();
  })


  function createProductCard(product){

    const h2 = crElement('h2', {classNames: ['username']}, product.title, product.category);
    const img = document.createElement('img');
    img.setAttribute('src', product.images[0] )
  
    img.classList.add('avatar');
    const p = crElement('p',{}, product.price);
    const div = crElement('div',{classNames:['card-wrapper']}, h2,img, p);
    return div;
  }


  function crElement(type,{classNames=[]}, ...children){
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);
    return elem;
}





