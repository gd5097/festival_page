import React from 'react';
import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

import CommentIndicator from '../../comment-indicator';
import LikeIndicator from '../../like-indicator';
import { Link } from 'react-router-dom';
import LostIndicator from './lost-indicator';

export default function LostArticleBox( {postInfo} ) {
     const theme = useTheme();

    return(
        <Link
            // 전체 컨테이너
            
            to={`/community/lost-article-view/${postInfo.id}`}
            css={css`
                display: flex;
                flex-direction: column;

                background-color: ${theme.colors.white};
                
                border: 0;
                padding: 8px;

                border-radius: 16px;
                
                overflow: hidden;

                width: stretch;
                height: auto;
            `}
        >
            <div css={css`
                // 사진 미리보기 이미지
                position: relative;
                width: stretch;
                aspect-ratio: 1 / 1;
                background-color: #dfdfdf;

                border-radius: 12px;
                
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
                <div
                    css={css`
                        position: absolute;                        
                        width: auto;
                        height: auto;
                        top: 8px;
                        right: 8px;
                    `}
                >
                    <LostIndicator lost={postInfo.isLost}/>
                </div>
            </div>
            <div
                // 게시글 제목
                css={css`    
                font-size: 0.9rem;
                color: ${theme.colors.black};
                margin-top: 10px;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            `}>
                {postInfo.title}
            </div>
        </Link>
    );
}

LostArticleBox.propTypes = {
    postInfo: PropTypes.object.isRequired,
}