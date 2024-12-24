"use client";
import { useEffect, useState } from "react";
import Inputsearch from "./components/inputsearch/Inputsearch";
import Currentdate from "./components/date/Date";
import Weatherdata from "./components/weatherdata/Weatherdata";
interface WeatherData {
  name: string;
  main: {
    temp: number; // Temperature
    feels_like: number; // Feels like temperature
    humidity: number; // Humidity percentage
  };
  wind: {
    speed: number; // Wind speed
  };
  weather: {
    main: string;
    description: string; // Weather description
    icon: string; // Weather icon identifier
  }[];
}


export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [weatherDate, setWeatherDate] = useState<WeatherData | null>(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    if (weatherDate && weatherDate.weather && weatherDate.weather.length > 0) {
      // Safe to access weatherDate.weather[0].main now
      const weatherCondition = weatherDate.weather[0].main;
      switch (weatherCondition) {
        case "Rain":
          setBackgroundImage("url('/images/rainbg.jpg')");
          break;
        case "Clouds":
          setBackgroundImage("url('/images/cloudybg.jpg')");
          break;
        case "Snow":
          setBackgroundImage("url('/images/snowbg.jpg')");
          break;
        case "Clear":
          setBackgroundImage("url('/images/sunnybg.jpg')");
          break;
        // Add more conditions as needed
        default:
          setBackgroundImage("url('/path/to/default-bg.jpg')");
      }
    }
  }, [weatherDate]);
  

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
        {
          <Weatherdata
            inputValue={inputValue}
            weatherDate={weatherDate}
            setWeatherDate={setWeatherDate}
          />
        }
      </div>
    </div>
  </div>
  );
}




