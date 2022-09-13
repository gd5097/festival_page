import React from 'react';
import { css, useTheme } from '@emotion/react';
import WritterBox from '../writter-box';

import moment from 'moment/moment';
import 'moment/locale/ko';

import tempImage from '../../../images/festival-image1.jpg';
import LikeIndicator from '../../like-indicator';
import CommentIndicator from '../../comment-indicator';
import LikeButton from './like-button';
import ReplyBox from '../reply-folder/reply-box';
import CommentInputBox from '../comment-input-box';


export default function FestivalPostBox( {children} ) {
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
            <WritterBox
                writter={'날으는토끼'}
                time={time}
            />
            <div
                //글 제목
                css={css`
                    color: ${theme.colors.white};
                    font-size: 1rem;

                    margin-top: 20px;
                `}
            >
                육주앞에서 찍은 사진임
            </div>
            <div
                // 글 내용
                css={css`
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.9rem;
                    margin-top: 8px;
                `}
            >
                다들 축제 잘보내고 있어? 나는 3년만의 축제라 진짜 너무 좋아 진짜...
            </div>
            <div css={css`
                // 사진 
                width: stretch;
                aspect-ratio: 1 / 1;
                background-color: transparent;
                
                margin-top: 24px;

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
            <div
                // 추천수|댓글수|추천버튼 컨테이너
                css={css`
                    display: flex;

                    column-gap: 12px;

                    margin-top: 12px;
                `}
            >
                <LikeIndicator number={239} color/>
                <CommentIndicator number={18} color/>
                <div
                    css={css`
                        display: flex;
                        margin-left: auto;
                    `}
                >
                    <LikeButton />
                </div>
            </div>
            <ReplyBox />
            
        </div>
    );
}