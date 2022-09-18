import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export default function Time({content}) {
    return(
        <div
            css={css`

            width: 84px;
            height: 18px;

            font-family: 'HGGGothicssi';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 18px;
            /* identical to box height */

            text-align: center;

            color: #FFFFFF;

            opacity: 0.8;

            white-space:nowrap;
            `}>{content}</div>
    );
}