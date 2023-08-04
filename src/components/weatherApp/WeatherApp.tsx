import React, { useState } from 'react';
import SearchForm from '../searchForm/SearchForm';
import WeatherDisplay from '../weatherDisplay/WeatherDisplay';
import { fetchWeatherData } from '../../services/WeatherService';

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
