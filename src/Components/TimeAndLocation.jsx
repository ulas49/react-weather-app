import React from 'react'
import { formatToLocalTime } from '../Services/weatherService'

function TimeAndLocation({weather:{dt,timezone,name,country}}) {
  return (
    <div className='flex items-center justify-center my-6 flex-col'>
        <p className='text-white text-xl font-extralight'> 
           {formatToLocalTime(dt,timezone)}
        </p>
        <p className='text-3xl text-white font-medium mt-5 font-xl'>
           {`${name}, ${country}`}
        </p>
        
    </div>
  )
}

export default TimeAndLocation