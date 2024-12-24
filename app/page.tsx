"use client";
import { useEffect, useState } from "react";
import Inputsearch from "./components/inputsearch/Inputsearch";
import Currentdate from "./components/date/Date";
import Weatherdata from "./components/weatherdata/Weatherdata";

// Define the corrected types for WeatherData
interface WeatherData {
  name: string; // City name
  weather: { main: string; description: string; icon: string }[]; // Weather condition, description, and icon
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  wind: {
    speed: number;
  };
}

export default function Home() {
  const [inputValue, setInputValue] = useState<string>(""); // State for search input
  const [weatherDate, setWeatherDate] = useState<WeatherData | null>(null); // State for weather data
  const [backgroundImage, setBackgroundImage] = useState<string>(""); // State for background image

  useEffect(() => {
    const images = [
      '/images/rainbg.jpg',
      '/images/cloudybg.jpg',
      '/images/mistbg.jpg',
      '/images/snowbg.jpg',
      '/images/sunnybg.jpg',
      '/images/defaultbg.jpg'
    ];
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  useEffect(() => {
    if (weatherDate && weatherDate.weather && weatherDate.weather.length > 0) {
      const weatherCondition = weatherDate.weather[0].main;
  
      if (weatherCondition === "Rain") {
        setBackgroundImage("url('/images/rainbg.jpg')");
      } else if (weatherCondition === "Clouds") {
        setBackgroundImage("url('/images/cloudybg.jpg')");
      } else if (weatherCondition === "Mist") {
        setBackgroundImage("url('/images/mistbg.jpg')");
      } else if (weatherCondition === "Snow") {
        setBackgroundImage("url('/images/snowbg.jpg')");
      } else if (weatherCondition === "Clear") {
        setBackgroundImage("url('/images/sunnybg.jpg')");
      } else {
        setBackgroundImage("url('/images/defaultbg.jpg')");
      }
    }
  }, [weatherDate]); // Depend on weatherDate to update background

  return (
    <div
      className="flex sm:flex-col px-6 sm:px-0 sm:gap-10 sm:items-center justify-center
                 h-screen bg-no-repeat bg-cover bg-center overflow-y-auto"
      style={{ backgroundImage }}
    >
      <div className="flex items-center flex-col gap-4 max-w-[500px] h-[350px] w-full">
        <div className="flex items-center flex-col gap-4 max-w-[500px] h-[400px] w-full">
          <Inputsearch inputValue={inputValue} setInputValue={setInputValue} />
          <Currentdate />
          {/* Pass weatherDate prop to Weatherdata */}
          <Weatherdata
            inputValue={inputValue}
            weatherDate={weatherDate}
            setWeatherDate={setWeatherDate}
          />
        </div>
      </div>
    </div>
  );
}
