import React from 'react';
import { css } from '@emotion/react';
import WritterBox from '../writter-box';

import moment from 'moment/moment';
import 'moment/locale/ko';

export default function FestivalPostBox() {
    const time = moment().format('DD/MM HH:MM');

    return(
        <div
            // 전체 컨테이너
            css={css`
                display: flex;
                flex-direction: column;

                margin: 0px 20px;
            `}
        >
            <WritterBox
                writter={'날으는 토끼'}
                time={time}
            />
            
        </div>
    );
}