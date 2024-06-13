"use client";
import { TbMessageCircle2Filled } from "react-icons/tb";
import React, { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/app/components/ui/component.module.css";

// Définir un type pour les messages
type Message = {
    expediteur: string;
    text: string;
};

export const Chatbot = () => {
    const [showChat, setShowChat] = useState(false);
    const [tableMessage, setTableMessage] = useState<Message[]>([  { expediteur: "me", text: "Qu’as tu pensé de ce stage ?" }]);
    const [isLoading, setIsLoading] = useState(false);

    const messages: Message[] = [
        { expediteur: "Momo", text: "J’ai beaucoup aimé ce stage, on peut dire que c’est ma meilleure expérience de stage (après c’est la seule). J’ai particulièrement aimé ce stage puisque je devais faire preuve d’autonomie la plupart du temps, cela m'a permis de travailler sur cette qualité mais aussi de faire parler ma créativité. En plus de cela je trouvais le sujet vraiment intéressant donc j’ai pris du plaisir à réaliser les missions qui m’ont été confiées. Même si je n’ai pas vraiment ressenti l’aspect entreprise, l’atmosphère avec mon tuteur, les enseignants et les autres élèves était vraiment bonne." },
        { expediteur: "me", text: "Ce stage t’as t’il été bénéfique ? Et qu’as tu appris ?" },
        { expediteur: "Momo", text: "Oui ce stage m’a beaucoup été bénéfique puisque dans un premier temps puisque j’ai du concevoir la solution de A à Z j’ai pu renforcer mes compétences que j’avais déjà, mais en plus de ça je me suis plongé dans des “choses” que je ne connaissais pas, faisant des docs mes meilleurs amis, j’ai pu comprendre le prompt engineering mais aussi docker et encore pleins de choses, des notions qu’on aborde pas forcément maintenant." },
        { expediteur: "me", text: "Pense tu que as pu mettre en pratique les connaissances acquises en BUT ?" },
        { expediteur: "Momo", text: "Oui, car mon tuteur M.Azar a fait son maximum pour que je puisse utiliser les connaissances vues en BUT, en m'imposant des technologies utilisées dans mon cursus comme NodeJs, VueJs, mais aussi MongoDb, en plus de cela il m’a rajouté des missions qui n’étaient pas vraiment pertinentes pour le projet, certes, mais qui ont pu m’aider à renforcer mes connaissances, comme le système d’authentification." },
        { expediteur: "me", text: "Es-tu satisfait de ce que tu as pu fournir ?" },
        { expediteur: "Momo", text: "Oui, je suis très satisfait de ce que j’ai pu fournir j’ai répondu aux maximums d’attentes qui m’étaient destinées, et les retours sur mon travail sont plutôt positifs donc je dirai que oui." },
        { expediteur: "me", text: "Y’a t’il des choses que tu changerais durant ce stage ?" },
        { expediteur: "Momo", text: "Il n'y a pas vraiment de choses que je changerai mais je pourrai améliorer mon code à certains endroits pour éviter la redondance, mais mise à part cela chaque démarche est passée par une étape de réflexion donc avant de faire chaque chose j’ai passé un certain temps à réfléchir." }
    ];

    useEffect(() => {

        const addMessages = async () => {
            for (const message of messages) {
                if (message.expediteur === "Momo") {
                    setIsLoading(true);
                }
                await new Promise(resolve => setTimeout(resolve, 2000)); // Attendre 2 secondes
                setTableMessage(oldArray => {
                    if (!oldArray.find(e => e.text === message.text)) {
                        return [...oldArray, message];
                    }
                    return oldArray;
                });
                setIsLoading(false);
            }
        };

        if(showChat){
            addMessages();

        }


    }, [showChat]); // Tableau de dépendances vide pour exécuter une seule fois

    const setChat = () => {
        setShowChat(!showChat);
    };

    return (
        <div className="fixed right-12 bottom-12 z-[100]">
            {showChat && (
                <motion.div
                    className="h-[430px] w-[280px] absolute z-[1000]"
                    initial={{ opacity: 0, y: 700, x: -250 }}
                    animate={{ opacity: 1, y: -440, x: -250 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <div className="bg-[#473BF0] w-full px-4 py-1 rounded-t-xl text-lg text-white flex items-center justify-between">
                        <p>M'hammed</p>
                        <div className="hover:cursor-pointer" onClick={setChat}>
                            <MdCancel></MdCancel>
                        </div>
                    </div>

                    <div className="bg-white h-full overflow-y-scroll border-2 text-start border-gray-300 rounded-b-2xl px-4 py-4">
                        {tableMessage.map((message, index) => (
                            <div className="space-y-4" key={index}>
                                {message.expediteur === "me" && (
                                    <div className="flex justify-end">
                                        <div className="mb-4">
                                            <div className="text-white w-[180px] px-2 py-2 bg-[#7B5ED5] rounded-lg">
                                                <p>{message.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {message.expediteur === "Momo" && (
                                    <div className="mb-4">
                                        <div className="flex items-start space-x-2">
                                            <Image
                                                className="rounded-[200px] w-[30px] h-[30px]"
                                                src={"/img/momo.jpeg"}
                                                width={30}
                                                height={30}
                                                alt={"Photo momo"}
                                            />
                                            <div className="w-[180px] px-2 py-2 bg-gray-200 rounded-lg">
                                                <p>{message.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {isLoading && (
                            <div className="mb-4">
                                <div className="flex items-start space-x-2">
                                    <Image
                                        className="rounded-[200px] w-[30px] h-[30px]"
                                        src={"/img/momo.jpeg"}
                                        width={30}
                                        height={30}
                                        alt={"Photo momo"}
                                    />
                                    <div className={`w-[180px] px-2 py-2 rounded-lg ${styles.loading}`}>
                                        <span className={styles.loading__dot}></span>
                                        <span className={styles.loading__dot}></span>
                                        <span className={styles.loading__dot}></span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}

            <div
                className="bg-[#473BF0] p-3 hover:cursor-pointer rounded-[230px] text-white text-center text-5xl"
                onClick={setChat}
            >
                <TbMessageCircle2Filled/>
            </div>
        </div>
    );
};
