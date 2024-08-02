'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useScroll } from './scrollContext'; // Adjust path as necessary

const VideoWidget = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [progress, setProgress] = useState(0);
    const { specificSectionRef, setSpecificSectionRef } = useScroll();

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            const handleTimeUpdate = () => {
                if (video.duration) {
                    const currentProgress =
                        (video.currentTime / video.duration) * 100;
                    setProgress(currentProgress);
                }
            };

            video.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                video.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, []);

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            requestAnimationFrame(() => {
                const entry = entries[0];
                const { isIntersecting } = entry;

                console.log('Is Intersecting:', isIntersecting);

                if (isIntersecting) {
                    if (videoRef.current && videoRef.current.paused) {
                        console.log('Playing video');
                        videoRef.current.play();
                    }
                } else {
                    if (videoRef.current && !videoRef.current.paused) {
                        console.log('Pausing video');
                        videoRef.current.pause();
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: [0.3],
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);

            return () => {
                if (containerRef.current) {
                    observer.unobserve(containerRef.current);
                }
            };
        }
    }, []);

    return (
        <div
            ref={(el) => {
                containerRef.current = el;
                // Call the context function to set the specificSectionRef
                if (el) {
                    setSpecificSectionRef(el); // Call the setter function
                }
            }}
            className="first-letter h-[1000px] rounded-[30px] top-[1000px] left-[40.74px] right-[40.74px] bg-[rgba(39,39,39,0.3)] absolute overflow-hidden flex justify-center"
        >
            <video
                ref={videoRef}
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/pc.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="w-full max-w-2xl mt-[960.39px] z-10 px-24 md:px-36 top-[643.39px]">
                <div className="relative w-full h-[4px] md:h-[5.6px] bg-video-time-line-back rounded-full">
                    <div
                        className="absolute top-0 left-0 h-full bg-video-time-line-active rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default VideoWidget;
