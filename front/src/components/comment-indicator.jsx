import React from 'react';
import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

import CommentImageNoColor from '../images/comment-no-color.png';

export default function CommentIndicator({number}) {
    const theme = useTheme();

    return(
        <div
            // 전체 컨테이너
            css={css`
                display: flex;
                align-items: center;

                column-gap: 4px;
            `}
        >
            <img src={CommentImageNoColor} />
            <div
                // 댓글 숫자
                css={css`
                    color: ${theme.colors.gray};
                    font-size: 0.75rem;
                `}
            >
                {number}
            </div>
        </div>
    );
}

CommentIndicator.propTypes = {
    number: PropTypes.number,
}

CommentIndicator.defaultProps = {
    number: 0,
}