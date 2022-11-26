import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Blog from "../Pages/Blog/Blog";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorRoute from "../Pages/Shared/ErrorRoute/ErrorRoute";
import Signup from "../Pages/SignUp/SignUp";

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
        path: '*',
        element: <ErrorRoute></ErrorRoute>
    }

])

export default router;