import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddContact from "../Pages/AddContact/AddContact";
import AllContacts from "../Pages/AllContacts/AllContacts";

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
            element: <AllContacts></AllContacts>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
    ]
}])

export default router