import React from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';
import BadgeBox from '../components/badge-box';


export default function MiraeSuqarePage() {
    return(
        <DefalutLayout>
            <div
                // 헤더를 위한 여백
                css={css`
                    height: 48px;
                `}
            />
            <Header 
                title={'미래광장'}
            />
            <div>
                미래광장
            </div>
            
        </DefalutLayout>
    );
}