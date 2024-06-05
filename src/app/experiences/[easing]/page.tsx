"use client";

import styles from './page.module.css';
import {Navbar} from "@/app/components/ui/navbar";
import {MacbookScroll} from "@/app/components/ui/macbook-scroll";
import React, {useState} from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {Variants} from "framer-motion";
import {motion, PanInfo} from "framer-motion";


//             <div className="mt-16 md:mt-4 sm:px-20 lg:px-52 pb-32">

interface HomeProps {
    params: {
        lang: any;
    };
}


const images = [
    { src: "/img/easing_picture/node.png", x: 0, y: 0 },
    { src: "/img/easing_picture/mongo.png", x: 200, y: 100 },
    { src: "/img/easing_picture/js.png", x: 400, y: 200 },
    { src: "/img/easing_picture/vue.png", x: 600, y: 300 },
    { src: "/img/easing_picture/docker.png", x: 800, y: 400 },
];

const DraggableImage: React.FC<{ src: string; alt: string; width: number; height: number; x: number; y: number }> = ({ src, alt, width, height, x, y }) => {
    const [position, setPosition] = useState({ x, y });

    const handleDragEnd = (event : Event, info: PanInfo) => {
        const newPosition = { x: info.point.x, y: info.point.y };
        setPosition(newPosition);
    };

    return (
        <motion.div
            drag
            dragConstraints={{ left: 0, right: 1300 - width, top: 0, bottom: 800 - height }}
            dragElastic={0.2}
            style={{ x: position.x, y: position.y }}
            onDragEnd={handleDragEnd}
            className="absolute"
        >
            <Image
                width={width}
                height={height}
                src={src}
                alt={alt}
                className="rounded-[230px]"
            />
        </motion.div>
    );
};

const Home: React.FC<HomeProps> = ({params: {lang}}) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-100px 0px",
    });

    const container: Variants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5, // Durée de l'animation
            },
        },
    };


    return (
        <div className="overflow-x-hidden overflow-y-hidden">
            <Navbar/>
            <p className="text-7xl text-center my-16">
                Parlons un peu de <span className="font-bold text-[#6665DD]">Easing !</span>
            </p>
            <div className="relative">
                <MacbookScroll></MacbookScroll>
            </div>
            <div
                className=" bg-[#6665DD] w-screen mt-[-23%]  py-6 ">
                <motion.div
                    className="flex items-center  text-white space-x-12 justify-center"
                    variants={container}
                    initial={{y: -100, opacity: 0}}
                    animate={inView ? "visible" : "hidden"}
                    ref={ref}
                >
                    <h1 className="text-5xl font-bold ">Entreprise</h1>

                    <div className={styles.entreprise_presentation}>
                        <div className={styles.entreprise_top}></div>
                        <div className={styles.entreprise_bottom}></div>
                    </div>
                    <p className="text-[21px] w-1/5">
                        Mon stage s’est déroulé au sein du laboratoire FEMTO-ST,
                        dans le département DISC, avec l'équipe AND, et sous la tutelle
                        de la COMUE UBFC.Ce stage a été supervisé par Monsieur
                        Joseph Azar, dont le soutien et les conseils m'ont été d'une grande aide.
                    </p>


                    <Image
                        width={300}
                        height={300}
                        src={"/img/entreprise/femto_2.png"}
                        alt="Femto St"
                    />
                </motion.div>
            </div>

            <div className="mx-44 my-8 ">

                <div className="my-32 ">
                    <h1 className="text-6xl  text-[#6665DD] font-bold ">Le projet</h1>
                    <div className="flex justify-between mt-16 items-center">
                        <div className="w-[36%] text-2xl">
                            <p>
                                Pendant mon stage, j'ai eu l'opportunité de travailler sur le projet EASING, en
                                collaboration avec l'équipe ELLIAD. Ce projet innovant a pour objectif de créer des
                                maisons temporaires de type Airbnb, spécialement conçues pour les personnes à mobilité
                                réduite.
                            </p>
                            <br/>
                            <p>Ma mission consistait à développer une maquette interactive (web) pour simuler ces
                                maisons intelligentes. </p>
                        </div>

                        <Image
                            width={650}
                            height={650}
                            src={"/img/easing_picture/easing_all_devices.png"}
                            alt="Femto Capture"
                        />
                    </div>
                </div>
            </div>

            <div className=" my-16 bg-[#6665DD] w-screen px-44 py-8 space-y-12">
                    <h1 className="text-6xl text-white font-bold">Technologies utilisées</h1>
                    <h1 className="text-3xl text-white">Essayez d'attraper une technologie et de la bouger.</h1>

                <div className="bg-white m-auto w-[1300px] h-[800px] rounded-3xl relative overflow-hidden">  {images.map((image, index) => (
                    <DraggableImage
                        src={image.src}
                        alt={`Image ${index + 1}`}
                        width={270}
                        height={270}
                        x={image.x}
                        y={image.y}
                    />
                ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
