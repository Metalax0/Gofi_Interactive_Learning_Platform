import { useNavigate } from "react-router-dom";
import "./style.css";

const Landing = () => {
    const navigate = useNavigate();

    const handleBttnClick = () => {
        navigate("/home");
    };
    return (
        <div className="landing-page">
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
                    <button
                        className="LandingPageContent__Left__button"
                        onClick={handleBttnClick}
                    >
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
        </div>
    );
};

export default Landing;
