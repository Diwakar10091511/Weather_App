function fetchDetails()
{
    var cgiven=document.getElementById("cityDetail").value;
    // var cougiven=document.getElementById("countryDetail").value;
    localStorage.setItem("cityD",cgiven);
    // localStorage.setItem("countryD",cougiven);
    location.href="index2.html";
}