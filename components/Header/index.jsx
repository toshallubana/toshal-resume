import React, { useEffect, useRef, useState } from 'react';
import { gsap, Power4 } from 'gsap';

const Header = () => {
    const isAnimatedPlayed = useRef(false);
    const linkRefs = useRef([]);

    useEffect(() => {
        if (!isAnimatedPlayed.current) {
          const tl = gsap.timeline({ delay: 0.1 });
          linkRefs.current.map((target) => {
            tl.fromTo(
              target,
              {
                y: 100,
                opacity: 0,
                duration: 0.2,
                ease: Power4.easeIn
              },
              {
                y: 0,
                opacity: 1
              },
              '<+0.05'
            );
          });
          isAnimatedPlayed.current = true;
        }
    }, []);

    return (
        <>
            <div className="px-20 lg:p-15 md:px-10 sm:px-2 mx-auto items-center" 
                ref={(e) => {
                    linkRefs.current[0] = e;
                }}
            >
                <div className="flex mx-auto items-center justify-between">
                    <div className="">
                        <a href="mailto:toshal.t1@gmail.com" target="_blank" className="flex items-center py-4">
                            <span>
                                <img src="/images/email.svg" className="w-[65px]"/>
                            </span>
                            <p className="text-grey-light ml-4">Get in touch</p>
                        </a>
                    </div>
                    <div className="flex items-center ">
                        <span className='flex items-center'>
                            <a href="https://www.linkedin.com/in/toshal-lubana-79419a181/" target="_blank" className="text-grey-light lg:hidden">LinkedIn</a>
                            <a href="https://www.linkedin.com/in/toshal-lubana-79419a181/" target="_blank" className="text-grey-light">
                                <img src="/images/linkedin.svg" className='w-[25px] h-[25px] ml-4' />
                            </a>
                        </span>
                        <span className="text-grey-light">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                        <span className='flex items-center'>
                            <a href="https://github.com/toshallubana" target="_blank" className="text-grey-light lg:hidden">GitHub</a>
                            <a href="https://github.com/toshallubana" target="_blank" className="text-grey-light">
                                <img src="/images/github.svg" className='w-[25px] h-[25px] ml-4' />
                            </a>
                        </span>
                        <span className="text-grey-light">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                        <span className='flex items-center'>
                            <a href="https://instagram.com/tushar_lubana?igshid=ZDdkNTZiNTM=" target="_blank" className="text-grey-light lg:hidden">Instagram</a>
                            <a href="https://instagram.com/tushar_lubana?igshid=ZDdkNTZiNTM=" target="_blank" className="text-grey-light">
                                <img src="/images/instagram.svg" className=' w-[25px] h-[25px] ml-4' />
                            </a>
                        </span>
                    </div>
                </div>
                <div className="flex mx-auto items-center border-b-[0.2px] text-grey-light"></div>
            </div>
        </>
    )
}
export default Header;