import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navigationbar = () => {
    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset >= 50) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Navigationbar;
