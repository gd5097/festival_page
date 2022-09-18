import React from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../../../layouts/default';

import Day from '../Day';

import Bar2 from '../Bar2';

import { useNavigate } from 'react-router-dom';
import SquareTag from '../SquareTag';

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

        font-family: 'HGGGothicssi';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
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

        font-family: 'HGGGothicssi';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;

        color: rgba(255, 255, 255, 0.6);
        white-space:nowrap;
        margin-top: 10px;
        margin-bottom: 32px;
        `}>카드를 눌러서 자세한 정보를 살펴보세요!</div>

        <Day day={'Day 1'} date={'9/20 (화)'}/>
        <SquareTag content={"동아리 이름"} content2={"16:00 - 16:40"}/>
        <SquareTag content={"동아리 이름"} content2={"16:00 - 16:40"}/>
        <Bar2/>
        <Day day={'Day 2'} date={'9/21 (수)'}/>
        <SquareTag content={"동아리 이름"} content2={"16:00 - 16:40"}/>
        <SquareTag content={"동아리 이름"} content2={"16:00 - 16:40"}/>
        <Bar2/>
        <Day day={'Day 3'} date={'9/22 (목)'}/>
        <SquareTag content={"동아리 이름"} content2={"16:00 - 16:40"}/>
        <SquareTag content={"동아리 이름"} content2={"16:00 - 16:40"}/>
        </div>

        </DefalutLayout>
    );
}