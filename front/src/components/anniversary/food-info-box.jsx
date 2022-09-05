import React from 'react';
import { css, useTheme } from '@emotion/react';

export default function FoodInfoBox(){
    const theme = useTheme();

    return(
        <div 
            // 전체 컨테이너
            css={css`
                background-color: white;
            `}
        >
            test
        </div>
    );
}