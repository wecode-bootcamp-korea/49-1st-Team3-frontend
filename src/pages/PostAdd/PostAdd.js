import React, { useState } from 'react';
import './PostAdd.scss';
import { useNavigate } from 'react-router-dom';

const PostAdd = () => {
  const [post, setPost] = useState('');

  const navigate = useNavigate();

  const isButtonValue = () => {
    if (post.length > 1) {
      const isConfirmed = window.confirm(
        '작성한 글이 모두 삭제됩니다. 취소하시겠습니까?',
      );
      if (isConfirmed) {
        navigate('/post');
      }
    } else {
      navigate('/post');
    }
  };

  const isInputValue = post.length === 0;

  const uploadBtn = () => {
    fetch('http://10.58.52.59:8001/postCreation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // Authorization: 'Bearer my-token',
      },
      body: JSON.stringify({
        user_id: 6,
        content: post,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));

    navigate('/post');
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
          onClick={isButtonValue}
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
