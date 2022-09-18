import React from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/white-header';

import arrowIcon from '../images/black-back-arrow.png';
import homeIcon from '../images/black-home.png';
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';

const Label = styled.div`
    color: #12183F;

    font-family: 'festivalfont-80';
    font-size: 1.1rem;
`

const Input = styled.input`
    border: 0;
    padding: 0;

    box-sizing: border-box;

    width: stretch;

    background-color: transparent;

    font-size: 1rem;
    font-family: 'festivalfont-40';
    color: #12183F;

    padding-bottom: 12px;

    border-bottom: 1px solid #D3D3D9;

    ::placeholder {
        font-size: 1rem;
        color: #C0C0C6;
    }
    :focus {
        outline: none;
        border-bottom: 1px solid #12183F;
    }
`

export default function LoginPage() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    return(
        <div
            css={css`
                background-color: white;
                width: 100vw;
                height: 100vh;
            `}
        >
            <DefalutLayout>
                <div
                    // 헤더를 위한 여백
                    css={css`
                        height: 48px;
                    `}
                />
                <Header
                    title={'로그인'}
                    leftIcon={
                        {
                            iconImage: arrowIcon,
                            onClick: () => {
                                navigate(-1);
                            }
                        }
                    }
                    rightIcons={[
                        {
                            iconImage: homeIcon,
                            onClick: () => {
                                navigate('/');
                            }
                        },
                        
                    ]}
                />
                <div
                    // 내용 컨테이너
                    css={css`
                        margin: 0px 20px;
                    `}
                >
                    <div
                        // 인사 텍스트
                        css={css`
                            font-family: 'festivalfont-80';
                            font-size: 1.4rem;

                            margin-top: 30px;

                            color: #12183F;
                        `}
                    >
                        로그인을 해주세요
                    </div>
                    <div
                        // 인포 텍스트
                        css={css`
                            font-size: 0.9rem;

                            margin-top: 8px;
                            color: #767687;
                        `}
                    >
                        곰두리들 방가방가
                    </div>

                    <form
                        // 폼
                        onSubmit={handleSubmit((tempData) => {
                            console.log(tempData);
                        })}
                    >
                        <Label css={css`margin-top: 32px;`}>
                            아이디
                        </Label>
                        <Input css={css`margin-top: 16px;`}
                            //아이디 입력부
                            {...register("id", {
                                required: "아이디를 입력해주세요.",
                                minLength: {
                                    value: 2,
                                    message: "닉네임은 최소 2글자"
                                },
                                maxLength: {
                                    value: 15,
                                    message: "닉네임은 최대 15글자"
                                }
                            })}
                            placeholder="아이디를 입력해주세요."
                        />

                        <Label css={css`margin-top: 32px;`}>
                            비밀번호
                        </Label>
                        <Input css={css`margin-top: 16px;`}
                            //비밀번호 입력부
                            type="password"
                            {...register("password", {
                                required: "사용할 비밀번호를 입력해주세요.",
                                minLength: {
                                    value: 2,
                                    message: "닉네임은 최소 2글자"
                                },
                                maxLength: {
                                    value: 15,
                                    message: "닉네임은 최대 15글자"
                                }
                            })}
                            placeholder="비밀번호를 입력해주세요."
                        />

                        <button
                            // 로그인 버튼
                            type='submit'
                            css={css`
                                display: flex;

                                align-items: center;
                                justify-content: center;

                                border: 0;

                                padding: 16px auto;
                                padding-top: 16px;
                                padding-bottom: 16px;

                                margin-top: 40px;
                            
                                border-radius: 8px;

                                width: stretch;

                                background-color: #12183F;

                                color: white;
                                font-size: 1rem;
                            `}
                        >
                            로그인
                        </button>

                        <div
                            // 구분선
                            css={css`
                                width: stretch;
                                height: 1px;

                                margin: 16px auto;

                                background-color: #E6E6EA;
                            `}
                        />

                        <button
                            // 회원가입버튼
                            type='button'
                            onClick={() => {
                                navigate('/sign-up');
                            }}
                            css={css`
                                display: flex;

                                align-items: center;
                                justify-content: center;

                                border: 0;

                                padding: 16px auto;
                                padding-top: 16px;
                                padding-bottom: 16px;

                              

                                border: 2px solid #12183F;
                                border-radius: 8px;

                                width: stretch;

                                background-color: white;

                                color: #12183F;
                                font-size: 1rem;
                            `}
                        >
                            회원가입
                        </button>
                    </form>

                </div>
                
            </DefalutLayout>
        </div>
    );
}