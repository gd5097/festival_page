import React, { useEffect, useState } from 'react';
import { css, useTheme } from '@emotion/react';
import WritterBox from '../writter-box';

import moment from 'moment/moment';
import 'moment/locale/ko';
import ReplyBox from '../reply-folder/reply-box';
import axios from 'axios';
import useAuth from '../../../hooks/use-auth';
import { useParams } from 'react-router-dom';



export default function GroupPostBox( {postInfo, fun, replies} ) {
    const time = moment(postInfo.createdAt).format('MM/DD HH:MM');
    const theme = useTheme();
    const params = useParams();
    const [curPost, setCurPost] = useState(undefined);

    return(
        <div
            // 전체 컨테이너
            css={css`
                display: flex;
                flex-direction: column;

                margin: 0px 20px;
                margin-top: 20px;
            `}
        >
            <WritterBox 
                writter={postInfo.author.nickname}
                time={time}
            />
            <div
                // 글 내용
                css={css`
                    font-size: 1rem;
                    color: ${theme.colors.white};
                    
                    margin-top: 20px;
                    margin-bottom: 48px;
                `}
            >
                {postInfo.contents}
            </div>
        </div>
    );
}