let cName=document.getElementById("cityName");
let couName=document.getElementById("countryName");
let temp=document.getElementById("temperature");
let weatherCond=document.getElementById("weatherCond");
let humidity=document.getElementById("humidity");
let capitalise=localStorage.getItem("cityD");
let cap=capitalise.charAt(0).toUpperCase();
capitalise=capitalise.substr(1);
capitalise=cap+capitalise;
cName.value=capitalise;
couName.value="India";
setInterval(()=>
{
    let date=new Date();
    let formatDate=date.toLocaleString(date);
    document.getElementById("sideHeading").innerHTML=formatDate;
},1000);

let body=document.querySelector('body');
const writeitup=()=>
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cName.value},In&APPID=ac731293d11478fe443d41ecac1c4b4b`)
    .then((res)=> res.json())
    .then((data)=>
    {
        // console.log(data);
        let temperatureValue=data.main.temp;
        temperatureValue=Math.round(temperatureValue-273);
        temp.value=temperatureValue;
        weatherCond.value=data.weather[0].main;
        humidity.value=data.main.humidity;

    })
    .catch((err)=> 
    {
        
        alert("No data Found");
        // console.log("there is an error"+err)
    });
}


body.addEventListener('load',writeitup());
//8