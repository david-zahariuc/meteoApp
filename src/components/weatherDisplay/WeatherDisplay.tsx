import React from 'react';
import { WeatherDisplayProps } from '../../props/WeatherDisplayProps';
import { WeatherData } from '../../models/weatherData/WeatherData';



const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
    if (!weatherData) {
      return null;
    }
  
    const { name, main, weather } = weatherData as WeatherData;
  
    return (
      <div>
        <h2>{name}</h2>
        <p>Temperature: {main.temp}°C</p>
        <p>Description: {weather[0].description}</p>
      </div>
    );
  };
export default WeatherDisplay;
