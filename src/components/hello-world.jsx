import { css, useTheme } from '@emotion/react';
import React from 'react';
import styled from '@emotion/styled';

const Test = styled.div`
    font-size: 3rem;
            font-weight: bold;
            
    
            background-color: ${({theme}) => theme.colors.primary1};
`

export default function HelloWorld(){
    const theme = useTheme();
    return(
        <Test css={css`
            color: ${theme.colors.white};
        `}>
            HelloWorld!
        </Test>
    );
}