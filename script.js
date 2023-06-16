 
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3040e13c7fmsha9dfc68df7f6163p18883cjsn68d5675a7ec6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    },contentType: 'application/json'
};
// async function getWeather(){
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//         temp.innerHTML = response.temp;
//         min_temp.innerHTML = response.min_temp;
//         max_temp.innerHTML = response.max_temp;
//     } catch (error) {
//         console.error(error);
//     }
// }

//getWeather();

function myFunction() {
    document.getElementById("myDIV").style.backgroundImage = "url(hotday.jpg)";
    
 }

const searchWeather = (city) => {

    cityName.innerHTML = city;
    const d = new Date();
    let time = d.getTime();
    var date3 = new Date(time);

    timeup.innerHTML = date3.toLocaleTimeString("en-US");

    myFunction();


    fetch(url+city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        temp.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        cloud_pct.innerHTML = response.cloud_pct;
        wind_degrees.innerHTML = response.wind_degrees;
        humidity.innerHTML = response.humidity;
        wind_speed.innerHTML = response.wind_speed;

        var unixTimestamp1 = response.sunrise;
        var unixTimestamp2 = response.sunset;

        var date1 = new Date(unixTimestamp1 * 1000);
        var date2 = new Date(unixTimestamp2 * 1000);

        sunrise.innerHTML = date1.toLocaleTimeString("en-US");
        sunset.innerHTML = date2.toLocaleTimeString("en-US");


    })
    .catch(err => console.error(err));

    //For Delhi
    fetch(url+'Delhi', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        tempD.innerHTML = response.temp;
        min_tempD.innerHTML = response.min_temp;
        max_tempD.innerHTML = response.max_temp;
    })
    .catch(err => console.error(err));

    //For Mumbai
    fetch(url+'Mumbai', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        tempM.innerHTML = response.temp;
        min_tempM.innerHTML = response.min_temp;
        max_tempM.innerHTML = response.max_temp;
    })
    .catch(err => console.error(err));

    //For Kolkalta
    fetch(url+'Kolkata', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        tempK.innerHTML = response.temp;
        min_tempK.innerHTML = response.min_temp;
        max_tempK.innerHTML = response.max_temp;
    })
    .catch(err => console.error(err));

    //For Chennai
    fetch(url+'Chennai', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        tempC.innerHTML = response.temp;
        min_tempC.innerHTML = response.min_temp;
        max_tempC.innerHTML = response.max_temp;
    })
    .catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    searchWeather(city.value);
})

searchWeather("Sambalpur");

