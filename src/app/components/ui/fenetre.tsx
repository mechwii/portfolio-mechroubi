// components/Fenetre.tsx
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import React, { useState } from 'react';
import { MdCancel } from "react-icons/md";
import styles from "./component.module.css"

const images = ["https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png", "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"];

const items = ["AC 1.1 Implémenter des conceptions simples", 'AC 1.2 Élaborer des conceptions simples', "AC 1.3 Faire des essais et évaluer leurs résultats en regard des spécifications", "AC 1.4 Développer des interfaces utilisateurs", "AC 2.1 Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences", "AC 2.2 Appliquer des principes d’accessibilité et d’ergonomie", "AC 2.3 Adopter de bonnes pratiques de conception et de programmation", "AC 2.4 Vérifier et valider la qualité de l’application par les tests"]
const items2 = ["AC 1.1 Implémenter des conceptions simples", 'AC 1.2 Élaborer des conceptions simples', "AC 1.3 Faire des essais et évaluer leurs résultats en regard des spécifications"]



const data = [
    {id:0, title: "Mise en place du front end", objectif: "Développer l'interface utilisateur de la maquette web du projet EASING, en s'assurant qu'elle est interactive, responsive et répond aux besoins des utilisateurs.", difficulte:["Compréhension et utilisation de vue3.", "Inspiration du début pour créer le design du site.", "Optimisation de certaines fonction pour éviter des redondances complexes."], taches: ["Création de la maquette sur Figma.", "Conception du store avec l'utilisation de pinia pour gérer les tableaux de données et les fonctions de la carte interactive.", "Mise en place des sockets côté client.", "Développement du site responsive.", "Compréhension et utilisation du framework toastify pour les notifications.", "Bonnes pratiques du code, avec la création de composant réutilisable pour éviter la redondance, mais aussi en commentant toutes parties algorithmiques.", "Création et optimisation de fonction algorithmique afin de mettre a jour des parties du tableaux en fonction d'un evénement, mais aussi pour mettre à jour en fonction de si les capteurs sont visibles ou non."] ,c1: ["AC 1.1 : Implémenter des conceptions simples", "AC 1.2 Élaborer des conceptions simples", "AC 1.4 : Développer des interfaces utilisateurs", "AC 2.2 : Appliquer des principes d’accessibilité et d’ergonomie", "AC 2.3 : Adopter de bonnes pratiques de conception et de programmation", "AC 2.4 : Vérifier et valider la qualité de l’application par les tests"], c2: ["AC 1.1 : Analyser un problème avec méthode"],images : ["/img/taches/1/figma_maquet_tache1.png","/img/taches/1/pinia_tache1.png", "/img/taches/1/composant_tache1.png","/img/taches/1/site_tache1.png","/img/taches/1/socket_tache1.png", "/img/taches/1/comment_tache1.png"]},
    {id:1, title: "Conception et développement d’une carte interactive", objectif: "Créer une carte interactive représentant les pièces et dispositifs de la maison intelligente présente dans le rapport ELIAD, permettant aux utilisateurs de visualiser et d'interagir avec les différents éléments en temps réel." ,difficulte:["Compréhension du framework vue-konva.", "Algorithme pour détecter la pièce le petit bonhomme est posé +  empêcher bonhomme de dépasser la zone de la maison.", "Algorithme de zoom empêcher de dépasser de loin la maison."], taches: ["Création d'un tableau JSON contenant toutes les informations de chaque pièces, avec les coordonnées pour pouvoir faire la carte interactive.", "Reproduction de la carte présente dans le rapport de l'équipe ELIAD, avec l'utilisation du framework vue-konva.", "Implémentation d'un personnage (type google map) qu’on peut déplacer et déposer sur la carte interactive. Création et optimisation d'algorithme pour calculer les coordonnées de dépot du personnage et identifier la pièce ou il est déposé grâce aux points de la pièce.", "Implémentation d'une logique et d'un algorithme pour pouvoir zoomer.", "Optimisation de la carte en utilisant des variables pour faciliter les changements de code (surtout pour la responsivité et le zoom), mais aussi en optimisant au maximum les algorithmes et en les commentant.", "Implémentation d'un menu visuel à droite de la carte afin de pouvoir zoomer/dézoomer, changer d'étage et avoir la légende des différents capteurs/actionneurs visuels." ] ,c1: ["AC 1.1 : Implémenter des conceptions simples", "AC 1.3 Faire des essais et évaluer leurs résultats en regard des spécifications","AC 1.4 : Développer des interfaces utilisateurs","AC 2.1 Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences" ,"AC 2.2 : Appliquer des principes d’accessibilité et d’ergonomie"], c2: ["AC 1.2 : Analyser un problème avec méthode","AC 1.3 : Formaliser et mettre en œuvre des outils mathématiques pour l’informatique" ,"AC 2.2 Comparer des algorithmes pour des problèmes classiques (tris simples recherche…)"], images : ["/img/taches/2/eliad_tache2.png","/img/taches/2/map_tache2.png","/img/taches/2/json_tache1.png","/img/taches/2/var_tache2.png","/img/taches/2/menu_tache2.png","/img/taches/2/zoom_tache2.png"]},
    {id:2, title: "Modélisation de la base de donnée", objectif: "Concevoir et optimiser une base de données NoSql, la base de données pour le projet EASING afin de stocker et gérer efficacement les données." ,difficulte:["Pas de difficultés particulières."], taches: ["Mise en place d'une base de donnée en utilisant MongoDB, qui se base sur des JSON crées auparavant et représentant : les pièces, actionneurs, capteurs et actions.", "Organisation logiques et efficaces des données pour rester au maximum logique, mais aussi pour les différents filtres."] ,c1: ["AC 2.1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences","AC 2.3 : Adopter de bonnes pratiques de conception et de programmation"], c2: ["AC 1.1 : Analyser un problème avec méthode", "AC 2.1 : Choisir des structures de données complexes adaptées au problème"], images : ["/img/taches/3/db1_tache3.png", "/img/taches/3/db2_tache3.png"]},
    {id: 3, title: "Mise en place du backend", objectif: "Développer le backend pour le projet EASING, incluant la connexion à la base de données, la gestion des événements en temps réel via les sockets, et la mise en place d'une API RESTful pour interagir avec les services, notamment ChatGPT." ,difficulte:["Pas de difficultés particulières."], taches: ["Mise en places des fonctions pour se connecter à la base de donnée MongoDB.", "Mise en place des sockets côté serveur.", "Création d'une API REST avec la création et mise en place des services, middlewares et controllers.", "Utilisation du framework Langchain pour se connecter à l'API de OPEN AI, et mise en place des fonctions pour l'utiliser.", "Création d'évenements avec les sockets pour faire des requêtes à GPT, et initialisation des prompts en fonction de l'évenement."] ,c1: ["AC 1.1 : Implémenter des conceptions simples", "AC 2.1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences", "AC 2.3 : Adopter de bonnes pratiques de conception et de programmation", "AC 2.4 : Vérifier et valider la qualité de l’application par les tests"], c2: ["AC 1.1 : Analyser un problème avec méthode"], images : ["/img/taches/4/schema_tache4.png", "/img/taches/4/db_tache4.png", "/img/taches/4/socket2_tache4.png", "/img/taches/4/socket1_tache4.png", "/img/taches/4/controller_tache4.png",  "/img/taches/4/service_tache4.png"]},
    {id:4, title: "Améliorer les résultats retournés par l'IA", objectif: "Optimiser les résultats fournis par l'API GPT en améliorant les prompts via le prompt engineering et le few-shot learning, tout en réduisant la complexité des requêtes envoyées à l'API." ,difficulte:["Améliorer la fiabilité de l'IA en raccourcissant la taille du prompt, mais tout en étant le plus précis.", "Savoir quelle type de donnée envoyé.", "Few shots learning : Savoir avec quels cas l'entrainer, sous la bonne forme."], taches: ["Documentation sur le prompt engineering et le few-shot learning", "Few shots learning : Création de cas d'entrainements sous forme de tableau JSON afin de d'améliorer la fiabilité de GPT.", "Amélioration constante du prompt en fonction des précédents résultats.", "Mise en place de fonction de filtrage en fonction de l'entrée pour réduire la taille de la requête et améliorer la fiabilité.","Optimisation du code en utilisant des fonctions génériques notamment pour le filtrages, et en commentant le code."] ,c1: ["AC 1.1 : Analyser un problème avec méthode", "AC 2.3 : Adopter de bonnes pratiques de conception et de programmation", "AC 2.4 : Vérifier et valider la qualité de l’application par les tests"], c2: ["AC 1.1 : Analyser un problème avec méthode", "AC 2.1 : Choisir des structures de données complexes adaptées au problème", "AC 2.2 : Utiliser des techniques algorithmiques adaptées pour des problèmes complexes"],images : ["/img/taches/5/train_tache5.png", "/img/taches/5/terminal_tache5.png", "/img/taches/5/Fcas_tache5.png", "/img/taches/5/Faction_tache5.png"]},
    {id:5, title: "Développement d’un chatbot", objectif: " Implémenter un chatbot interactif et intelligent pour le projet EASING, capable de fournir des logs, des recommandations et de gérer des conversations en temps réel en utilisant les capacités de l'API GPT." ,difficulte:["Logique pour que l'API + IA retournent le résultat voulu suite à une interaction avec l'utilisateur.", "Front-end : Faire descendre systematiquement les messages à chaque fois qu'il y'a un nouveau message."], taches: ["Conception et implémentation visuel d'un assistant de chat contenant 3 modes : chat, recommandations et logs. Avec l'ajouts des fonctions reliées dans le store, et la création de nouveaux évènements sockets.", "Logs : Création d'une collection MongoDB pour les stocker, et implémentation des fonctions associées dans le back-end pour les générer et les envoyer au front-end.","Recommandations : Développement d'un service utilisant GPT poru fournir des recommandations d'actions, et modification du retour initial pour intégrer ces recommandations.", "Chat : Création de cas d'entrainements spécifiques, avec la création aussi de fonctions qui enchainent des requêtes (filtrer avec GPT dans un premier temps, puis lui envoyer la vraie requête)."] ,c1: ["AC 1.4 : Développer des interfaces utilisateurs", "AC 2.1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences", "AC 2.3 : Adopter de bonnes pratiques de conception et de programmation"], c2: ["AC 1.1 : Analyser un problème avec méthode", "AC 2.2 : Utiliser des techniques algorithmiques adaptées pour des problèmes complexes"],images : ["/img/taches/6/chat1_tache6.png", "/img/taches/6/chat2_tache6.png",  "/img/taches/6/train_tache6.png","/img/taches/6/controller_tache6.png","/img/taches/6/socket_tache6.png"]},
    {id:6, title: "Mise en place d’un système d’authentification sécurisé", objectif: "Développer et implémenter un système d’authentification sécurisé pour le projet EASING, garantissant que seules les personnes autorisées peuvent accéder aux fonctionnalités de l’application." , difficulte:["Pas de difficultés particulières."], taches: ["Création des schémas pour la base de donnée, et utilisation de MySQLite pour stocker les informations des utilisateurs.", "Création et mise en place des controllers, middlewares, services et routeurs pour gérer la connexion et les vérifications côté backend.", "Mise en place de fonction pour générer et vérifier les tokens grâce à JWT.", "Sécurisation des requêtes en ajoutant une verification sur le token stocké en tête", "Conception et implémentation d’une page d'authentification responsive dans le frontend.", "Création d'un store pinia pour stocker les informations de l'utilisateur courant et le maintenir connecté en cas de rafraichissement.", "Mise en place d'une vérification de le router côte front-end pour rediriger les utilisateurs non-connectés."] ,c1: ["AC 1.1 : Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences", "AC 1.3 : Adopter de bonnes pratiques de conception et de programmation", "AC 1.4 : Vérifier et valider la qualité de l’application par les tests"], c2: ["AC 2.3 : Comprendre les enjeux et moyens de sécurisation des données et du code"],images : ["/img/taches/7/login_tache7.png","/img/taches/7/sqlite_tache7.png","/img/taches/7/jwt_2_tache7.png","/img/taches/7/jwt_tache7.png","/img/taches/7/store_tache7.png"]},
    {id:7, title: "Dockerisation de l'application", objectif: "Dockeriser l'application dans le but de simplifier le lancement de l'application pour chaque utilisateur." , difficulte:["Compréhension du fonctionnement de docker.", "Faire en sorte que la base de donnée du container soit initialisée."], taches: ["Adaptation du back-end au dossier dist du front-end.", "Compréhension et création des fichiers Docker et Docker compose.", "Contenerisation de la base de donnée, et de l'application. Création de l'image de l'application et mise en ligne sur Docker Hub.", "Création d'un script js pour pouvoir initialiser au premier lancement la base de donnée avec Docker."] ,c1: ["Pas réellement en rapport avec cette compétence"], c2: ["Pas réellement en rapport avec cette compétence"], images : ["/img/taches/8/docker_tache8.png", "/img/taches/8/dockerCompose_tache8.png","/img/taches/8/initDocker_tache8.png"]},
]


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

const Rectangle: React.FC<RectangleProps> = ({ id, name, onClick }) => (
    <motion.div
        className="w-[450px] h-[180px] px-12 bg-white rounded-lg flex items-center justify-center cursor-pointer shadow-md text-2xl"
        onClick={() => onClick(id)}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        {name}
    </motion.div>
);

export const Fenetre: React.FC = () => {
    const [selectedId, setSelectedId] = useState(-1);

    const handleClick = (id: number) => {
        setSelectedId(id);
    };

    const handleClose = () => {
        setSelectedId(-1);
    };

    const [[page, direction], setPage] = useState([0, 0]);


    const imageIndex = wrap(0, data[selectedId] ? data[selectedId].images.length :  3, page); //put image max

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 gap-x-16 gap-y-12">

                {data.map((item, index) => (
                    <Rectangle key={item.id + 1} id={item.id} name={item.title} onClick={handleClick} />
                ))}
            </div>

            <AnimatePresence>
                {selectedId !== -1 && (
                    <motion.div
                        className="fixed z-[1000] inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    >
                        <motion.div
                            className="bg-white rounded-3xl shadow-lg w-full max-w-4xl mx-auto h-[80vh] flex flex-col"
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
                                        <span className="font-bold">Objectif :</span> {data[selectedId].objectif}
                                    </p>
                                </div>
                                <div className="px-6 space-y-12">

                                    <div className="relative w-full h-[430px] border-2 bg-gray-100">
                                        <AnimatePresence initial={false} custom={direction}>
                                            <motion.img
                                                key={page}
                                                src={data[selectedId].images[imageIndex]}
                                                custom={direction}
                                                variants={variants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                transition={{
                                                    x: {type: "spring", stiffness: 300, damping: 30},
                                                    opacity: {duration: 0.2}
                                                }}
                                                drag="x"
                                                dragConstraints={{left: 0, right: 0}}
                                                dragElastic={1}
                                                onDragEnd={(e, {offset, velocity}) => {
                                                    const swipe = swipePower(offset.x, velocity.x);

                                                    if (swipe < -swipeConfidenceThreshold) {
                                                        paginate(1);
                                                    } else if (swipe > swipeConfidenceThreshold) {
                                                        paginate(-1);
                                                    }
                                                }}
                                                className="absolute w-full h-full object-contain"
                                            />
                                        </AnimatePresence>
                                        <div className={styles.prev} onClick={() => paginate(-1)}>
                                            {"‣"}
                                        </div>
                                        <div className={styles.next} onClick={() => paginate(1)}>
                                            {"‣"}
                                        </div>
                                    </div>

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
                                            {data[selectedId].taches.map((item, index) => (
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
                                        {data[selectedId].difficulte.map((item, index) => (
                                            <motion.li key={index} variants={itemVariants}
                                                       className="p-2 bg-white rounded-lg shadow-sm">
                                                {item}
                                            </motion.li>
                                        ))}
                                    </motion.ul>

                                </div>
                                <div className="px-6 mb-6 ">

                                    <h1 className="text-start text-3xl font-bold text-[#6665DD] py-8">Compétences
                                        sollicités</h1>
                                    <ul
                                            className="text-start text-xl px-12 space-y-4 overflow-y-auto flex-grow"
                                        >
                                            <p className="ml-[-1.3vw] text-[#6665DD] font-bold text-2xl">Compétence 1 :</p>
                                            {data[selectedId].c1.map((item, index) => (
                                                <li key={index}
                                                           className="p-2 bg-[#6665DD] text-white rounded-lg shadow-sm">
                                                    {item}
                                                </li>
                                            ))}

                                            <p className="font-bold text-[rgb(102,102,221,85%)] ml-[-1.3vw] pt-8 text-2xl">Compétence
                                                2</p>

                                            {data[selectedId].c2.map((item, index) => (
                                                <motion.li key={index}
                                                           className="p-2 bg-[rgb(102,102,221,85%)] text-white rounded-lg shadow-sm">
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </ul>
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
