import React from 'react';
import { css, useTheme } from '@emotion/react';
import WritterBox from '../writter-box';

import moment from 'moment/moment';
import 'moment/locale/ko';
import ReplyBox from '../reply-folder/reply-box';

export default function GroupPostBox() {
    const time = moment().format('DD/MM HH:MM');
    const theme = useTheme();

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
                writter={'날아라토끼'}
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
                닭똥집 드시고 싶으신분? 너무 많이 시킴. 와서 드시고 가세용
            </div>
            <ReplyBox />
        </div>
    );
}