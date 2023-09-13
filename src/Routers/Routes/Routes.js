import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";

import AllCategoy from "../../Page/AllCategory/AllCategoy";
import AddProducts from "../../Page/DashBoard/AddProducts/AddProducts";
import AllBuyers from "../../Page/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../../Page/DashBoard/AllSellers/AllSellers";
import Dashboard from "../../Page/DashBoard/Dashboard/Dashboard";
import MyBuyers from "../../Page/DashBoard/MyBuyers/MyBuyers";
import MyOrder from "../../Page/DashBoard/MyOrder/MyOrder";
import MyProducts from "../../Page/DashBoard/MyProducts/MyProducts";
import Payments from "../../Page/DashBoard/Payment/Payments";
import ReportedItem from "../../Page/DashBoard/ReportedItem/ReportedItem";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import SignUp from "../../Page/Signup/SignUp";
import Blog from "../../Page/Blog/Blog";

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
            loader: ({params}) => fetch(`https://beauty-bin-server.vercel.app/products?id=${params.id}`)
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'/signup',
            element:<SignUp></SignUp>
           },
           {
            path:'/blog',
            element:<Blog/>
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
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payments></Payments>,
                loader:({params})=>fetch(`https://beauty-bin-server.vercel.app/order/${params.id}`) 
            },
            {
                path:'/dashboard/addproducts',
                element:<AddProducts></AddProducts>
            },
            {
                path:'/dashboard/myproducts',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboard/mybuyer',
                element:<MyBuyers></MyBuyers>
            },
            {
                path:'/dashboard/allseller',
                element:<AllSellers></AllSellers>
            },
            {
                path:'/dashboard/allbuyer',
                element:<AllBuyers></AllBuyers>
            },
           
            {
                path:'/dashboard/reporteditem',
                element:<ReportedItem></ReportedItem>
            }
           
        ]
    }
])