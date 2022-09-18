import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export default function Picture({src}) {

    return(
        <div css={css` 
        width: stretch;
        aspect-ratio: 1 / 1;
        background-color: #dfdfdf;
        
        overflow: hidden;`}>
        <img
        src={src}
        css={css`
            border-radius: 12px;
            object-fit: cover;
            width: 100%;
            height: 100%;
        `}/>
        </div>
    );
}