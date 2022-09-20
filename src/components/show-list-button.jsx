import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import ListIcon from '../images/list.png';

const Button = styled(Link)`
    display: flex;

    align-items: center;
    justify-content: center;

    background-color: white;
    border-radius: 50px;

    column-gap: 12px;

    width: 40vw;

    margin: 0px auto;
    
    font-size: 0.9rem;

    padding: 10px 24px;
    border: 0;

    
`

export default function ShowListButton( {link} ) {
    return(
        <Button
            to={link}
        >
            <div
                // 리스트 아이콘
                css={css`
                    padding-top: 2px;
                `}
            >
                <img src={ListIcon} />
            </div>
            <div>
                리스트 전체 보기
            </div>
            
        </Button>
    );
}

ShowListButton.propTypes = {
    link: PropTypes.string.isRequired,
};
