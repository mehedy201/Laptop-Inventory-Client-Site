import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading/Loading';

const RequerAuth = ({children}) => {
    //Navigate
    const navigate = useNavigate();
    // Use auth State
    const [user, loading] =useAuthState(auth);
    // Location
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if(loading){
      return <Loading></Loading>
    }
    if (!user) {
        return navigate(from, {replace: true});
    }

    return children;
};

export default RequerAuth;