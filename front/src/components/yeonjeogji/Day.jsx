import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export default function Day({day, date, dayleft, daytop, dateleft, datetop}) {
    return(
        <div>
            <div 
            style={{left:dayleft, top:daytop}}
            css={css`

            /* Day 1 */

            position: absolute;

            width: 51px;
            height: 26px;

            font-family: 'HGGGothicssi';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 26px;

            /* KEY/ORANGE */

            color: #FF773E;

            opacity: 0.9;

            /* Inside auto layout */

            flex: none;
            order: 0;
            flex-grow: 0;

            white-space:nowrap;
            
            `}>{day}</div>
            <div  
            style={{left:dateleft, top:datetop}}
            css={css`

            /* 9/20 (화) */
            
            position: absolute;

            width: 58px;
            height: 18px;

            font-family: 'HGGGothicssi';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 18px;
            /* identical to box height */


            /* WHITE/100 */

            color: #FFFFFF;

            opacity: 0.9;

            /* Inside auto layout */

            flex: none;
            order: 0;
            flex-grow: 0;

            white-space:nowrap;

        `}>{date}</div>
        </div>
    );
}