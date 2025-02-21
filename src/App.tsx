import React from 'react'
import "./App.css"
import mainImage from "./assets/images/img-01.png";
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/game")
  }

  return (
    <>
      <div className='flex'>
        <div className='w-2/6 flex flex-col justify-center gap-15 px-12 tracking-wide'>
          <h1 className='text-4xl font-bold text-lila tracking-wider'>Memoria</h1>
          <p className='text-sm text-lila'>Memoria is a fun and relaxing memory game designed to help you unwind while sharpening your mind. Challenge yourself to remember and match cards in a calm environment.</p>
          <button onClick={redirect} className='bg-lilaSecondary text-white rounded-lg h-12 cursor-pointer'>Start Playing</button>
        </div>
        <div className='w-4/6 bg-sky-50'>
          <img className='img-size' src={mainImage} />
        </div>
      </div>
    </>
  )
}

export default App
