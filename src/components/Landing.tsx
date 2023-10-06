import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

function Landing({}: Props) {
    const [playerName, setPlayerName] = useState('');
    const navigate = useNavigate();

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value);
    }

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        localStorage.setItem('chess_genius_player',JSON.stringify(playerName));
        navigate('/vs-ai', {state: {playerName:playerName}});
    }

  return (
    <div className="flex justify-center items-center w-full h-full bg-landing-bg bg-cover bg-center">
        <div className="md:w-1/3 sm:w-1/2 xs:w-full flex flex-col justify-between items-center mx-2 p-4 m-auto border-2 gap-4 bg-foreground border-grey shadow-md shadow-black rounded-lg">
            <h1 className="text-4xl font-playfair text-banner-bg text-center font-extrabold mb-4">Chess Genius - AI</h1>
            <input type="text" className='w-full my-4 border-1 border-gray-700 rounded-md p-2 bg-white text-foreground' placeholder='Enter your name' onChange={handleOnChange} />
            <button className="px-2 w-full py-1 bg-blue font-playfair text-xl font-bold rounded-md hover:bg-white hover:text-blue transition duration-500" onClick={handleClick} >Submit</button>
        </div>
    </div>
  )
}

export default Landing