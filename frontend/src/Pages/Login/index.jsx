import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import Navigationbar from "../../Components/NavigationBar";

const cookies = new Cookies();
// set the cookie

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const globalSelector = useSelector((state) => state.global);

    const handleSubmit = (e) => {
        e.preventDefault();

        // set configurations
        const configuration = {
            method: "post",
            url: globalSelector.loginURL,
            data: {
                email,
                password,
            },
        };
        axios(configuration)
            .then((result) => {
                console.log("SUCCESS: Login success", result);
                setisLoggedIn(true);
                cookies.set("TOKEN", result.data.token, {
                    path: "/",
                });
                window.location.href = "/home";
            })
            .catch((error) => {
                setisLoggedIn(false);
                console.log(
                    "ERROR: Login Failed, no details available atm",
                    error
                );
            });
    };

    return (
        <div className="LoginPageContainer">
            <Navigationbar />
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>

                <button type="submit">Register</button>
            </form>
            {isLoggedIn ? (
                <p className="text-success">You Are Logged in Successfully</p>
            ) : (
                <p className="text-danger">You Are Not Logged in</p>
            )}
        </div>
    );
};

export default Login;
