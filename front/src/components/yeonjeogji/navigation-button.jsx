import React from 'react';
import { css, useTheme } from '@emotion/react';

export default function NavigationButton( {text, onClick, abled} ) {
    const theme = useTheme();

    return(
        <div>

        {abled ? 
        <button
        type='button'

        onClick={onClick}
        css={css`
            color: ${theme.colors.black};

            /* tag_category */


            /* Auto layout */

            display: flex;
            column-gap: 10px;
            
            align-items: center;
            justify-content: center;
            border: 0;

            padding: 10px 16px;
            

            width: auto;
            height: auto;

            /* WHITE/80 */

            background: rgba(255, 255, 255, 0.8);
            /* icon_lighting */

            border-radius: 34px;

            /* Inside auto layout */

            flex: none;
            order: 1;
            flex-grow: 0;

    `}>
        <div
            css={css`
            /* 체험부스 */
            font-size: 0.875rem;     
            text-align: center;
            color: #1D2767;

         
        `}>{text}
        </div>
    </button>
        : 
        <button
        type='button'

        onClick={onClick}
        css={css`
            color: ${theme.colors.black};

            /* tag_category */


            /* Auto layout */

            display: flex;
            column-gap: 10px;
            
            align-items: center;
            justify-content: center;
            border: 0;

            padding: 10px 16px;
            

            width: auto;
            height: auto;

            /* WHITE/80 */

            background: rgba(255, 255, 255, 0.2);
            /* icon_lighting */

            border-radius: 34px;

            /* Inside auto layout */

            flex: none;
            order: 1;
            flex-grow: 0;

    `}>
        <div
            css={css`
            /* 체험부스 */
            font-size: 0.875rem;     
            text-align: center;
            color: rgba(255, 255, 255, 0.7);

         
        `}>{text}
        </div>
    </button>
        }
        
        </div>
    );
}