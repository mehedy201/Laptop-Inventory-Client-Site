import React from 'react';
import './SocialLogin.css'
import googleIcon from '../../../Images/social_icon/google.png'
import gitIcon from '../../../Images/social_icon/github.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    //Use Navigate
    const navigate = useNavigate('')
    //Use location
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // Sing In with Google .............
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
     // Sing In with Github ............
     const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    // Auth Condition 
    let loadingElement;
    if(loading || loading1){
      loadingElement = <div width='20px' class="spinner-grow text-primary" role="status">
                            <span class="sr-only"></span>
                      </div>
    }
    if(user || user1){
        navigate(from, { replace: true });
      }
    let errorElement;
    if (error || error1) {
      errorElement = <div> <p className='text-danger'>Error: {error?.message} {error1?.message}</p></div>
    }

    return (
        <div>
            <h5 className='text-center'>Sing In With</h5>
            {/* Error and Loading start */}
            {errorElement}
            {loadingElement}
            {/* Error and Loading end  */}
            <button onClick={() => signInWithGoogle()}  className='d-block social-icon text-center border p-1 mb-2 rounded w-50 mx-auto'><img src={googleIcon} alt="" /> Google</button>
            <button onClick={() => signInWithGithub()}  className='d-block social-icon text-center border p-1 rounded w-50 mx-auto'><img src={gitIcon} alt="" /> Github</button>
        </div>
    );
};

export default SocialLogin;