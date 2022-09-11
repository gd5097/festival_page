import React from 'react';
import { css, useTheme } from '@emotion/react';

import GomduriImage from '../../../images/gomduri.png';

export default function LikeButton() {
    const theme = useTheme();

    return(
        <button
            //전체 컨테이너
            type='button'
            onClick={() => {
                console.log('like btn Clicked!');
            }}
            css={css`
                display: flex;
                
                justify-content: center;
                align-items: center;

                column-gap: 6px;

                padding: 8px 12px;
            
                border: solid 1px rgba(255, 255, 255, 0.7);
                border-radius: 37px;


                background-color: transparent;
            `}
        >
            <div
                css={css`
                    color: rgba(255, 255, 255, 0.8);
                `}
            >
                추천
            </div>
            <img src={GomduriImage} />
            
            
        </button>
    );
}