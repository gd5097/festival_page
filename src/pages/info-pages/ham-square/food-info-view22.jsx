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

import image1 from '../../../images/ham22-1.jpg';



import styled from '@emotion/styled';

const Pimg = styled.img`
    
    position: relative;
    top: -60px;

    width: 100vw;
    
`

export default function FoodInfoViewPageHam22() {

    const theme = useTheme();
    const params = useParams();
    // useEffect(() => {
    //     console.log(params);
    //     //console.log(match.params);
    //  }, [])
     
    const navigate = useNavigate();

     const food = {
        id: 22,
        title: '크레아키친',
        categories: ['음료'],
        menu: [
            {
                foodName: '아메리카노',
                foodCost: 4000,
            },
            {
                foodName: '카페라떼',
                foodCost: 5000,
            },
            {
                foodName: '복숭아 아이스티',
                foodCost: 4000,
            },
            {
                foodName: '레몬에이드',
                foodCost: 5000,
            },
            {
                foodName: '자몽에이드',
                foodCost: 5000,
            },
            {
                foodName: '청포도에이드',
                foodCost: 5000,
            },
            {
                foodName: '체리에이드',
                foodCost: 5000,
            },
            {
                foodName: '유자에이드',
                foodCost: 5000,
            },
        ],
     }

    return(
        <div
            css={css`
                background-color: white;
                height: 120vh;
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