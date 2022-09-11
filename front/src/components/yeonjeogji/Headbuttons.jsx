import React from 'react';
import { css, useTheme } from '@emotion/react';
import TempButton from './tempButton';

export default function ButtonList(params){
    const theme = useTheme();
    const name = params.name;

    return(        
        //버튼 래퍼
        <div css={css`
            display: flex;
            justify-content: center;
        `}>
            <TempButton
                width={58}
                height={35}
                text={'전체'}
                link={''} 
            />
            <TempButton
                width={58}
                height={35}
                text={'동아리'}
                link={''} 
            />
            <TempButton
                width={58}
                height={35}
                text={'연예인'}
                link={''} 
            />
        </div>
    );
}
