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
        
        <div   css={css`
        /* 대학 축제의 꽃, 공연 ! */
        position: absolute;
        width: 174px;
        height: 22px;
        left: 20px;
        top: 160px;

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


        position: absolute;
        width: 190px;
        height: 15px;
        left: 20px;
        top: 192px;

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

        <Day day={'Day 1'} date={'9/20 (화)'} dayleft={20} daytop={231} dateleft={87} datetop={235}/>
        <SquareTag content={"동아리 이름"} content2={"16:00 - 16:40"} left={20} top={273}/>
        <SquareTag content={"동아리 이름"} content2={"16:00 - 16:40"} left={20} top={389}/>
        <Bar2 linetop={519}></Bar2>

        <Day day={'Day 2'} date={'9/21 (수)'} dayleft={20} daytop={549} dateleft={87} datetop={553}/>
        <SquareTag content={"동아리 이름"} content2={"16:00 - 16:40"} left={20} top={591}/>
        <SquareTag content={"동아리 이름"} content2={"16:00 - 16:40"} left={20} top={707}/>
        <Bar2 linetop={837}></Bar2>
        

        <Day day={'Day 3'} date={'9/22 (목)'} dayleft={20} daytop={867} dateleft={87} datetop={871}/>
        <SquareTag content={"동아리 이름"} content2={"16:00 - 16:40"} left={20} top={909}/>
        <SquareTag content={"동아리 이름"} content2={"16:00 - 16:40"} left={20} top={1025}/>
        <Bar2 linetop={939}></Bar2>

        </DefalutLayout>
    );
}