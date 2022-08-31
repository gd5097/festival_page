import React from 'react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';


export default function MiraeSuqarePage() {
    return(
        <DefalutLayout>
            <Header backActivated 
            icons={[
                {
                    iconImage: tempImageDoc,
                    onClick: () => {
                        console.log("Doc Icon Clicked");
                    }
                },
                {
                    iconImage: tempImageBell,
                    onClick: () => {
                        console.log("Bell Icon Clicked");
                    }
                },
            ]}/>
            <div>
                미래광장
            </div>
        </DefalutLayout>
    );
}