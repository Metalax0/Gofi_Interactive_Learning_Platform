import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Landing = () => {
    return (
        <div className="LandingPageContainer">
            <Header />
            <div className="LandingPageContent">
                <div className="LandingPageContent__Left">
                    <label className="LandingPageContent__Left__label">
                        E-COURSE PLATFORM
                    </label>
                    <h2 className="LandingPageContent__Left__heading">
                        Learn and Practice in a fun way
                    </h2>
                    <p className="LandingPageContent__Left__paragraph">
                        learn programming and problem solving in an easy way
                        with the help of visuals and game like interfaces
                    </p>
                    <button className="LandingPageContent__Left__button">
                        Start Your Journey
                    </button>
                </div>
                <div className="LandingPageContent__Right">
                    <img
                        src="/images/landingPage/landing_right_img.png"
                        alt="vector art of a boy"
                    />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Landing;
