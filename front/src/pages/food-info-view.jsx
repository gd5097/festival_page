import React, { useEffect, useState } from 'react';
import { css, useTheme } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/white-header';

import arrowIcon from '../images/black-back-arrow.png';
import { useNavigate, useParams } from 'react-router-dom';
import NumberBox from '../components/number-box';
import BaseTitleForm from '../components/base-title-form';
import CategoryIndicator from '../components/category-indicator';
import HorizontalInfoIndicator from '../components/horizontal-info-indicator';


export default function FoodInfoViewPage() {

    const theme = useTheme();
    const params = useParams();
    useEffect(() => {
        console.log(params);
        //console.log(match.params);
     }, [])
     
    const navigate = useNavigate();

     const food = {
        id: 1,
        title: '만두 Box',
        categories: ['분식', '육류'],
        menu: [
            {
                foodName: '갈비만두 6개 (1팩)',
                foodCost: 4000,
            },
            {
                foodName: '김치삽격겹살 (150g)',
                foodCost: 12500,
            },
        ],
     }

    return(
        <div
            css={css`
                background-color: white;
            `}
        >
            <DefalutLayout>
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
                        height: 180px;
                        background-color: #D6D6D6;
                    `}
                >
                    
                </div>
                <div
                    // ID | 이름 | 분류 컨테이너
                    css={css`
                        display: flex;

                        padding: 16px 20px;

                        align-items: center;

                        column-gap: 8px;
                        background-color: ${theme.colors.white};
                    `}
                >
                    <NumberBox>
                        {food.id}
                    </NumberBox>
                    <BaseTitleForm>
                        {food.title}
                    </BaseTitleForm>
                    {food.categories.map((category) => (
                        <CategoryIndicator>
                            {category}
                        </CategoryIndicator>
                    ))}
                </div>
                <div
                    // 구분선
                    css={css`
                        width: stretch;
                        height: 5px;
                        
                        margin-top: 6px;

                        border: 0;
                        background-color: #E6E6EA;
                    `}
                >
                    
                </div>
                
                <div
                    // 메뉴 컨테이너
                    css={css`
                        display: flex;
                        flex-direction: column;
                        margin: 0px 20px;

                        row-gap: 24px;
                    `}
                >
                    <div
                    // 메뉴 글자
                    css={css`
                        color: ${theme.colors.black};
                        margin-top: 20px;

                        font-size: 1.1rem;
                    `}>
                        메뉴
                    </div>
                    {food.menu.map((item) => (
                        <HorizontalInfoIndicator 
                            first={item.foodName}
                            second={item.foodCost}
                        />
                    ))}
                </div>
                
                
            </DefalutLayout>
        </div>
    );
}