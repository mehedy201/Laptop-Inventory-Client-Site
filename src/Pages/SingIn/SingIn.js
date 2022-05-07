import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingIn.css'
import SocialLogin from './SocialLogin/SocialLogin';

const SingIn = () => {

    const navigate = useNavigate();
    const handleSingUpButton = () => {
        navigate('/singUp')
    }


    return (
        <div className='p-3 m-5 border w-50 mx-auto rounded'>
            <h2 className='text-center'>Please Log In !!</h2>
            <p className='text-center'>Please log in and stay with us....</p>
            <div>
                <form className='border rounded p-3 m-3 bg-light'>
                    <input className='form-control' type="text" placeholder='Email'/>
                    <br />
                    <input className='form-control' type="text" placeholder='Password'/>
                    <button className='btn btn-sm mt-3 w-50 d-block mx-auto bg-primary fw-bold text-white' type='submit'>Log In</button>
                    <button className='btn btn-link p-0 pt-2'>Forget Password</button>
                    <p>If don't have account <button className='btn btn-link py-0' onClick={handleSingUpButton}>Sing UP</button></p>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SingIn;