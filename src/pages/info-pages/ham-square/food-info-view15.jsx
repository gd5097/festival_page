import React, { useEffect, useState } from 'react';
import { css, useTheme } from '@emotion/react';

import DefalutLayout from '../../../layouts/default';
import Header from '../../../components/white-header';

import arrowIcon from '../../../images/black-back-arrow.png';
import { useNavigate, useParams } from 'react-router-dom';
import NumberBox from '../../../components/number-box';
import BaseTitleForm from '../../../components/base-title-form';
import CategoryIndicator from '../../../components/category-indicator';
import HorizontalInfoIndicator from '../../../components/horizontal-info-indicator';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.scss";

import image1 from '../../../images/ham15-1.jpg';
import image2 from '../../../images/ham15-2.jpg';

import styled from '@emotion/styled';

const Pimg = styled.img`
    
    position: relative;
    top: -60px;

    width: 100vw;
    
`

export default function FoodInfoViewPageHam15() {

    const theme = useTheme();
    const params = useParams();
    // useEffect(() => {
    //     console.log(params);
    //     //console.log(match.params);
    //  }, [])
     
    const navigate = useNavigate();

     const food = {
        id: 15,
        title: '꽃갈피',
        categories: ['사진'],
        menu: [
            {
                foodName: '프로필사진set (사진촬영+보정본인화+보정본전송)',
                foodCost: 5000,
            },
            {
                foodName: '촬영 전체 전송',
                foodCost: 2000,
            },
            {
                foodName: '추가인화',
                foodCost: 1000,
            },
            {
                foodName: '종이액자',
                foodCost: 500,
            },
        ],
     }

    return(
        <div
            css={css`
                background-color: white;
                height: 100vh;
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
                    // 푸드트럭 사진
                    css={css`
                        overflow: hidden;
                        height: 200px;
                    `}
                >
                    <Swiper
                        className='swiper-container'
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation //*
                        pagination={{ clickable: true }} //*
                        scrollbar={{ draggable: true }} //*
                        //onSlideChange={(swiper) => setindex(swiper.realIndex)}
                    >
                        <SwiperSlide> <Pimg src={image1}/> </SwiperSlide>
                        <SwiperSlide> <Pimg src={image2}/> </SwiperSlide>
                       </Swiper>
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