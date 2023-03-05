import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import "./style.css";
import FeatureCard from "../../Components/FeatureCard";

const Landing = () => {
    const navigate = useNavigate();

    const handleBttnClick = () => {
        navigate("/home");
    };

    return (
        <div className="landing-page">
            <div className="landing-page-section landing-page-section-1">
                <label>
                    <span className="landing-page-section-1__span-1">G</span>
                    <span className="landing-page-section-1__span-2">O</span>
                    <span className="landing-page-section-1__span-3">F</span>
                    <span className="landing-page-section-1__span-4">I</span>
                </label>
            </div>
            <div className="landing-page-section landing-page-section-2">
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
                    <button
                        className="LandingPageContent__Left__button"
                        onClick={handleBttnClick}
                    >
                        Start Your Journey
                    </button>
                </div>
                <div className="LandingPageContent__Right">
                    <img
                        // src="/images/landingPage/landing_right_1.png"
                        src="/images/landingPage/landing_right_4.png"
                        alt="vector art of a boy"
                    />
                </div>
            </div>
            <div className="landing-page-section landing-page-section-3">
                <FeatureCard title="Tutorials" />
                <FeatureCard title="Tests" />
                <FeatureCard title="Forum" />
            </div>
            <div className="landing-page-section landing-page-section-4">
                <h1> TESTIMONIALS </h1>
            </div>
        </div>
    );
};

export default Landing;
