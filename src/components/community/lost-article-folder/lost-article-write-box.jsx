import React from 'react';
import { css, useTheme } from '@emotion/react';
import { useForm } from 'react-hook-form';

import PropTypes from 'prop-types';

import pictureIcon from '../../../images/picture.png';

export default function LostArticleWriteBox( {pictureAbled} ) {
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
            `}
        >
            <div
                // 안내 문구
                css={css`
                    color: ${theme.colors.white};
                    font-size:1.1rem;

                    margin-top: 24px;
                `}
            >
                어떤 글을 작성하시겠어요?
            </div>
            <div
                // 라디오 컨테이너
                css={css`
                    display: flex;
                    column-gap: 9px;

                    margin-top: 12px;
                `}
            >
                <input
                    // 분실 | 발견 라디오
                    {...register("isLost")}
                    type="radio"
                    value={true}
                    css={css`
                        color: ${theme.colors.white};
                    `}
                />
                <div
                    css={css`
                        color: ${theme.colors.white};
                        font-size: 0.9rem;
                    `}
                >
                    분실
                </div>
                <input
                    // 분실 | 발견 라디오
                    {...register("isLost")}
                    type="radio"
                    value={false}
                    css={css`
                        color: ${theme.colors.white};
                        margin-left: 6px;
                    `}
                />
                <div
                    css={css`
                    color: ${theme.colors.white};
                    font-size: 0.9rem;
                    `}
                >
                    발견
                </div>
            </div>
            
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

                    box-sizing: border-box;

                    padding-bottom: 14px;
                    margin-top: 42px;
                    margin-bottom: 14px;
                    border-bottom: 1px solid rgba(255, 255, 255 ,0.2);

                    ::placeholder {
                        font-size: 1.1rem;
                        color: rgba(255, 255, 255, 0.6);
                    }
                    :focus {
                        outline: none;
                    }

                `}
            />

            <textarea
                // 내용 입력부
                {...register("content",{
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

                    width: stretch;
                    height: 200px;

                    white-space: pre-wrap;

                    background-color: transparent;
                    
                    color: ${theme.colors.white};

                    box-sizing: border-box;
                    
                    ::placeholder {
                        font-size: 0.9rem;
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
        </form>
    );
}

LostArticleWriteBox.propTypes = {
    pictureAbled: PropTypes.bool,
}


LostArticleWriteBox.defaultProps = {
    pictureAbled: false,
}