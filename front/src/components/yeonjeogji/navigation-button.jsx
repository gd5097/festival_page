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

                /* tag_category */


                /* Auto layout */

                display: flex;
                flex-direction: row;
                align-items: flex-start;
                padding: 10px 16px;
                gap: 8px;

                width: 70px;
                height: 35px;

                /* WHITE/80 */

                background: rgba(255, 255, 255, 0.8);
                /* icon_lighting */

                box-shadow: 0px 0px 6px rgba(255, 243, 202, 0.28);
                border-radius: 34px;

                /* Inside auto layout */

                flex: none;
                order: 1;
                flex-grow: 0;

        `}>
            <div
                css={css`
                /* 체험부스 */


                width: 26px;
                height: 15px;

                font-family: 'HGGGothicssi';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 15px;
                text-align: center;

                /* KEY/KEY */

                color: #1D2767;


                /* Inside auto layout */

                flex: none;
                order: 0;
                flex-grow: 0;

    
                white-space:nowrap;
            `}>{text}
    </div>
        </button>
    );
}