import { Provider } from "react-redux";
import store from "./StateManagement/Store";
import RoutesDefinition from "./Routes/RoutesDefinition";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import "./App.css";
import { notification } from "antd";
import React, { useCallback, useMemo } from "react";

export const NotificationContext = React.createContext({
    openNotification: () => {},
});

function App() {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = useCallback(
        (title, message, type) => {
            api[type]({
                message: `${title}`,
                description: (
                    <NotificationContext.Consumer>
                        {() => `${message}!`}
                    </NotificationContext.Consumer>
                ),
                type,
            });
        },
        [api]
    );

    const contextValue = useMemo(
        () => ({
            openNotification,
            title: "title",
            message: "message",
            type: "info",
        }),
        [openNotification]
    );

    return (
        <div className="main">
            <NotificationContext.Provider value={contextValue}>
                {contextHolder}
                <Provider store={store}>
                    <BrowserRouter>
                        <NavigationBar />
                        <RoutesDefinition />
                    </BrowserRouter>
                </Provider>
            </NotificationContext.Provider>
        </div>
    );
}

export default App;
