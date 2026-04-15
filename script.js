let apiKey = "0589dd736dba72c176dc6b796c15c903"; // 🔴 replace with your key

async function getWeather() {
    let city = document.getElementById("city").value;

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        console.log(data);

        if (data.cod === 200) {
            document.getElementById("city-name").innerText = data.name;
            document.getElementById("temp").innerText = data.main.temp + "°C";
            document.getElementById("weather").innerText = data.weather[0].main;
            document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
            document.getElementById("wind").innerText = "Wind: " + data.wind.speed + " km/h";
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Network error");
        console.log(error);
    }
}