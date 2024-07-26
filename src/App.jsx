import React, { useState } from 'react';
import sales from './sales.js';

function NavBar({ darkMode, toggleDarkMode }) {
  return (
    <>
      <nav className={`p-4 mb-10 flex justify-between items-center border shadow-lg rounded-t-lg ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        <img src="./airbnb 1.svg" alt="Airbnb Logo" />
        <div className="flex gap-1 items-center w-[95px] h-[14px] mr-5">
          <p className={`font-semibold text-[14px] ${darkMode ? "text-white" : "text-black"}`}>Light</p>
          <div
            className={`w-[25px] h-[10px] rounded-full flex items-center cursor-pointer ${darkMode ? "bg-white" : "bg-[#2B283A]"}`}
            onClick={toggleDarkMode}
          >
            <div className={`w-[14.5px] h-[10px] rounded-full transition-transform duration-300 ${darkMode ? "transform translate-x-[11px] bg-[#2B283A]" : "bg-white"}`}></div>
          </div>
          <p className={`font-semibold text-[14px] ${darkMode ? "text-white" : "text-black"}`}>Dark</p>
        </div>
      </nav>
    </>
  );
}

function MainContent({ darkMode }) {
  return (
    <>
      <div className={`pt-10 mx-auto my-5 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        <img src="./hero.png" className='w-[395.91px] h-[232px] mx-auto' alt="Hero" />
        <p className='font-semibold text-[36px] w-[347px] px-4 pt-4'>Online Experiences</p>
        <p className='font-light text-[16px] w-[320px] px-4 pt-1'>
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </>
  );
}

function Sales(props) {
  let word;
  if (props.openSpots === 0) {
    word = "SOLD OUT";
  } else if (props.location === "Online") {
    word = "ONLINE";
  }

  return (
    <>
      <div className=''>
        <div className='relative px-2'>
          <img src={props.img} className='rounded-lg w-[176px] h-[235px]' alt="Sale Item" />
          {word && (
            <div className='absolute border bg-white top-2 left-6 px-2 rounded-sm'>
              <p className='text-black text-[10.24px] font-semibold'>{word}</p>
            </div>
          )}
          <div>
            <div className='flex gap-1 items-center mt-2'>
              <img src="./Star 1.png" className='w-[14px]' alt="Star" />
              <p className='font-light text-[12px]'>{props.stats.rating}<span className='text-[#918E9B] font-light text-[12px]'>({props.stats.reviewCount}) USA</span></p>
            </div>
            <p className=' font-light text-[12px]'>{props.description}</p>
            <p className='font-bold text-[12px]'>From ${props.price} <span className='font-light'>/ person</span></p>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode);
  }

  const salesElements = sales.map(sale => (
    <Sales key={sale.id} {...sale} />
  ));

  return (
    <>
      <div className={`rounded-lg border shadow-lg mx-auto w-[550px] my-10 h-[853px] ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <MainContent darkMode={darkMode} />
        <div className='flex justify-between'>
          {salesElements}
        </div>
      </div>
    </>
  );
}

export default App;





// <Sales img={sale.img} rating={sale.stats.rating} num={sale.num} reviewCount={sale.stats.reviewCount} location={sale.location} description={sale.description} openSpots={sale.openSpots} price={sale.price} />
// <Sales sale = {sale}/> //rendering the component containing sales
{/* <Sales
  img="./image 12.png"
  word="SOLD OUT"
  rating="5.0"
  num="(6)"
  description="Life lessons with Katie Zaferes"
  price={136}
  />
  <Sales
  img="./wedding-photography 1.png"
  word="ONLINE"
  rating="5.0"
  num="(30)"
  description="Learn wedding photography"
  price={125}
/>
 <Sales
  img="./mountain-bike 1.png"
  word="SOLD OUT"
  rating="4.8"
  num="(2)"
  description="Group Mountain Biking"
  price={50}
/> */}



