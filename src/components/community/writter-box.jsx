import React from 'react';
import { css } from '@emotion/react';


export default function WritterBox( {writter, time} ) {
    

    return(
        <div
            // 전체 컨테이너
            css={css`
                display: flex;
                flex-direction: column;

                align-items: flex-start;
                justify-content: center;

                row-gap: 8px;
            `}
        >
            <div
                css={css`
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.6);
                `}
            >
                작성자
            </div>
            <div
                // 닉네임 및 게시 일시 컨테이너
                css={css`
                    display: flex;
                    align-items: center;

                    column-gap: 12px;
                `}
            >
                <div
                    // 닉네임
                    css={css`
                        font-size: 0.9rem;
                        color: rgba(255, 255, 255, 0.9);
                    `}
                >
                    {writter}
                </div>
                <div
                    // 게시 시간
                    css={css`
                        font-size: 0.8rem;
                        color: rgba(255, 255, 255, 0.4);
                    `}
                >
                    {time}
                </div>
            </div>
        </div>
    );
}