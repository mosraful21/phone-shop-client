import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main"
import Blog from "../Pages/Blog/Blog";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers";
import AllUser from "../Pages/Dashboard/Admin/AllUser";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import MyWishList from "../Pages/Dashboard/MyWishList/MyWishList";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import MyBuyers from "../Pages/Dashboard/Seller/MyBuyers";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorRoute from "../Pages/Shared/ErrorRoute/ErrorRoute";
import SignUp from "../Pages/SignUp/Signup";
import PrivateRoutes from "./PrivateRoutes";

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
                element: <SignUp></SignUp>
            },
            {
                path: '/categoryDetails/:id',
                element: <PrivateRoutes><CategoryDetails></CategoryDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/alluser',
                element: <AllUser></AllUser>
            },
            {
                path: '/dashboard/MyBookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/MyWishList',
                element: <MyWishList></MyWishList>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/mybuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorRoute></ErrorRoute>
    }

])

export default router;