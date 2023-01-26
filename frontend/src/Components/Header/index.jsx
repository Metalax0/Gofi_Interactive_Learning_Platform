import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <Link to="/" className="Header__logo">
                <img src="/images/logo/logo.png" alt="Logo" />
            </Link>
            <div className="Header__actions">
                <Link to="/login" className="btn btn--secondary">
                    <b>Login</b> &#10140;
                </Link>
                <Link to="/register" className="btn btn--primary">
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default Header;
