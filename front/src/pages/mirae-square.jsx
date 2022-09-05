import React from 'react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';
import BadgeBox from '../components/badge-box';


export default function MiraeSuqarePage() {
    return(
        <DefalutLayout>
            <Header 
                title={'미래광장'}
            />
            <div>
                미래광장
            </div>
            
        </DefalutLayout>
    );
}