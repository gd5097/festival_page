import React from 'react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';
import Weather from '../components/weather';

export default function HomePage() {
    return(
        <DefalutLayout>
            <Header />
            <Weather />
        </DefalutLayout>
    );
}