import {gsap, Power4} from 'gsap';
import { useEffect, useRef } from 'react';

const WorkLogo = () => {
    const logoRef = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.2 });
        logoRef.current.map((target) => {
        tl.fromTo(
            target,
            {
                y: 200,
                opacity: 0,
                duration: 1,
                ease: Power4.easeIn
            },
            {
                y: 0,
                opacity: 1
            },
            '<+0.05'
        );
        });
    }, []);

    return (
        <div className='flex flex-col bg-grey-dark items-center' ref={
            (e) => logoRef.current[5]= e
        }>
            <div className="w-full h-[250px] flex items-center justify-between">
                <div className='w-[300px] mr-6'>
                    <img src="/images/aflac.png" className='w-full'/> 
                </div>
                <div className='w-[300px] mr-6'>
                    <img src="/images/argus.png" className='w-full'/> 
                </div>
                <div className='w-[300px] mr-6'>
                    <img src="/images/antony.png" className='w-full'/> 
                </div>
                <div className='w-[300px] mr-6'>
                    <img src="/images/reaper.png" className='w-full'/> 
                </div>
                <div className='w-[300px] mr-6'>
                    <img src="/images/sharknet.png" className='w-full h-fit'/> 
                </div>
            </div>
        </div>
    )
}
export default WorkLogo;