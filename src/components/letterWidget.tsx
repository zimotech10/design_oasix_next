'use client';
import React, { useEffect, useState } from 'react';
import { Nothing_You_Could_Do } from 'next/font/google';

const nycd = Nothing_You_Could_Do({
    subsets: ['latin'],
    variable: '--font-nycd',
    weight: '400',
    display: 'swap',
});

const texts = [
    "We've made it easy and convenient to search for a home",
    'Explore a wide range of properties',
    'Find your perfect match with ease',
    'Experience a hassle-free search process',
    'Get the best deals on your dream home',
    'aaaaaa aaaaa aa ddfd asdf sde asdf adfs aasefw asdf',
];

const LetterWidget = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeClass('fade-out');
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setFadeClass('fade-in');
            }, 500); // Duration of the fade-out transition
        }, 3000); // Duration between text changes

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="letterWidget flex justify-center items-center h-screen relative ${inter.variable} ${playfair.variable} ${nycd.variable} font-inter antialiased tracking-tight">
            <div className="w-[821px] h-[192px] flex items-center flex-col justify-center px-2">
                <div
                    className={`text-center font-euclid customFontStyle text-[60px] ${fadeClass}`}
                >
                    {texts[currentIndex]}
                </div>
                <div className="font-nycd test-font font-normal text-[49.78px] leading-[59.73px]">
                    oasix
                </div>
                <div className="gap-x-2 flex justify-center absolute top-[880px] left-[860px] w-[94px] h-[9px]">
                    {texts.map((_, index) => (
                        <div
                            key={index}
                            className={`w-[9px] h-[9px] rounded-full ${
                                index === currentIndex
                                    ? 'bg-green'
                                    : 'bg-disable'
                            }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LetterWidget;
