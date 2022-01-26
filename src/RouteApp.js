import { AuthProvider } from "./authorization/AuthProvider";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import PrivateRoute from "./authorization/PrivateRoute";
import App from "./App";

export default function RouteApp() {
    return (
        <AuthProvider>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <App />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </AuthProvider>
    );
}