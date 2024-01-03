import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddContact from "../Pages/AddContact/AddContact";
import AllContacts from "../Pages/AllContacts/AllContacts";
import UpdateContact from "../Pages/UpdateContact/UpdateContact";
import PrivateRoutes from "../Pages/PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addContact',
            element: <AddContact></AddContact>
        },
        {
            path: '/allContacts',
            element: <PrivateRoutes><AllContacts></AllContacts></PrivateRoutes>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/updateContact/:id',
            element: <UpdateContact></UpdateContact>,
            loader: ({ params }) => fetch(`https://contact-management-server-side.vercel.app/updateContact/${params.id}`)
        }
    ]
}])

export default router