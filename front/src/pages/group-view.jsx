import React, { useEffect } from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import bigMenuIcon from '../images/big-menu.png';
import arrowIcon from '../images/back-arrow.png';
import { useNavigate, useParams } from 'react-router-dom';
import GroupPostBox from '../components/community/group-folder/group-post-box';
import CommentInputBox from '../components/community/comment-input-box';


export default function GroupViewPage() {

    const params = useParams();
    useEffect(() => {
        console.log(params);
        //console.log(match.params);
     }, [])
 
    const navigate = useNavigate();
    return(
        <DefalutLayout>
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
                        onClick: () => {
                            console.log('menu btn clicked!');
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
        </DefalutLayout>
    );
}