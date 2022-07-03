
const http=require("http");
const fs=require("fs");
const requests=require("requests");

const server=http.createServer((req,res)=>
{
    if(req.url=="/")
    {
        requests(
            "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ac731293d11478fe443d41ecac1c4b4b")
            
        .on("data",(chunk)=>
        {
            let objData=JSON.parse(chunk);
            console.log(objData);
        })

        .on("end",(err)=>
        {
            if(err)
            console.log(err)
        });
    }
});

server.listen(8000,"127.0.0.1");





// let cName=document.getElementById("cityName");
// let couName=document.getElementById("countryName");
// let temp=document.getElementById("temperature");
// let minTemp=document.getElementById("minTemperature");
// let maxTemp=document.getElementById("maxTemperature");
// let cGiven;
// let couGiven;
// cName.value=localStorage.getItem("cityD");
// couName.value=localStorage.getItem("countryD");

// setInterval(()=>
// {
//     let date=new Date();
//     let formatDate=date.toLocaleString(date);
//     document.getElementById("sideHeading").innerHTML=formatDate;
// },1000);