// components/Fenetre.tsx
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import React, { useState } from 'react';
import { MdCancel } from "react-icons/md";
import styles from "./component.module.css"

const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
];

const items = ["AC 1.1 Implémenter des conceptions simples", 'AC 1.2 Élaborer des conceptions simples', "AC 1.3 Faire des essais et évaluer leurs résultats en regard des spécifications", "AC 1.4 Développer des interfaces utilisateurs", "AC 2.1 Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences", "AC 2.2 Appliquer des principes d’accessibilité et d’ergonomie", "AC 2.3 Adopter de bonnes pratiques de conception et de programmation", "AC 2.4 Vérifier et valider la qualité de l’application par les tests"]
const items2 = ["AC 1.1 Implémenter des conceptions simples", 'AC 1.2 Élaborer des conceptions simples', "AC 1.3 Faire des essais et évaluer leurs résultats en regard des spécifications"]


interface RectangleProps {
    id: number;
    name: string;
    onClick: (id: number) => void;
}

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
            duration: 0.3
        }
    },
    closed: {
        opacity: 0,
        y: -20,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const listVariants = {
    open: {
        clipPath: "inset(0% 0% 0% 0% round 10px)",
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.8,
            delayChildren: 0.3,
            staggerChildren: 0.1,
        },
    },
    closed: {
        clipPath: "inset(10% 50% 90% 50% round 10px)",
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.5,
        },
    },
};

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
    })
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

const ImageSlider: React.FC = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="relative w-full h-[240px]">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute w-full h-full object-cover"
                />
            </AnimatePresence>
            <div className={styles.prev} onClick={() => paginate(-1)}>
                {"‣"}
            </div>
            <div className={styles.next} onClick={() => paginate(1)}>
                {"‣"}
            </div>
        </div>
    );
};

const Rectangle: React.FC<RectangleProps> = ({ id, name, onClick }) => (
    <motion.div
        className="w-[480px] h-[180px] px-12 bg-white rounded-lg flex items-center justify-center cursor-pointer shadow-md text-2xl"
        onClick={() => onClick(id)}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        {name}
    </motion.div>
);

export const Fenetre: React.FC = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const data = [
        {id:0, title: "Mise en place du front end"},
        {id:1, title: "Conception et développement d’une carte interactive"},
        {id:2, title: "Modélisation de la base de donnée"},
        {id: 3, title: "Mise en place du backend"},
        {id:4, title: "Améliorer les résultats retournés par l'IA"},
        {id:5, title: "Développement d’un chatbot"},
        {id:6, title: "Mise en place d’un système d’authentification sécurisé"},
        {id:7, title: "Dockerisation de l'application"},
    ]

    const handleClick = (id: number) => {
        setSelectedId(id);
    };

    const handleClose = () => {
        setSelectedId(null);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 gap-x-16 gap-y-12">

                {data.map((item, index) => (
                    <Rectangle key={item.id + 1} id={item.id} name={item.title} onClick={handleClick} />
                ))}
            </div>

            <AnimatePresence>
                {selectedId !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    >
                        <motion.div
                            className="bg-white rounded-3xl shadow-lg w-full max-w-2xl mx-auto h-[80vh] flex flex-col"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="bg-gray-800 text-white p-4 flex justify-between items-center rounded-t-3xl  ">
                                <h2 className="text-lg">{data[selectedId].title}</h2>
                                <button onClick={handleClose}>
                                    <MdCancel className="h-6 w-6 text-red-500" />
                                </button>
                            </div>


                            <div className="pb-4 flex-grow overflow-y-auto">

                                <div className="w-full bg-[#6665DD] p-4 my-6">
                                    <p className="text-start text-white">
                                        <span className="font-bold">Objectif :</span> Développer l'interface utilisateur
                                        de la maquette web du projet EASING, en
                                        s'assurant qu'elle est interactive, responsive et répond aux besoins des
                                        utilisateurs.
                                    </p>
                                </div>
                                <div className="px-6 space-y-12">

                                    <ImageSlider/>
                                    <div>
                                        <h1 className="text-start text-3xl font-bold text-[#6665DD]">Tâches
                                            réalisées</h1>
                                        <motion.ul
                                            variants={listVariants}
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            className="text-start text-xl px-12 py-8 space-y-4 overflow-y-auto flex-grow"
                                        >
                                            {items.map((item, index) => (
                                                <motion.li key={index} variants={itemVariants}
                                                           className="p-2 bg-gray-100 rounded-lg shadow-sm">
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </motion.ul>

                                    </div>
                                </div>


                                <div className="bg-[rgb(102,102,221,85%)] py-8">
                                        <h1 className="text-start text-3xl font-bold text-white px-6">Difficultés</h1>
                                        <motion.ul
                                            variants={listVariants}
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            className="text-start text-xl px-12 py-8 space-y-4 overflow-y-auto flex-grow"
                                        >
                                            {items2.map((item, index) => (
                                                <motion.li key={index} variants={itemVariants}
                                                           className="p-2 bg-white rounded-lg shadow-sm">
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </motion.ul>

                                    </div>
                                <div className="px-6 mb-6 ">

                                    <h1 className="text-start text-3xl font-bold text-[#6665DD] py-8">Compétences sollicités</h1>
                                        <motion.ul
                                            variants={listVariants}
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            className="text-start text-xl px-12 space-y-4 overflow-y-auto flex-grow"
                                        >
                                            <p className="ml-[-1.3vw] text-[#6665DD] font-bold text-2xl">Compétence 1 :</p>
                                            {items.map((item, index) => (
                                                <motion.li key={index} variants={itemVariants}
                                                           className="p-2 bg-[#6665DD] text-white rounded-lg shadow-sm">
                                                    {item}
                                                </motion.li>
                                            ))}

                                            <p className="font-bold text-[rgb(102,102,221,85%)] ml-[-1.3vw] pt-8 text-2xl">Compétence
                                                2</p>

                                            {items2.map((item, index) => (
                                                <motion.li key={index} variants={itemVariants}
                                                           className="p-2 bg-[rgb(102,102,221,85%)] text-white rounded-lg shadow-sm">
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Fenetre;
