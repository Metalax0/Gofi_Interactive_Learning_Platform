import { Provider } from "react-redux";
import store from "./StateManagement/Store";
import RoutesDefinition from "./Routes/RoutesDefinition";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import "./App.css";

function App() {
    return (
        <div className="main">
            <Provider store={store}>
                <BrowserRouter>
                    <NavigationBar />
                    <RoutesDefinition />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
