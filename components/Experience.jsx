import clsx from "clsx";
import ExperienceCard from './ExperienceCard';

const Education = () => {
    const isLast = true
    return (
        <div className="px-20 lg:px-15 md:px-10 mb-20">
            <div className="flex justify-center text-center">
                <p className="text-6xl md:text-4xl sm:text-2xl">Experience</p>
            </div>
            
            <div className="mt-20 md:mt-10 grid grid-cols-3 gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                <ExperienceCard icon="/images/avizva.png" date="janurary 2021 - present" heading="Software Engineer" description="Avizva,(Full time)" place="Gurgoan, india" />
                <ExperienceCard icon="/images/shinedezign.png" date="janurary 2020 - janurary 2021" heading="Software Engineer" description="ShineDezign,(Full time)" place="Mohali, india" />
                <ExperienceCard icon="/images/busibud.jpeg" date="october 2019 - janurary 2020" heading="Junior Frontend Engineer" description="Busibud,(Full time)" place="Mohali, india" />
            </div>
        </div>
    )
}
export default Education;