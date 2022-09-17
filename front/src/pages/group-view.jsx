import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import bigMenuIcon from '../images/big-menu.png';
import arrowIcon from '../images/back-arrow.png';
import { useNavigate, useParams } from 'react-router-dom';
import GroupPostBox from '../components/community/group-folder/group-post-box';
import CommentInputBox from '../components/community/comment-input-box';
import DefaultModal from '../components/default-modal';


export default function GroupViewPage() {

    const params = useParams();
    useEffect(() => {
        console.log(params);
        //console.log(match.params);
     }, [])
     
    const navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);
    const [curPosition, setCurPosition] = useState([]);

    const showModal = () => {
        setModalOpen(true);
    };

    const checkCoordinate = (e) => {
        setCurPosition([e.target.offsetLeft, e.target.offsetTop]);
    };

    return(
        <DefalutLayout>
            <div
                // 헤더를 위한 여백
                css={css`
                    height: 48px;
                `}
            />
            <Header 
                title={'번개모임'}
                leftIcon={
                    {
                        iconImage: arrowIcon,
                        onClick: () =>                       {
                            navigate(-1);
                        }
                    }
                }
                rightIcons={[
                    {
                        iconImage: bigMenuIcon,
                        onClick: (e) => {
                            showModal();
                            checkCoordinate(e);
                        }
                    },
                ]}
            />
            <GroupPostBox />
            <div
                // 댓글 입력창을 남기기 위한 여백
                css={css`
                    height:80px;
                `} 
            />
            <CommentInputBox />
            {modalOpen && 
                <DefaultModal
                    setModalOpen={setModalOpen}
                    position={curPosition}
                    positionOffset={10}
                    functions={[
                        {
                            name: '수정',
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
        </DefalutLayout>
    );
}