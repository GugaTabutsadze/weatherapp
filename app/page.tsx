"use client";
import { useState } from "react";
import Inputsearch from "./components/inputsearch/Inputsearch";
import Currentdate from "./components/date/Date";
import Weatherdata from "./components/weatherdata/Weatherdata";
interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}


export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [weatherDate, setWeatherDate] = useState<WeatherData | null>(null);

  return (
    <div
    className="flex sm:flex-col px-6 sm:px-0 sm:gap-10 sm:items-center justify-center
               h-screen bg-no-repeat bg-cover bg-center bg-mobileBgImage overflow-y-auto sm:bg-backgroundImage"
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




