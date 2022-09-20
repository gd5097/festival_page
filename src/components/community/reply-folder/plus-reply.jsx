import React, { useState } from 'react';
import { css, useTheme } from '@emotion/react';

import PropTypes from 'prop-types';

import menuIcon from '../../../images/menu.png';
import DefaultModal from '../../default-modal';

export default function PlusReply( {info, parentName} ){
    const theme = useTheme();

    const [modalOpen, setModalOpen] = useState(false);
    const [curPosition, setCurPosition] = useState([]);

    const showModal = () => {
        setModalOpen(true);
    };

    const checkCoordinate = (e) => {
        setCurPosition([e.target.offsetLeft, e.target.offsetTop]);
    };

    return(
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
                {parentName === info.wrriter ? 
                    <div
                    // 작성자 닉네임
                    css={css`
                        color: #FF773E;
                        font-size: 0.9rem;
                    `}
                    >
                        {info.wrriter}(작성자)
                    </div>
                : 
                    <div
                    // 작성자 닉네임
                    css={css`
                        color: rgba(255, 255, 255, 0.9);
                        font-size: 0.9rem;
                    `}
                    >
                        {info.wrriter}
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
                {info.content}
            </div>
            <div
                // 댓글 게시 시간
                css={css`
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.8rem;
                    margin-top: 10px;
                `}
            >
                {info.postTime}
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
                            }
                        },
                    ]}
                />
            }
        </div>
    );
}

PlusReply.propTypes = {
    info: PropTypes.object.isRequired,
}