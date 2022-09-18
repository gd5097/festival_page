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

        font-family: 'HGGGothicssi';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
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

        font-family: 'HGGGothicssi';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;

        color: rgba(255, 255, 255, 0.6);
        white-space:nowrap;
        margin-top: 10px;
        margin-bottom: 32px;
        `}>공연의 전체 일정을 확인해보세요.</div>

            <Day day={'Day 1'} date={'9/20 (화)'}/>
            <MiddleTag contnet={'동아리'}/>
            <SmallTag first={'RMPC'} second={'16:00 - 16:40'}/>
            <SmallTag first={'울음큰새'} second={'16:55 - 17:35'}/>
            <SmallTag first={'꾼'} second={'17:50 - 18:30'}/>
            <MiddleTag contnet={'연예인'}/>
            <SmallTag first={'코드쿤스트'} second={'19:00 - 19:50'}/>
            <SmallTag first={'PSY'} second={'20:00 - 21:30'}/>

            <Day day={'Day 2'} date={'9/21 (수)'}/>
            <MiddleTag contnet={'동아리'}/>
            <SmallTag first={'RMPC'} second={'16:00 - 16:40'}/>
            <SmallTag first={'울음큰새'} second={'16:55 - 17:35'}/>
            <SmallTag first={'꾼'} second={'17:50 - 18:30'}/>
            <MiddleTag contnet={'연예인'}/>
            <SmallTag first={'코드쿤스트'} second={'19:00 - 19:50'}/>
            <SmallTag first={'PSY'} second={'20:00 - 21:30'}/>

            <Day day={'Day 3'} date={'9/22 (목)'}/>
            <MiddleTag contnet={'동아리'}/>
            <SmallTag first={'RMPC'} second={'16:00 - 16:40'}/>
            <SmallTag first={'울음큰새'} second={'16:55 - 17:35'}/>
            <SmallTag first={'꾼'} second={'17:50 - 18:30'}/>
            <MiddleTag contnet={'연예인'}/>
            <SmallTag first={'코드쿤스트'} second={'19:00 - 19:50'}/>
            <SmallTag first={'PSY'} second={'20:00 - 21:30'}/>

        </div>

        </DefalutLayout>
    );
}