import React from 'react'
import img from "../../assets/hero.png"
import img1 from "../../assets/herobg.png"

const Hero = () => {

    return (
        <div className='flex flex-col w-full px-10 lg:flex-row'>
            <div className='lg:w-[50%]'>
                <img src={img} alt="" className='w-full h-full' />
            </div>
            <div className='lg:w-[50%] items-center justify-center flex' style={{ backgroundImage: `url(${img1})` }}>
                <div className="flex flex-col items-center justify-center py-10 font-serif">
                    <h1 className="font-bold tracking-wider md:text-[110px] text-[50px]">PRADA</h1>

                    <h2 className="md:text-[50px] text-[30px] font-light text-[#565656]">Big Fashion Festival</h2>

                    <p className="font-light md:text-[40px] text-[20px] text-[#565656] pb-6 ">50% - 80% off</p>

                    <button className="px-6 py-2 text-gray-800 transition-colors border border-gray-800 rounded-[7px] ">
                        Explore
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
