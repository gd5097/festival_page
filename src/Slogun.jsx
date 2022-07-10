import React from 'react';
import { SlogunSection, SlogunBig, SlogunSmall } from './styledComponent';
import { useNavigate } from 'react-router-dom';

function Slogun() {

  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return (
    <SlogunSection>
      <SlogunBig onClick={goHome}>백령대동제</SlogunBig>
      <SlogunSmall>同苦同樂 : 괴로움과 즐거움을 함께 할</SlogunSmall>
    </SlogunSection>
  );
}

export default React.memo(Slogun);