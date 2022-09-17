import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export default function SquareTag({content, content2, left, top}) {
    return(
        <div 
        style={{left:left, top:top}}
        css={css`
        /* Rectangle 43 */


        position: absolute;
        width: 320px;
        height: 100px;
        left: 0px;
        top: 0px;
        bottom: 0px;

        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), #B6B6B6;
        border-radius: 12px;
        `}>
            <div css={css`
                /* 울음큰새 */
                position: absolute;
                top: 72px;
                left: 16px;

                width: 76px;
                height: 18px;

                font-family: 'HGGGothicssi';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 18px;
                /* identical to box height */


                color: #FFFFFF;


                /* Inside auto layout */

                flex: none;
                order: 0;
                flex-grow: 0;

                white-space:nowrap;
            
            `}>{content}</div>
            
            <div css={css`
                /* 울음큰새 */
                position: absolute;
                top: 73.5px;
                right: 30px;

                width: 76px;
                height: 18px;

                font-family: 'HGGGothicssi';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 18px;
                /* identical to box height */


                color: #FFFFFF;


                /* Inside auto layout */

                flex: none;
                order: 0;
                flex-grow: 0;

                white-space:nowrap;
            
            `}>{content2}</div>
        </div>
    );
}