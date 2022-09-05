import React from 'react';
import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

import LikeImageNoColor from '../images/like-no-color.png';

export default function LikeIndicator({number}) {
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
            <img src={LikeImageNoColor} />
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

LikeIndicator.propTypes = {
    number: PropTypes.number,
}

LikeIndicator.defaultProps = {
    number: 0,
}