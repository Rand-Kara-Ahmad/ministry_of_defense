import App from "../App.jsx";
import {createBrowserRouter} from "react-router-dom";
import Main from "../pages/Main.jsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Main/>,
            },
        ]
    }
]);