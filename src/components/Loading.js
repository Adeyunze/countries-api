import React from 'react'
import Gif from '../../src/Rolling-1s-61px.gif'

const Loading = () => {
  return (
    <div className='flex justify-center items-center w-full h-[80vh]'>
        <img src={Gif} alt="loading" />
    </div>
  )
}

export default Loading