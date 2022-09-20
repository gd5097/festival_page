import React from 'react';
import { css, useTheme } from '@emotion/react';

export default function BaseTitleForm( {children } ) {
    return(
        <div
            // 전체 컨테이너
            css={css`
                background-color: white;
                color: black;
                font-size: 1rem;
            `}
        >
            {children}
        </div>
    );
}