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
            <div css={css`display: inline;`}>대학 축제의 꽃, </div>
            <div   css={css`
            color: #FF773E;
            display: inline;
            `}>공연</div> 
            <div css={css`display: inline;`}>!</div>
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
        `}>공연의 전체 일정을 확인해보세요.</div>

        <Day day={'Day 1'} date={'9/20 (화)'} dayleft={20} daytop={239}/>
        <MiddleTag contnet={'동아리'} left={20} top={289}/>
        <SmallTag content={'RMPC'} time={'16:00 - 16:40'} contentleft={20} contenttop={324}/>
        <SmallTag content={'울음큰새'} time={'16:55 - 17:35'} contentleft={20} contenttop={358}/>
        <SmallTag content={'꾼'} time={'17:50 - 18:30'} contentleft={20} contenttop={392}/>
        <MiddleTag contnet={'연예인'} left={20} top={442}/>
        <SmallTag content={'코드쿤스트'} time={'19:00 - 19:50'} contentleft={20} contenttop={477}/>
        <SmallTag content={'PSY'} time={'20:00 - 21:30'} contentleft={20} contenttop={511}/>
        <Bar linetop={569}></Bar>

        <Day day={'Day 2'} date={'9/21 (수)'} dayleft={20} daytop={609}/>
        <MiddleTag contnet={'동아리'} left={20} top={659}/>
        <SmallTag content={'RMPC'} time={'16:00 - 16:40'} contentleft={20} contenttop={694}/>
        <SmallTag content={'울음큰새'} time={'16:55 - 17:35'} contentleft={20} contenttop={728}/>
        <SmallTag content={'꾼'} time={'17:50 - 18:30'} contentleft={20} contenttop={762}/>
        <MiddleTag contnet={'연예인'} left={20} top={812}/>
        <SmallTag content={'코드쿤스트'} time={'19:00 - 19:50'} contentleft={20} contenttop={847}/>
        <SmallTag content={'PSY'} time={'20:00 - 21:30'} contentleft={20} contenttop={881}/>
        <Bar linetop={939}></Bar>
        

        <Day day={'Day 3'} date={'9/22 (목)'} dayleft={20} daytop={979}/>
        <MiddleTag contnet={'동아리'} left={20} top={1024}/>
        <SmallTag content={'RMPC'} time={'16:00 - 16:40'} contentleft={20} contenttop={1064}/>
        <SmallTag content={'울음큰새'} time={'16:55 - 17:35'} contentleft={20} contenttop={1098}/>
        <SmallTag content={'꾼'} time={'17:50 - 18:30'} contentleft={20} contenttop={1132}/>
        <MiddleTag contnet={'연예인'} left={20} top={1182}/>
        <SmallTag content={'코드쿤스트'} time={'19:00 - 19:50'} contentleft={20} contenttop={1217}/>
        <SmallTag content={'PSY'} time={'20:00 - 21:30'} contentleft={20} contenttop={1251}/>
        <Bar linetop={939}></Bar>

        </DefalutLayout>
    );
}