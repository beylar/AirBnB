import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function NavBar(){
  return (
    <>
    <nav className='border shadow-lg rounded-t-lg p-4'>
      <img src="./airbnb 1.svg"/>
    </nav>
    </>
  )
}

function MainContent(){
  return (
    <>
    <div className='my-10'>
    <img src= "./hero.png" className='w-[395.91px] h-[232px] mx-auto'/>
    <p className='font-semibold text-[36px] w-[347px] px-4 pt-4'>Online Experiences</p>
    <p className='font-light text-[16px] w-[320px] px-4 pt-1'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
    </p>
    </div>
    </>
  )
}
function Sales(props) {
  const { img, word, rating, num, description, price } = props;
  return (
    <>
      <div className=''>
        <div className='relative px-2'>
          <img src={img} className='rounded-lg w-[176px] h-[235px]' />
          <div className='absolute border bg-white top-2 left-6 px-2 rounded-sm'>
            <p className='text-[10.24px]'>{word}</p>
          </div>
          <div>
            <div className='flex gap-1 items-center mt-2'>
              <img src="./Star 1.png" className='w-[14px]' />
              <p className='font-light text-[12px]'>{rating}<span className='text-[#918E9B] font-light text-[12px]'>{num} USA</span></p>
            </div>
            <p className='text-[#222222] font-light text-[12px]'>{description}</p>
            <p className='font-bold text-[12px]'>From ${price} <span className='font-light'>/ person</span></p>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <div className='rounded-lg border shadow-lg mx-auto w-[550px] my-10 h-[853px]'>
        <NavBar />
        <MainContent />
        <div className='flex justify-between'>
        <Sales
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
        />
        </div>
      </div>
    </>
  );
}


export default App





