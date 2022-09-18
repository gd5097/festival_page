import React from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../../../layouts/default';

import Day from '../Day';

import { useNavigate } from 'react-router-dom';

import image1 from '../../../images/festival-image1.jpg';
import image2 from '../../../images/festival-image2.jpg';
import image3 from '../../../images/festival-image3.jpg';
import image4 from '../../../images/festival-image4.jpg';
import image5 from '../../../images/festival-image5.jpg';
import image6 from '../../../images/festival-image6.jpg';

import Time from './time';
import PictureTag from './pictureTag';

import Slider from "react-slick";
import Picture from './picture';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



export default function StarPage() {
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <DefalutLayout>

        <div css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;

        `}>
            <Day day={'Day 1'} date={'9/20 (화)'}/>
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
            <Slider {...settings}>
                <Picture src={image1}/>
                <Picture src={image2}/>
                <Picture src={image3}/>
                <Picture src={image4}/>
                <Picture src={image5}/>
                <Picture src={image6}/>
            </Slider>
        </div>

        </div>




        <div css={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-top: 16px;
            margin-bottom: 52px;
        `}>
            <Time content={'16:00 - 16:40'}/>
        </div>





        <div css={css`
            display: flex;
            flex-direction: column;

            padding: 20px;
        `}>
            <div   css={css`

            width: 179px;
            height: 18px;

            font-family: 'HGGGothicssi';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
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

        font-family: 'HGGGothicssi';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 13px;

        margin-top: 10px;
        margin-bottom: 32px;

        /* WHITE/60 */

        color: rgba(255, 255, 255, 0.6);
        white-space:nowrap;
        `}>안들어보셨다면 미리듣기 필수!</div>

        <PictureTag src={image1} content1={'사장님 도박은 재미로 하셔야 합니다.'} content2={'2020.04.29 발매'} contentleft={20} contenttop={630} />
        <hr css={css`


            /* Vector 4 */

            width: 100%;
            height: 0px;

            margin: 16px 0px;

            /* WHITE/20 */

            border: 1px solid rgba(255, 255, 255, 0.2);

            /* Inside auto layout */    

            `}/>
            <PictureTag src={image2} content1={'우리가 헤어져야 했던 이유'} content2={'2021.12.13 발매'} contentleft={20} contenttop={718} />

        </div>
        </DefalutLayout>
    );
}