"use client";
import React from 'react';

const Wicon = ({ iconCode }: { iconCode: string }) => {
  // Mapping OpenWeather icon codes to your custom images
  const iconMap: { [key: string]: string } = {
    '01d': '/images/sun.png',     // Clear sky (day)
    '01n': '/images/sun.png',     // Clear sky (night)
    '02d': '/images/partycloudy.png',   // Few clouds (day)
    '02n': '/images/partycloudy.png',   // Few clouds (night)
    '03d': '/images/cloud.png',   // Scattered clouds
    '03n': '/images/cloud.png',   // Scattered clouds (night)
    '04d': '/images/cloud.png',   // Broken clouds
    '04n': '/images/cloud.png',   // Broken clouds (night)
    '09d': '/images/storm.png',    // Shower rain (day)
    '09n': '/images/storm.png',    // Shower rain (night)
    '10d': '/images/rain.png',    // Rain (day)
    '10n': '/images/rain.png',    // Rain (night)
    '11d': '/images/storm.png', // Thunderstorm (day)
    '11n': '/images/storm.png', // Thunderstorm (night)
    '13d': '/images/snow.png',    // Snow (day)
    '13n': '/images/snow.png',    // Snow (night)
    '50d': '/images/mist.png',    // Mist (day)
    '50n': '/images/mist.png'     // Mist (night)
  };

  // Get the icon URL based on the icon code, fallback to sun if not found
  const iconUrl = iconMap[iconCode];

  return <img width={100} height={100} src={iconUrl} alt="weather icon" />;
};

export default Wicon;

