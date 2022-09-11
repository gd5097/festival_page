import React from 'react';
import { css, useTheme } from '@emotion/react';

import moment from 'moment/moment';
import 'moment/locale/ko';

import Reply from './reply';

export default function ReplyBox() {
    const time = moment().format('DD/MM HH:MM');

    const replies = [
        {
            id: 1,
            wrriter: '우엉우엉김밥',
            content: '공연 언제까지 하는지 알아?',
            postTime: time,
        },
        {
            id: 2,
            wrriter: '뭘봐멀봐멀바마마',
            content: '와우...',
            postTime: time,
        },
        {
            id: 3,
            wrriter: '닐라닐라 바닐라',
            content: '바닐라 아이스크림 맛있더라',
            postTime: time,
        },
    ]

    return(
        <div
            // 전체 컨테이너
            css={css`
                display: flex;
                flex-direction: column;

                row-gap: 12px;
            `}
        >
            <div
                // 댓글 글자
                css={css`
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 1rem;
                `}
            >
                댓글
            </div>
            {replies.map((reply)=>(
                <Reply
                    key={`reply-${replies.id}`}
                    replyInfo={reply}/>
            ))}
        </div>
    );
}