"use client"
import {Navbar} from "@/app/components/ui/navbar";
import {Experience_card} from "@/app/components/categorie_exp/experience_card"
import Link from "next/link";


const experiences = [{date:"08 avril 2024 - 29 juin 2024", nomExp : "Développeur Full-Stack  -  FEMTO-ST DISC", text:"J'ai eu l'opportunité de contribuer au projet EASING, un projet de recherche passionnant axé sur le développement de maisons intelligentes pour personnes à mobilité réduite. Envie d'en savoir plus ? Cliquez."}]

export default function Home(){
    return (
        <main className="w-screen h-screen overflow-x-hidden">
            <Navbar></Navbar>
                <h1 className="text-center mt-16 w-full ml-100 font-bold text-7xl text-[#6665DD]">Expériences</h1>

            <div className=" mx-48 my-20">
                <Link href="/experiences/easing">
                    <Experience_card date={experiences[0].date} nomExp={experiences[0].nomExp} text={experiences[0].text}></Experience_card>
                </Link>
            </div>
        </main>

    )
}