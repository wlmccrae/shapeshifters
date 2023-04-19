import React from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useState, useEffect, useRef } from "react";

import { useGetAccountQuery } from '../../services/auth';
import './LandingPage.css';

import skatingImg from '../../imgs/091108nyc096-nw.jpg';
import bikingImg from '../../imgs/080816summersts-178-nw.jpg';
import hikingImg from '../../imgs/120526forestpk022-nw.jpg';
import soccerImg from '../../imgs/140622nyc127-nw.jpg';


function LandingPage() {
    const slides = [
        {
            url: bikingImg
        },
        {
            url: skatingImg
        },
        {
            url: hikingImg
        },
        {
            url: soccerImg
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const { data: account } = useGetAccountQuery();

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        },5000);

        return () => clearTimeout(timer);

    }, [currentIndex]);

    const prevSlide =() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1: currentIndex -1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ?0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide= (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    const loggedIn = () => (
        <>
            <h1> Logged In View </h1>
        </>
    );

    const notLoggedIn = () => (
        <>
            <div className='max-w-[1400px] w-full m-auto py-10 px-4 relative'>
                <h1> Organize Your Next Workout Event with ShapeShifters! </h1>
            </div>
            <div className='max-w-[800px] h-[600px] w-full m-auto py-1 px-10 relative group'>
                <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 drop-shadow-2xl'>
                </div>

                <div className='hidden group-hover:block absolute top-[70%] -translate-x-0 translate-y-[-75%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                <div className='hidden group-hover:block absolute top-[70%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>

                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className= 'text-2xl cursor-pointer'><RxDotFilled /> </div>
                    ))}
                </div>
                <div className='flex-none w-full mr-3'>
                    <h2>Want to host a hiking trip, find a new spotter, or join a group fitness class?</h2>
                    <p>ShapeShifters makes it easy to find ShapeMates to help you make the next step in your journey. Reach a wider audience and bring people together around a shared passion for fitness today.</p>
                </div>
            </div>
        </>
    );

    return (
        <>
            {account ? loggedIn() : notLoggedIn()}
        </>
    );
};

export default LandingPage;
