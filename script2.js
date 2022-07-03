let cName=document.getElementById("cityName");
let couName=document.getElementById("countryName");
let temp=document.getElementById("temperature");
let minTemp=document.getElementById("minTemperature");
let maxTemp=document.getElementById("maxTemperature");
// let cGiven;
// let couGiven;
cName.value=localStorage.getItem("cityD");
couName.value=localStorage.getItem("countryD");
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cName.value},In&APPID=ac731293d11478fe443d41ecac1c4b4b`)
    .then((response)=>
    {
        return response.json;
    })
    .then((data)=>
    {
        let author=data;
        console.log(author);
    })

setInterval(()=>
{
    let date=new Date();
    let formatDate=date.toLocaleString(date);
    document.getElementById("sideHeading").innerHTML=formatDate;
},1000);