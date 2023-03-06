import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";

import AllCategoy from "../../Page/AllCategory/AllCategoy";
import Dashboard from "../../Page/DashBoard/Dashboard/Dashboard";
import MyOrder from "../../Page/DashBoard/MyOrder/MyOrder";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import SignUp from "../../Page/Signup/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main> ,
        children:[
           {
            path:'/',
            element:<Home></Home>
           },
           {
            path:'/categories/:id',
            element:<AllCategoy></AllCategoy>,
            loader: ({params}) => fetch(`http://localhost:5000/products?id=${params.id}`)
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'/signup',
            element:<SignUp></SignUp>
           }
        ]
    },
    {
        path:'/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path:'/dashboard/myorder',
                element:<MyOrder></MyOrder>
            }
        ]
    }
])