import Banner from "../Banner/Banner";
import Faq from "../FAQ/Faq";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Banner></Banner>
            <Faq></Faq>
        </div>
    );
};

export default Home;