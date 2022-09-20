import React from 'react';
import { css, useTheme } from '@emotion/react';
import WritterBox from '../writter-box';

import moment from 'moment/moment';
import 'moment/locale/ko';

import tempImage from '../../../images/lost-article-image1.png';

import ReplyBox from '../reply-folder/reply-box';
import CommentInputBox from '../comment-input-box';
import LostIndicator from './lost-indicator';


export default function LostArticlePostBox( {children} ) {
    const time = moment().format('DD/MM HH:MM');
    const theme = useTheme();

    return(
        <div
            // 전체 컨테이너
            css={css`
                display: flex;
                flex-direction: column;

                margin: 0px 20px;
                margin-top: 20px;
            `}
        >
            <div
                // 작성자 및 분실물 인디케이터 컨테이너
                css={css`
                    display: flex;

                    align-items: center;
                `}
            >
                <WritterBox
                    writter={'날으는토끼'}
                    time={time}
                />
                <div
                    css={css`
                        margin-left: auto;
                    `}
                >
                    <LostIndicator />
                </div>
            </div>
            <div
                //글 제목
                css={css`
                    color: ${theme.colors.white};
                    font-size: 1rem;

                    margin-top: 20px;
                `}
            >
                육주 에어팟
            </div>
            <div
                // 글 내용
                css={css`
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.9rem;
                    margin-top: 8px;
                `}
            >
                회색 케이스 에어팟 잃어버리신 분?
            </div>
            <div css={css`
                // 사진 
                width: stretch;
                aspect-ratio: 1 / 1;
                background-color: transparent;
                
                margin-top: 24px;
                margin-bottom: 48px;

                overflow: hidden;
            `}>
                <img
                    src={tempImage}
                    css={css`
                    border-radius: 18px;
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                    `}    
                />
            </div>
            
            <ReplyBox />
            
        </div>
    );
}