"use client";

import styles from './page.module.css';
import {Navbar} from "@/app/components/ui/navbar";
import {MacbookScroll} from "@/app/components/ui/macbook-scroll";
import React, {useState} from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {Variants} from "framer-motion";
import {motion, PanInfo} from "framer-motion";
import {Fenetre} from "@/app/components/ui/fenetre";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import {Footer} from "@/app/components/ui/footer";
import {Chatbot} from "@/app/components/ui/chatbot";


//             <div className="mt-16 md:mt-4 sm:px-20 lg:px-52 pb-32">

interface HomeProps {
    params: {
        lang: any;
    };
}

const c1 = {n1:
        ["AC 1.1 Implémenter des conceptions simples : Lors de ma mission de développement front-end, j'ai implémenté des conceptions en utilisant Vue.js, en créant des composants réutilisables pour éviter la redondance du code. Par exemple, j'ai conçu des composants pour afficher les paramètres sous forme de rectangles représentant les températures, l’heure et le type de personne. J'ai également créé des icônes spécifiques pour d’autres paramètres(voir tâche : Mise en place du front-end). Ces composants ont été intégrés de manière à garantir que le site soit responsive et fonctionnel sur différents appareils.",
            'AC 1.2 Élaborer des conceptions simples : Pour élaborer des conceptions simples, j\'ai commencé par créer des maquettes sur Figma. Cela m\'a permis de visualiser et de planifier l\'interface utilisateur avant de commencer le codage (voir tâche : Mise en place du front-end). Ensuite, j’ai travaillé sur la conception du store Pinia, ce qui m\'a permis de gérer efficacement les états de l\'application, notamment les tableaux de données et les fonctions nécessaires pour la carte interactive. En utilisant des frameworks comme Vue.js et Pinia, j\'ai pu créer des structures claires et faciles à maintenir.',
            "AC 1.3 Faire des essais et évaluer leurs résultats en regard des spécifications : J'ai effectué des tests réguliers pour m'assurer que les fonctionnalités développées répondaient aux spécifications. En particulier, pour la partie fonctionnelle avec l’API, j'ai utilisé le few-shot learning pour améliorer les résultats retournés par l’API GPT (voir tâche : Améliorer les résultats retournés par l’API GPT). Je testais les résultats renvoyés par l’API et les ajustais si nécessaire pour répondre aux besoins du rapport ELLIAD. Pour le front-end, j'ai testé plusieurs frameworks pour vérifier leur adéquation aux besoins du projet, comme l'utilisation de Vuetify (que j’ai du enlever car ce n'était pas pertinent), pour la carte interactive Leaflet où j’ai trouvé plus pertinent d’utiliser vue-konvas car avait + d’options sur le mouvement des figures (voir tâche : conception et développement d’une carte interactive) et Toastify pour les notifications, en remplaçant une API RESTful par des sockets pour une meilleure performance (voir tâche : Mise en place du back-end).",
            "AC 1.4 Développer des interfaces utilisateurs : J'ai développé des interfaces utilisateurs en utilisant Vue.js, en veillant à ce qu'elles soient intuitives et accessibles. J'ai mis en place des composants visuels pour afficher divers paramètres, ainsi qu'un menu à droite pour représenter les légendes de la carte (voir tâche : conception et développement d’une carte interactive). J'ai appliqué des principes de design responsive pour garantir une interface ergonomique et esthétique. Par exemple, j'ai implémenté une page de login simple (voir tâche : Mise en place d’une authentification sécurisée) et une page principale comprenant divers paramètres ,un footer, une navbar (voir tâche: Mise en place du front-end) et une carte interactive (voir tâche : Conception et développement d’une carte interactive)"],
    n2 : ["AC 2.1 Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences : J'ai élaboré et mis en œuvre les spécifications fonctionnelles et non fonctionnelles en m'appuyant sur les exigences fournies. Pour la réalisation de la carte interactive, j'ai utilisé le framework Vue-Konva pour reproduire les plans des pièces et les dispositifs présents dans le rapport ELLIAD (voir tâche : Conception et développement d’une carte interactive). En plus de cela, chaque action renvoyée par l’API et interprétée par le front-end.était déduite du rapport ainsi que des différentes réunions avec mon tuteur (voir tâche : Amélioration des résultats retournés par l’IA). Actuellement, je travaille sur la différenciation des actions en fonction des profils utilisateur, suite à une réunion avec l'équipe. De plus, la mise en place du système de login était une exigence directe de mon tuteur.",
        "AC 2.2 Appliquer des principes d’accessibilité et d’ergonomie : Lors de la conception des interfaces, j'ai accordé une attention particulière aux principes d'accessibilité et d'ergonomie pour garantir une utilisation fluide de l'application par un large public. J'ai optimisé les interfaces en utilisant des icônes explicites et des contrôles intuitifs, et en limitant le nombre d'informations affichées à l'écran pour réduire la complexité (voir tâche : Mise en place du front-end et conception et développement d’une carte interactive). Cette approche a permis d'assurer une expérience utilisateur claire et accessible.",
        "AC 2.3 Adopter de bonnes pratiques de conception et de programmation : J'ai adopté des bonnes pratiques de conception et de programmation en commentant le code de manière significative et en favorisant la modularité à travers la création de composants réutilisables. Pour éviter la redondance, j'ai optimisé les algorithmes et simplifié les fonctions redondantes (voir tâche : Mise en place du front end et amélioration des résultats retournés par l’IA). Cette approche a non seulement amélioré la lisibilité du code mais a également contribué à l'efficacité et à la maintenabilité de l'application.",
        "AC 2.4 Vérifier et valider la qualité de l’application par les tests : Bien que je n'aie pas réalisé de tests unitaires ou d'intégration formels, j'ai effectué des tests systématiques à chaque étape du développement. À chaque implémentation, je vérifiais minutieusement les résultats sur la console, et pour les retours de l'API, j'utilisais POSTMAN pour m'assurer de la conformité des données renvoyées (voir tâche : Amélioration des résultats retournés par l’IA et développement d’un chatbot). Bien que ces tests n'étaient pas exhaustifs, ils m'ont permis de valider la qualité de l'application au fur et à mesure de son développement."]}
const c2 =
    {n1: ["AC 1.1 Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données…) : Pour aborder les problèmes de manière méthodique, j'ai adopté une approche de découpage en éléments algorithmiques simples. Par exemple, lorsque je me suis confronté à l'interprétation des résultats renvoyés par l’API GPT, j'ai opté pour l'utilisation de tableaux JSON dans le front-end (voir tâche : Mise en place du back end et amélioration des résultats retournés par l’IA). Cette méthode m'a permis de structurer les données de manière à les rendre plus compréhensibles et exploitables dans l'application. De même, pour la création de la carte interactive, j'ai préféré utiliser un tableau JSON NoSQL pour sa flexibilité et sa facilité d'intégration, après une phase de recherche préliminaire (voir tâche : Mise en place de la base de données).",
            "AC 1.2 Comparer des algorithmes pour des problèmes classiques (tris simples, recherche…) : J'ai réalisé une comparaison approfondie entre différents algorithmes afin d'optimiser les fonctionnalités clés de la carte interactive, notamment pour le zoom et la détection des pièces. Après avoir examiné plusieurs options, j'ai sélectionné les algorithmes les plus efficaces pour garantir les meilleures performances de l'application. Pour le zoom, j'ai simplement ajouté un facteur d'échelle, tandis que pour la détection de pièce, j'ai opté pour une approche basée sur la vérification de l'appartenance du point de dépôt du bonhomme aux coordonnées des pièces, ce qui s'est avéré être une solution efficace (voir tâche : Conception et développement d’une carte interactive).",
            "AC 1.3 Formaliser et mettre en œuvre des outils mathématiques pour l’informatique : J'ai appliqué des outils mathématiques pour résoudre divers problèmes dans l'application. Par exemple, j'ai utilisé des calculs de coordonnées pour positionner avec précision les icônes des actionneurs sur la carte et pour détecter la pièce dans laquelle le bonhomme était déposé. De plus, j'ai utilisé des concepts mathématiques pour implémenter une fonction de zoom efficace (voir tâche : Conception et développement d’une carte interactive). Cette utilisation judicieuse des outils mathématiques a contribué à la fonctionnalité et à la précision de l'application."],
    n2 :["AC 2.1 Choisir des structures de données complexes adaptées au problème : Dans le cadre de mon travail, j'ai opté pour des structures de données complexes telles que les tableaux JSON pour stocker les informations sur les pièces et les dispositifs. Cette décision s'est avérée judicieuse car elle m'a permis de manipuler efficacement les données spécifiques à chaque pièce et dispositif (voir tâche : Mise en place de la base de donnée). Contrairement à une base de données relationnelle, l'utilisation de tableaux JSON était plus appropriée dans ce contexte, car chaque pièce possède des dispositifs différents, ce qui rendait la structure flexible et adaptable aux besoins variables de l'application.",
        "AC 2.2 Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex. recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielle…) : Pour résoudre des problèmes complexes, j'ai fait appel à des techniques algorithmiques avancées. Par exemple, j'ai conçu un algorithme de zoom spécifique pour la carte interactive, qui offrait à la fois une fonctionnalité précise et des performances optimisées (voir tâche : Conception et développement de la carte interactive). De plus, j'ai optimisé les calculs pour garantir une exécution rapide et efficace de l'application, contribuant ainsi à une expérience utilisateur fluide et réactive. En plus de cela pour le chatbot je devais effectuer un filtre en fonction d’un prompt, trop complexe car on ne peut pas prédire un prompt, j’ai donc utilisé l’API de OPEN AI qui elle a dans un premier temps filtrer les données en fonction du prompt, puis qui a par la suite utilisé ces donnée (voir tâche : Mise en place d’un chatbot).",
        "AC 2.3 Comprendre les enjeux et moyens de sécurisation des données et du code : J'ai mis en place un système d'authentification sécurisé en utilisant des technologies telles que MySQLite et JWT (JSON Web Tokens). En plus de sécuriser les requêtes REST et Socket, j'ai implémenté des middlewares pour vérifier les tokens, assurant ainsi que seules les requêtes authentifiées étaient autorisées à accéder aux données et aux fonctionnalités de l'application (voir tâche :Mise en place d’une authentification sécurisée). Cette approche a renforcé la sécurité globale du système en protégeant les données sensibles et en prévenant les accès non autorisés.",
        "AC 2.4 Évaluer l’impact environnemental et sociétal des solutions proposées : Bien que cette compétence n'ait pas été directement intégrée dans mon travail, j'ai pris des mesures pour optimiser les perfomances de l'application."]}

const images = [
    { src: "/img/easing_picture/node.png", x: 25, y: 0 },
    { src: "/img/easing_picture/mongo.png", x: 150, y: 100 },
    { src: "/img/easing_picture/js.png", x: 350, y: 200 },
    { src: "/img/easing_picture/vue.png", x: 500, y: 300 },
    { src: "/img/easing_picture/docker.png", x: 650, y: 400 },
    { src: "/img/easing_picture/open_ai.jpg", x: 800, y: 500 },

];

type MenuProps = {
    title: string;
    items1: string[];
    items2: string[];
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

const Menu: React.FC<MenuProps> = ({ title, items1, items2, isOpen, color, onToggle }) => {
    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            style={{ backgroundColor: color }}
            className="menu w-[60vw] h-[200px] rounded-3xl text-white my-12"
        >
            <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={onToggle}
                className="w-full h-full flex items-center justify-between space-x-12 font-bold px-8 text-3xl"
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
                    <svg width="25" height="2ZZ5" viewBox="0 0 20 20" fill="white">
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
                style={{ backgroundColor: "rgb(102,101,221,15%)", pointerEvents: isOpen ? "auto" : "none" }}
                className="text-start text-xl px-12 py-8 my-4 space-y-6"
            >
                <h1 style={{color: "rgb(102,101,221,75%)" }} className="text-3xl font-bold">Niveau 1 :</h1>
                {items1.map((item, index) => (
                    <motion.li key={index} variants={itemVariants} style={{backgroundColor: color}} className="p-2 text-white rounded-lg shadow-sm">
                        {item}
                    </motion.li>
                ))}
                <h1 style={{color: "rgb(102,101,221,75%)" }} className="text-3xl  font-bold">Niveau 2 :</h1>
                {items2.map((item, index) => (
                    <motion.li key={index} variants={itemVariants} style={{backgroundColor: color}} className="p-2 text-white rounded-lg shadow-sm">
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
            <Chatbot></Chatbot>
            <p className="text-7xl text-center my-16">
                Parlons un peu de <span className="font-bold text-[#6665DD]">Easing !</span>
            </p>
            <div className="relative mb-[500px]">
                <MacbookScroll></MacbookScroll>
            </div>
            <div
                className=" bg-[#6665DD] w-screen py-6 mt-[-40vh] ">
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

            <div className="mx-36 my-8 ">

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

            <div className=" my-16 bg-[#6665DD] w-screen px-[100px] py-8 space-y-12">
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
            <div className="mx-36 mb-28">
                <h1 className="text-6xl  text-[#6665DD] font-bold pb-8 ">Compétences sollicitées</h1>
                <div className="flex-col space-x-[25vw] justify-center">
                    <Menu
                        title="Réaliser un développement d’application"
                        items1={c1.n1}
                        items2={c1.n2}
                        isOpen={isOpen.menu1}
                        color="#6665DD"
                        onToggle={() => handleToggle('menu1')}
                    />
                    <div style={{marginTop: isOpen.menu1 ? '215%' : '7%'}}>
                        <Menu
                            title="Optimiser des applications"
                            items1={c2.n1}
                            items2={c2.n2}
                            isOpen={isOpen.menu2}
                            color="#9B9ECE"
                            onToggle={() => handleToggle('menu2')}
                        />
                    </div>
                </div>
            </div>
            <div style={{marginTop: isOpen.menu2 ? '155%' : '0'}}
                 className="w-full h-[1200px] text-center bg-[#6665DD] px-[200px] py-10 space-y-12">
                <div className="space-y-4">
                    <h1 className="text-6xl  text-white font-bold ">Tâches accomplies</h1>
                    <h1 className="text-3xl  text-white ">Cliquez sur une tâche pour pouvoir voir les détails de la tâche.</h1>

                </div>


                <Fenetre></Fenetre>
            </div>
{/*            <div className="mx-36 mt-12">
                <h1 className=" text-6xl text-start  text-[#6665DD] font-bold pb-8 ">Compétences</h1>
                <div className="mx-24">
                    <h1 className=" text-4xl text-start  text-[#6665DD] font-bold pb-8 ">Compétences 1</h1>
                    <ul
                        className="text-start text-xl px-12 space-y-4 overflow-y-auto flex-grow"
                    >
                        {c1.map((item, index) => (
                            <li key={index}
                                className="p-2 bg-[#6665DD] text-white rounded-lg shadow-sm">
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="mx-24 mt-12">
                    <h1 className=" text-4xl text-start  text-[#6665DD] font-bold pb-8 ">Compétences 2</h1>

                    <ul
                        className="text-start text-xl px-12 space-y-4 overflow-y-auto flex-grow"
                    >
                        {c2.map((item, index) => (
                            <li key={index}
                                className="p-2 bg-[#6665DD] text-white rounded-lg shadow-sm">
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>

            </div>*/}
            <div className="mx-36 mt-12">
                <h1 className=" text-6xl text-center  text-[#6665DD] font-bold pb-8 ">Accéder au projet</h1>

                <div className="mt-16 space-y-12 items-center mx-36">

                    <a className="flex space-x-8 px-8 py-8 bg-gray-600 text-3xl text-white justify-center  rounded-2xl hover:cursor-pointer hover:opacity-75"
                       href="https://github.com/mhammeDev/EASING" target="_blank">
                        <FaGithub/>
                        <p className="e ">Github</p>
                    </a>

                    <a className="flex space-x-8 px-8 py-8 bg-blue-700 text-3xl text-white justify-center  rounded-2xl hover:cursor-pointer hover:opacity-75"
                       href="https://hub.docker.com/repository/docker/mhammedev/easingproject/" target="_blank">
                        <FaDocker/>
                        <p className="text-3xl text-white ">Docker</p>
                    </a>

                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default Home;
