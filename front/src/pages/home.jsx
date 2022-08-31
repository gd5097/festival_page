import React from 'react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';
import Weather from '../components/weather';
import HomeBox from '../components/home/home-box';

import tempImageBell from '../images/bell.png';
import tempImageDoc from '../images/document.png';

export default function HomePage() {
    return(
        <DefalutLayout>
            <Header
                backActivated
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
                ]}
            />
            <Weather />
            <HomeBox />
        </DefalutLayout>
    );
}