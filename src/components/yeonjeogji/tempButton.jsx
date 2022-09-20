import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Button = styled(Link)`
                /* tag_category */


                /* Auto layout */

                display: flex;
                flex-direction: row;
                align-items: flex-start;
                padding: 10px 16px;
                gap: 8px;

                width: ${props => `${props.width}px`};
                height: ${props => `${props.height}px`};

                //width: 58px;
                //height: 35px;

                /* WHITE/80 */

                background: rgba(255, 255, 255, 0.8);
                /* icon_lighting */

                box-shadow: 0px 0px 6px rgba(255, 243, 202, 0.28);
                border-radius: 34px;

                /* Inside auto layout */

                flex: none;
                order: 0;
                flex-grow: 0;

                align-items: center;
                text-align: left;

                margin-right: 10px;

    
`

export default function TempButton({width, height, text, link}) {

    return(
        <Button
            width={width}
            height={height}
            to={link}
        >
    <div
    css={css`
    /* 체험부스 */


    width: 26px;
    height: 15px;


    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 15px;
    text-align: center;

    /* KEY/KEY */

    color: #1D2767;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;

    
    white-space:nowrap;
    padding: 10px;
    `}>{text}
    </div>
        </Button>
    );
}

TempButton.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    text: PropTypes.string,
    link: PropTypes.string.isRequired,
};

TempButton.defaultProps = {
    width: 58,
    height: 35,
    text: 'Default',
};