import React from 'react';
import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

export default function HorizontalInfoIndicator( {first, second} ) {
    const theme = useTheme();
    
    return(
        <div
            //전체 컨테이너
            css={css`
                display: grid;
                grid-template-columns: auto 1fr auto;
                
                column-gap: 14px;

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
                    border-top: 1.5px dashed #D3D3D9;
                `}
            />

            
            <div
                // 정보 영역
                css={css`
                    grid-column: 3;

                    color: #D66455;
                    font-size: 0.9rem;
                `}
            >
                {second.toLocaleString('ko-KR')}원
            </div>
        </div>
    );
}

HorizontalInfoIndicator.propTypes = {
    first: PropTypes.string.isRequired,
    second: PropTypes.string.isRequired,
}