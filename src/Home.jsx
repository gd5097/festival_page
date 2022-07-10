import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
    PostSection,
    PostTitleDiv,
    PostTitle,
  } from './styledComponent';
import { PostListDiv, PagenumberDiv, PagingSection} from './styledComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    const [page, setPage] = useState(1);

    const navigate = useNavigate();

    const goFood = () => {
        navigate('/food');
      };

    const goBoard = () => {
        navigate('/board');
      };

    const goEvent = () => {
        navigate('/event');
      };

    const goLost = () => {
        navigate('/lost');
      };
    

    return (
        <>
            <PostSection>
                <PostTitleDiv>
                    <PostTitle onClick={goFood}>먹거리</PostTitle>
                    <PostTitle onClick={goBoard}>익명게시판</PostTitle>
                    <PostTitle onClick={goEvent}>행사</PostTitle>
                    <PostTitle onClick={goLost}>분실물</PostTitle>
                </PostTitleDiv>
                <PostListDiv>
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
                  
                </PostListDiv>
            </PostSection>
        </>
    );
};

export default Home;