import React, { useEffect, useRef, useState } from 'react';
import { css, useTheme } from '@emotion/react';


export default function DefaultModal( { setModalOpen, position, functions, positionOffset} ) {
    // 모달 끄기 
    
    const theme = useTheme();
    const el = useRef(null);
    useEffect(() => {
        const handler = () => {
            if (el.current && !el.current.contains(event.target)){
                setModalOpen(false);
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
                position: absolute;
                right: 20px;
                top: ${position[1] + positionOffset}px;
                
                display: flex;
                flex-direction: column;

                align-items: center;
                justify-content: center;

                background-color: ${theme.colors.white};

                width: 90px;
                height: auto;
            `}
        >
            {functions.map((fun) => (
                <button
                    // 모달 내부 버튼
                    type='button'
                    onClick={fun.onClick}
                    css={css`
                        border: 0;
                        background: 0;

                        padding: 12px 0px;
                        font-size: 0.9rem;

                        color: ${fun.color};
                        
                    `}
                >
                    {fun.name}
                </button>
            ))}
        </div>
    );
}