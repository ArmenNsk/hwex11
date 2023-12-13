
    async function getWeather(){
        let mydiv = document.getElementById('w');
try {
    let city = document.getElementById('zipcode').value; 
    let key = 'd72729578543cfc435344f99b226b1c9' ;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    await fetch(url)
        .then(weather => {return weather.json()})
        .then(displayData);
}

catch {
    console.log("sorry somthing went wrong");
    }
}
function displayData(weather){
 let mydiv = document.getElementById("w"); 
 console.log(weather);

 let tempFar = (((weather.main.temp)*9/5) +32).toFixed(2)

 let temp = "Temperature: " + tempFar + "F"
 let mintemp = 'Min Temp: '+weather.main.temp_min + 'C';
 let maxtemp= 'Max Temp: '+weather.main.temp_max + 'C';
let weaStr= 'looks like: '+weather.weather[0].description;

 mydiv.innerHTML = `<h3> ${temp} <br> ${mintemp} <br> ${maxtemp}> </h3> <br> <h4> ${weaStr} </h4>`

}