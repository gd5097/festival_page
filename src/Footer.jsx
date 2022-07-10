import React from 'react';
import { FooterDiv, FooterBig, FooterSmall } from './styledComponent';

function Footer(props) {
  return (
    <FooterDiv>
      <img width="10%" src={`img/brgg_logo_1565673135.webp`} />
      <FooterBig>created by RyuJungWoo</FooterBig>
      <FooterSmall>2022. </FooterSmall>
    </FooterDiv>
  );
}

export default React.memo(Footer);