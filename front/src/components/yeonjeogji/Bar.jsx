import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export default function Bar() {
    return(

            <hr 
                css={css`
                /* Vector 4 */


                width: 100%;
                height: 0px;

                opacity: 0.1;
                /* WHITE/100 */

                border: 8px solid #FFFFFF;

                /* Inside auto layout */

            `}></hr>

    );
}