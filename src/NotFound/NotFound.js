import React from 'react';
import notFoundImage from '../Images/99776312_s (1).webp'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not__found'>
            <img src={notFoundImage} alt="" />
        </div>
    );
};

export default NotFound;