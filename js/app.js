const API_KEY = `b277df013003beecd543acb90ddda210
`;
const showTemperature = () => {
    const cityNamefield = document.getElementById('city-name-field');
    const cityNameText = cityNamefield.value;
    cityNamefield.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameText}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
}

const innerTxt = (id, data) => {
    const txt = document.getElementById(id).innerText = data;
}
const displayWeather = data => {
    console.log(data);
    innerTxt('city-name', data.name);
    innerTxt('temp', data.main.temp);
    innerTxt('status', data.weather[0].main);
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgId = document.getElementById('icon');
    imgId.setAttribute('src', iconUrl);

}