import React from 'react';
import './SocialLogin.css'
import googleIcon from '../../../Images/social_icon/google.png'
import gitIcon from '../../../Images/social_icon/github.png'

const SocialLogin = () => {
    return (
        <div>
            <h5 className='text-center'>Sing In With</h5>
            <button className='d-block social-icon text-center border p-1 mb-2 rounded w-50 mx-auto'><img src={googleIcon} alt="" /> Google</button>
            <button className='d-block social-icon text-center border p-1 rounded w-50 mx-auto'><img src={gitIcon} alt="" /> Github</button>
        </div>
    );
};

export default SocialLogin;