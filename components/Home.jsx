import { useRef, useEffect } from 'react';
import { gsap, Power4 } from 'gsap';

const Profile = () => {

    const isAnimatedPlayed = useRef(false);
    const linkRefs = useRef([]);

    useEffect(() => {
        if (!isAnimatedPlayed.current) {
          const tl = gsap.timeline({ delay: 0.2 });
          linkRefs.current.map((target) => {
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
          isAnimatedPlayed.current = true;
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center text-center h-[750px] md:h-[525px] py-16 md:py-5" ref={(e) => {
            linkRefs.current[0] = e;
        }}>
            <div className="avatar">
                <div className="mask rounded-full h-[250px] w-[250px] md:h-[150px] md:w-[150px]">
                    <img src="/images/toshal.jpeg" />
                </div>
            </div>
            <p className="mt-6 text-2xl">Hi, I'm Toshal👋🏻</p>
            <h1 className="text-6xl mt-6 md:text-4xl sm:text-2xl md:mt-4">Building digital <br/> products, brands, and <br/> experience.</h1>
            <div class='button w-[300px] md:w-[220px] h-16 bg-blue-500 rounded-lg cursor-pointer select-none
                active:translate-y-2  active:[box-shadow:0_0px_0_0_#424446,0_0px_0_0_#424446]
                active:border-b-[0px]
                transition-all duration-150 [box-shadow:0_10px_0_0_#424446,0_15px_0_0_#424446]
                border-[1px] mt-12 md:mt-6
            '>
                <div class='flex justify-center items-center h-full text-grey-light text-lg'>
                    <a href="/images/toshal-resume.pdf" download className='flex items-center'>
                        <p>Resume</p>
                        <span className='ml-2.5'>
                            <img src="/images/arrow.svg" />
                        </span>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Profile;