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

const c1 = ["AC 1.1 Implémenter des conceptions simples", 'AC 1.2 Élaborer des conceptions simples', "AC 1.3 Faire des essais et évaluer leurs résultats en regard des spécifications", "AC 1.4 Développer des interfaces utilisateurs", "AC 2.1 Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences", "AC 2.2 Appliquer des principes d’accessibilité et d’ergonomie", "AC 2.3 Adopter de bonnes pratiques de conception et de programmation", "AC 2.4 Vérifier et valider la qualité de l’application par les tests"]
const c2 = ["AC 1.1 Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données…)", "AC 1.2 Comparer des algorithmes pour des problèmes classiques (tris simples, recherche…)", "AC 1.3 Formaliser et mettre en œuvre des outils mathématiques pour l’informatique", "AC 2.1 Choisir des structures de données complexes adaptées au problème", "AC 2.2 Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex. recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielle…)", "AC 2.3 Comprendre les enjeux et moyens de sécurisation des données et du code","AC 2.4 Évaluer l’impact environnemental et sociétal des solutions proposées"]

const images = [
    { src: "/img/easing_picture/node.png", x: 0, y: 0 },
    { src: "/img/easing_picture/mongo.png", x: 200, y: 100 },
    { src: "/img/easing_picture/js.png", x: 400, y: 200 },
    { src: "/img/easing_picture/vue.png", x: 600, y: 300 },
    { src: "/img/easing_picture/docker.png", x: 800, y: 400 },
];

type MenuProps = {
    title: string;
    items: string[];
    isOpen: boolean;
    color:string;
    onToggle: () => void;
};

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
    },
    closed: {
        opacity: 0,
        y: -20,
    },
};

const Menu: React.FC<MenuProps> = ({ title, items, isOpen, color, onToggle }) => {
    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            style={{ backgroundColor: color }}
            className="menu w-[1000px] h-[130px] rounded-3xl text-white my-12"
        >
            <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={onToggle}
                className="w-full h-full flex items-center justify-center space-x-12 font-bold px-4 text-2xl"
            >
                {title}
                <motion.div
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                >
                    <svg width="15" height="15" viewBox="0 0 20 20" fill="white">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </motion.div>
            </motion.button>
            <motion.ul
                variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05,
                        },
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3,
                        },
                    },
                }}
                style={{ backgroundColor: color, pointerEvents: isOpen ? "auto" : "none" }}
                className="text-start text-xl px-12 py-8 my-4 space-y-4"
            >
                {items.map((item, index) => (
                    <motion.li key={index} variants={itemVariants}>
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.nav>
    );
};


const DraggableImage: React.FC<{key:number; src: string; alt: string; width: number; height: number; x: number; y: number }> = ({ src, alt, width, height, x, y }) => {
    const [position, setPosition] = useState({ x, y });


    const handleDragEnd = (event : Event, info: PanInfo) => {
        const newPosition = { x: info.point.x, y: info.point.y };
        setPosition(newPosition);

    };


    return (
        <motion.div
            drag
            dragConstraints={{ left: 0, right: 1100 - width, top: 0, bottom: 780 - height }}
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

    const [isOpen, setIsOpen] = useState({ menu1: false, menu2: false });

    const handleToggle = (menu: 'menu1' | 'menu2') => {
        setIsOpen((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };


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
        <div className="overflow-x-hidden overflow-y-hidden bg-white text-black">
            <Navbar/>
            <p className="text-7xl text-center my-16">
                Parlons un peu de <span className="font-bold text-[#6665DD]">Easing !</span>
            </p>
            <div className="relative mb-[500px]">
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

            <div className=" my-16 bg-[#6665DD] w-screen px-[200px] py-8 space-y-12">
                    <h1 className="text-6xl text-white font-bold">Technologies utilisées</h1>
                    <h1 className="text-3xl text-white">Essayez d'attraper une technologie et de la bouger.</h1>

                <div className="bg-white m-auto w-[1100px] h-[800px] rounded-3xl relative overflow-hidden">  {images.map((image, index) => (
                    <DraggableImage
                        key={index}
                        src={image.src}
                        alt={`Image ${index + 1}`}
                        width={250}
                        height={250}
                        x={image.x}
                        y={image.y}
                    />
                ))}
                </div>
            </div>
            <div className="mx-44 my-8 h-[900px] ">
                <h1 className="text-6xl  text-[#6665DD] font-bold ">Compétences sollicitées</h1>
                <div className="flex-col space-x-72">
                    <Menu
                        title="Réaliser un développement d’application"
                        items={c1}
                        isOpen={isOpen.menu1}
                        color="#6665DD"
                        onToggle={() => handleToggle('menu1')}
                    />
                    <div style={{marginTop: isOpen.menu1 ? '45%' : '0'}}>
                        <Menu
                            title="Optimiser des applications"
                            items={c2}
                            isOpen={isOpen.menu2}
                            color="#9B9ECE"
                            onToggle={() => handleToggle('menu2')}
                        />
                    </div>
                </div>
            </div>

            <div style={{marginTop: isOpen.menu1 ? '45%' : '0'}} className="w-full h-[600px] bg-[#6665DD]">

            </div>

        </div>
    );
};

export default Home;
