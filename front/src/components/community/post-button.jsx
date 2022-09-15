import React from 'react';
import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import postIcon from '../../images/post.png';

export default function PostButton( {size, link} ) {
    return(
        <Link
            // 전체 컨테이너
            to={link}
            css={css`
                position: fixed;

                bottom: 32px;
                right: 8px;
                display: flex;

                align-items: center;
                justify-content: center;

                background-color: #ECF4FA; // for test
                border-radius: 50%;

                width: ${size}px;
                height: ${size}px;

                padding: 0;
                border: 0;
            `}
        >
            <img src={postIcon}/>
        </Link>
    );
}

PostButton.propTypes = {
    size: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
}