import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import bigMenuIcon from '../images/big-menu.png';
import arrowIcon from '../images/back-arrow.png';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import GroupPostBox from '../components/community/group-folder/group-post-box';
import CommentInputBox from '../components/community/comment-input-box';
import DefaultModal from '../components/default-modal';
import useAuth from '../hooks/use-auth';
import ReplyBox from '../components/community/reply-folder/reply-box';
import { useAxios } from '../context/axios';

export default function GroupViewPage() {

    const params = useParams();
    const auth = useAuth();
    const [posts, setPosts] = useState();

    const navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);
    const [curPosition, setCurPosition] = useState([]);

    const location = useLocation();
    const post = useMemo(() => location.state);
    const [replies, setReplies] = useState([]);
    const [parent, setParent] = useState(undefined);

    const axios = useAxios();
    
    const showModal = () => {
        setModalOpen(true);
    };

    const checkCoordinate = (e) => {
        setCurPosition([e.target.offsetLeft, e.target.offsetTop]);
    };

    const getReplies = useCallback(async () => {
        const response = await axios.get(`/posts/${location.state.id}/comments`, {
            headers: {
                "Content-Type": `application/json`,
                Authorization: auth.auth,
            }
        });
    
        setReplies(response.data.comments);
    }, [axios])

    useEffect(() => {
        getReplies();
    }, []);

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
                        onClick: () => {
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
            <GroupPostBox postInfo={post} fun={getReplies} replies={replies}/>

            <ReplyBox parentName={post.author.nickname} id={post.id} onSelectAsParent={(parent) => {
                setParent(parent);
            }} replies={replies}/>
            <div
                // 댓글 입력창을 남기기 위한 여백
                css={css`
                    height:80px;
                `} 
            />
        
            
            <CommentInputBox postId={location.state.id} onSubmit={() => { getReplies() }} parent={parent} />
            
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
                                axios.delete(`/posts/${post.id}`,
                                    {
                                        headers: { 
                                            Authorization : auth.auth,
                                        }
                                    }   
                                ).then((response) => {
                                    console.log(response);
                                    navigate(-1);
                                });
                            }
                        },
                    ]}
                />
            }
        </DefalutLayout>
    );
}