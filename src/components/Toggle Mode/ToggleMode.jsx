import React, { useState } from 'react'
import { FaLightbulb } from 'react-icons/fa';

const ToggleMode = ({darkMode,toggleDarkMode}) => {
    
 
    return (
      <div
      className={`my-4 transform -translate-y-1/2 w-12 cursor-pointer ${darkMode ? "bg-white": "bg-black"} text-black px-4 py-2 rounded-full`}
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <FaLightbulb className="text-black hover:scale-125 transition ease-in-out duration-200" />
      ) : (
        <FaLightbulb className="text-white hover:scale-125 transition ease-in-out duration-200" />
      )}
    </div>
    
  )
}

export default ToggleMode
