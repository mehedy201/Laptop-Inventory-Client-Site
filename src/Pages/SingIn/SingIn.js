import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../RequerAuth/Loading/Loading';
import './SingIn.css'
import SocialLogin from './SocialLogin/SocialLogin';

const SingIn = () => {

    const navigate = useNavigate();
    const handleSingUpButton = () => {
        navigate('/singUp')
    }
    // Use location
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    // Get Input Value 
    const emailRef = useRef('');
    const passwordRef = useRef('');
    
    // Firebase Sing in method 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Handle Sing in Form
    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        console.log(email, password)
    }
    // Condition
    if(user){
        navigate(from, {replace: true});
      }
      let errorElement;
      if(error){
        errorElement = <p className="text-danger my-3">{error?.message}</p>
      }
      if(loading){
        return <Loading></Loading>
      }


    return (
        <div className="container">
            <div className="row">
                <div className='p-3 my-5 col-md-6 mx-auto rounded shadow'>
                 <h2 className='text-center'>Please Log In !!</h2>
                 <p className='text-center'>Please log in and stay with us....</p>
                    <div>
                        <form onSubmit={handleSignIn} className='border rounded p-3 m-3 bg-light'>
                            <input ref={emailRef} className='form-control mb-3' type="text" placeholder='Email' required/>
                            <input ref={passwordRef} className='form-control' type="password" placeholder='Password' required/>
                            {errorElement}
                            <button className='btn btn-sm mt-3 w-50 d-block mx-auto bg-primary fw-bold text-white' type='submit'>Log In</button>
                            <button className='btn btn-link p-0 pt-2'>Forget Password</button>
                            <p>If don't have account <button className='btn btn-link py-0' onClick={handleSingUpButton}>Sing UP</button></p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingIn;