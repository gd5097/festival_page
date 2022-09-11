import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export default function SmallTag({content, time, contentleft, contenttop, lineleft, linetop, timeleft, timetop}) {
    return(
        <div>
            <div
            style={{left:contentleft, top:contenttop}}
            css={css`
            /* 울음큰새 */
            position: absolute; 

            width: 36px;
            height: 18px;

            font-family: 'HGGGothicssi';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 18px;
            /* identical to box height */


            /* WHITE/90 */

            color: rgba(255, 255, 255, 0.9);

            opacity: 0.9;

            /* Inside auto layout */

            flex: none;
            order: 0;
            flex-grow: 0;

            white-space:nowrap;
            `}>{content}</div>
            <hr 
                style={{left:lineleft, top:linetop}}
                css={css`

                position: absolute; 

                /* Vector 6 */


                width: 152px;
                height: 0px;

                /* WHITE/20 */

                border: 1px dashed rgba(255, 255, 255, 0.2);

                /* Inside auto layout */

                flex: none;
                order: 1;
                flex-grow: 1;
            `}></hr>
            <div 
            style={{left:timeleft, top:timetop}}
            css={css`/* 16:50 - 17:30 */
            position: absolute; 

            width: 84px;
            height: 18px;

            font-family: 'HGGGothicssi';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 18px;
            /* identical to box height */

            text-align: center;

            /* WHITE/90 */

            color: rgba(255, 255, 255, 0.9);

            opacity: 0.8;

            /* Inside auto layout */

            flex: none;
            order: 2;
            flex-grow: 0;
            white-space:nowrap;
            `}>{time}</div>
        </div>
    );
}