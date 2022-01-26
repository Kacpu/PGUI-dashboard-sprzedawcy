import { useAuth } from "./AuthProvider";
import { useLocation, Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}