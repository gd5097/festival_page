import React, { useEffect } from 'react';
import { css } from '@emotion/react';

import DefalutLayout from '../layouts/default';
import Header from '../components/header';

import menuIcon from '../images/menu.png';
import arrowIcon from '../images/back-arrow.png';
import FoodList from '../components/anniversary/food-list';
import { useNavigate, useParams } from 'react-router-dom';
import FestivalPostBox from '../components/community/festival-picture-folder/festival-post-box';
import CommentInputBox from '../components/community/comment-input-box';
import LostArticlePostBox from '../components/community/lost-article-folder/lost-article-post-box';

export default function LostArticleViewPage() {



    const params = useParams();
    useEffect(() => {
        console.log(params);
        //console.log(match.params);
     }, [])

    const navigate = useNavigate();
 
    return(

        
        <DefalutLayout>
            <Header 
                title={'분실물'}
                leftIcon={
                    {
                        iconImage: arrowIcon,
                        onClick: () => {
                            navigate(-1);
                        }
                    }
                }
                rightIcons={
                    [
                        {
                        iconImage: menuIcon,
                        onClick: () => {
                            console.log('menu Clicked!');
                        }
                }]}
            />
            <LostArticlePostBox />
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