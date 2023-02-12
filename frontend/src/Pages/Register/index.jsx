import { useState } from "react";
import axios from "axios";
import Navigationbar from "../../Components/NavigationBar";
import { useSelector } from "react-redux";

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistered, setisRegistered] = useState(false);
    const globalSelector = useSelector((state) => state.global);

    const handleSubmit = (e) => {
        e.preventDefault();

        // set configurations
        const configuration = {
            method: "post",
            url: globalSelector.registerURL,
            data: {
                fullName,
                email,
                password,
            },
        };
        axios(configuration)
            .then((result) => {
                console.log("SUCCESS: Registration success", result);
                setisRegistered(true);
            })
            .catch((error) => {
                setisRegistered(false);
                console.log(
                    "ERROR: Registration Failed, most likeky because user exists",
                    error
                );
            });
    };

    return (
        <div className="register-container">
            <Navigationbar />
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </label>
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

            {isRegistered ? (
                <p className="message-success">
                    You Are Registered Successfully
                </p>
            ) : (
                <p className="message-error">You Are Not Registered Yet</p>
            )}
        </div>
    );
};

export default Register;
