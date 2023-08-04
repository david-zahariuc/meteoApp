
const API_KEY = '98659dab928bf9c6a76a2205ff1b03ee';

export const fetchWeatherData = (city: string): Promise<any> => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .catch((error)=>console.error(error))
  };