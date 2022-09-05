import React from 'react';
import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';





export default function Header({ title, leftIcon, rightIcons}){
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
                
                background-color: ${theme.colors.primary1};
                
        `}>
            {leftIcon !== null ?
            <button
                // 좌측 아이콘
                type='button'
                onClick={leftIcon?.onClick}
                css={css`
                    background-color: transparent;
                    border: 0;
                    padding: 0;
                `}
            >
                <img src={leftIcon?.iconImage}
                    css={css`
                    object-fit: cover;
                `}/>
            </button> : null}
            
            {rightIcons !== null ?
            
            <button
                // 2번 아이콘
                type='button'
                onClick={rightIcons[1]?.onClick}
                css={css`
                    margin-left: auto;
                    background-color: transparent;
                    border: 0;
                    padding: 0;
                `}
            >
                <img
                    src={rightIcons[1]?.iconImage}
                    css={css`
                        object-fit: cover;
                `}/>
            </button>

             : null
            }
            
            {rightIcons !== null ?  
            <button
            // 1번 아이콘 (최우측)
            type='button'
            onClick={rightIcons[0]?.onClick}
            css={css`
                margin-left: 30px;
                background-color: transparent;
                border: 0;
                padding: 0;
            `}>
            <img 
                src={rightIcons[0]?.iconImage}
                css={css`
                    align-self: flex-end;
                    object-fit: cover;
            `}/>
            </button> : null }

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
                {title}
            </div>

            
        </div>
    );
}


Header.propTypes = {
    title: PropTypes.string,
    backActivated: PropTypes.bool,
    leftIcon: PropTypes.object,
    rightIcons: PropTypes.array,
};

Header.defaultProps = {
    title: 'Default',
    backActivated: false,
    leftIcon: null,
    rightIcons: null,
};