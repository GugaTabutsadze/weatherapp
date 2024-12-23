import React, { useState } from "react";

const Inputsearch = ({ inputValue, setInputValue }) => {
  const [inputOpen, setInputOpen] = useState(false)

  const handleInput = () => {
    setInputOpen(prev => !prev)
  }
  return (
    <div className="w-full">
    <div className="hidden relative pb-10 max-w-[1500px] w-full sm:block">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update the input value
        placeholder="Enter City"
        className="bg-transparent border border-black text-blue-900 px-6 py-3 rounded-2xl font-serif font-semibold
        max-w-[500px] w-full outline-none placeholder-blue-950 focus:placeholder:opacity-0"
        type="text"
      />
      <img
        className="absolute cursor-pointer right-4 top-[15px]"
        width={25}
        height={25}
        src="/images/search.png"
        alt="search.png"
      />
    </div>
    <div className="flex items-center justify-between max-w-[1000px]  w-full sm:hidden">
    <div className="flex items-center gap-4 max-w-[300px] w-full h-[50px]">
     <img
       onClick={handleInput}
       className="cursor-pointer"
       width={25}
       height={25}
       src="/images/search.png"
       alt="search.png"
     />
     <input
       value={inputValue}
       onChange={(e) => setInputValue(e.target.value)} // Update the input value
       className="bg-transparent border border-black text-blue-900 py-1 px-6 font-serif font-semibold
       rounded-2xl outline-none placeholder-blue-950 transition-all duration-1000 ease-in-out"
       style={{
       width: inputOpen ? '300px' : '0', // Animate the width
       opacity: inputOpen ? 1 : 0, // Optionally animate the opacity as well
      }}
      type="text"
     />
    </div>
      <img src="/images/Vector.png" alt="Vector.png" />
    </div>
    </div>
  );
};

export default Inputsearch;

