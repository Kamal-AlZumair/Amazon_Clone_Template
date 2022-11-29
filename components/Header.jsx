import React from 'react'
import Image from 'next/image'
import logo from '../assets/amazon_PNG25.png'
import {Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon} from '@heroicons/react/24/outline'
import {signIn,signOut,useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import { useSelector } from "react-redux";
import { selectItems } from '../slice/basketSlice'


const Header = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const items = useSelector(selectItems)
  return (
    <header>
      {/* top nav */}
      <div className=' flex items-center bg-amazon_blue flex-grow py-2 px-1'>
        <div className=' flex items-center flex-grow sm:flex-grow-0 mt-2'>
          <Image onClick={()=> router.push('/') } width={100} height={20} src={logo}  className='h-auto w-auto object-contain cursor-pointer mr-4' alt='logo' />
        </div>
        {/* search */}
        <div className=' hidden items-center h-10 rounded-md flex-grow cursor-pointer sm:flex bg-yellow-400 hover:bg-yellow-500'>
          <input className=' p-2 h-full flex-grow flex-shrink rounded-l-md px-4 focus:outline-none' type="text" />
          <MagnifyingGlassIcon className=' h-12 p-4'/>
        </div>

        {/* right */}
        <div  className=' text-white flex items-center mx-6 space-x-6 text-xs whitespace-nowrap'>
          <div onClick={!session ? signIn : signOut} className='link'>
            <p className='hover:underline'>
              {session ? `Hello, ${session.user.name}` : 'Sign In'}
            </p>
            <p className=' font-extrabold md:text-sm'>Account & Lists</p>
          </div>

          <div className='link'>
            <p>Returns</p>
            <p className=' font-extrabold md:text-sm'>& Orders</p>
          </div>

          <div onClick={()=> router.push('/CheckOut')} className='link relative flex items-center'>
            <span className=' absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>{items.length}</span>
            <ShoppingCartIcon className=' h-10'/>
            <p className=' hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div className=' flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-[10px] sm:text-sm'>
        <p className=' link flex items-center'>
          <Bars3Icon className=' h-6 mr-1'/>
          All
        </p>
        <p className=' link'>Prime Video</p>
        <p className=' link'>Amazon Business</p>
        <p className=' link'>Today's Deals</p>
        <p className=' link hidden lg:inline-flex'>Electronics</p>
        <p className=' link hidden lg:inline-flex'>Food & Grocery</p>
        <p className=' link hidden lg:inline-flex'>Prime</p>
        <p className=' link hidden lg:inline-flex'>Buy Again</p>
        <p className=' link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className=' link hidden lg:inline-flex'>Health & Personal</p>
      </div>
    </header>
  )
}

export default Header 
