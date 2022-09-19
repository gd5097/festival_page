import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Button = styled(Link)`
    position: relative;

    top: ${props => `${props.positiony}vw`};
    left: ${props => `${props.positionx}vw`};

    display: flex;

    /* align-items: center;
    justify-content: center; */

    white-space: nowrap;

    //background-color: teal; // for test
    border-radius: 50%;

    width: ${props => `${props.size}vw`};
    height: ${props => `${props.size}vw`};

    padding: 0;
    border: 0;

    
`

export default function TempButton({size, image, link, positionx, positiony, onClick}) {
    return(
        <Button
            size={size}
            positionx={positionx}
            positiony={positiony}
            onClick={onClick}
            to={link}
        >
            <img
                src={image}
                css={css`
                    object-fit: contain;
                    width: 100%;
                    height: 100%;
                `}
            />
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