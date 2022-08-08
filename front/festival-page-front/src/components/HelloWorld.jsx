import { css } from '@emotion/react';
import React from 'react';

export default function HelloWorld() {
    return (
        <div
            css={css`
                background-color: tomato;
                color: white;
                font-size: 3rem;
            `}
        >
            Hello World!
        </div>
    );
}
