import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export default function MiddleTag({contnet, left, top}) {
    return(
        <div 
        style={{left:left, top:top}}
        css={css`
            /* 동아리 */
            position: absolute;


            width: 49px;
            height: 20px;

            font-family: 'HGGGothicssi';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 20px;
            /* identical to box height */

            text-align: center;

            /* WHITE/40 */

            color: rgba(255, 255, 255, 0.4);


            /* Inside auto layout */

            flex: none;
            order: 0;
            flex-grow: 0;

            white-space:nowrap;
        `}>
            {contnet}
        </div>
    );
}