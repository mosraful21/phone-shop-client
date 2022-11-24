import Main from "../../Layout/Main";
import Buyers from "../../Pages/Buyers/Buyers/Buyers";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Sellers from "../../Pages/Sellers/Sellers/Sellers";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/buyers',
        element: <PrivateRoute><Buyers></Buyers></PrivateRoute>
    },
    {
        path: '/sellers',
        element: <Sellers></Sellers>
    }
])

export default router;