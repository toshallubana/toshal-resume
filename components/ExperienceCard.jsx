import { forwardRef } from "react";

const Card = forwardRef(function Card(
    { icon, heading, description, date, place }, 
    ref
) {
    return (
        <div className="bg-grey-dark flex border-[#242424] border-[0.1px] border-solid">
            <div className="pt-[100px] px-[20px] pb-[30px]">
                <p className="">{date}</p>
                <div className="flex">
                    <div className="flex">
                        <img src={icon} className="h-[100px] w-[100px] mt-5"/>
                    </div>
                    <div className="flex flex-col pl-5">
                        <p className="font-bold mt-4">{heading}</p>
                        <p className="text-grey-light mt-4">{description}</p>
                        <p className="text-grey-light mt-4">{place}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
});
export default Card;