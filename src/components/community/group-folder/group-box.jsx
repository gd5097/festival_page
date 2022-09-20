import React from 'react';
import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import CommentIndicator from '../../comment-indicator';
import { Link } from 'react-router-dom';

import moment from 'moment';
import 'moment/locale/ko';

export default function GroupBox( {postInfo, onClick} ){
    const time = moment(postInfo.createdAt).format('DD/MM HH:MM');
    const theme = useTheme();
    console.log(time);
    return(
        <button
            // 전체 컨테이너
            onClick={onClick}
            css={css`
                display: flex;
                flex-direction: column;

                justify-content: center;
                align-items: stretch;
                text-align: left;

                row-gap: 8px;

                background-color: ${theme.colors.white};
                border: 0;
                border-radius: 18px;
                
                padding: 20px 16px;
            `}
        >
            <div 
                // 제목이자 내용
                css={css`

                    color: ${theme.colors.black};
                    font-size: 1rem;
                    font-weight: bold;
                    background-color:teal;
                    background-color: white;
                `}
            >
                {postInfo.contents}
            </div>
            <div
                // 날짜 및 댓글 수 컨테이너
                css={css`
                    display: flex;
                `}
            >
                <div
                    // 포스팅 시간
                    css={css`
                        font-size: 0.75rem;
                        color: ${theme.colors.gray};
                    `}
                >
                    {time}
                </div>
                <div
                    // 댓글 수 표기
                    css={css`
                        margin-left: auto;
                    `}
                >
                    <CommentIndicator number={postInfo.commentCount}/>
                </div>
            </div>
            
        </button>
    );
}

GroupBox.propTypes = {
    postInfo: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}