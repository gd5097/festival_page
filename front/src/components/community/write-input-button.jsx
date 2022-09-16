import React from 'react';
import { css, useTheme } from '@emotion/react';
import { useForm } from 'react-hook-form';

import PropTypes from 'prop-types';

import pictureIcon from '../../images/picture.png';

export default function WriteInputBox( {pictureAbled}) {
    
    const theme = useTheme();

    return(
        <div
            // 전체 컨테이너
            
            css={css`
                position: fixed;
                bottom: 0;

                display: flex;
                
                background-color: ${theme.colors.primary1};
                width: 100vw;
                
                box-sizing: border-box;
                align-items: center;

                padding: 12px 20px;

                border-top: 1px solid rgba(255, 255, 255, 0.2);
            `}
        >

            {pictureAbled ? 
                <div
                    // 이미지 업로드 버튼
                    /*기능 추가 필요 */
                >
                    <img src={pictureIcon} />
                </div>
            : null}
            
            <button
                type="submit"
                css={css`
                    border: 0;
                    padding: 0;

                    margin-left: auto;
                    padding: 8px 16px;

                    background-color: rgba(255, 255, 255, 0.7);
                    color: ${theme.colors.white};
                    
                    

                    border-radius: 27px;
                `}
            >
                작성
            </button>
        
            
        </div>
    );
}

WriteInputBox.propTypes = {
    pictureAbled: PropTypes.bool,
}


WriteInputBox.defaultProps = {
    pictureAbled: false,
}