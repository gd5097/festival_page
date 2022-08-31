import React from 'react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import BadgeBox from '../components/badges/badge-box';


export default function TempPage() {
    return(
        <DefalutLayout>
            <Header backActivated
            icons={[
                {                  
                    onClick: () => {
                        console.log("Doc Icon Clicked");
                    }
                },
                {                  
                    onClick: () => {
                        console.log("Bell Icon Clicked");
                    }
                },
            ]}/>
            <div>
                미래광장
            </div>
            <BadgeBox></BadgeBox>
        </DefalutLayout>
    );
}