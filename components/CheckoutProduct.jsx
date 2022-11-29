import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import prime from '../assets/Amazon-Prime-Logo-PNG-HD-Quality.png'
import {addToBasket,removeFromBasket} from '../slice/basketSlice'

const CheckoutProduct = ({
  id, 
  title,
  rating,
  price, 
  description, 
  category, 
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch();
  const addItemToBasket = ()=>{
    const product ={
      id, 
      title,
      rating,
      price, 
      description, 
      category, 
      image,
      hasPrime,
    }
    dispatch(addToBasket(product))
  };

  const removeItemFromBasket = ()=>{
    dispatch(removeFromBasket({id}))
  }

  return (
    <div className=' grid grid-cols-5'>
      <Image src={image} height={200} width={200} className='object-contain'/>

      <div className=' col-span-5 md:col-span-3 mx-5'>
        <p>{title}</p>
        <div className=' flex'>
        {Array(rating)
        .fill()
        .map(
          ( _ , i)=>(
            <StarIcon className=' h-5 text-yellow-500'/>
          )
        )}
        </div>
        <p className=' text-xs my-2 line-clamp-3'>{description}</p>
        
          <p className=' mb-5'><span>$</span>{price}</p>
        
        
          {hasPrime && (
            <div  className=' flex items-center space-x-2'>
              <Image  className=' w-20' src={prime} alt=''/>
              <p className=' text-xs text-gray-500'>FREE Next-day Delivery</p>
            </div>
          )}
      </div>
      {/* right add/remove buttons */}
      <div className=' col-span-5 md:col-span-1 my-4 md:flex md:flex-col'>
      <div className=' flex md:flex-col md:space-y-2 mx-auto md:my-auto md:justify-self-end'>
        <button onClick={addItemToBasket} className=' button mr-4'>Add to Basket</button>
        <button onClick={removeItemFromBasket} className=' button'>Remove from Basket</button>
      </div>
      </div>
    </div>
  )
}

export default CheckoutProduct
