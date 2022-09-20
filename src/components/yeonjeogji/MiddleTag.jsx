import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export default function MiddleTag({contnet}) {
    return(
        <div 
        css={css`
            /* 동아리 */

            width: 49px;
            height: 20px;


            font-style: normal;
            font-weight: 400;
            font-size: 1.125rem;
            line-height: 20px;
            /* identical to box height */

            margin-top: 8px;
            margin-bottom: 15px;

            text-align: center;

            /* WHITE/40 */

            color: rgba(255, 255, 255, 0.4);


            /* Inside auto layout */

            white-space:nowrap;
        `}>
            {contnet}
        </div>
    );
}