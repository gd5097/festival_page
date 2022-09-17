import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import arrowIcon from '../images/back-arrow.png';
import menuIcon from '../images/big-menu.png';
import FoodList from '../components/anniversary/food-list';
import { useNavigate, useParams } from 'react-router-dom';
import FestivalPostBox from '../components/community/festival-picture-folder/festival-post-box';
import CommentInputBox from '../components/community/comment-input-box';
import ModalBasic from '../components/default-modal';
import DefaultModal from '../components/default-modal';

export default function FestivalPictureViewPage() {



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
        console.log(e);
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
                title={'축제사진'}
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
                        iconImage: menuIcon,
                        onClick: (e) => {
                            showModal();
                            checkCoordinate(e);
                        },
                    },
                ]}
            />
            <FestivalPostBox />
            <div
                // 댓글 입력창을 남기기 위한 여백
                css={css`
                    height:88px;
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