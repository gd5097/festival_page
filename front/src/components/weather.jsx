import React from 'react';
import { css, useTheme } from '@emotion/react';

import tempWeatherImage from '../images/weather.png';

export default function Weather() {
    const theme = useTheme();

    return(
        <div
            // 전체 컨테이너
            css={css`
                display: flex;
                align-items: center;
                column-gap: 9px;

                padding: 0px 20px;

                height: 18px;
                margin-top: 11px;
            `}
        >
            <div
                // '현재' 글씨
                css={css`
                    color: ${theme.colors.white};
                    font-size: 1.0rem;                  
                `}
            >
                현재
            </div>
            <div
                // 날씨 이미지
            >
                <img src={tempWeatherImage} />
            </div>
            <div
                // 온도 정보
                css={css`
                    color: ${theme.colors.white};
                    font-size: 1.0rem;
                `}
            >
                29°C
            </div>
        </div>
    );
}