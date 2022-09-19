import React, { useEffect, useState } from 'react';
import { css, useTheme } from '@emotion/react';

import moment from 'moment/moment';
import 'moment/locale/ko';

import Reply from './reply';
import axios from 'axios';
import useAuth from '../../../hooks/use-auth';

export default function ReplyBox({ parentName, replies, onSelectAsParent }) {
    const time = moment().format('DD/MM HH:MM');
    const auth = useAuth();

    return(
        <div
            // 전체 컨테이너
            css={css`
                display: flex;
                flex-direction: column;

                margin: 0px 20px;

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
            {replies?.map((reply)=>(
                <Reply
                    key={`reply-${reply.id}`}
                    replyInfo={reply}
                    plus={reply.parentId !== null ? true : false}
                    parentName={parentName}    
                    onSelectAsParent={onSelectAsParent}
                />
                    
            ))}
        </div>
    );
}