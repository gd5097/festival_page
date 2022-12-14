import React from 'react';
import { css, useTheme } from '@emotion/react';

import PropTypes from '@emotion/react';

import clockIcon from '../images/clock.png';

export default function TimeInformationBox( {text, time} ) {
    const theme = useTheme();

    return(
        <div
            // 전체 컨테이너
            css={css`
                display: flex;

                padding: 0px 20px;
                margin-top: 16px;

                align-items: center;
            `}
        >
            <div
                // 미니 카테고리
                css={css`
                    background-color: rgba(255, 255, 255, 0.2);
                    border-radius: 34px;
                    padding: 10px 16px;

                    font-size: 0.9rem;
                    
                    color: rgba(255, 255, 255, 0.7);
                `}
            >
                {text}
            </div>
            <div
                // 시계 및 운영시간 컨테이너
                css={css`
                    display: flex;

                    align-items: center;
                    margin-left: auto;
                    column-gap: 8px;
                `}
            >
                <div
                    css={css`
                        position: relative;
                        top: 1px;
                    `}
                >
                    <img src={clockIcon} />
                </div>
                <div
                    css={css`
                        font-family: 'festivalfont-40';
                        font-size: 0.9rem;
                        color: #E0E2EC;
                    `}
                >
                    {time}
                </div>

            </div>
        </div>
    );
}