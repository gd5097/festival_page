import React, { useState } from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/white-header';

import arrowIcon from '../images/black-back-arrow.png';
import homeIcon from '../images/black-home.png';
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import DefaultDialog from '../components/default-dialog';
import InfoDialog from '../components/info-dialog';
import axios from 'axios';
import { useAxios } from '../context/axios';

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

export default function SignUpPage() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [infoMessage, setInfoMessage] = useState('');

    const axios = useAxios();

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
                    title={'회원가입'}
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
                        반가워, 곰두리
                    </div>
                    <div
                        // 인포 텍스트
                        css={css`
                            font-size: 0.9rem;

                            margin-top: 8px;
                            color: #767687;
                        `}
                    >
                        로그인하면 게시판 이용이 가능해요!
                    </div>

                    <form
                        // 폼
                        onSubmit={handleSubmit((data) => {
                            console.log(data);
                            if(data.password !== data.passwordCheck){
                                console.log('비밀번호다름');
                                setInfoMessage('비밀번호가 다릅니다.');
                                setDialogOpen(true);
                                return;
                            }
                            
                            axios.get(`/users?username=${data.username}&nickname=${data.nickname}`
                                ).then((response) => {                 
                                    if(!response.data.username){
                                        setInfoMessage('중복된 아이디 입니다.');
                                        setDialogOpen(true);
                                        return;
                                    }
                                    if(!response.data.nickname){
                                        setInfoMessage('중복된 닉네임 입니다.');
                                        setDialogOpen(true);
                                        return;
                                    }
                                    
                                    axios.post(`/users`, data).then((response2) => {
                                        navigate('/');
                                    });
                                }).catch((error) => {
                                    console.log('이상함');
                                })
                              

                            console.log('으아악');
                        })}
                    >
                        <Label css={css`margin-top: 48px;`}>
                            닉네임
                        </Label>
                        <Input css={css`margin-top: 16px;`}
                            //닉네임 입력부
                            {...register("nickname", {
                                required: "닉네임이 필요합니다.",
                                minLength: {
                                    value: 2,
                                    message: "닉네임은 최소 2글자"
                                },
                                maxLength: {
                                    value: 15,
                                    message: "닉네임은 최대 15글자"
                                }
                            })}
                            placeholder="어떤 닉네임으로 활동 하시겠어요?"
                        />
                        
                        <Label css={css`margin-top: 32px;`}>
                            아이디
                        </Label>
                        <Input css={css`margin-top: 16px;`}
                            //아이디 입력부
                            {...register("username", {
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
                            placeholder="사용할 비밀번호를 입력해주세요."
                        />

                        <Label css={css`margin-top: 32px;`}>
                            비밀번호 확인
                        </Label>
                        <Input css={css`margin-top: 16px;`}
                            //비밀번호 확인부
                            type="password"
                            {...register("passwordCheck", {
                                required: "비밀번호를 다시 입력해주세요.",
                                minLength: {
                                    value: 2,
                                    message: "닉네임은 최소 2글자"
                                },
                                maxLength: {
                                    value: 15,
                                    message: "닉네임은 최대 15글자"
                                }
                            })}
                            placeholder="비밀번호를 다시 입력해주세요."
                        />

                        <button
                            // 제출 버튼
                            type='submit'
                            css={css`
                                position: fixed;
                                bottom: 40px;

                                display: flex;

                                align-items: center;
                                justify-content: center;

                                border: 0;

                                padding: 16px auto;
                                left: 20px;
                                right: 20px;

                                border-radius: 8px;

                                width: stretch;
                                height: 50px;

                                background-color: #12183F;

                                color: white;
                                font-size: 1rem;
                            `}
                        >
                            회원가입 완료
                        </button>
                    </form>

                </div>
                
                {dialogOpen &&
                <div
                    // blur용 div
                    css={css`
                        position: fixed;

                        top: 0px;
                        left: 0px;

                        width: 100vw;
                        height: 100vh;

                        backdrop-filter: blur(10px);
                    `}
                >

                </div>
            }
                {dialogOpen && 
                <InfoDialog
                    setDialogOpen={setDialogOpen}
                    infoText={infoMessage}
                    functions={[
                        {
                            name: '닫기',
                            color: '#12183f',
                            onClick: () => {
                                setDialogOpen(false);
                            }
                        },
                    ]}
                />
            }
            </DefalutLayout>
        </div>
    );
}