const apiKey = "d77776cb625f28f3643d2ea1b784bc46";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector(".invalid").style.display = "block"
    document.querySelector(".weather").style.display = "none"
  }
  else{
     document.querySelector(".invalid").style.display = "none"
    var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "Assets/clouds.png ";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "Assets/clear.png ";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "Assets/rain.png ";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "Assets/drizzle.png ";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "Assets/mist.png ";
  }

  document.querySelector(".weather").style.display = "block"
  }
  
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
