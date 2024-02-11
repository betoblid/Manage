import React from "react";

interface CardAboutProps {

    id: string,
    title: string,
    description: string
}

const CardAbout = ({description, id, title}: CardAboutProps) => {
    return(
        <div className="md:my-8 relative my-10 w-[390px] mx-auto w-full ">
            <div className="flex gap-3 items-center my-5 md:my-0">

                   <h4 className="text-zinc-50 font-bold bg-Bright-Red px-4 py-2 rounded-2xl md:relative md:left-0 absolute -left-16">
                    {id}
                    </h4>
                    <h3 className="font-bold text-lg text-Very-Dark-Blue">{title}</h3>
                </div>
            <div>
               
                <p className="text-Dark-Grayish-Blue">
                    {description}
                </p>
            </div>
            
        </div>
    );
}

export default CardAbout;