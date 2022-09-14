import React from 'react';
import { css } from '@emotion/react';

import styled from '@emotion/styled';
import FestivalPictureBox from './festival-picture-box';

import FestivalIamge1 from '../../../images/festival-image1.jpg';
import FestivalIamge2 from '../../../images/festival-image2.jpg';
import FestivalImage3 from '../../../images/festival-image3.jpg';
import FestivalImage4 from '../../../images/festival-image4.jpg';
import FestivalImage5 from '../../../images/festival-image5.jpg';
import FestivalImage6 from '../../../images/festival-image6.jpg';
import PostButton from '../post-button';


export default function FestivalPicture() {
    const posts = [
        {
            id: 1,
            image: FestivalIamge1,
            title: '육주앞 공연보면서 찍은 사진인데',
            comments: 15,
            like: 125,
        },
        {
            id: 2,
            image: FestivalIamge2,
            title: '워우웅',
            comments: 21,
            like: 97,
        },
        {
            id: 3,
            image: FestivalImage3,
            title: '까르르륵',
            comments: 211,
            like: 37,
        },
        {
            id: 4,
            image: FestivalImage4,
            title: '에이잇',
            comments: 8,
            like: 2,
        },
        {
            id: 5,
            image: FestivalImage5,
            title: '허으어',
            comments: 123,
            like: 87,
        },
        {
            id: 6,
            image: FestivalImage6,
            title: '푸러긋',
            comments: 283,
            like: 1,
        },
        {
            id: 7,
            image: FestivalIamge1,
            title: '제에목',
            comments: 15,
            like: 125,
        },
        {
            id: 8,
            image: FestivalIamge2,
            title: '워우웅',
            comments: 21,
            like: 97,
        },
        {
            id: 9,
            image: FestivalImage3,
            title: '까르르륵',
            comments: 211,
            like: 37,
        },
        {
            id: 10,
            image: FestivalImage4,
            title: '에이잇',
            comments: 8,
            like: 2,
        },
        {
            id: 11,
            image: FestivalImage5,
            title: '허으어',
            comments: 123,
            like: 87,
        },
        {
            id: 12,
            image: FestivalImage6,
            title: '푸러긋',
            comments: 283,
            like: 1,
        },
    ];

    return(
        <div>
            <div css={css`
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                column-gap: 8px;
                row-gap: 16px;

                margin: 0px 20px;
            `}>
                {posts.map((post) => (
                    <FestivalPictureBox
                        key = {`festival-picture-${post.id}`}
                        postInfo={post}
                        onClick={() => {
                            console.log('Clicekd!');
                        }}    
                    />
                ))}
                


            </div>
            <PostButton size={56} link={'/community/festival-picture-view/festival-picture-write-view'}/>
        </div>
    );
}