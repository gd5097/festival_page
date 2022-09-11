import React from 'react';
import { css } from '@emotion/react';

import LostArticleIamge1 from '../../../images/lost-article-image1.png';
import LostArticleIamge2 from '../../../images/lost-article-image2.png';
import LostArticleBox from './lost-article-box';

export default function LostArticle() {
    const posts = [
        {
            id: 1,
            image: LostArticleIamge1,
            title: '함인섭 에어팟 보신분 계십니까',
            isLost: true,
        },
        {
            id: 2,
            image: LostArticleIamge2,
            title: '김냥냥님 학생증 찾아가세요~~',
            isLost: false,
        },
        {
            id: 3,
            image: LostArticleIamge2,
            title: '육주 앞에 에어팟',
            isLost: false,
        },
        {
            id: 4,
            image: LostArticleIamge2,
            title: '육주 앞에 에어팟',
            isLost: true,
        },
        {
            id: 5,
            image: LostArticleIamge2,
            title: '육주 앞에 에어팟',
            isLost: true,
        },
        {
            id: 6,
            image: LostArticleIamge2,
            title: '육주 앞에 에어팟',
            isLost: false,
        },
        {
            id: 7,
            image: LostArticleIamge2,
            title: '육주 앞에 에어팟',
            isLost: false,
        },
        {
            id: 8,
            image: LostArticleIamge2,
            title: '육주 앞에 에어팟',
            isLost: false,
        },
    ]

    return(
        <div css={css`
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 8px;
            row-gap: 16px;

            margin: 0px 20px;

            
        `}>
            {posts.map((post) => (
                <LostArticleBox postInfo={post}/>
            ))}
        </div>

    );
}