import React from 'react';
import bannerLogo from '../../../assets/profileBackground/Profile Background (1).png'

const Banner = () => {
    return (
        <div >
            <img className='h-[200px] w-full' src={bannerLogo} alt="" />
        </div>
    );
};

export default Banner;