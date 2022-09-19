import React, { useEffect, useRef, useState } from 'react';
import { css, useTheme } from '@emotion/react';


export default function DefaultDialog( { setDialogOpen, functions, infoText } ) {
    
    const theme = useTheme();
    const el = useRef(null);
    useEffect(() => {
        const handler = () => {
            if (el.current && !el.current.contains(event.target)){
                setDialogOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);

        return() => {
            document.removeEventListener('mousedown', handler);
        };
    });

    return (
        <div
            ref={el} 
            css={css`
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                
                display: flex;
                flex-direction: column;
                row-gap: 16px;

                align-items: center;
                justify-content: center;

                background-color: ${theme.colors.white};

                

                border-radius: 18px;

                padding : 24px 10px;

                width: 300px;
                height: auto;
            `}
        >
            <div
                // 정보 문구
                css={css`
                    font-size: 1rem;
                    color: #12183F;

                    display: flex;
                `}
            >
                {infoText}
            </div>
            <div
                // 버튼 컨테이너
                css={css`
                    display: flex;

                    column-gap: 10px;
                `}
            >
                
            <button
                // 첫 번째 버튼
                type='button'
                onClick={functions[0]?.onClick}
                css={css`
                    border: 2px solid ${functions[0]?.color};
                    border-radius: 8px;
                    background: 0;

                    padding: 12px 24px;
                    font-size: 0.9rem;

                    color: ${functions[0]?.color};
                `}
            >
                {functions[0].name}
            </button>
            <button
                // 첫 번째 버튼
                type='button'
                onClick={functions[1]?.onClick}
                css={css`
                    border: 0;
                    border-radius: 8px;
                    background: 0;

                    padding: 12px 24px;
                    font-size: 0.9rem;

                    background-color: ${functions[1]?.color};
                    color: white;
                `}
            >
                {functions[1]?.name}
            </button>
        
            </div>
        </div>
    );
}