import { useState } from "react";


function Screen() {

    const [ison, setIsOn] = useState(false);
    
    const handleToggle = () => {
      setIsOn(!ison);
    };



  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${ison ? 'bg-white' : 'bg-black'}`}>
      
          <p className="text-2xl text-blue-400 mb-5">Status: {ison ? 'It is bright' : 'It is dark'}</p>
          <button onClick={handleToggle} className="bg-blue-400 cursor-pointer translation transform hover:scale-105 rounded-4xl text-white py-5 px-10">{ison ? 'Turn off' : 'Turn on' }</button>
    </div>
  );
}

export default Screen;