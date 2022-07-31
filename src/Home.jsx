import {React, useState, Component} from 'react';
import { useNavigate } from 'react-router-dom';
import {
    PostSection,
    PostTitleDiv,
    PostTitle,
  } from './styledComponent';
import { PostListDiv, PagenumberDiv, PagingSection} from './styledComponent';

import Slider from "react-slick";
import Slideshow from './Slideshow';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Home = () => {

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

    
    function Render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <Slider {...settings}>
            <img width="100%" src={`img/${1}.jpg`} />
            <img width="100%" src={`img/${2}.jpg`} />
            <img width="100%" src={`img/${3}.jpg`} />
            <img width="100%" src={`img/${4}.jpg`} />
            <img width="100%" src={`img/${5}.jpg`} />
            <img width="100%" src={`img/${6}.jpg`} />
            <img width="100%" src={`img/${7}.jpg`} />
            <img width="100%" src={`img/${8}.jpg`} />
          </Slider>
        </div>
      );
    }
    

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
                  <Slideshow></Slideshow>
                </PostListDiv>
            </PostSection>
        </>
    );
};

export default Home;