// LogoBorderAnimation.js
import React, { useState, useEffect } from 'react';
import './animation.scss';


const DarazShopLogoAnimation = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Start the animation after the component mounts
        setIsAnimated(true);

        // Cleanup animation on component unmount
        return () => setIsAnimated(false);
    }, []);

    return (
        <div className={`logo-container ${isAnimated ? 'animated' : ''}`}>
            {/* Your Daraz Shop logo or content goes here */}
            <div className="logo">Daraz Shop</div>
        </div>
    );
};

export default DarazShopLogoAnimation;
