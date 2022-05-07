import React from 'react';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const SingUp = () => {

    const navigate = useNavigate();
    const handleLogInButton = () =>{
        navigate('/singIn')
    }


    return (
        <div className="container">
            <div className="row">
                <div className='p-3 my-5 border col-md-6 mx-auto rounded shadow'>
                    <h2 className='text-center'>Please Sing Up !!</h2>
                    <p className='text-center'>If you new visitor in site then please sing up....</p>
                    <div>
                        <form className='border rounded p-3 m-3 bg-light'>
                            <input className='form-control mb-3' type="text" placeholder='Your Name'/>
                            <input className='form-control mb-3' type="email" placeholder='Email'/>
                            <input className='form-control mb-3' type="text" placeholder='Password'/>
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