import React from 'react';
import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

import backArrow from '../images/back-arrow.png';



export default function Header({ backActivated, icons}){
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
            <button
                // 뒤로가기
                type='button'
                onClick={() => {
                    console.log('Back is Clicked!');
                }}
                css={css`
                    background-color: transparent;
                    border: 0;
                    padding: 0;
                `}
            >
                { backActivated ?
                    <img src={backArrow}
                            css={css`
                        object-fit: cover;
                `}/> : null}
            </button>

            <button
                // 2번 아이콘
                type='button'
                onClick={icons[1]?.onClick}
                css={css`
                    margin-left: auto;
                    background-color: transparent;
                    border: 0;
                    padding: 0;
                `}
            >
                <img
                    src={icons[1]?.iconImage}
                    css={css`
                        object-fit: cover;
                `}/>
            </button>

            <button
                // 1번 아이콘 (최우측)
                type='button'
                onClick={icons[0]?.onClick}
                css={css`
                    margin-left: 30px;
                    background-color: transparent;
                    border: 0;
                    padding: 0;
                `}
            >
                <img 
                    src={icons[0]?.iconImage}
                    css={css`
                        align-self: flex-end;
                        object-fit: cover;
                `}/>
            </button>

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


Header.propTypes = {
    backActivated: PropTypes.bool,
    icons: PropTypes.object.isRequired,
};

Header.defaultProps = {
    backActivated: false,
};