import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {StarIcon} from '@heroicons/react/24/solid'
import prime from '../assets/Amazon-Prime-Logo-PNG-HD-Quality.png'





const Product = ({id, title, price, description, category, image}) => {
  const MAX_RATING = 5;
  const MIN_RATING = 1;

  const [rating,setRating] = useState();
  useEffect(()=>setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING),[])

  const [hasPrime,setHasPrime] = useState() 
  useEffect(()=>setHasPrime(Math.random() < 0.5),)
  return (
    
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className=' absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

      <Image loading='lazy' src={image} height={100} width={100} alt='/' className=' h-[100px] w-[100px] object-contain   self-center'/>

      <h4 className=' my-3'>{title}</h4>
      
      <div>
        <p className='flex'>
        {Array(rating)
        .fill()
        .map(
          ( _ , i)=>(
            <StarIcon className=' h-5 text-yellow-500'/>
          )
        )}
        </p>
      </div>
      
      <p className=' my-2 text-xs truncate'>{description}</p>

      <div className=' mb-5'>
        <p><span>$</span>{price}</p>
      </div>
      <div>
        {hasPrime && (
        <div  className=' flex items-center space-x-2 -mt-5'>
          <Image  className=' w-20' src={prime} alt=''/>
          <p className=' text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}
      </div>
      
      <button className=' mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product
