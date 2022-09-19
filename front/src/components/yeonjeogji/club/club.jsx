import React from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../../../layouts/default';

import Day from '../Day';

import Bar2 from '../Bar2';

import { useNavigate } from 'react-router-dom';
import SquareTag from '../SquareTag';

import image1 from '../../../images/TONE.jpg';
import image2 from '../../../images/브로커.jpg';
import image3 from '../../../images/이너스.jpg';
import image4 from '../../../images/아젤리아.jpg';
import image5 from '../../../images/Cok.jpg';


export default function ClubPage() {
    const navigate = useNavigate();

    return(
        <DefalutLayout>
        <div css={css`
            display: flex;
            flex-direction: column;

            padding: 20px;
        `}>
            <div   css={css`
        /* 대학 축제의 꽃, 공연 ! */
        width: 174px;
        height: 22px;

        font-family: "festivalfont-60";
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 22px;
        /* identical to box height */


        color: #FFFFFF;

        white-space:nowrap;
        
        `}>
            <div css={css`display: inline;`}>KNU 곰두리들의 멋진 공연! </div>
        </div>

        <div css={css`
        /* 공연의 전체 일정을 확인해보세요. */

        width: 190px;
        height: 15px;

        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 15px;

        color: rgba(255, 255, 255, 0.6);
        white-space:nowrap;
        margin-top: 10px;
        margin-bottom: 32px;
        `}>카드를 눌러서 자세한 정보를 살펴보세요!</div>

        <Day day={'Day 1'} date={'9/20 (화)'}/>
        <SquareTag content={"꾼"} content2={"22:00~22:20"}/>
        <SquareTag content={"더울림"} content2={"X"}/>
        <SquareTag src={image1} content={"TONE"} content2={"X"}/>
        <SquareTag content={"RMPC"} content2={"X"}/>
        <Bar2/>
        <Day day={'Day 2'} date={'9/21 (수)'}/>
        <SquareTag src={image2} content={"브로커"} content2={"X"}/>
        <SquareTag src={image3} content={"이너스"} content2={"X"}/>
        <SquareTag src={image4} content={"아젤리아"} content2={"X"}/>
        <SquareTag src={image5} content={"Co’k"} content2={"X"}/>
        <SquareTag content={"놀이패한마당"} content2={"X"}/>
        </div>

        </DefalutLayout>
    );
}