import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Authenticate/Login/Login";



const router = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element:  <Login></Login>
            }
        ]
    }
]);

export default router;