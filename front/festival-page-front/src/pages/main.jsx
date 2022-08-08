import { css } from '@emotion/react';
import React from 'react';

import HelloWorld from 'components/HelloWorld';

export default function MainPage() {
    return (
        <div
            css={css`
                display: flex;
                align-items: center;
                justify-content: center;
            `}
        >
            <HelloWorld />
        </div>
    );
}
