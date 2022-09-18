import React from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import arrowIcon from '../images/back-arrow.png';
import FoodList from '../components/anniversary/food-list';
import { useNavigate } from 'react-router-dom';
import TimeInformationBox from '../components/time-information-box';
import ShowListButton from '../components/show-list-button';

export default function AnniversaryPage() {
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
                title={'육십주년관'}
                leftIcon={
                    {
                        iconImage: arrowIcon,
                        onClick: () => {
                            navigate(-1);
                        }
                    }
                }
            />
            <TimeInformationBox />
            <div
                // 구분선
                css={css`
                    background-color: rgba(255, 255, 255, 0.3);
                    width: 90vw;
                    margin: 24px auto;
                    height: 1px;
                `}
            >

            </div>
            <ShowListButton link='/anniversary/list'/>
            
        </DefalutLayout>
    );
}