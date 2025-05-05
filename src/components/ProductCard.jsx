import React from 'react'
import { data } from '../product.js'

export default function ProductCard({search}) {
    

    //console.log(search)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8 p-8 mx-8 md:mx-12">
       
        {data.filter(item => item.name.toLowerCase().includes(search.toLowerCase().trim()))
            .map((item) => {
                return (
                    <div key={item.id} className='border-3 rounded-xl border-blue-300 m-3 p-3 hover:border-blue-500 hover:border-4 hover:cursor-pointer' > 
                        <img className='w-full object-cover h-48 border-0 rounded-xl' src={item.image} alt={item.name} />
                        <h3 className='text-md md:text-lg font-semibold text-center pt-2'>{item.name}</h3>
                        <p className='text-sm mt-3'>{item.description}</p>
                    </div>
                )
            })
        }
            

    </div>
    
  )
}
