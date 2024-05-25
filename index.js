// 096cec0f62991bf50404ef7a01cd627b


const form = document.querySelector('form');

const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';
// 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API_KEY}'


const API_KEY = '096cec0f62991bf50404ef7a01cd627b';

form.addEventListener('submit', submitHandler);

async function submitHandler(event){
  event.preventDefault();
  const city = event.target.city.value;
  // console.log(city)
  const url = `${API_BASE}?q=${city}&appid=${API_KEY}&units=metric&lang=ru`;
  const weaterData = await (await fetch(url)).json();
  // console.log(weaterData);
  clearWidget();
  const card = createWidget(weaterData,city);
  const root = document.querySelector('#root')
  root.append(card);

  
}

function clearWidget(){
  const section = document.querySelector('.weather');
  if (section) {
    section.remove();
  }
}

function createWidget(weatherObj,city){
  const cityN= crElement ('h1', {},'Город: ', getTranclate(city));
  const description= crElement ('h2', {},'Облачность: ', weatherObj.weather[0].description );
  const temp = crElement ('p',{},'Температура: ', weatherObj.main.temp );
  const wind = crElement ('p', {}, 'Скорость ветра: ', weatherObj.wind.speed);
  const widgetCard = crElement ('section', {classNames:['weather']},cityN,description,temp,wind);
  return widgetCard;

}

function crElement(type,{classNames=[]}, ...children){
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...children);
  return elem;
}

function getTranclate(city){
  const cityName = {
    'Kharkiv': 'Харьков',
    'Kyiv': 'Киев',
    'Lviv': 'Львов',
    'Zaporizhzhia' :'Запорожье',
    'Dnipro' : 'Днепро',
  }
  return cityName[city];
}