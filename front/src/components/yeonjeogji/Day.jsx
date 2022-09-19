import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export default function Day({day, date, daytop}) {
    return(
        <div
        //style={{left:dayleft, top:daytop}}
        css={css`
        /* Rectangle 43 */
        display: flex;
        flex-direction: row;
        margin-bottom: 16px;

        //position: absolute;
        `}>
            <div 
            css={css`

            /* Day 1 */


            font-family: "festivalfont-60";
            font-style: normal;
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 26px;

            /* KEY/ORANGE */

            color: #FF773E;

            opacity: 0.9;

            /* Inside auto layout */

            flex-basis: auto;
            white-space:nowrap;
            
            `}>{day}
            </div>
            




            <div css={css`/* · */
                //position: absolute;

                width: 8px;
                height: 18px;

                margin: 0px 4px;


                font-style: normal;
                font-weight: 400;
                font-size: 1rem;
                line-height: 18px;
                /* identical to box height */


                /* WHITE/100 */

                color: #FFFFFF;

                opacity: 0.6;

                /* Inside auto layout */

                white-space:nowrap;
                `}>
                .
            </div>






            <div  
            css={css`

            /* 9/20 (화) */
            


            width: auto;
            height: auto;

            margin: 4px 0px;

            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 18px;
            /* identical to box height */


            /* WHITE/100 */

            color: #FFFFFF;

            opacity: 0.9;

            /* Inside auto layout */

            white-space:nowrap;

        `}>{date}</div>
        </div>
    );
}