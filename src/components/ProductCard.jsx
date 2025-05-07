import React, { useState } from 'react'
import { data } from '../product.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck';

export default function ProductCard({search}) {
    const [edit, setEdit] = useState(null) //Got help from ChatGPT
    const [update, setUpdate] = useState("")
    //onClick
    //change h3 into input 
    //how to save the update the js file?

    const handleEdit = (index) => {
        setEdit(index)
        setUpdate(data[index].name)
        console.log(update)     
    }


    const handleUpdateName = (index) => {
        // saveing the object - updateData =  ...data
        // updateData - data[index].name = update
        //set the update back to null
        setEdit(false)
        const newData = {...data};
        newData[index].name = update
    
        console.log(newData[index].name)

        //save changes to product.js
        
    }
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8 p-8 mx-8 md:mx-12 ">
       
        {data.filter(item => item.name.toLowerCase().includes(search.toLowerCase().trim()) | item.description.toLowerCase().includes(search.toLowerCase().trim()))
            .map((item, index) => {
                return (
                    <div key={item.id} className='border-3 rounded-xl border-blue-300 m-3 p-3 hover:border-blue-500' > 
                        <img className='w-full object-cover h-48 border-0 rounded-xl' src={item.image} alt={item.name} />
                            {edit === index ? (
                                <div className='flex flex-row justify-center items-center p-2'>
                                    <input className="border-2 rounded-xl px-4 py-2 mt-2" 
                                        type="text"
                                        placeholder={item.name} 
                                        value={update}
                                        onChange={(e) => setUpdate(e.target.value)}
                                    
                                    
                                    />
                                    <button className='hover:cursor-pointer mx-3 text-2xl' onClick={() => handleUpdateName(index)}><FontAwesomeIcon icon={faSquareCheck} /></button>

                                </div>
                            )
                            :
                            ( 
                                <div className='flex flex-row justify-center items-center p-2'>
                                    <h3 className='text-md md:text-lg font-semibold'>{item.name}</h3>
                                    <button className='hover:cursor-pointer px-3' onClick={() => handleEdit(index)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                </div>
                            )
                            }
                            
                        
                        <div className='flex flex-row justify-between items-center p-2'>
                            <p className='text-sm px-2'>{item.description}</p>
                            <button className='hover:cursor-pointer px-3'><FontAwesomeIcon icon={faPenToSquare} /></button>
                        </div>
                    </div>
                )
            })
        }
            

    </div>
    
  )
}
