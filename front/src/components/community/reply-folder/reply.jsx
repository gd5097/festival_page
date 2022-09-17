import React, { useState } from 'react';
import { css, useTheme } from '@emotion/react';

import moment from 'moment/moment';
import 'moment/locale/ko';

import menuIcon from '../../../images/menu.png';
import replyIcon from '../../../images/reply-arrow.png';
import PlusReply from './plus-reply';
import DefaultModal from '../../default-modal';

export default function Reply( {replyInfo, parentName} ) {
    const time = moment().format('DD/MM HH:MM');

    const plusReplies = [
        {
            id: 1,
            wrriter: '날으는토끼',
            content: '몰랑!!!',
            postTime: time,
        },
        {
            id: 2,
            wrriter: '기어가는거북이',
            content: '난 알지롱~',
            postTime: time,
        },
        {
            id: 3,
            wrriter: '닐라닐라 바닐라',
            content: '바닐라 아이스크림 맛있더라',
            postTime: time,
        },
    ]

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
                <div
                    // 작성자 닉네임
                    css={css`
                        color: rgba(255, 255, 255, 0.9);
                        font-size: 0.9rem;
                    `}
                >
                    {replyInfo.wrriter}
                </div>
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
                {replyInfo.content}
            </div>
            <div
                // 댓글 게시 시간
                css={css`
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.8rem;
                    margin-top: 10px;
                `}
            >
                {replyInfo.postTime}
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
                                console.log('Delete Clicked!');
                            }
                        },
                        {
                            name: '삭제',
                            color: '#FF773E',
                            onClick: () => {
                                console.log('Plus reply Clicked!');
                            }
                        },
                    ]}
                />
            }
            {plusReplies?.length !== 0 ? 
                <div 
                // 구분선
                css={css`
                    width: stretch;
                    height: 1px;
                    background-color: rgba(255, 255, 255, 0.2);
                    
                    margin-top: 12px;
                    margin-bottom: 12px;
                `}
            />
            : null}

            <div
                // 대댓글 컨테이너
                css={css`
                    display: flex;
                    flex-direction: column;

                    row-gap: 12px;
                `}
            >
                {plusReplies.map((plusReply) => (
                    
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
                        
                        <PlusReply
                            info={plusReply}
                            parentName={parentName}
                        />
                    </div>
                ))}
            </div> 
            
        </div>
    );
}