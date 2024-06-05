import React from "react";
import { MacbookScroll } from "../components/ui/macbook-scroll";

interface HomeProps {
    params: {
        lang: any;
    };
}



const Home: React.FC<HomeProps> = async ({ params: { lang } }) => {

    return (
        <>
            <div className="mt-16 md:mt-24 sm:px-20 lg:px-52 pb-32">

                <MacbookScroll></MacbookScroll>
            </div>
        </>
    );
};
export default Home;