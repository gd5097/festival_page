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

import image1 from '../../../images/ham7-1.jpg';
import image2 from '../../../images/ham7-2.jpg';
import image3 from '../../../images/ham7-3.jpg';
import image4 from '../../../images/ham7-4.jpg';
import styled from '@emotion/styled';

const Pimg = styled.img`
    
    position: relative;
    top: -60px;

    width: 100vw;
    
`

export default function FoodInfoViewPageHam7() {

    const theme = useTheme();
    const params = useParams();
    useEffect(() => {
        console.log(params);
        //console.log(match.params);
     }, [])
     
    const navigate = useNavigate();

     const food = {
        id: 7,
        title: '강낭콩딱지',
        categories: ['치장품'],
        menu: [
            {
                foodName: '마우스패드',
                foodCost: 7000,
            },
            {
                foodName: '그립톡',
                foodCost: 6500,
            },
            {
                foodName: '키링',
                foodCost: 5000,
            },
            {
                foodName: '다꾸용스티커',
                foodCost: 2500,
            },
            {
                foodName: '다꾸용스티커반짝이',
                foodCost: 2800,
            },
            {
                foodName: '라이터',
                foodCost: 2000,
            },
            {
                foodName: '버섯/에잇볼 키링',
                foodCost: 5000,
            },
            {
                foodName: '고냥희 리무버블 스티커',
                foodCost: 2500,
            },
            {
                foodName: '먼지 지비츠',
                foodCost: 4000,
            },
            {
                foodName: '먼지키링',
                foodCost: 6900,
            },
            {
                foodName: '야광팔찌 (1개)',
                foodCost: 300,
            },
            {
                foodName: '야광팔찌 (2개)',
                foodCost: 500,
            },
            {
                foodName: '야광팔찌 (3개)',
                foodCost: 800,
            },
        ],
     }

    return(
        <div
            css={css`
                background-color: white;
                height: 110vh;
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
                        onSwiper={(swiper) => console.log(swiper)}
                        //onSlideChange={(swiper) => setindex(swiper.realIndex)}
                    >
                        <SwiperSlide> <Pimg src={image1}/> </SwiperSlide>
                        <SwiperSlide> <Pimg src={image2}/> </SwiperSlide>
                        <SwiperSlide> <Pimg src={image3}/> </SwiperSlide>
                        <SwiperSlide> <Pimg src={image4}/> </SwiperSlide>
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