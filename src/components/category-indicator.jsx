import React from 'react';
import { css, useTheme } from '@emotion/react';

export default function CategoryIndicator( {children} ) {
    return(
        <div
            // 전체 컨테이너
            css={css`
                background-color:#D8E7F2;
                color: #7C9DD2;

                padding: 4px 10px;

                border-radius: 30px;

                font-size: 0.75rem;
            `}
        >
            {children}
        </div>
    );
}