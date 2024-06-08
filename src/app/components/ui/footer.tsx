"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import styles from "./component.module.css"


import Image from "next/image";
import React from "react";
import {Logo} from "@/app/components/ui/logo";

export const Footer = (() => {
    return (
        <div className="overflow-x-hidden bg-white w-full">

                <Image
                    className=" relative z-10 mb-[-80px] w-full h-1/5"
                    width={1600}
                    height={500}
                    src={"/img/layer/layer_footer.png"}
                    alt="Femto St"
                />

            <div className='relative flex justify-between overflow-hidden z-1 bg-[#24272B] pt-28 pb-32 px-32 text-white'>


                <div className={`space-y-8 w-[25%] ${styles.nameFooter}`}>
                    <Logo></Logo>
                    <div className="flex items-center text-xl space-x-2">
                        <p>M'hammed Mechroubi</p>
                        <FaRegCopyright></FaRegCopyright>
                        <p>2024</p>
                    </div>
                    <p>Portfolio conçu par MECHROUBI M'hammed dans le cadre de la note de stage.</p>
                </div>

                <div className="flex space-x-40 ">
                    <div className="space-y-8">
                        <h1 className={`text-2xl ${styles.contentFooter}`}>Contact</h1>
                        <div className="space-y-6 flex-col text-xl">
                            <p>CV</p>
                            <p>Envoyez un mail</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h1 className={`text-2xl ${styles.contentFooter}`}>Pages</h1>
                        <div className="space-y-6 text-xl">
                            <p>Accueil</p>
                            <p>Expériences</p>
                            <p>Projet</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h1 className={`text-2xl ${styles.contentFooter}`}>Social</h1>
                        <div className="space-y-6 flex-col text-lg">
                            <div className="flex space-x-4 items-center">
                            <FaLinkedin></FaLinkedin>
                                <a><p>Linkedin</p></a>
                            </div>

                            <div className="flex space-x-4 items-center">
                                <FaSquareXTwitter></FaSquareXTwitter>
                                <a><p>Twitter</p></a>
                            </div>

                            <div className="flex space-x-4 items-center">
                                <FaGithub></FaGithub>
                                <a><p>Github</p></a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#24272B] text-white text-lg py-1 border-t-2 border-gray-100-">
                <p className="text-center">Ce site a été fait par M'hammed MECHROUBI en Next, avec l'utilisation du type script.</p>

            </div>


        </div>


    )
})