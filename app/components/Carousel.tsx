"use client"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'tailwindcss/tailwind.css'; // import tailwindcss
import Image from "next/image";
import biryani from "@/public/images/dishes/biryaniCanva.svg";
import fish from "@/public/images/dishes/fishCanva.svg";
import chickenCurry from "@/public/images/dishes/chickenCurryCanva.svg";

const CarouselComponent = () => {
    return (
        <Carousel autoPlay={true}  interval={3000} infiniteLoop={true} showArrows={true} showStatus={false} className='w-[300px] mt-[40px] max-sm:mt-[100px]'>
            <div>
                <Image src={biryani} alt='biryani' className='w-[100px]' />
            </div>
            <div>
                <Image src={fish} alt='fish' />
            </div>
            <div>
                <Image src={chickenCurry} alt='chickenCurry' />
            </div>
        </Carousel>
    );
};

export default CarouselComponent;