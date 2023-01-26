import { useEffect, useState } from "react";

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
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </nav>
    );
};

export default Navigationbar;
