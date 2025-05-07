import React, { useEffect, useState } from 'react'
import { data } from '../product.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck';

export default function ProductCard({search}) {
    const [edit, setEdit] = useState(null) //Got help from ChatGPT for a small clarification
    const [update, setUpdate] = useState("")
    const [product, setProducts] = useState(data)
    

    // called when user wants to edit/update a product's name
    const handleEdit = (index) => {
        setEdit(index)
        setUpdate(data[index].name)
    }

    // called when the user confirms the edit/update a product's name 
    const handleUpdateName = (index) => {    
        const newData = [...product]; //*
        newData[index].name = update
        setProducts(newData);
        setEdit(null)
            
    }

    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8 p-8 mx-8 md:mx-12 ">
       {/** * */}
        {product.filter(item => item.name.toLowerCase().includes(search.toLowerCase().trim()) || item.description.toLowerCase().includes(search.toLowerCase().trim()))
            .map((item, index) => {
                return (
                    <div key={item.id} className='border-3 rounded-xl border-blue-300 m-3 p-3 hover:border-blue-500' > 
                        <img className='w-full object-cover h-48 border-0 rounded-xl' src={item.image} alt={item.name} />
                            {edit === index ? (
                                <div className='flex flex-row justify-center items-center '>
                                    <input className="border-2 rounded-xl p-2 m-2" 
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
                                <div className='flex flex-row justify-center items-center m-2 pt-4'>
                                    <h3 className='text-md md:text-lg font-semibold'>{item.name}</h3>
                                    <button className='hover:cursor-pointer px-3' onClick={() => handleEdit(index)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                </div>
                            )
                            }
                            
                        
                        <div className='flex flex-row justify-between items-center p-2'>
                            <p className='text-sm px-2'>{item.description}</p>
                            <button className='hover:cursor-pointer px-3'></button>
                        </div>
                    </div>
                )
            })
        }
            

    </div>
    
  )
}
