"use client";

import Link from "next/link";
import styles from '../../page.module.css';
import {motion} from 'framer-motion';


export const Navbar = (() => {
    return (
        <div className="flex items-center bg-[#24272B] px-8 py-6 justify-between">
            <motion.div
                animate={{rotate: 360}}
                transition={{type: "spring", stiffness: 50}}

            >
                <Link className="text-white text-4xl underline underline-offset-8 hover:cursor-pointer" href="/">
                    MM
                </Link>
            </motion.div>

            <motion.div
                className="flex text-white text-2xl w-1/2 justify-between"
                initial={{x: 180, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{type: "spring", stiffness: 80}}
            >
                <Link href="/" className={`${styles.line} ${styles.lines}`}>Accueil</Link>
                <p>Projets</p>
                <Link href="/experiences" className="hover:pointer-cursor font-bold">Expériences</Link>
                <p>A propos</p>
                <p>Contact</p>
            </motion.div>
        </div>
)
})