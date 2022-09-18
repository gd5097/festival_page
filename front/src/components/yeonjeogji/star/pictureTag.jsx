import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export default function PictureTag({src, content1, content2, contentleft, contenttop}) {

    return(
        <div 
            style={{left:contentleft, top:contenttop}}
            css={css` 
            position: absolute;
            `}>

            <img
            src={src}
            css={css`
                position: absolute;
                width: 56px;
                height: 56px;
                border-radius: 4px;
            `}/>

            <div
                css={css`
                position: absolute;
                width: 206px;
                height: 15px;

                left: 84px;
                top: 8px;

                font-family: 'HGGGothicssi';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 15px;

                /* WHITE/80 */

                color: rgba(255, 255, 255, 0.8);


                /* Inside auto layout */

                flex: none;
                order: 0;
                flex-grow: 0;
                white-space:nowrap;
            `}>
                {content1}
            </div>

            <div
            css={css`
                position: absolute;
                /* 2020.04.29 발매 */
                width: 78px;
                height: 13px;

                left: 84px;
                top: 29px;

                font-family: 'HGGGothicssi';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 13px;


                /* Inside auto layout */

                flex: none;
                order: 1;
                flex-grow: 0;
                white-space:nowrap;

                color: rgba(255, 255, 255, 0.8);
            `}>
                {content2}
            </div>
        
        </div>
    );
}