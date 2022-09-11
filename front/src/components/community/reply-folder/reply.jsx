import React from 'react';
import { css, useTheme } from '@emotion/react';

import menuIcon from '../../../images/menu.png';

export default function Reply( {replyInfo} ) {
    return(
        <div>
            <div 
                // 구분선
                css={css`
                    width: stretch;
                    height: 1px;
                    background-color: rgba(255, 255, 255, 0.2);
                    margin-bottom: 12px;
                `}
            />
            <div
                // 댓글 작성자 닉네임 및 메뉴 버튼 컨테이너
                css={css`
                    display: flex;

                    align-items: center;
                    
                    
                `}
            >
                <div
                    // 작성자 닉네임
                    css={css`
                        color: rgba(255, 255, 255, 0.9);
                        font-size: 0.9rem;
                    `}
                >
                    {replyInfo.wrriter}
                </div>
                <button
                    // 메뉴 아이콘
                    type='button'
                    onClick={() => {
                        console.log('menu Clicked!')
                    }}
                    css={css`
                        background: 0;
                        background-color: transparent;
                        border: 0;

                        margin-left: auto;
                    `}
                >
                    <img 
                        src={menuIcon}
                    />
                </button>
                
            </div>
            <div
                // 댓글 내용
                css={css`
                    color: rgba(255, 255 ,255, 0.7);
                    font-size: 0.9rem;
                `}
            >
                {replyInfo.content}
            </div>
            <div
                // 댓글 게시 시간
                css={css`
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.8rem;
                    margin-top: 10px;
                `}
            >
                {replyInfo.postTime}
            </div>
            
        </div>
    );
}