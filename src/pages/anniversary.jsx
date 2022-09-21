import React from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import arrowIcon from '../images/back-arrow.png';
import FoodList from '../components/anniversary/food-list-60st';
import { useNavigate } from 'react-router-dom';
import TimeInformationBox from '../components/time-information-box';
import ShowListButton from '../components/show-list-button';

import mapImage from '../images/image_map_60st.png';

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
            <TimeInformationBox text={'주점/푸드트럭'} time={'운영시간 18:00-02:00'}/>
            <div
                // 구분선
                css={css`
                    background-color: rgba(255, 255, 255, 0.3);
                    width: 90vw;
                    margin: 24px auto;
                    height: 1px;
                `}
            />
            <div
                css={css`
                    //margin-bottom: 60px;
                    width: 85vw;
                    margin: 0px auto;
                `}
            >
                <img
                    src={mapImage}
                    css={css`
                        object-fit: cover;
                        width: 100%;
                    `}
                />
            </div>
            
            <div
                css={css`
                    
                    margin-top: 16px;
                    margin-bottom: 32px;
                    margin-left: auto;
                `}
            >
                <ShowListButton link='/anniversary/list'/>
            </div>
        </DefalutLayout>
    );
}