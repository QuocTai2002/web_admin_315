import home from "../Component/home";
import Login from "../pages/Login/Login";
import Clinic from "../Component/Clinics/Clinic";

export const routes = [
    {path: '/login', Component: Login},
    {path: '/branch/clinic', Component: Clinic},
]