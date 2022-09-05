import React from 'react';
import { css } from '@emotion/react';

import moment from 'moment';
import 'moment/locale/ko';
import GroupBox from './group-box';

export default function Group() {
    const time = moment().format('DD/MM HH:MM');
    
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
    ]
    
    

    return(
        <div css={css`
            display: flex;
            
            row-gap: 12px;

            margin: 0px 20px;

            border-radius: 18px;
            background-color: white;
        `}>
            {posts.map((post) => (
                <GroupBox
                key={`group-${post.id}`}
                postInfo={post} />
            ))}
        </div>

    );
}