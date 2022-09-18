import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export default function SquareTag({content, content2}) {
    return(
        <div 
        css={css`
        /* Rectangle 43 */

        width: 100%;
        height: 100px;

        display: grid;
        grid-template-columns: auto 1fr auto;
                
        column-gap: 10px;

        margin-bottom: 16px;

        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%), #B6B6B6;
        border-radius: 12px;
        `}> 

            <div css={css`
                /* 울음큰새 */

                width: auto;
                height: auto;

                margin-left: 16px;
                margin-top: 72px;

                font-family: 'HGGGothicssi';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 18px;
                /* identical to box height */


                color: #FFFFFF;


                /* Inside auto layout */


                white-space:nowrap;
            
            `}>{content}</div>
            
            <div css={css`
                /* 울음큰새 */

                width: auto;
                height: auto;

                margin-top: 72px;
                margin-right: 16px;
                margin-left: auto;

                font-family: 'HGGGothicssi';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 18px;
                /* identical to box height */


                color: #FFFFFF;


                /* Inside auto layout */

                white-space:nowrap;
            
            `}>{content2}</div>
        </div>
    );
}