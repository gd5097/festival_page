import React, { useEffect, useRef, useState } from 'react';
import { css, useTheme } from '@emotion/react';


export default function Footer() {
    const theme = useTheme();

    return(
        <div
            css={css`
                position: fixed;
                left: 0px;
                bottom: 0px;

                width: 100vw;

                background-color: rgba(255, 255, 255, 0.2);
                color: rgba(255, 255, 255, 0.7);

                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                height: auto;

                font-size: 12px;

                line-height: 30px;

                padding: 24px;
            `}
        >
            기획 | 정성철   디자인 | 최윤선<br />
            개발 | 김용범 / 박찬휘 / 안재진 유정우 / 이상엽 / 최준형
        </div>
    );
}