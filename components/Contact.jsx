import { gsap, Power4 } from "gsap";
import { useRef, useEffect } from "react";


const Contact = () => {
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
       <div className="flex flex-col m-auto p-20 lg:p-15 md:p-10 justify-center text-center" ref={
           e => logoRef.current[0] = e
       }>
           <div className="">
               <p className="text-6xl text-grey-light md:text-4xl">Skills</p>
           </div>
           <div className="flex flex-col mt-12">
               <div className="flex">
                    <p className="text-grey-light text-4xl md:text-2xl">Frontend development</p>
               </div>
               <div className="flex flex-row flex-wrap items-center mt-6 justify-start">
                   <div className="flex m-[0.2rem]">
                        <img src="/images/react.svg" className="w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] m-[0.2rem]"/>
                   </div>
                   <div className="flex m-[0.2rem] p-[0.6rem]">
                        <img src="/images/next.svg" className="w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] m-[0.2rem]"/>
                   </div>
                   <div className="flex m-[0.2rem] p-[0.6rem]">
                        <img src="/images/javascript.svg" className="w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] m-[0.2rem]"/>
                   </div>
                   <div className="flex m-[0.2rem] p-[0.6rem]">
                        <img src="/images/typescript.svg" className="w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] m-[0.2rem]"/>
                   </div>
                   <div className="flex m-[0.2rem] p-[0.6rem]">
                        <img src="/images/redux.svg" className="w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] m-[0.2rem]"/>
                   </div>
                   <div className="flex m-[0.2rem] p-[0.6rem]">
                        <img src="/images/html.svg" className="w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] m-[0.2rem]"/>
                   </div>
                   <div className="flex m-[0.2rem] p-[0.6rem]">
                        <img src="/images/css.svg" className="w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] m-[0.2rem]"/>
                   </div>
                   <div className="flex m-[0.2rem] v">
                        <img src="/images/sass.svg" className="w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] m-[0.2rem]"/>
                   </div>
                   <div className="flex m-[0.2rem] p-[0.6rem]">
                        <img src="/images/style.svg" className="w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] m-[0.2rem]"/>
                   </div>
                   <div className="flex m-[0.2rem] p-[0.6rem]">
                        <img src="/images/tailwind.svg" className="w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] m-[0.2rem]"/>
                   </div>
                   <div className="flex m-[0.2rem] p-[0.6rem]">
                        <img src="/images/graphql.svg" className="w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] m-[0.2rem]"/>
                   </div>
               </div>
           </div>
           <div className="flex flex-col mt-12">
               <div className="flex">
                    <p className="text-grey-light text-4xl md:text-2xl">Backend development</p>
               </div>
               <div className="flex mt-6">
                   <img src="/images/node.svg" className="w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] m-[0.2rem]"/>
                   <img src="/images/mongo.svg" className="w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] m-[0.2rem] ml-10"/>
               </div>
           </div>
       </div>
    )
}
export default Contact;