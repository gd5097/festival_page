import React from 'react';
import { css, useTheme } from '@emotion/react';
import { useForm } from 'react-hook-form';

import sendIcon from '../../images/send.png';

export default function CommentInputBox() {
    const { register, handleSubmit } = useForm();
    const theme = useTheme();

    return(
        <form
            // 전체 컨테이너
            onSubmit={handleSubmit((tempData) => {
                console.log(tempData);
                console.log('success');
            })}
            css={css`
                position: fixed;
                bottom: 0;

                background-color: ${theme.colors.primary1};
                width: 100vw;
                
                box-sizing: border-box;
                
                
                padding: 12px 20px;

                border-top: 1px solid rgba(255, 255, 255, 0.2);
            `}
        >
        <div
            // 입력부 컨테이너
            css={css`
                display:flex;
                
                align-items: center;

                width: auto;
                background-color: rgba(255, 255, 255, 0.3);

                padding: 14px 16px;
                border-radius: 8px;
            `}
        >
            <input
                // 입력부
                {...register("text",{
                    required: "값이 필요합니다.",
                    minLength: {
                        value: 5,
                        message: "5자리 이상",
                    },
                    maxLength: {
                        value: 10,
                        message: "10자리 이하",
                    }
                })}
                placeholder="댓글을 작성해 주세요"
                css={css`
                    border: 0;
                    padding: 0;

                    width: stretch;

                    background-color: transparent;
                    
                    color: ${theme.colors.white};

                    word-wrap: break-word;
                    
                    ::placeholder {
                        font-size: 0.9rem;
                        color: rgba(255, 255, 255, 0.8);
                    }
                    :focus{
                        outline: none;
                    }
                `}
            />
            <button
                type="submit"
                css={css`
                    border: 0;
                    padding: 0;

                    margin-left: 10px;
                    
                    align-self: flex-end;

                    background-color: transparent;
                `}
            >
                <img src={sendIcon} 
                    css={css`
                        width: 100%;
                        height: 100%;

                        object-fit: center;
                    `}
                />
            </button>
        </div>
            
        </form>
    );
}