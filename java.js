function updateTime(){



let losangelesElement= document.querySelector("#los-angeles");

let losAngelesDateElement= losangelesElement.querySelector(".date");
if (losangelesElement){

let losAngelesTimeElement= losangelesElement.querySelector(".time");

let losAngelesTime= moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM D, YYYY h:m A");
losAngelesTimeElement.innerHTML = losAngelesTime.format ("h:mm:ss [<small>] A [</small>]");
}
let parisElement= document.querySelector("#paris");
if (losangelesElement){

let parisDateElement= parisElement.querySelector(".date");

let parisTimeElement= parisElement.querySelector(".time");

let parisTime= moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("dddd, MMMM D, YYYY h:m A");
parisTimeElement.innerHTML = parisTime.format ("h:mm:ss [<small>] A [</small>]");

}}

function updateCity(event){
    let cityTimeZone= event.target.value;
    if(cityTimeZone === "current"){
  cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_"," ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}<small>
    </div>
    </div> <a href="/">All cities</a>`;
    
    }
(updateTime); setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);


