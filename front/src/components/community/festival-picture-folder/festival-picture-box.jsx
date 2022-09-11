import React from 'react';
import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

import CommentIndicator from '../../comment-indicator';
import LikeIndicator from '../../like-indicator';
import { Link } from 'react-router-dom';

export default function FestivalPictureBox( {postInfo} ) {
     const theme = useTheme();

    return(
        <Link
            // 전체 컨테이너
            
            to={`/community/festival-picture-view/${postInfo.id}`}
            css={css`
                display: flex;
                flex-direction: column;

                background-color: ${theme.colors.white};
                
                border: 0;
                padding: 8px;

                border-radius: 16px;
                
                overflow: hidden;

                width: stretch;
                height: 58vw;
            `}
        >
            <div css={css`
                // 사진 미리보기 이미지
                width: stretch;
                aspect-ratio: 1 / 1;
                background-color: #dfdfdf;
                
                overflow: hidden;
            `}>
                <img
                    src={postInfo.image}
                    css={css`
                    border-radius: 12px;
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                    `}    
                />
            </div>
            <div
                // 게시글 제목
                css={css`    
                font-size: 0.9rem;
                color: ${theme.colors.black};
                margin-top: 10px;

                width: stretch;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            `}>
                {postInfo.title}
            </div>
            <div
                // 댓글 및 추천 수 컨테이너
                css={css`
                    display: flex;
                    column-gap: 8px;

                    margin-top: auto;
                    margin-bottom: 4px;
                `}
            >
                <CommentIndicator number={postInfo.comments} />
                <LikeIndicator number={postInfo.like} />
            </div>
        </Link>
    );
}

FestivalPictureBox.propTypes = {
    postInfo: PropTypes.object.isRequired,
}