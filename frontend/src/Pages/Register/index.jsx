import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigationbar from "../../Components/NavigationBar";
import { setUserInfo } from "../../StateManagement/Slices/UserSlice";
import store from "../../StateManagement/Store";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const userInfo_Selector = useSelector((state) => state.userInfo);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        console.log("handle submit");
        e.preventDefault();
        // Add logic to submit form and register new user
        dispatch(
            setUserInfo({
                fullName: "test name",
                email: "test email",
                password: "test password",
            })
        );
    };

    console.log(userInfo_Selector);
    console.log(store.getState());

    return (
        <div className="register-container">
            <Navigationbar />
            <h1>Register</h1>
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
                <label>
                    Full Name:
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
