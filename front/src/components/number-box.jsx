import React from 'react';
import { css } from '@emotion/react';

export default function NumberBox( {children} ) {
    return(
        <div
            // 전체컨테이너
            css={css`
                display: flex;

                align-items: center;
                justify-content: center;

                width: 20px;
                height: 20px;

                border: 2px solid #D3D3D9;
                border-radius: 8px;

                color: #767687;

                font-size: 1rem;
            `}
        >
            {children}
        </div>
    );
}