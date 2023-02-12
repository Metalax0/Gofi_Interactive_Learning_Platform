import { Provider } from "react-redux";
import store from "./StateManagement/Store";
import RoutesDefinition from "./Routes/RoutesDefinition";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="MainContainer">
            <Provider store={store}>
                <BrowserRouter>
                    <RoutesDefinition />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
