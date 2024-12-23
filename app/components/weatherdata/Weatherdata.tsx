import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherDisplay from "../weatherdisplay/Weatherdisplay";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

interface WeatherDataProps {
  inputValue: string;
  weatherDate: WeatherData | null;
  setWeatherDate: React.Dispatch<React.SetStateAction<WeatherData | null>>;
}

const Weatherdata: React.FC<WeatherDataProps> = ({ inputValue, weatherDate, setWeatherDate }) => {
  const [debouncedInput, setDebouncedInput] = useState(inputValue);
  const api_Key = "11e38e2856fa6fddd1171692c9e6b1fd";

  // Fetch Tbilisi's weather immediately
  useEffect(() => {
    const fetchDefaultWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&units=metric&appid=${api_Key}`
        );
        setWeatherDate(response.data);
      } catch (error) {
        console.error("Error fetching default weather:", error);
      }
    };

    fetchDefaultWeather();
  }, [setWeatherDate]);

  // Handle debouncing input value
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInput(inputValue);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  // Fetch weather data for user input
  useEffect(() => {
    if (debouncedInput.trim() && debouncedInput.length >= 3) {
      const city = debouncedInput.trim();
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_Key}`;

      axios
        .get(url)
        .then((response) => setWeatherDate(response.data))
        .catch(() => setWeatherDate(null));
    }
  }, [debouncedInput, setWeatherDate]);

  if (!weatherDate) {
    return (
      <p className="bg-white bg-opacity-30 p-10 rounded-2xl text-blue-900 font-semibold">
        Loading weather data...
      </p>
    );
  }

  return <WeatherDisplay weatherDate={weatherDate} />;
};

export default Weatherdata;
