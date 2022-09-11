import React from 'react';
import { css, useTheme } from '@emotion/react';

import PropTypes from 'prop-types';

export default function LostIndicator( {lost} ) {
    const theme = useTheme();

    return(
        <div
            // 전체 컨테이너
            
        >
            {lost ? 
                <div
                    // 분실 표시
                    css={css`
                        font-size: 0.8rem;
                        color: ${theme.colors.white};

                        display: flex;

                        align-items: center;
                        justify-content: center;

                        padding: 4px 10px;
                        border-radius: 40px;

                        background-color: #FF453A;
                    `}
                >
                    분실
                </div>
            : 
                <div
                    // 분실 표시
                    css={css`
                        font-size: 0.8rem;
                        color: ${theme.colors.white};

                        display: flex;

                        align-items: center;
                        justify-content: center;

                        padding: 4px 10px;
                        border-radius: 40px;

                        background-color: #30D158;
                    `}
                >
                    발견
                </div>
            }
            
        </div>
    );
}

LostIndicator.propTypes = {
    lost: PropTypes.bool.isRequired,
}