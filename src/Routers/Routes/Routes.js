import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";

import AllCategoy from "../../Page/AllCategory/AllCategoy";
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
    }
])