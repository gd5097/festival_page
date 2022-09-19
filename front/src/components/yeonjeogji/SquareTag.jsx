import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import tempImage from '../../images/club-dump.png';

export default function SquareTag({src, content, content2}) {

    return(
        <div 
        css={css`
        /* Rectangle 43 */

        width: auto;
        height: 80px;

        display: flex;
        align-items: flex-end;
                
        padding: 16px 10px;

        margin-bottom: 16px;
        
        background-image: url(${tempImage});
        background-position: center;
        background-size: auto 112px;
        //background-image: url(${src});
        
        
        border-radius: 12px;
        `}> 
            <div>
                {content}
            </div>
            <div
                css={css`
                    margin-left: auto;
                `}
            >
                {content2}
            </div>
        </div>
    );
}