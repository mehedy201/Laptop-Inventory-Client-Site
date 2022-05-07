import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequerAuth = ({children}) => {
    // Use auth State
    const [user] =useAuthState(auth);
    // Location
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (!user) {
        return <Navigate to="/singIn" state={{ from: location }} replace />;
    }

    return children;
};

export default RequerAuth;