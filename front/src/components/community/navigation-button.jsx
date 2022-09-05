import React from 'react';
import { css, useTheme } from '@emotion/react';

export default function NavigationButton( {text, onClick} ) {
    const theme = useTheme();

    return(
        <button
            type='button'

            onClick={onClick}
            css={css`
                color: ${theme.colors.black};
                padding: 0;
                border: 0;
        `}>
            {text}
        </button>
    );
}