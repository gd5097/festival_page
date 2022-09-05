import React from 'react';
import { css } from '@emotion/react';
import TempButton from './tempButton';

export default function HomeBox() {
    return(
        <div css={css`
            margin: 0px auto;
            //background: white;    // for test
        `}>
            <TempButton
                size={80}
                text={'미래광장'}
                link={'/mirae-square'} 
            />
            <TempButton
                size={80}
                text={'60주년관'}
                link={'/temp'} 
            />
            <TempButton
                size={80}
                text={'게시판'}
                link={'/community'} 
            />
        </div>
    );
}