import React from 'react';
import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

export default function SmallTag( {first, second} ) {
    const theme = useTheme();
    
    return(
        <div
            //전체 컨테이너
            css={css`
                display: grid;
                grid-template-columns: auto 1fr auto;
                
                column-gap: 14px;

                margin-bottom: 16px;

                align-items: center;
                justify-content: center;

            `}
        >
            <div
                // 이름 영역
                css={css`
                    grid-column: 1;

                    color: ${theme.colors.black};
                    font-size: 1rem;

                    width: auto;
                    height: auto;

                    font-family: 'HGGGothicssi';
                    font-style: normal;
                    font-weight: 400;
                    line-height: 18px;
                    /* identical to box height */


                    /* WHITE/90 */

                    color: rgba(255, 255, 255, 0.9);

                    opacity: 0.9;

                    /* Inside auto layout */

                    white-space:nowrap;
                `}
            >
                {first}
            </div>
            <hr
                // 점선
                css={css`

                
                    grid-column: 2;
                    width: stretch;
                    border: 0px;

                    /* Vector 6 */

                    height: 0px;
                    

                    /* WHITE/20 */

                    border: 1px dashed rgba(255, 255, 255, 0.2);

                    /* Inside auto layout */

                `}
            />

            
            <div
                // 정보 영역
                css={css`
                    grid-column: 3;


                    width: auto;
                    height: auto;

                    font-family: 'HGGGothicssi';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1rem;
                    line-height: 18px;
                    /* identical to box height */

                    text-align: center;

                    /* WHITE/90 */

                    color: rgba(255, 255, 255, 0.9);

                    opacity: 0.8;

                    /* Inside auto layout */

                    white-space:nowrap;
                `}
            >
                {second}
            </div>
        </div>
    );
}

SmallTag.propTypes = {
    first: PropTypes.string.isRequired,
    second: PropTypes.string.isRequired,
}