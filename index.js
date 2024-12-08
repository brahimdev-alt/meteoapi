

const getweather =async()=> {
const city = document.getElementById('city').value;
const url = ("https://api.openweathermap.org/data/2.5/weather?q=alger&units=metric&appid=19ba8ab464ff4579d588462c639c781e");
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=19ba8ab464ff4579d588462c639c781e`);
const data = await response.json();
 document.getElementById('resulte').innerHTML.value;


}
document.getElementById('getWeather').addEventListener(click , getWeather);
 

async function getWeather() {
    const city = document.getElementById('alger').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            document.getElementById('weather-info').innerHTML = `
                <h2>${data.name}</h2>
                <p>Température : ${data.main.temp}°C</p>
                <p>Description : ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById('weather-info').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p>Une erreur s'est produite. Veuillez réessayer plus tard.</p>`;
        console.error('Erreur:', error);
    }
}
