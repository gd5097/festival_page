import React, { useState } from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../../../layouts/default';

import Day from '../Day';

import { useNavigate } from 'react-router-dom';

import image1 from '../../../images/ovan.png';
import image2 from '../../../images/lilgimchi.png';
import image3 from '../../../images/royal44.png';
import image4 from '../../../images/uneducatedkid.png';
import image5 from '../../../images/superbee.png';
import image6 from '../../../images/homies.png';
import image7 from '../../../images/ziont.png';
import image8 from '../../../images/punch.png';

import ovan_1 from '../../../images/오반_어떻게 지내.jpg';
import ovan_2 from '../../../images/오반_행복.jpg';

import LIL_GIMCHI_1 from '../../../images/LIL GIMCHI_Diamonds.jpg';
import LIL_GIMCHI_2 from '../../../images/LIL GIMCHI_MILLION.jpg';


import Royal_44_1 from '../../../images/Royal 44_last day.jpg';
import Royal_44_2 from '../../../images/Royal44_hal.jpg';

import UNEDUCATED_KID_1 from '../../../images/UNEDUCATED KID_UNEDUCATED KID.jpg';
import NEDUCATED_KID_2 from '../../../images/UNEDUCATED KID_룰루랄라.jpg';

import superbee_1 from '../../../images/수퍼비_+82 Bars.jpg';
import suoerbee_2 from '../../../images/수퍼비_Heu !.jpg';

import homies_1 from '../../../images/호미들_한반도.jpg';
import homies_2 from '../../../images/호미들_꽉 쥔 주먹속의 라이터.jpg';

import ziont_1 from '../../../images/자이언티_꺼내 먹어요.jpg';
import ziont_2 from '../../../images/자이언티_No Make Up.jpg';

import punch_1 from '../../../images/펀치_밤이 되니까.jpg';
import punch_2 from '../../../images/펀치_헤어지는 중.jpg';



import Time from './time';
import PictureTag from './pictureTag';


import Picture from './picture';

// App.jsx

import { Swiper, SwiperSlide } from "swiper/react";
//style
import "swiper/swiper.scss";


export default function StarPage() {


    const [index, setindex] = useState(0);

    return(
        <DefalutLayout>

        <div css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;

        `}>
            {index === 0 ? 
            <Day day={'Day 2'} date={'9/21 (수)'}/> : null }
            {index === 1 ? 
            <Day day={'Day 2'} date={'9/21 (수)'}/> : null }
            {index === 2 ? 
            <Day day={'Day 2'} date={'9/21 (수)'}/> : null }
            {index === 3 ? 
            <Day day={'Day 2'} date={'9/21 (수)'}/> : null }
            {index === 4 ? 
            <Day day={'Day 2'} date={'9/21 (수)'}/> : null }
            {index === 5 ? 
            <Day day={'Day 2'} date={'9/21 (수)'}/> : null }
            {index === 6 ? 
            <Day day={'Day 3'} date={'9/22 (목)'}/> : null }
            {index === 7 ? 
            <Day day={'Day 3'} date={'9/22 (목)'}/> : null }
        </div>





        <div css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
        `}>
        
        <div    css={css`

        /* Rectangle 43 */


        width: 260px;
        height: 300px;

        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100.29%), url(image.png);
        border-radius: 21.3846px;

        `}>


            <Swiper
                className='swiper-container'
                spaceBetween={130}
                slidesPerView={1}
	            navigation //*
                pagination={{ clickable: true }} //*
                scrollbar={{ draggable: true }} //*
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => setindex(swiper.realIndex)}
            >
                <SwiperSlide> <Picture src={image1}/> </SwiperSlide>
                <SwiperSlide> <Picture src={image2}/> </SwiperSlide>
                <SwiperSlide> <Picture src={image3}/> </SwiperSlide>
                <SwiperSlide> <Picture src={image4}/> </SwiperSlide>
                <SwiperSlide> <Picture src={image5}/> </SwiperSlide>
                <SwiperSlide> <Picture src={image6}/> </SwiperSlide>
                <SwiperSlide> <Picture src={image7}/> </SwiperSlide>
                <SwiperSlide> <Picture src={image8}/> </SwiperSlide>
            </Swiper>
        </div>

        </div>




        <div css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-top: 16px;
            margin-bottom: 52px;
        `}>
            {index === 0 ? 
            <Time content={'21:00 - 23:00'}/> : null }
            {index === 1 ? 
            <Time content={'21:00 - 23:00'}/> : null }
            {index === 2 ? 
            <Time content={'21:00 - 23:00'}/> : null }
            {index === 3 ? 
            <Time content={'21:00 - 23:00'}/> : null }
            {index === 4 ? 
            <Time content={'21:00 - 23:00'}/> : null }
            {index === 5 ? 
            <Time content={'21:00 - 23:00'}/> : null }
            {index === 6 ? 
            <Time content={'21:30 - 22:00'}/> : null }
            {index === 7 ? 
            <Time content={'21:30 - 22:00'}/> : null }
        </div>





        <div css={css`
            display: flex;
            flex-direction: column;

            padding: 20px;
        `}>
            <div   css={css`
            
            width: 179px;
            height: 18px;

            font-family: "festivalfont-60";
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 18px;
            /* identical to box height */


            /* WHITE/100 */

            color: #FFFFFF;

            white-space:nowrap;
        `}>축제, 제대로 즐겨보실래요?
        </div>

        <div css={css`
        /* 공연의 전체 일정을 확인해보세요. */

        /* Sub */


        width: 150px;
        height: 13px;

        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 13px;

        margin-top: 10px;
        margin-bottom: 32px;

        /* WHITE/60 */

        color: rgba(255, 255, 255, 0.6);
        white-space:nowrap;
        `}>안들어보셨다면 미리듣기 필수!</div>

        {index === 0 ? 
        <PictureTag src={ovan_1} content1={'어떻게 지내 (Prod. By VAN.C)'} content2={'2020.03.05. 발매'}/> : null }
        {index === 1 ? 
        <PictureTag src={LIL_GIMCHI_1} content1={'Diamonds'} content2={'2022.09.02. 발매'}/> : null }
        {index === 2 ? 
        <PictureTag src={Royal_44_1} content1={'last day'} content2={'2022.02.24. 발매'}/> : null }
        {index === 3 ? 
        <PictureTag src={UNEDUCATED_KID_1} content1={'U N E D U C A T E D K I D'} content2={'2020.12.27. 발매'}/> : null }
        {index === 4 ? 
        <PictureTag src={superbee_1} content1={'+82 Bars'} content2={'2017.12.30. 발매'}/> : null }
        {index === 5 ? 
        <PictureTag src={homies_1} content1={'한반도'} content2={'2022.08.26. 발매'}/> : null }
        {index === 6 ? 
        <PictureTag src={ziont_1} content1={'꺼내 먹어요'} content2={'2015.05.19. 발매'}/> : null }
        {index === 7 ? 
        <PictureTag src={punch_1} content1={'밤이 되니까'} content2={'2017.09.29. 발매'}/> : null }
    
        <hr css={css`


        /* Vector 4 */

        width: 100%;
        height: 0px;

        margin: 16px 0px;

        /* WHITE/20 */

        border: 1px solid rgba(255, 255, 255, 0.2);

        /* Inside auto layout */    

        `}/>

        {index === 0 ? 
        <PictureTag src={ovan_2} content1={'행복'} content2={'2018.12.06. 발매'}/> : null }
        {index === 1 ? 
        <PictureTag src={LIL_GIMCHI_2} content1={'MILLION (Feat. Chin)'} content2={'2021.04.16. 발매'}/> : null }
        {index === 2 ? 
        <PictureTag src={Royal_44_2} content1={'할 것 Remix'} content2={'2022.07.01. 발매'}/> : null }
        {index === 3 ? 
        <PictureTag src={NEDUCATED_KID_2} content1={'룰루랄라 (Lululala)'} content2={'2020.02.09. 발매'}/> : null }
        {index === 4 ? 
        <PictureTag src={suoerbee_2} content1={'Heu !'} content2={'2019.01.23. 발매'}/> : null }
        {index === 5 ? 
        <PictureTag src={homies_2} content1={'꽉 쥔 주먹속의 라이터'} content2={'2020.05.15. 발매'}/> : null }
        {index === 6 ? 
        <PictureTag src={ziont_2} content1={'No Make Up'} content2={'2015.10.12. 발매'}/> : null }
        {index === 7 ? 
        <PictureTag src={punch_2} content1={'헤어지는 중'} content2={'2018.09.12. 발매'}/> : null }
        </div>
        </DefalutLayout>
    );
}