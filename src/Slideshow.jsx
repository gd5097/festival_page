import React, { useState }  from 'react';
import { PagenumberDiv, PagingSection } from './styledComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Slideshow = () => {
    const [page, setPage] = useState(1);

    return (
        <>
            <img width="100%" src={`img/${page}.jpg`} />
                <PagingSection>
                    <PagenumberDiv onClick={() => {
                      if (1 < page) {
                        setPage(page - 1)
                      }
                      else{
                        setPage(20)
                      }
                      }}>
                      <FontAwesomeIcon className="highlight" size="2x" icon={faArrowLeft}/>
                    </PagenumberDiv>
                    <PagenumberDiv onClick={() => {
                      if (20 > page) {
                        setPage(page + 1)
                      }
                      else{
                        setPage(1)
                      }
                      }}>
                      <FontAwesomeIcon className="highlight" size="2x" icon={faArrowRight}/>
                    </PagenumberDiv>
                  </PagingSection>
        </>
    );
};

export default Slideshow;