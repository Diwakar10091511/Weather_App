function fetchDetails()
{
    var cgiven=document.getElementById("cityDetail").value;
    // var cougiven=document.getElementById("countryDetail").value;
    localStorage.setItem("cityD",cgiven);
    // localStorage.setItem("countryD",cougiven);
    if (cgiven=="") {
        alert("Please enter your city name");
    } else {
     location.href="index2.html";    
    }
   
}