import axios from 'axios';
import React, { useState } from 'react';
import {
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostWriteDiv,
} from './styledComponent';
import WriteTitle from './WriteTitle';
import InputPost from './InputPost';
import { useNavigate } from 'react-router-dom';

const SubmitComponent = React.memo(({onSubmit}) => (
  <PostSubmitDiv>
    <PostSubmit onClick={onSubmit}>작성완료</PostSubmit>
  </PostSubmitDiv>
));

const WritePost = ({apiUrl}) => {
  // useState 만들어주기
  const [inputs, setInputs] = useState({
    title: '',
    contents: '',
  });
  // 2개를 동시에 관리하기 위한 객체 만들어주기
  const { title, contents } = inputs;
  // onChange 함수 만들어주기
  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const navigate = useNavigate();

  const onSubmit = () => {
    axios.post(`${apiUrl}posts/`, {
      title: inputs.title,
      contents: inputs.contents,
      repls: [],
    }).then(() => {
      navigate('../board');
    })
  }

  return (
    <PostSection>

      <WriteTitle/>
      <PostWriteDiv>
        <InputPost 
          onChange={onChange}
          title={title}
          contents={contents}></InputPost>
      </PostWriteDiv>
      <SubmitComponent onSubmit={onSubmit}></SubmitComponent>
    </PostSection>
  );
}

export default WritePost;