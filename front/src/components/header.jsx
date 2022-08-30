import React from 'react';
import { css, useTheme } from '@emotion/react';

import tempImage from '../images/back-arrow.png';
import tempImage2 from '../images/bell.png';
import tempImage3 from '../images/document.png';

export default function Header(){
    const theme = useTheme();

    return(
        <div 
            // 헤더 컨테이너
            css={css`
                display: flex;
                position: relative;

                align-items: center;

                padding: 0px 22px;
                height: 48px;
                background-color: orange;   // for test
                //background-color: ${theme.colors.primary1};
                
        `}>
            <div
                // 뒤로가기
                css={css`
                    
                `}
            >
                <img src={tempImage} css={css`
                    object-fit: cover;
                `}/>
            </div>
            <div
                // 첫 번째 아이콘
                css={css`
                    margin-left: auto;
                `}
            >
                <img
                    src={tempImage2}
                    css={css`
                        object-fit: cover;
                `}/>
            </div>
            <div
                // 두 번째 아이콘
                css={css`
                    margin-left: 30px;
                `}
            >
                <img src={tempImage3} css={css`
                    align-self: flex-end;
                    object-fit: cover;
                `}/>
            </div>

            <div
                // 페이지 이름
                css={css`
                    position: absolute;
                    left: 50%;
                    transform: translate(-50%);

                    font-weight: 400;
                    color: ${theme.colors.white};
                    font-size: 1.4rem;
                `}>
                게시판
            </div>

            
        </div>
    );
}
