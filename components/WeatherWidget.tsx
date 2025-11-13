import React, { useEffect } from 'react'
import { useState } from 'react'



const WeatherWidget = () => {
    const [coords, setCoords] = useState <{
        latitude: number | null,
        longitude: number | null
    }>
    
    ({
        latitude: null,
        longitude: null
    })

    const [weatherData, setWeatherData] = useState <{
        city: string;
        temperature: number;
        condition: string;
    } | null> (null);
    

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            setCoords({latitude: lat, longitude: lon})
        }
        )
    }, []);

    useEffect(() => {
        if (coords.latitude !== null && coords.longitude !== null) {
            const fetchWeather = async () => {
                const apiKey = process.env.NEXT_PUBLIC_PORTFOLIO_WEATHER_API_KEY;
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=metric`;
                const res = await fetch(url);
                const data = await res.json();
                
                setWeatherData({
                city: data.name,
                temperature: data.main.temp,
                condition: data.weather[0].description,
            });
                console.log(data);
            };

            fetchWeather();
        }

        
    }, [coords]);

  return (
    <div>
       {!weatherData ?
       (<p>Weather loading...</p>) :
       (<div className="flex items-center space-x-4">
        <p>{weatherData.city}</p>
        <p>{weatherData.temperature}C°</p>
        <p>{weatherData.condition}</p>
       </div>)
    }
    </div>
  )
}

export default WeatherWidget