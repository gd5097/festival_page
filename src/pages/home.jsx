import React from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header-home';
import Weather from '../components/weather';
import HomeBox from '../components/home/home-box';

import tempImageBell from '../images/bell.png';
import tempImageDoc from '../images/document.png';
import tempImageArrow from '../images/back-arrow.png';
import Footer from '../components/footer';

export default function HomePage() {
    return(
        <DefalutLayout>
            <div
                // 헤더를 위한 여백
                css={css`
                    height: 48px;
                `}
            />
            <Header
                title={'대동제'}
                // rightIcons={[
                //     {
                //         iconImage: tempImageDoc,
                //         onClick: () => {
                //             console.log("Doc Icon Clicked");
                //         }
                //     },
                //     {
                //         iconImage: tempImageBell,
                //         onClick: () => {
                //             console.log("Bell Icon Clicked");
                //         }
                //     },
                // ]}
            />
            <div
                css={css`
                    height: 30px;
                `}
            >

            </div>
            <Weather />
            <HomeBox />
            <Footer />
        </DefalutLayout>
    );
}