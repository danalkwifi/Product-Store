import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../product.js'

export default function ProductPage() {
    //get the image, title, and description

    //use of useParams
    let {index} = useParams();
    
    //console.log(data.filter((item) => item.id == index))
    //console.log(data[index].id)
  
    
  return (
    <div>
      {data.filter(item => item.id === Number(index))
      .map(item => (
          <div key={item.id} className='flex flex-col md:flex-row'>
          <img className='md:basis-1/2 max-w' src={item.image} />
          <div className='md:basis-1/2 justify-center content-center m-6'>
            <h3 className='font-extrabold text-xl md:text-2xl lg:text-3xl mb-2 text-indigo-800' >{item.name.toUpperCase()}</h3>
            <p className='text-md md:text-lg lg:text-xl font-light py-2 text-gray-700' >{item.description}</p>
            <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full justify-center' >Add</button>
          </div>
        </div>
      )
      )
      }
      
    </div>
  )
}
