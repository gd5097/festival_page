import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export default function Bar({linetop}) {
    return(
        <div>
            <hr 
                style={{top:linetop}}
                css={css`
                
                position: absolute;
                /* Vector 4 */


                width: 100%;
                height: 0px;

                opacity: 0.1;
                /* WHITE/100 */

                border: 8px solid #FFFFFF;

                /* Inside auto layout */

                flex: none;
                order: 1;
                flex-grow: 0;
            `}></hr>
        </div>
    );
}