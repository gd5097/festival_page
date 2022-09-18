import React from 'react';
import { css, useTheme } from '@emotion/react';

export default function NavigationButton( {text, onClick , color} ) {
    const theme = useTheme();

    return(
        <button
            type='button'

            onClick={onClick}
            css={css`
                color: ${color};
                background-color: transparent;
                padding: 0;
                border: 0;
        `}>
            {text}
        </button>
    );
}