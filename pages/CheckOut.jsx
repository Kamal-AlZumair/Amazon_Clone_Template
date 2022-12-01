import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import banner from "../assets/Amazon_early_deals_on_Amazon_devices_banner.jpg";
import {useSelector} from 'react-redux'
import { selectItems, selectTotal } from "../slice/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import {useSession} from 'next-auth/react'





const CheckOut = () => {
	const { data: session } = useSession()
	const items = useSelector(selectItems)
	const total = useSelector(selectTotal)

	
	return (
		<div className=" bg-gray-100">
			<Header />

			<main className=" lg:flex max-w-screen-xl mx-auto">
				{/* left */}
				<div className=" flex-grow m-5 shadow-sm">
					<Image
						src={banner}
						width={1020}
						height={250}
						alt={"/"}
						className=" object-contain"
					/>
					<div className=" flex flex-col p-5 space-y-10 bg-white">
						<h1 className=" text-3xl border-b pb-4">{items.length === 0 ? 'Your Amazon Basket is empty.' : 'Shopping Basket'}</h1>
						{items.map((item, i)=>(
							<CheckoutProduct 
								key={i}
								id={item.id}
								title={item.title}
								rating={item.rating}
								price = {item.price}
								description = {item.description}
								category = {item.category}
								image = {item.image}
								hasPrime = {item.hasPrime}
							/>
						))}
					</div>
				</div>
				{/* right */}
				<div className=" flex flex-col bg-white p-10 shadow-md">
					{items.length > 0 &&(
						<>
							<h2 className=" whitespace-nowrap">Subtotal ({items.length} items): {' '}
							<span className=" font-bold">
								${total.toFixed(2)}
							</span>
							</h2>
							<button  role='link' disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'} `}>
								{!session ? 'Sign in to checkout' : 'Proceed to checkout'}
							</button>
						</>
					)}
				</div>
			</main>
		</div>
	);
};

export default CheckOut;
