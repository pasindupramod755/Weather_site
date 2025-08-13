AOS.init();
console.log("pasd");

let searchCity=document.getElementById("txtSearch");

searchCity.addEventListener("keypress",e=>{
    if(e.key=='Enter'){
        console.log(searchCity.value);
       let city =  searchCity.value;
       callApi(city);
    }
}) 


async function callApi(city) {
    fetch("http://api.weatherapi.com/v1/current.json?key=cf6369e203f546f896c70145251308&q="+city+"&aqi=no")
        .then(responce => responce.json())
        .then(data => {
            setData(data);
        })  
}


function setData(data){
    document.getElementById("city-Name").innerText = data.location.name;
    document.getElementById("status-img").src = data.current.condition.icon;
    document.getElementById("contry").innerText = data.location.region+", "+data.location.country
    document.getElementById("celcious").innerText = data.current.temp_c + "°C";
}








