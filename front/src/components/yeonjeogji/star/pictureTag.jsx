import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export default function PictureTag({src, content1, content2}) {

    return(
        <div 
            css={css` 
            display: flex;
        `}>

            <img
            src={src}
            css={css`
                width: 56px;
                height: 56px;
                border-radius: 4px;
            `}/>

            <div css={css`
            display: flex;
            flex-direction: column;

            padding: 8px;
            `}>

            <div
                css={css`
                width: auto;
                height: auto;

                margin-bottom: 6px;


                font-family: 'HGGGothicssi';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 15px;

                /* WHITE/80 */

                color: rgba(255, 255, 255, 0.8);


                /* Inside auto layout */
                white-space:nowrap;
            `}>
                {content1}
            </div>

            <div
            css={css`
                /* 2020.04.29 발매 */
                width: auto;
                height: auto;


                font-family: 'HGGGothicssi';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 13px;


                /* Inside auto layout */

                white-space:nowrap;

                color: rgba(255, 255, 255, 0.8);
            `}>
                {content2}
            </div>
            </div>

        </div>       
    );
}