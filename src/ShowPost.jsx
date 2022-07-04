import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  LoadingDiv,
  LoadingImg,
  PostReadDiv,
  PostReplDiv,
  PostSection,
  PostTitle,
  PostTitleDiv,
  Repl,
  ReplInput,
  ReplSubmitDiv,
  ReplTitleDiv,
  Replwriter,
  WritereplDiv,
} from './styledComponent';
const postData = {
  title: '어렵사리 정한 제목입니다.',
  contents: `내가 그때 그렇게 딱 했는데 보이는 사람은 너라는 것을 알게 되었어, 그게
  나에게는 힘들었지만, 쉽내가 그때 그렇게 딱 했는데 보이는 사람은 너라는
  것을 알게 되었어, 그게 나에게는 힘들었지만, 내가 그때 그렇게 딱 했는데
  보이는 사람은 너라는 것을 알게 되었어, 그게 나에게는 힘들었지만, 지
  않았던 만큼 더욱 성장할 수 있다는 것을 뼈저리게 느꼈지`,
};

const replData = [
  {
    id: 2,
    contents: `내가 생각해도 그건 아니다`,
  },
  {
    id: 5,
    contents: `그럴수도 있나?? 내가 생각해도 그건 아니다`,
  },
];

const countRepls = (repls) => {
  console.log('리뷰 개수를 세는 중...');
  return repls.length;
};

const PostAndRepl = React.memo(({post,postLoading,replLoading,repls,replCount})=>{
  return(<>
  <PostTitleDiv>
    <PostTitle>
      {/* title */}
      {post && post.title}        
    </PostTitle>        
  </PostTitleDiv>

  {postLoading ? (
    <LoadingDiv>
      <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
    </LoadingDiv>
  ) : (
    <PostReadDiv>{post && post.contents} </PostReadDiv>
  )}

  {/* post contents */}

  <ReplTitleDiv>댓글 {replCount}</ReplTitleDiv>
  {replLoading ? (
    <LoadingDiv>
      <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
    </LoadingDiv>
  ) : (
    repls &&
    repls.map((element) => (
      <PostReplDiv key={element}>
        <Replwriter>익명</Replwriter>
        <Repl>{element}</Repl>
      </PostReplDiv>
    ))
  )}</>)
})

const ShowPost = ({apiUrl}) => {
  const Params = useParams();
  const [post, setPost] = useState(null);
  const [repls, setRepls] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [replLoading, setReplLoading] = useState(true);
  const replInput = useRef();

  useEffect(() => {
    axios.get(`${apiUrl}posts/${Params.postID}`)
    .then(response => {
      setPost(response.data)
      setPostLoading(false);
      setRepls(response.data.repls);
      setReplLoading(false);
      replInput.current.focus();
    })
  }, []);
  
  // input창 상태 관리
  const [repl, setRepl] = useState('');

  // 이벤트가 발생하는 곳의 value 값을 setRepl로 저장
  const onChange = (e) => {
    setRepl(e.target.value);
  };

  // memo hook 실습
  // for useMemo
  const replCount = useMemo(() => countRepls(repls), [repls]);
  //const replCount = countRepls(repls);

  const onSubmitRepl = () => {
    axios.post(`${apiUrl}repl/`, {
      contents: repl,
      post: Params.postID,
    }).then(() => {
      window.location.reload();
    })
  }

  if (!Params.postID) {
    return <PostSection>잘못된 접근입니다.</PostSection>;
  }
  return (
    <div>
      <PostSection>
        <PostAndRepl
          post={post}
          postLoading={postLoading}
          replCount={replCount}
          replLoading={replLoading}
          repls={repls}  
        />

        <WritereplDiv>
          {/* 작성한 Javascript를 통해 변화가 일어났는지를 탐지 */}
          <ReplInput onChange={onChange} value={repl} 
            ref={replInput}></ReplInput>
          <ReplSubmitDiv onClick={onSubmitRepl}>
            <span>입력</span>
          </ReplSubmitDiv>
        </WritereplDiv>
      </PostSection>
    </div>
  );
};

export default ShowPost;