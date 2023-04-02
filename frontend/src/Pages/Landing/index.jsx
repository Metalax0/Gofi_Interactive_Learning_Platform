import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import "./style.css";
import FeatureCard from "../../Components/FeatureCard";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <div className="landing-page-section landing-page-section-1">
                <label>
                    <span className="landing-page-section-1__span-1">G</span>
                    <span className="landing-page-section-1__span-2">O</span>
                    <span className="landing-page-section-1__span-3">F</span>
                    <span className="landing-page-section-1__span-4">I</span>
                </label>
                <br />
                <br />
                <div id="mouse-scroll">
                    <div class="mouse">
                        <div class="mouse-in"></div>
                    </div>
                    <div>
                        <span class="down-arrow-1"></span>
                        <span class="down-arrow-2"></span>
                        <span class="down-arrow-3"></span>
                    </div>
                </div>
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
                        onClick={() => navigate("/home")}
                    >
                        Start Your Journey
                    </button>
                </div>
                <div className="LandingPageContent__Right">
                    <img
                        src="/images/landingPage/landing_right_4.png"
                        alt="vector art of a boy"
                    />
                </div>
            </div>

            <div className="landing-page-section landing-page-section-3">
                <div className="LandingPageContent__Left">
                    <label className="LandingPageContent__Left__label">
                        TUTORIALS
                    </label>
                    <h2 className="LandingPageContent__Left__heading">
                        Tutorials on HTML CSS and JavaScript
                    </h2>
                    <p className="LandingPageContent__Left__paragraph">
                        Gofi offers its users three sets of tutorials each
                        containing several chapters.
                    </p>
                    <button
                        className="LandingPageContent__Left__button"
                        onClick={() => navigate("/tutorial")}
                    >
                        Go to tutorials
                    </button>
                </div>

                <div className="LandingPageContent__image">
                    <img
                        src="/images/landingPage/html.png"
                        alt="vector art of a boy"
                    />
                </div>
            </div>

            <div className="landing-page-section landing-page-section-4">
                <div className="LandingPageContent__image">
                    <img
                        src="/images/landingPage/test.png"
                        alt="vector art of a boy"
                    />
                </div>
                <div className="LandingPageContent__Left">
                    <label className="LandingPageContent__Left__label">
                        TESTS
                    </label>
                    <h2 className="LandingPageContent__Left__heading">
                        Practice your skills with tests
                    </h2>
                    <p className="LandingPageContent__Left__paragraph">
                        Gofi offers its users several multiple choice themed
                        questions to polish their skills and challenge
                        themselves.
                    </p>
                    <button
                        className="LandingPageContent__Left__button"
                        onClick={() => navigate("/test")}
                    >
                        Go to tests
                    </button>
                </div>
            </div>

            <div className="landing-page-section landing-page-section-5">
                <div className="LandingPageContent__Left">
                    <label className="LandingPageContent__Left__label">
                        FORUM
                    </label>
                    <h2 className="LandingPageContent__Left__heading">
                        Connect with other learners and mentors
                    </h2>
                    <p className="LandingPageContent__Left__paragraph">
                        Gofi offers its users a dedicated community forum to
                        interract with other learners and mentors. Ask
                        questions, see what others are saying, interract with
                        the posts.
                    </p>
                    <button
                        className="LandingPageContent__Left__button"
                        onClick={() => navigate("/forum")}
                    >
                        Go to tests
                    </button>
                </div>
                <div className="LandingPageContent__image">
                    <img
                        src="/images/landingPage/forum.png"
                        alt="vector art of a boy"
                    />
                </div>
            </div>
        </div>
    );
};

export default Landing;
