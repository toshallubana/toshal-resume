import { gsap, Power4 } from "gsap";
import { useEffect, useRef } from "react";
import Card from "./Card";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Description = () => {
    const cardRef = useRef([]);

    // useEffect(() => {
    //     const scrollTl = gsap.timeline();
    //     cardRef.current.map((target) => {
    //         scrollTl.to(
    //             target,
    //             {
    //                 y: -target.offsetHeight,
    //                 duration: 8,
    //                 ease: Power4.easeOut,
    //                 scrollTrigger: {
    //                     trigger: target,
    //                     start: "top 40%",
    //                     end: "bottom 20%",
    //                     scrub: 4,
    //                     // toggleActions: "restart none none none"
    //                 }
    //             },
    //             {
    //                 y: -target.offsetHeight,
    //                 opacity: 1
    //             }
    //         );
    //     });
    // })

    useEffect(() => {
          const tl = gsap.timeline({ delay: 0.2 });
          cardRef.current.map((target) => {
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
        <div className="flex flex-col px-20 lg:px-15 md:px-10 items-center	" ref={
            (e) => cardRef.current[0] = e
        } id="description">
            <div className="flex justify-center text-center">
                <h1 className="text-4xl text-grey-light">Collaborate with brands and agencies to <br/> create impactful results.</h1>
            </div>
            <div className="mt-20 grid grid-cols-4 gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1" >
                <Card icon="/images/ui.svg" heading="UI/UX" description="Designing interfaces that are intuitive, efficient, and enjoyable to use." />
                <Card icon="/images/web.svg" heading="Web & Mobile App" description="Transforming ideas into exceptional web and mobile app experiences." />
                <Card icon="/images/Design.svg" heading="Design & Creative" description="Crafting visually stunning designs that connect with your audience." />
                <Card icon="/images/Development.svg" heading="Development" description="Bringing your vision to life with the latest technology and design trends." />
            </div>
        </div>
    )
}
export default Description;