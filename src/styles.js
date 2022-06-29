import { createGlobalStyle } from 'styled-components';

//yarn add styled-reset
import reset from 'styled-reset';

// 라이트테마 스타일
export const lightTheme = {
    fontColor: '#2c2c2c',
    bgColor: 'white'  
};
// 다크테마 스타일
export const darkTheme = {
    fontColor: 'white',
    bgColor: '#2c2c2c'
};

/* 전역에서 사용할 스타일 */
/* ${reset} 기본 디자인, 여백 삭제 */
export const GlobalStyles = createGlobalStyle`
    ${reset}
`;
