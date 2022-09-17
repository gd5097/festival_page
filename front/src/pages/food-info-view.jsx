import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/white-header';

import arrowIcon from '../images/back-arrow.png';
import { useNavigate, useParams } from 'react-router-dom';


export default function FoodInfoViewPage() {

    const params = useParams();
    useEffect(() => {
        console.log(params);
        //console.log(match.params);
     }, [])
     
    const navigate = useNavigate();

     const food = {
        id: 1,
        title: '만두 Box',

     }

    return(
        <DefalutLayout
            css={css`
                
            `}
        >
            <div
                // 헤더를 위한 여백
                css={css`
                    height: 48px;
                `}
            />
            <Header 
                title={food.title}
                leftIcon={
                    {
                        iconImage: arrowIcon,
                        onClick: () =>                       {
                            navigate(-1);
                        }
                    }
                }
            />
            <div
                // 슬라이드 사진 들어갈 자리
                css={css`
                    width: stretch;
                    background-color: gray;
                `}
            >
                
            </div>
        </DefalutLayout>
    );
}