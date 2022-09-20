import React from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import arrowIcon from '../images/back-arrow.png';
import homeIcon from '../images/home.png';

export default function RiverOfKnuPage() {
    return(
        <DefalutLayout>
            <div
                // 헤더를 위한 여백
                css={css`
                    height: 48px;
                `}
            />
            <Header 
                title={'연적지'}
                leftIcon={
                    {
                        iconImage: arrowIcon,
                        onCLick: () => {
                            console.log('arrow Clicked!');
                        }
                    }
                }
                rightIcons={
                    {
                        iconImage: homeIcon,
                        onClick: () => {
                            console.log('home Clicked');
                        }
                    }
                }

            />
            <div>
                연적지
            </div>
            
        </DefalutLayout>
    );
}