import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main"
import Blog from "../Pages/Blog/Blog";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorRoute from "../Pages/Shared/ErrorRoute/ErrorRoute";
import Signup from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch(`http://localhost:5000/products`),
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/categoryDetails/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyProducts></MyProducts>
            }
        ]
    },

    {
        path: '*',
        element: <ErrorRoute></ErrorRoute>
    }

])

export default router;