import React from 'react';
import { css, useTheme } from '@emotion/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../../hooks/use-auth';
import { useNavigate } from 'react-router-dom';

export default function GroupWriteBox() {
    const { register, handleSubmit } = useForm();
    const theme = useTheme();
    const auth = useAuth();
    const navigate = useNavigate();

    return(
        <form
            // 전체 컨테이너
            onSubmit={handleSubmit((data) => {
                data.title = "dump";
                data.categoryId = "1";
                console.log(data);

                axios.post('http://52.79.44.217/posts',data
                    ,{
                        headers: {
                            "Content-Type": `application/json`,
                            Authorization : auth.auth,
                        }
                    }).then((response) => {                 
                        console.log(response);
                        navigate(-1);
                    }).catch((error) => {
                        console.log('이상함');
                    })
            })
        }
            css={css`
                display: flex;
                flex-direction: column;

                margin: 0px 20px;
                padding-bottom: 16px;

                background-color: transparent;

                box-sizing: border-box;
            `}
        >

            <textarea
                // 내용 입력부
                {...register("contents",{
                    required: "글 내용이 필요합니다.",
                    minLength: {
                        value: 1,
                        message: "내용은 1글자 이상이여야 합니다."
                    },
                })}
                placeholder="내용을 입력해 주세요"
                css={css`
                    border: 0;
                    padding: 0;

                    margin-top: 32px;

                    width: stretch;
                    height: 200px;

                    white-space: pre-wrap;

                    background-color: transparent;
                    
                    color: ${theme.colors.white};

                    box-sizing: border-box;
                    
                    ::placeholder {
                        font-size: 1rem;
                        color: rgba(255, 255, 255, 0.7);
                    }
                    :focus{
                        outline: none;
                    }
                `}
            />

            <div
                // 주의 사항 입력
                css={css`
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.8rem;

                    line-height: 16px;
                `}
            >
                [주의사항]<br/>
                게시글 입력 및 주의사항 가이드를 입력<br />
                게시글 입력 및 주의사항 가이드를 입력<br />
                게시글 입력 및 주의사항 가이드를 입력<br />
                게시글 입력 및 주의사항 가이드를 입력<br />
                게시글 입력 및 주의사항 가이드를 입력<br />  
            </div>

            <div
            // 전체 컨테이너
                css={css`
                    position: fixed;
                    bottom: 0;
                    left: 0;

                    display: flex;
                    
                    background-color: ${theme.colors.primary1};
                    width: 100vw;
                    
                    box-sizing: border-box;
                    align-items: center;

                    padding: 12px 20px;

                    border-top: 1px solid rgba(255, 255, 255, 0.2);
                `}
            >
            
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
        </form>
    );
}

