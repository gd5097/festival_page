import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Button = styled(Link)`
    display: flex;

    align-items: center;
    justify-content: center;

    background-color: teal; // for test
    border-radius: 50%;

    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};

    padding: 0;
    border: 0;

    
`

export default function TempButton({size, text, link}) {
    return(
        <Button
            size={size}
            to={link}
        >
            {text}
        </Button>
    );
}

TempButton.propTypes = {
    size: PropTypes.number,
    text: PropTypes.string,
    link: PropTypes.string.isRequired,
};

TempButton.defaultProps = {
    size: 20,
    text: 'Default',
};