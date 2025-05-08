import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../product.js'

export default function ProductPage() {
    //get the image, title, and description

    //use of useParams
    let {index} = useParams();
    
    console.log(data.filter((item) => item.id === index))
    console.log(data[index].id)
    
  return (
    <div>
      {data.filter(item => item.id === index)
      .map(item => (
          <div key={item.id} className='flex flex-col md:flex-row'>
          <img className='md:basis-1/2 m-4' src={item.image} />
          <div className='justify-center content-center mx-8'>
            {/** make title capaitalized */}
            <h3 className='font-extrabold text-2xl md:text-3xl lg:text-4xl mb-2 text-indigo-800' >{item.name}</h3>
            <p className='text-sm md:text-md lg:text-lg font-light p-2 text-gray-700' >{item.description}</p>
          </div>
        </div>
      )
      )
      }
      
    </div>
  )
}
