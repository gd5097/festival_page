import React from 'react';
import {
  HeaderDiv,
  TitleLogoDiv,
  SubHeaderDiv,
} from './styledComponent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Header({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <HeaderDiv>
      <TitleLogoDiv>
        <a href="https://www.kangwon.ac.kr/www/index.do"><img width="80%" src={`/img/logo_75.png`} /></a>
      </TitleLogoDiv>
      <SubHeaderDiv>
        {darkMode ? (
          <FontAwesomeIcon onClick={toggleDarkMode} icon={faSun} />
        ) : (
          <FontAwesomeIcon onClick={toggleDarkMode} icon={faMoon} />
        )}
      </SubHeaderDiv>
    </HeaderDiv>
  );
}

export default Header;