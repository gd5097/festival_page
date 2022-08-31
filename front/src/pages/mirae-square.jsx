import React from 'react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';


export default function MiraeSuqarePage() {
    return(
        <DefalutLayout>
            <Header backActivated />
            <div>
                미래광장
            </div>
        </DefalutLayout>
    );
}