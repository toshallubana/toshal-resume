import { forwardRef } from "react";

const Card = forwardRef(function Card(
    { icon, heading, description }, 
    ref
) {
    return (
        <div className="items-center bg-grey-dark flex border-[#242424] border-[0.1px] border-solid">
            <div className="flex flex-col pt-[140px] px-[20px] pb-[30px]">
                <img src={icon} className="h-[35px] w-[35px]"/>
                <p className="font-bold mt-4">{heading}</p>
                <p className="text-grey-light mt-4">{description}</p>
            </div>
        </div>
    )
});
export default Card;