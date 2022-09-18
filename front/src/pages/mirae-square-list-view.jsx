import React from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import arrowIcon from '../images/back-arrow.png';
import mapIcon from '../images/map.png';
import FoodList from '../components/anniversary/food-list';
import { useNavigate } from 'react-router-dom';

export default function MiraeSquareListViewPage() {
    const navigate = useNavigate();
    
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
                leftIcon={
                    {
                        iconImage: arrowIcon,
                        onClick: () => {
                            navigate(-1);
                        }
                    }
                }
                rightIcons={[
                    {
                        iconImage: mapIcon,
                        onClick: () => {
                            console.log('map Clicked');
                        }
                    },
                ]}
            />

            <FoodList />
            
        </DefalutLayout>
    );
}