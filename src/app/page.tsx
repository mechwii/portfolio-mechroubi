"use client";
import styles from './page.module.css';
import {Logo} from "./components/ui/logo";
import {motion} from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [vid, setVid] = useState(0);

    function changeVideo() {
        setVid(prevVid => prevVid === 0 ? 1 : 0);
    }

    return (
        <main className="m-8 ">

            <div className={styles.container}>

                <motion.div
                    className={styles.leftBar}
                    initial={{x: -100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{type: "spring", stiffness: 120}}
                >
                    <div>
                        <Logo></Logo>
                    </div>

                    <div className={styles.navContent}>
                        <p className="font-bold text-white hover:cursor-pointer">Accueil</p>
                        <p>Projets</p>
                        <Link className={styles.line} href="/experiences">
                            Expériences
                        </Link>
                        <p>A propos de moi</p>
                        <p>Contact</p>
                        <button onClick={changeVideo} className={`font-bold text-4xl ${styles.line} ${styles.line3}`}>
                            {vid === 0 ? "Passer au mode goat" : "Revenir au mode chill"}
                        </button>
                    </div>
                </motion.div>

                <div className={styles.titleC}>
                    <motion.div
                        className={styles.titleCH1}
                        initial={{y: -180, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{type: "spring", stiffness: 80}}
                    >
                        <h1>M'hammed MECHROUBI</h1>
                    </motion.div>
                    <motion.div
                        className={styles.titleCH1}
                        initial={{y: 180, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{type: "spring", stiffness: 100}}
                    >
                        <h2 className={styles.titleCH2}>Développeur Full-Stack</h2>
                    </motion.div>
                </div>
            </div>

            <video
                src={vid === 0 ? "/videos/mainbg.mp4" : "/videos/gojosukuna.mp4"}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className={styles.video}
            ></video>
        </main>
    );
}
