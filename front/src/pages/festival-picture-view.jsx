import React, { useEffect } from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import arrowIcon from '../images/back-arrow.png';
import FoodList from '../components/anniversary/food-list';
import { useNavigate, useParams } from 'react-router-dom';
import FestivalPostBox from '../components/community/festival-picture-folder/festival-post-box';
import CommentInputBox from '../components/community/comment-input-box';

export default function FestivalPictureViewPage() {



    const params = useParams();
    useEffect(() => {
        console.log(params);
        //console.log(match.params);
     }, [])

    const navigate = useNavigate();
 
    return(

        
        <DefalutLayout>
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
            />
            <FestivalPostBox />
            <div
                // 댓글 입력창을 남기기 위한 여백
                css={css`
                    height:88px;
                `} 
            />
            <CommentInputBox />
        </DefalutLayout>
    );
}