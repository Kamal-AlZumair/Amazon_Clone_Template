import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import bg3 from '../assets/bg3.jpg'
import Image from 'next/image';

const Banner = () => {
  return (
    <div className=' relative'>
      <div className=' absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
        <div>
          <Image loading='lazy' src={bg1}  alt='' className=''/>
        </div>
        <div>
        <Image loading='lazy' src={bg2} alt='' className=''/>
        </div>
        <div>
        <Image loading='lazy' src={bg3} alt='' className=''/>
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
