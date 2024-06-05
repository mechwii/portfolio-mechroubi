"use client";

import Image from "next/image";
import React from "react";


export const Experience_card = ({
    date,
    nomExp,
    text
    }:{
    date:String,
    nomExp:String,
    text:String
    }) => {
    return(
        <div className="flex items-center px-6 space-x-8  rounded-3xl hover:cursor-pointer hover:bg-gray-300  ">
            <div >
                <Image
                    className="p-6 rounded-3xl bg-white"
                    width={600}
                    height={400}
                    src={"/img/entreprise/femto.svg"}
                    alt="Femto St"
                />
            </div>
            <div className="py-8 space-y-8 w-2/5">
                <p className="text-3xl underline underline-offset-[15px]">{date}</p>
                <p className="text-[#473BF0] text-2xl">{nomExp}</p>
                <p className="text-2xl">{text}</p>


            </div>

        </div>
    )


}