import React, { useState } from 'react';
import './PostAdd.scss';
import { useNavigate } from 'react-router-dom';

const PostAdd = () => {
  const [post, setPost] = useState('');

  const navigate = useNavigate();

  const deleteBtn = () => {
    navigate('/PostList');
  };

  const isInputValue = post.length === 0;

  const uploadBtn = () => {
    // fetch('http://10.58.52.145:3000/login', { //TODO: 백에서 API완료되면 API주소넣어주기
    //   method: 'POST,
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8', // TODO: 백에서 로그인 기능완료되면 주석 해제하기
    //   },
    //   body: JSON.stringify({
    //     content: '안녕하세요',
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data));

    navigate('/PostList');
  };

  const savePost = event => {
    setPost(event.target.value);
  };

  return (
    <div className="postAdd">
      <div className="container">
        <div className="label">
          <div className="imgBox">
            <img src="/img/Pic.png" alt="프로필사진" className="profileImg" />
            <img src="/img/Line.png" alt="이미지라인" className="profileLine" />
          </div>
          <div className="nickName">Name</div>
        </div>
        <textarea
          placeholder="스레드를 시작하세요."
          value={post}
          className="textContent"
          onChange={savePost}
        ></textarea>
      </div>

      <div className="button">
        <input
          onClick={deleteBtn}
          type="button"
          className="delete"
          value="취소"
        />
        <input
          className={isInputValue ? 'notupload' : 'upload'}
          disabled={post.length < 1}
          onClick={uploadBtn}
          type="button"
          value="게시"
        />
      </div>
    </div>
  );
};

export default PostAdd;
