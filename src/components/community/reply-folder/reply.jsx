import React, { useState } from 'react';
import { css, useTheme } from '@emotion/react';

import moment from 'moment/moment';
import 'moment/locale/ko';

import menuIcon from '../../../images/menu.png';
import replyIcon from '../../../images/reply-arrow.png';
import PlusReply from './plus-reply';
import DefaultModal from '../../default-modal';

export default function Reply( {replyInfo, parentName, plus, onSelectAsParent} ) {
    const time = moment(replyInfo.createdAt).format('MM/DD HH:MM');


    const [modalOpen, setModalOpen] = useState(false);
    const [curPosition, setCurPosition] = useState([]);

    const showModal = () => {
        setModalOpen(true);
    };

    const checkCoordinate = (e) => {
        setCurPosition([e.target.offsetLeft, e.target.offsetTop]);
    };

    return(
        <div>
            {plus ?
            <div
            // 대댓글 컨테이너
            css={css`
                display: flex;

                column-gap: 6px;
            `}
        >
            <div>
                <img src={replyIcon} />
            </div>
            <div
            // 전체 컨테이너
            css={css`
                background-color: rgba(255, 255, 255, 0.1);

                padding: 10px;

                border-radius: 8px;

                width: stretch;
            `}
        >

            <div
                // 댓글 작성자 닉네임 및 메뉴 버튼 컨테이너
                css={css`
                    display: flex;

                    align-items: center;
                    
                    
                `}
            >
                {parentName === replyInfo.author.nickname ? 
                    <div
                    // 작성자 닉네임
                    css={css`
                        color: #FF773E;
                        font-size: 0.9rem;
                    `}
                    >
                        {replyInfo.author.nickname}(작성자)
                    </div>
                : 
                    <div
                    // 작성자 닉네임
                    css={css`
                        color: rgba(255, 255, 255, 0.9);
                        font-size: 0.9rem;
                    `}
                    >
                        {replyInfoauthor.nickname}
                    </div>
                }
                
                <button
                    // 메뉴 아이콘
                    type='button'
                    onClick={(e) => {
                        showModal();
                        checkCoordinate(e);
                    }}
                    css={css`
                        background: 0;
                        background-color: transparent;
                        border: 0;

                        margin-left: auto;
                    `}
                >
                    <img 
                        src={menuIcon}
                    />
                </button>
                
            </div>
            <div
                // 댓글 내용
                css={css`
                    color: rgba(255, 255 ,255, 0.7);
                    font-size: 0.9rem;
                `}
            >
                {replyInfo.contents}
            </div>
            <div
                // 댓글 게시 시간
                css={css`
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.8rem;
                    margin-top: 10px;
                `}
            >
                {time}
            </div>
            {modalOpen && 
                <DefaultModal
                    setModalOpen={setModalOpen}
                    position={curPosition}
                    positionOffset={-5}
                    functions={[
                        {
                            name: '삭제',
                            color: '#FF773E',
                            onClick: () => {
                                console.log('Plus reply Clicked!');
                                console.log(replyInfo);
                            }
                        },
                    ]}
                />
            }
        </div>
        </div>
            :
            <div>
                <div 
                    // 구분선
                    css={css`
                        width: stretch;
                        height: 1px;
                        background-color: rgba(255, 255, 255, 0.2);
                        margin-bottom: 12px;
                    `}
                />
                <div
                    // 댓글 작성자 닉네임 및 메뉴 버튼 컨테이너
                    css={css`
                        display: flex;

                        align-items: center;
                        
                        
                    `}
                >

                    {parentName === replyInfo.author.nickname ? 
                    <div
                    // 작성자 닉네임
                    css={css`
                        color: #FF773E;
                        font-size: 0.9rem;
                    `}
                    >
                        {replyInfo.author.nickname}(작성자)
                    </div>
                : 
                    <div
                    // 작성자 닉네임
                    css={css`
                        color: rgba(255, 255, 255, 0.9);
                        font-size: 0.9rem;
                    `}
                    >
                        {replyInfoauthor.nickname}
                    </div>
                }
                    <button
                        // 메뉴 아이콘
                        type='button'
                        onClick={(e) => {
                            showModal();
                            checkCoordinate(e);
                        }}
                        css={css`
                            background: 0;
                            background-color: transparent;
                            border: 0;

                            margin-left: auto;
                        `}
                    >
                        <img 
                            src={menuIcon}
                        />
                    </button>
                    
                </div>
                <div
                    // 댓글 내용
                    css={css`
                        color: rgba(255, 255 ,255, 0.7);
                        font-size: 0.9rem;
                    `}
                >
                    {replyInfo.contents}
                </div>
                <div
                    // 댓글 게시 시간
                    css={css`
                        color: rgba(255, 255, 255, 0.4);
                        font-size: 0.8rem;
                        margin-top: 10px;
                    `}
                >
                    {time}
                </div>
                {modalOpen && 
                    <DefaultModal
                        setModalOpen={setModalOpen}
                        position={curPosition}
                        positionOffset={-5}
                        functions={[
                            {
                                name: '대댓글',
                                color: '#12183f',
                                onClick: () => {
                                    onSelectAsParent(replyInfo)
                                    console.log(replyInfo);
                                }
                            },
                            {
                                name: '삭제',
                                color: '#FF773E',
                                onClick: () => {
                                    console.log(replyInfo);
                                    console.log('이거슨 삯제');
                                }
                            },
                        ]}
                    />
                }
                
            </div>
            }
             
            
        </div>
    );
}