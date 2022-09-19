import React from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../../../layouts/default';

import Day from '../Day';
import MiddleTag from '../MiddleTag';
import SmallTag from '../SmallTag';
import Bar from '../Bar';
import { useNavigate } from 'react-router-dom';

export default function AllPage() {
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
            <div css={css`display: inline;`}>대학 축제의 꽃, </div>
            <div   css={css`
            color: #FF773E;
            display: inline;
            `}>공연</div> 
            <div css={css`display: inline;`}>!</div>
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
        `}>공연의 전체 일정을 확인해보세요.</div>

            <Day day={'Day 1'} date={'9/20 (화)'}/>
            <MiddleTag contnet={'밴드동아리'}/>
            <SmallTag first={'꾼'} second={'22:00~22:20'}/>
            <SmallTag first={'더울림'} second={'X'}/>
            <SmallTag first={'TONE'} second={'X'}/>
            <SmallTag first={'RMPC'} second={'X'}/>

            <Day day={'Day 2'} date={'9/21 (수)'}/>
            <MiddleTag contnet={'댄스동아리'}/>
            <SmallTag first={'브로커'} second={'X'}/>
            <SmallTag first={'이너스'} second={'X'}/>
            <SmallTag first={'아젤리아'} second={'X'}/>
            <SmallTag first={'Co’k'} second={'X'}/>
            <SmallTag first={'놀이패한마당'} second={'X'}/>
            <MiddleTag contnet={'연예인'}/>
            <SmallTag first={'영앤리치'} second={'X'}/>
            <SmallTag first={'오반'} second={'X'}/>

            <Day day={'Day 3'} date={'9/22 (목)'}/>
            <MiddleTag contnet={'연예인'}/>
            <SmallTag first={'자이언티'} second={'X'}/>
            <SmallTag first={'펀치'} second={'X'}/>

        </div>

        </DefalutLayout>
    );
}