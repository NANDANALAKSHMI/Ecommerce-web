import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img from "../../assets/hero.png";
import img1 from "../../assets/herobg.png";
import img3 from "../../assets/login.png";

const Hero = () => {
    const slides = [
        {
            brand: "PRADA",
            title: "Big Fashion Festival",
            discount: "50% - 80% off",
            image: img,
            background: img1
        },
       
        {
            brand: "PRADA",
            title: "Big Fashion Festival",
            discount: "50% - 80% off",
            image: img,
            background: img1
        },
        {
            brand: "PRADA",
            title: "Big Fashion Festival",
            discount: "50% - 80% off",
            image: img,
            background: img1
        },

    ];

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="w-full"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index} style={{paddingBottom:"50px"}}>
                    <div className='flex flex-col w-full lg:flex-row'>
                        <div className='lg:w-[50%]'>
                            <img src={slide.image} alt="" className='object-cover w-full h-full' />
                        </div>
                        <div className='lg:w-[50%] items-center justify-center flex' style={{ backgroundImage: `url(${slide.background})` }}>
                            <div className="flex flex-col items-center justify-center py-10 font-serif">
                                <h1 className="font-bold tracking-wider md:text-[110px] text-[50px]">{slide.brand}</h1>
                                <h2 className="md:text-[50px] text-[30px] font-light text-[#565656]">{slide.title}</h2>
                                <p className="font-light md:text-[40px] text-[20px] text-[#565656] pb-6">{slide.discount}</p>
                                <button className="px-6 py-2 text-gray-800 transition-colors border border-gray-800 rounded-[7px] hover:bg-gray-800 hover:text-white">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Hero;