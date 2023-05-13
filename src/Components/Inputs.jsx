import React, { useState } from 'react'
import {UilSearch,UilLocationPoint} from '@iconscout/react-unicons'
function Inputs({setQuery,units,setUnits}) {
  const [city,setCity]=useState("")
  const submitHandle = ()=>{
    if(city!==''){
      setQuery({q:city})
    }
  }

  const submitLocatlion = ()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({
          lat,
          lon
        })
      })
    }
  }

  const handleUnits = (e)=>{
    const selectedUnit = e.currentTarget.name
    if(units!==selectedUnit){
      setUnits(selectedUnit)
    }
  }
  
 
  return (
    <div className='flex  flex-row justify-center my-6'>
       <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
       <input   value={city}  onChange={(e)=>setCity(e.currentTarget.value)} placeholder='Search...' type="text" className='text-xl font-normal p-2 rounded-md w-full shadow-xl capitalize focus:outline-none'  />

        <UilSearch onClick={submitHandle} size="25"  className="text-white cursor-pointer transition ease-out hover:scale-125" />
        <UilLocationPoint onClick={submitLocatlion} size="25" className="text-white cursor-pointer transition ease-out hover:scale-125" />

        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
        <button onClick={handleUnits} name='metric' className=' mr-1 text-xl text-white font-normal transition ease-out hover:scale-125'>°C</button>
        <p className='text-xl text-white font-medium mx-1 mb-1'>|</p>
        <button onClick={handleUnits} name='imperial' className='text-xl text-white font-normal transition ease-out hover:scale-125'>°F</button>


        </div> 
    </div>
  )
}

export default Inputs