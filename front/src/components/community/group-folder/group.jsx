import React, { useEffect } from 'react';
import { css } from '@emotion/react';

import moment from 'moment';
import 'moment/locale/ko';
import GroupBox from './group-box';
import PostButton from '../post-button';
import axios from 'axios';

export default function Group() {
    const time = moment().format('DD/MM HH:MM');
    
    useEffect(() => {
        console.log('Get in Func');
        const test = axios.get('http://52.79.44.217/meeting/post/list').then(
            (response) => {
                console.log(response);
                console.log(test);
            }
        );
      }, []);

    const posts = [
        {
            id: 1,
            content: '닭똥집 드시고 싶으신 분? 너무 많이 시켜서 와서 드세요.',
            comments: 11,
            postingTime: time,
        },
        {
            id: 2,
            content: '육주에서 술마실 남2 !!!??',
            comments: 3,
            postingTime: time,
        },
        {
            id: 3,
            content: '22새내기 모여라!!!!!!',
            comments: 3,
            postingTime: time,
        },
        {
            id: 4,
            content: '함인섭에서 2:2 술마실 여성2분',
            comments: 15,
            postingTime: time,
        },
        {
            id: 5,
            content: '닭똥집 드시고 싶으신 분? 너무 많이 시켜서 와서 드세요.',
            comments: 11,
            postingTime: time,
        },
        {
            id: 6,
            content: '육주에서 술마실 남2 !!!??',
            comments: 3,
            postingTime: time,
        },
        {
            id: 7,
            content: '22새내기 모여라!!!!!!',
            comments: 3,
            postingTime: time,
        },
        {
            id: 8,
            content: '함인섭에서 2:2 술마실 여성2분',
            comments: 15,
            postingTime: time,
        },
        {
            id: 9,
            content: '닭똥집 드시고 싶으신 분? 너무 많이 시켜서 와서 드세요.',
            comments: 11,
            postingTime: time,
        },
        {
            id: 10,
            content: '육주에서 술마실 남2 !!!??',
            comments: 3,
            postingTime: time,
        },
        
    ]
    
    

    return(
        <div css={css`
            display: flex;
            flex-direction: column;
            
            row-gap: 12px;

            margin: 0px 20px;
            border: 0;
            border-radius: 18px;
            //background-color: white;
        `}>
            {posts.map((post) => (
                <GroupBox
                onClick={() => {
                    console.log('Clicked!');
                }}
                key={`group-${post.id}`}
                postInfo={post}
            />
            ))}

            <PostButton size={56} link={'/community/festival-picture-view/group-write-view'}/>
        </div>
        
    );
}