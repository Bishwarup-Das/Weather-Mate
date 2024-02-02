const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b881dbda6fmsh1e95f0686acabeap16f38fjsn592f0e17eec0',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function getCityName() {
    if ("geolocation" in navigator) {
        try {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=1a6ecf5191b84eacb74270a96c47a8f3&q=${lat}+${lon}&language=en&pretty=1`);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                // Extract the city name
                const city = data.results[0].components.city || data.results[0].components.town || data.results[0].components.village;
                return city;
            } else {
                // Handle no results
                throw new Error("Location information not available");
            }
        } catch (error) {
            console.error("Error fetching location:", error);
            throw new Error("Error fetching location");
        }
    } else {
        // Geolocation not supported
        throw new Error("Geolocation not supported");
    }
}


const getWeather = (city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) => {
            

            cityName.innerHTML ="Weather of "+city

            function timstamp(time){
                let unix_timestamp = time
                var date = new Date(unix_timestamp * 1000);
                var hours = date.getHours();
                var minutes = "0" + date.getMinutes();
                var seconds = "0" + date.getSeconds();
                var firstDigit = Math.floor(seconds / 10);
                var formattedTime = hours + ':' + minutes.substring(-2,2) + ':' + seconds.substring(-2,2);

                return formattedTime;
            }


            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = timstamp(response.sunrise)
            sunset.innerHTML = timstamp(response.sunset)


            if(Math.trunc(response.wind_speed)<=20){
                document.getElementById("colorBorder").className="card mb-4 rounded-3 shadow-sm border-primary"
                document.getElementById("colorCard").className="card-header py-3 text-bg-primary border-primary"
            }
            else if(Math.trunc(response.wind_speed)<=40){
                document.getElementById("colorBorder").className="card mb-4 rounded-3 shadow-sm border-danger"
                document.getElementById("colorCard").className="card-header py-3 text-bg-danger border-danger"
            }
            else if(Math.trunc(response.wind_speed)<=70){
                document.getElementById("colorBorder").className="card mb-4 rounded-3 shadow-sm border-success"
                document.getElementById("colorCard").className="card-header py-3 text-bg-success border-success"
            }
            else{
                document.getElementById("colorBorder").className="card mb-4 rounded-3 shadow-sm border-warning"
                document.getElementById("colorCard").className="card-header py-3 text-bg-warning border-warning"
            }
        })
        .catch(err => console.error(err));
}



//Search Box

const myButton = document.getElementById("submit");
myButton.addEventListener("click", function(event) {
    event.preventDefault();
    var value = document.getElementById("city").value
    if(value==""){
        alert("Enter City you want to search....")
        return false;
    }
    getWeather((value).charAt(0).toUpperCase() + (value).slice(1))
    document.getElementById("city").value = ""
});



async function main() {
    try {
        const city = await getCityName();
        getWeather(city);
    } catch (error) {
        console.error(error.message);
    }
}



//Nav--Buttons

var homeButton = document.getElementById("home");
if (homeButton) {
  homeButton.addEventListener("click", function(event) {
    event.preventDefault()
    window.location.href = "/";
  });
}

var aboutButton = document.getElementById("about");
if (aboutButton) {
  aboutButton.addEventListener("click", function(event) {
    event.preventDefault()
    window.location.href = "About.html";
  });
}

var guideButton = document.getElementById("guide");
if (guideButton) {
  guideButton.addEventListener("click", function(event) {
    event.preventDefault()
    window.location.href = "Guide.html";
  });
}

var brandButton = document.getElementById("brand");
if (brandButton) {
  brandButton.addEventListener("click", function(event) {
    event.preventDefault()
    window.location.href = "/";
  });
}

var joinButton = document.getElementById("button");
if (joinButton) {
  joinButton.addEventListener("click", function(event) {
    event.preventDefault()
    window.location.href = "Form.html";
  });
}



//Time

function Timestamp(time){
    let unix_timestamp = time
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var firstDigit = Math.floor(seconds / 10);
    var formattedTime = hours + ':' + minutes.substring(-2,2) + ':' + seconds.substring(-2,2);

    return formattedTime;
}



Delhi
const getWeather1 = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
        .then(response => response.json())
        .then((response) => {
           


            cloud_pct1.innerHTML = response.cloud_pct
            temp1.innerHTML = response.temp
            feels_like1.innerHTML = response.feels_like
            humidity1.innerHTML = response.humidity
            min_temp1.innerHTML = response.min_temp
            max_temp1.innerHTML = response.max_temp
            wind_speed1.innerHTML = response.wind_speed
            wind_degrees1.innerHTML = response.wind_degrees
            sunrise1.innerHTML = Timestamp(response.sunrise)
            sunset1.innerHTML = Timestamp(response.sunset)

            if(Math.trunc(response.wind_speed)<=20){
                document.getElementById("wind_speed11").className="text-primary"
            }
            else if(Math.trunc(response.wind_speed)<=40){
                document.getElementById("wind_speed11").className="text-danger"
            }
            else if(Math.trunc(response.wind_speed)<=70){
                document.getElementById("wind_speed11").className="text-success"
            }
            else{
                document.getElementById("wind_speed11").className="text-warning"
            }
        })
        .catch(err => console.error(err));
}
getWeather1()

//Kolkata
const getWeather2 = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
        .then(response => response.json())
        .then((response) => {
            if(response.cloud_pct=="null"){
                return false;
            }


            cloud_pct2.innerHTML = response.cloud_pct
            temp2.innerHTML = response.temp
            feels_like2.innerHTML = response.feels_like
            humidity2.innerHTML = response.humidity
            min_temp2.innerHTML = response.min_temp
            max_temp2.innerHTML = response.max_temp
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees2.innerHTML = response.wind_degrees
            sunrise2.innerHTML = Timestamp(response.sunrise)
            sunset2.innerHTML = Timestamp(response.sunset)

            if(Math.trunc(response.wind_speed)<=20){
                document.getElementById("wind_speed21").className="text-primary"
            }
            else if(Math.trunc(response.wind_speed)<=40){
                document.getElementById("wind_speed21").className="text-danger"
            }
            else if(Math.trunc(response.wind_speed)<=70){
                document.getElementById("wind_speed21").className="text-success"
            }
            else{
                document.getElementById("wind_speed21").className="text-warning"
            }
        })
        .catch(err => console.error(err));
}
getWeather2()

//Mumbai
const getWeather3 = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
        .then(response => response.json())
        .then((response) => {
            if(response.cloud_pct=="null"){
                return false;
            }


            cloud_pct3.innerHTML = response.cloud_pct
            temp3.innerHTML = response.temp
            feels_like3.innerHTML = response.feels_like
            humidity3.innerHTML = response.humidity
            min_temp3.innerHTML = response.min_temp
            max_temp3.innerHTML = response.max_temp
            wind_speed3.innerHTML = response.wind_speed
            wind_degrees3.innerHTML = response.wind_degrees
            sunrise3.innerHTML = Timestamp(response.sunrise)
            sunset3.innerHTML = Timestamp(response.sunset)

            if(Math.trunc(response.wind_speed)<=20){
                document.getElementById("wind_speed31").className="text-primary"
            }
            else if(Math.trunc(response.wind_speed)<=40){
                document.getElementById("wind_speed31").className="text-danger"
            }
            else if(Math.trunc(response.wind_speed)<=70){
                document.getElementById("wind_speed31").className="text-success"
            }
            else{
                document.getElementById("wind_speed31").className="text-warning"
            }
        })
        .catch(err => console.error(err));
}
getWeather3()

//Chennai
const getWeather4 = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
        .then(response => response.json())
        .then((response) => {
            if(response.cloud_pct=="null"){
                return false;
            }


            cloud_pct4.innerHTML = response.cloud_pct
            temp4.innerHTML = response.temp
            feels_like4.innerHTML = response.feels_like
            humidity4.innerHTML = response.humidity
            min_temp4.innerHTML = response.min_temp
            max_temp4.innerHTML = response.max_temp
            wind_speed4.innerHTML = response.wind_speed
            wind_degrees4.innerHTML = response.wind_degrees
            sunrise4.innerHTML = Timestamp(response.sunrise)
            sunset4.innerHTML = Timestamp(response.sunset)

            if(Math.trunc(response.wind_speed)<=20){
                document.getElementById("wind_speed41").className="text-primary"
            }
            else if(Math.trunc(response.wind_speed)<=40){
                document.getElementById("wind_speed41").className="text-danger"
            }
            else if(Math.trunc(response.wind_speed)<=70){
                document.getElementById("wind_speed41").className="text-success"
            }
            else{
                document.getElementById("wind_speed41").className="text-warning"
            }
        })
        .catch(err => console.error(err));
}
getWeather4()

//Hyderabad
const getWeather5 = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
        .then(response => response.json())
        .then((response) => {
            if(response.cloud_pct=="null"){
                return false;
            }


            cloud_pct5.innerHTML = response.cloud_pct
            temp5.innerHTML = response.temp
            feels_like5.innerHTML = response.feels_like
            humidity5.innerHTML = response.humidity
            min_temp5.innerHTML = response.min_temp
            max_temp5.innerHTML = response.max_temp
            wind_speed5.innerHTML = response.wind_speed
            wind_degrees5.innerHTML = response.wind_degrees
            sunrise5.innerHTML = Timestamp(response.sunrise)
            sunset5.innerHTML = Timestamp(response.sunset)

            if(Math.trunc(response.wind_speed)<=20){
                document.getElementById("wind_speed51").className="text-primary"
            }
            else if(Math.trunc(response.wind_speed)<=40){
                document.getElementById("wind_speed51").className="text-danger"
            }
            else if(Math.trunc(response.wind_speed)<=70){
                document.getElementById("wind_speed51").className="text-success"
            }
            else{
                document.getElementById("wind_speed51").className="text-warning"
            }
        })
        .catch(err => console.error(err));
}
getWeather5()

//Bengaluru
const getWeather6 = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru', options)
        .then(response => response.json())
        .then((response) => {
            if(response.cloud_pct=="null"){
                return false;
            }


            cloud_pct6.innerHTML = response.cloud_pct
            temp6.innerHTML = response.temp
            feels_like6.innerHTML = response.feels_like
            humidity6.innerHTML = response.humidity
            min_temp6.innerHTML = response.min_temp
            max_temp6.innerHTML = response.max_temp
            wind_speed6.innerHTML = response.wind_speed
            wind_degrees6.innerHTML = response.wind_degrees
            sunrise6.innerHTML = Timestamp(response.sunrise)
            sunset6.innerHTML = Timestamp(response.sunset)

            if(Math.trunc(response.wind_speed)<=20){
                document.getElementById("wind_speed61").className="text-primary"
            }
            else if(Math.trunc(response.wind_speed)<=40){
                document.getElementById("wind_speed61").className="text-danger"
            }
            else if(Math.trunc(response.wind_speed)<=70){
                document.getElementById("wind_speed61").className="text-success"
            }
            else{
                document.getElementById("wind_speed61").className="text-warning"
            }
        })
        .catch(err => console.error(err));
}
getWeather6()
