input=document.getElementById('inputfield');
btn=document.querySelector('#btn');
city=document.querySelector('#city');
temp=document.querySelector('#celsius');
wind=document.querySelector('#windspeed');
fetcher=document.querySelector('.apifields');

async function handleTemperature(){
    var response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=4c71d9d0da5dcf3b33ce2c631c33f61f&units=metric`);
    var data= await response.json();
    console.log(data);
    fetcher.style.display = 'block';
    city.innerHTML=`your city is : ${data.name}`;
    temp.innerHTML=`temperature :${data.main.temp}degrees`;
    wind.innerHTML=`wind speed :${data.wind.speed}km/hr`;


}
btn.addEventListener('click', handleTemperature);
input.addEventListener('onkeydown', handleTemperature);

