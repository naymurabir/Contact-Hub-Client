import { useContext } from "react";
import { AuthContext } from "../Pages/AuthProviders/AuthProviders";

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default useAuth;