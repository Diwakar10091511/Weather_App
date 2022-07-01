let cName=document.getElementById("cityName");
let couName=document.getElementById("countryName");
let temp=document.getElementById("temperature");
let minTemp=document.getElementById("minTemperature");
let maxTemp=document.getElementById("maxTemperature");
// let cGiven;
// let couGiven;
function fetchDetails()
{
    var cgiven=document.getElementById("cityDetail").value;
    var cougiven=document.getElementById("countryDetail").value;
    
    // document.getElementsByClassName("form1").action="index2.html";
    window.open('index2.html',"_black");
}
// cName.value=cgiven;
let date=new Date();
let formatDate=date.toLocaleString(date);
document.getElementById("sideHeading").innerHTML=formatDate;