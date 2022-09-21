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
            <SmallTag first={'리베르타스(교직원 밴드)'} second={'21:00'}/>
            <SmallTag first={'noisefactory(도청밴드)'} second={'21:10'}/>
            <SmallTag first={'놀이패한마당'} second={'21:20'}/>
            <SmallTag first={'더울림'} second={'21:40'}/>
            <SmallTag first={'꾼'} second={'22:00'}/>
            <SmallTag first={'TONE'} second={'22:20'}/>
            <SmallTag first={'기타치노'} second={'22:40'}/>
            <SmallTag first={'울음큰새'} second={'23:00'}/>
            <SmallTag first={'RMPC'} second={'23:30'}/>

            <div
                css={css`
                    height: 20px;
                `}
            >

            </div>
            <Day day={'Day 2'} date={'9/21 (수)'}/>
            
            <SmallTag first={'아젤리아'} second={'20:00'}/>
            <SmallTag first={'이너스'} second={'20:20'}/>
            <SmallTag first={'Co `k'} second={'20:35'}/>
            <SmallTag first={'브로커'} second={'20:50'}/>
            <SmallTag first={'축하공연'} second={'21:00'}/>
            
            <div
                css={css`
                    height: 20px;
                `}
            >

            </div>
            <Day day={'Day 3'} date={'9/22 (목)'}/>
            
            <SmallTag first={'축하공연'} second={'21:00'}/>

        </div>

        </DefalutLayout>
    );
}