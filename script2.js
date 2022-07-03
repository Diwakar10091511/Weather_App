
// const http=require("http");
// const fs=require("fs");
// const requests=require("requests");


// // localStorage.setItem("cityD","satna");
// // var city=localStorage.getItem("cityD","satna");



// // const server=http.createServer((req,res)=>
// // {
// if(req.url=="/")
// {
//     requests(
//         `https://api.openweathermap.org/data/2.5/weather?q=Satna,In&APPID=ac731293d11478fe443d41ecac1c4b4b`)
        
//     .on("data",(chunk)=>
//     {
//         let objData=JSON.parse(chunk);
//         let arrData=[objData];
//         console.log(`${Math.round((arrData[0].main.temp-273.00)*100)/100}`);
//     })

//     .on("end",(err)=>
//     {
//         if(err)
//         console.log(err)
//     });
// }
// //     }
// //     let mainData=fs.readFileSync("index.html","utf-8");
// //     // console.log(mainData);
// //     res.write(mainData);
// //     res.end();

// // });

// // server.listen(8000,"127.0.0.1");





let cName=document.getElementById("cityName");
let couName=document.getElementById("countryName");
// let temp=document.getElementById("temperature");
// let minTemp=document.getElementById("minTemperature");
// let maxTemp=document.getElementById("maxTemperature");
cName.value=localStorage.getItem("cityD");
couName.value=localStorage.getItem("countryD");
setInterval(()=>
{
    let date=new Date();
    let formatDate=date.toLocaleString(date);
    document.getElementById("sideHeading").innerHTML=formatDate;
},1000);