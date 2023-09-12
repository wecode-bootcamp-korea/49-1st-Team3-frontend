import React from 'react';
import './PostAdd.scss';
import { useNavigate } from 'react-router-dom';

const PostAdd = () => {
  const navigate = useNavigate();
  const deleteBtn = () => {
    navigate('/PostList');
  };
  const uploadBtn = () => {
    navigate('/PostList');
  };

  return (
    <div className='postAdd'>
      <div className='container'>
        <div className='label'>
          <div className='imgBox'>
            <img src='/img/Pic.png' alt='프로필사진' className='profileImg' />
            <img src='/img/Line.png' alt='이미지라인' className='profileLine' />
          </div>
          <div className='nickName'>Name</div>
        </div>
        <input
          type='text'
          className='textContent'
          value='스레드를 시작하세요.'
        />
      </div>
      <div className='button'>
        <input
          onClick={deleteBtn}
          type='button'
          className='delete'
          value='취소'
        ></input>
        <input
          onClick={uploadBtn}
          type='button'
          className='upload'
          value='게시'
        ></input>
      </div>
    </div>
  );
};

export default PostAdd;
