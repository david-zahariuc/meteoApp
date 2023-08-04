import React, { useState } from 'react';
import SearchForm from '../searchForm/SearchForm';
import WeatherDisplay from '../weatherDisplay/WeatherDisplay';
import { fetchWeatherData } from '../../services/WeatherService';

const API_KEY = '98659dab928bf9c6a76a2205ff1b03ee';

const WeatherApp: React.FC = () => {
    const [weatherData, setWeatherData] = useState(null);

    const handleSearch = (city: string) => {
        fetchWeatherData(city)
            .then((data) => setWeatherData(data))
            .catch((error) => {
                console.error(error);
                setWeatherData(null);
            });
    };


    return (
        <div>
            <h1>Weather App</h1>
            <SearchForm onSearch={handleSearch} />
            <WeatherDisplay weatherData={weatherData} />
        </div>
    );
};

export default WeatherApp;
