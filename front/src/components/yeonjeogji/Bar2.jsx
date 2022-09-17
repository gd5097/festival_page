import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export default function Bar2({linetop}) {
    return(
        <div>
            <hr 
                style={{top:linetop}}
                css={css`
                
                position: absolute;
                /* Vector 4 */


                /* Vector 3 */


                width: 100%;
                height: 0px;

                opacity: 0.1;
                border: 1px solid #FFFFFF;

                /* Inside auto layout */

                flex: none;
                order: 1;
                flex-grow: 0;

            `}></hr>
        </div>
    );
}