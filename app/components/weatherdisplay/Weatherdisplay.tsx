import React from "react";
import Wicon from "../weathericonupdate/Wicon";

// Define types for the weather data
interface WeatherData {
  name: string;
  weather: { main: string; description: string; icon: string }[];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

interface WeatherDisplayProps {
  weatherDate: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherDate }) => {
  return (
    <div className="flex flex-col gap-8 sm:max-w-[400px] w-full">
      <div className="flex items-center justify-center py-4 sm:p-4 sm:max-w-[400px] w-full bg-white bg-opacity-50 rounded-3xl">
        <div className="flex flex-col gap-4 text-blue-900 items-center">
          <h1 className="text-4xl font-bold">{weatherDate.name}</h1>
          <div className="flex items-center gap-6">
            <Wicon iconCode={weatherDate.weather[0].icon} />
            <h1 className="text-4xl font-bold">{weatherDate.main.temp}°C</h1>
          </div>
          <p className="text-4xl font-bold">{weatherDate.weather[0].description}</p>
        </div>
      </div>
      <div className="flex items-center px-8 py-3 justify-between bg-white bg-opacity-50 rounded-3xl sm:hidden">
        <div className="flex items-center gap-3">
          <img width={30} height={30} src="/images/feelslike.png" alt="Feels Like" />
          <h2 className="text-2xl text-blue-900 font-bold">Feels Like</h2>
        </div>
        <h1 className="text-2xl text-black font-bold">{weatherDate.main.feels_like}°C</h1>
      </div>
      <div className="flex items-center px-8 py-3 justify-between bg-white bg-opacity-30 rounded-3xl sm:hidden">
        <div className="flex items-center gap-3">
          <img width={30} height={30} src="/images/wind.png" alt="Wind" />
          <h2 className="text-2xl text-black font-bold">Wind</h2>
        </div>
        <h1 className="text-2xl text-black font-bold">{weatherDate.wind.speed} km/h</h1>
      </div>
      <div className="flex items-center px-8 py-3 justify-between bg-white bg-opacity-30 rounded-3xl sm:hidden">
        <div className="flex items-center gap-3">
          <img width={30} height={30} src="/images/humidity.png" alt="Humidity" />
          <h2 className="text-2xl text-black font-bold">Humidity</h2>
        </div>
        <h1 className="text-2xl text-black font-bold">{weatherDate.main.humidity}%</h1>
      </div>
    </div>
  );
};

export default WeatherDisplay;
