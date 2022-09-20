import React, { useEffect, useRef, useState } from 'react';
import { css, useTheme } from '@emotion/react';


export default function DefaultModalMap( { setDialogOpen, image, infoText } ) {
    
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
                
                align-items: center;
                justify-content: center;

                background-color: ${theme.colors.white};
   

                border-radius: 18px;

                width: 80vw;
                height: auto;
            `}
        >
            <img
                src={image}
                css={css`
                    object-fit: cover;
                    width: 100%;
                    
                `}
            />
        
            
        </div>
    );
}