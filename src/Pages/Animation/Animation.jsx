import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Animation() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');  // Navigate after 3000 milliseconds
        }, 3000);

        return () => clearTimeout(timer);  // Clear the timer if the component unmounts
    }, [navigate]);

    return (
        <>
            <p>This page should display animation.</p>
        </>
    );
}

export default Animation;