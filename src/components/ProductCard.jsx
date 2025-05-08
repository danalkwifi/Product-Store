import React, { useEffect, useState } from 'react'
import { data } from '../product.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function ProductCard({search}) {
    const [edit, setEdit] = useState(null) //Got help from ChatGPT for a small clarification
    const [update, setUpdate] = useState("")
    const [product, setProducts] = useState(data)
    
    const navigate = useNavigate();

    // called when user wants to edit/update a product's name
    const handleEdit = (index) => {
        setEdit(index)
        setUpdate(product[index].name)
    }

    // called when the user confirms the edit/update a product's name 
    const handleUpdateName = (index) => {    
        const newData = [...product]; //*
        newData[index].name = update
        setProducts(newData);
        setEdit(null)
            
    }


    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-8 p-8 mx-8 md:mx-12 ">
       {/** * */}
        {product.filter(item => item.name.toLowerCase().includes(search.toLowerCase().trim()) || item.description.toLowerCase().includes(search.toLowerCase().trim()))
            .map((item, index) => (
                    <div key={item.id} className='border-3 rounded-xl border-blue-300 m-3 p-3 hover:border-blue-500'> 
                        <img className='w-full object-cover h-48 border-0 rounded-xl hover:cursor-pointer' src={item.image} alt={item.name} onClick={() => navigate(`/page/${item.id}`)} />
                            {edit === index ? (
                                <div className='flex flex-row justify-center items-center m-2'>
                                    <input className="border-2 rounded-xl p-2 m-2 border-indigo-200 focus:outline-none focus:border-indigo-400 " 
                                        type="text"
                                        placeholder={item.name} 
                                        value={update}
                                        onChange={(e) => setUpdate(e.target.value)}
                                    
                                    
                                    />
                                    <button className='hover:cursor-pointer text-xl md:text-2xl' onClick={() => handleUpdateName(index)}>
                                        <span className='text-green-400'><FontAwesomeIcon icon={faCheck} /></span>
                                    </button>
                                    <button className='hover:cursor-pointer mx-2 text-xl md:text-2xl'onClick={() => setEdit(null)}>
                                        <span className='text-red-400'><FontAwesomeIcon icon={faXmark} /></span>
                                    </button>
                                    

                                </div>
                            )
                            :
                            ( 
                                <div className='flex flex-row justify-center items-center m-2 pt-4'>
                                    <h3 className='text-lg md:text-xl lg:text-2xl font-semibold text-indigo-800'>{item.name}</h3>
                                    <button className='hover:cursor-pointer px-3 md:text-xl' onClick={() => handleEdit(index)}>
                                        <span className='text-indigo-200'><FontAwesomeIcon icon={faPenToSquare} /></span>
                                    </button>
                                </div>
                            )
                            }
                            
                        
                        <div className='flex flex-row justify-between items-center p-2'>
                            <p className='text-sm md:text-md lg:text-lg px-2 text-gray-700'>{item.description}</p>
                            <button className='hover:cursor-pointer px-3'></button>
                        </div>
                    </div>
                )
            )
        }
            

    </div>
    
  )
}

export default ProductCard;

