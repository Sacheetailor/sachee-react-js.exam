import React from 'react';
import { navigate } from 'react-router-dom';
import { useAuth} from '../context/AuthContext.jsx';
const ProtectedRoute = ({ children }) => {
    const {isAuthenticated } = useAuth();
    return isAuthenticated ? children : <navigate to="/login" replace />;
};


export default pivateroute ;