import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const SingUp = () => {
    //Navigate Sing In Page
    const navigate = useNavigate();

    const handleLogInButton = () =>{
        navigate('/singIn')
    }
    //Location
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // Get Input Value
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')

    //Firebase Authentication
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile] = useUpdateProfile(auth);

    //From Sumbit Function
    const handleSingUp = async event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name});
        navigate(from, {replace: true});
    }

    let loadingElement;
    if(loading){
      loadingElement = <div width='20px' class="spinner-grow text-primary" role="status">
                            <span class="sr-only"></span>
                      </div>
    }
    if(user){
        navigate(from, { replace: true });
      }
    let errorElement;
    if (error) {
      errorElement = <div> <p className='text-danger'>Error: {error?.message}</p></div>
    }


    return (
        <div className="container">
            <div className="row">
                <div className='p-3 my-5 col-md-6 mx-auto rounded shadow'>
                    {loadingElement}
                    {errorElement}
                    <h2 className='text-center'>Please Sing Up !!</h2>
                    <p className='text-center'>If you new visitor in site then please sing up....</p>
                    <div>
                        <form onSubmit={handleSingUp} className='border rounded p-3 m-3 bg-light'>
                            <input className='form-control mb-3' ref={nameRef} type="text" placeholder='Your Name' required/>
                            <input className='form-control mb-3' ref={emailRef} type="email" placeholder='Email' required/>
                            <input className='form-control mb-3' ref={passwordRef} type="password" placeholder='Password' required/>
                            <button className='btn btn-sm mt-3 w-50 d-block mx-auto bg-primary fw-bold text-white' type='submit'>Sing Up</button>
                            <p className='mt-2'>All ready have an account <button className='btn btn-link py-0' onClick={handleLogInButton}>Log In</button></p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;