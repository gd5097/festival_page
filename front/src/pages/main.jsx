import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/home');
    }, [navigate]);

    return <div />;
}

export default MainPage;