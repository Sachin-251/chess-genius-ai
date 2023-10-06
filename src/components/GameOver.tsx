import React from 'react';

interface Props {
  message: string,
}

const GameOver: React.FC<Props> = (props) => {


  return (
    <div className="flex justify-center items-center w-full h-full">
        <div className="sm:w-1/2 sm:h-1/2 xs:w-full bg-orange-300 rounded-lg shadow-md shadow-black m-auto p-4 flex flex-col justify-center items-center">
            <h1 className="text-4xl text-rose-600 font-josefin font-extrabold text-center">{props.message}</h1>
            <button className="m-4 p-2 rounded-md bg-blue border-2 border-white" onClick={() => window.location.reload()} >PLAY AGAIN</button>
        </div>
    </div>
  )
}

export default GameOver;