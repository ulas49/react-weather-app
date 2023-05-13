import React from 'react'
import {  iconUrlFromCode } from '../Services/weatherService'

function Forecast({title,weather}) {
    
  return (
    <div>
        <div className='flex items-center justify-start  mt-6 '>
            <p className='text-white uppercase font-medium'>{title} </p>
        </div>
        <hr className='my-2'/>
        <div className="flex items-center justify-between text-white">

            {
               weather.map((item,index)=>(
                <div key={index}  className="flex flex-col items-center justify-center">
                <p className="font-light text-sm ">{item.title} </p>
                <img className="w-12 my-1" src={iconUrlFromCode(item.icon)} alt="" />
                <p className="font-medium ">{`${Math.round(item.temp)} °`}</p>
            </div>
               ))
            }

            
            
        </div>
    </div>
  )
}

export default Forecast