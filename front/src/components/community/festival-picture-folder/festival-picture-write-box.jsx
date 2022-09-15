import React from 'react';
import { css, useTheme } from '@emotion/react';
import { useForm } from 'react-hook-form';

export default function FestivalPictureWriteBox() {
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
                display: flex;
                flex-direction: column;

                margin: 0px 20px;
                padding-bottom: 16px;

                background-color: transparent;

                box-sizing: border-box;

                border-bottom: 1px solid rgba(255, 255, 255 ,0.2);
            `}
        >
            <input
                // 제목 입력부
                {...register("title", {
                    required: "제목이 필요합니다.",
                    minLength: {
                        value: 2,
                        message: "제목을 2글자 이상입니다."
                    },
                    maxLength: {
                        value: 20,
                        message: "제목은 20글자 이하입니다."
                    }
                })}
                placeholder="제목"
                css={css`
                    border: 0;
                    padding: 0;

                    width: stretch;

                    background-color: transparent;

                    color: ${theme.colors.white};
                    font-size: 1.1rem;

                    ::placeholder {
                        font-size: 1.1rem;
                        color: rgba(255, 255, 255, 0.6);
                    }
                    :focus {
                        outline: none;
                    }

                `}
            >

            </input>
        </form>
    );
}