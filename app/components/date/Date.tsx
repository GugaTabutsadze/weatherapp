import React, { useEffect, useState } from 'react';

const CurrentDate = () => {
  const [time, setTime] = useState<Date | null>(null); // Start with null

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setTime(new Date());  // Update the time every second
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className='max-w-[400px] sm:flex flex-col items-center justify-center p-6 font-mono
         font-bold  text-black bg-white bg-opacity-50 rounded-2xl '>
      {time && (
        <div className='flex flex-col items-center'>
          <p className=''>{time.toLocaleTimeString([], {hour12: false})}</p>
          <p>{time.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
          })}</p>
        </div>
      )}
    </div>
  );
};

export default CurrentDate;

