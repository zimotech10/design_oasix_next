// LogoAndSearchBar.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import Logo from '../../public/oasix_logo.svg';
import SearchIcon from '../../public/searchIcon.svg';
import Arrow from '../../public/arrow.svg';
import { useScroll } from './scrollContext'; // Adjust path as necessary

const LogoAndSearchBar = () => {
    const { specificSectionRef } = useScroll();

    const scrollToSpecificSection = () => {
        if (specificSectionRef.current) {
            specificSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col items-center mt-[285.5px] h-[273px] w-[400px]">
            <div className="flex justify-center">
                <Image src={Logo} alt="logo-OASIX" />
            </div>
            <div className="text-center font-euclid customFont text-[33.89px] mt-[5px] mb-[5px]">
                Smart property search
            </div>
            <div className="borderMaskSearch mt-2 right-0">
                <div className="float-left font-montserrat ml-[25px] mt-[23px] text-[14px] font-medium">
                    Find real estate
                </div>
                <div className="searchBtn float-right justify-center flex">
                    <Image src={SearchIcon} alt="searchIcon" />
                </div>
            </div>
            <div className="absolute w-[160px] h-[104.29px] top-[720.26px] flex flex-col justify-center overflow-hidden bg-custom">
                <div
                    className="zeroVector flex justify-center items-center relative w-full h-full ml-[65px] mb-[10px]"
                    onClick={scrollToSpecificSection}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="vertical-round-trip">
                        <Image src={Arrow} alt="wheel" width={12} height={10} />
                    </div>
                </div>
                <div className="font-montserrat text-center text-[12px] font-[100px] bg-custom">
                    Scroll down to learn more about the project
                </div>
            </div>
        </div>
    );
};

export default LogoAndSearchBar;
