import React, { useEffect, useState } from 'react';
import './Post.scss';
import { Link, useNavigate } from 'react-router-dom';

const Post = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const headersClick = () => {
    navigate('/postadd');
  };

  useEffect(() => {
    fetch('/data/board.json')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <div className="post">
      <div className="postConTainNer">
        <div className="postList">
          {data.map(item => {
            return (
              <div className="postConTens">
                <div>
                  <div className="proFileBox">
                    <div className="proFile">
                      <img src={item.profileImage} alt="프로필사진" />
                      <span className="name">{item.nickname}</span>
                    </div>
                    <span className="date">{item.createdAt}</span>
                  </div>
                </div>
                <div>{item.content}</div>
                <input type="button" className="comment" value="댓글 00" />
              </div>
            );
          })}
        </div>
        <div className="action">
          <button onClick={headersClick}>글쓰기</button>
        </div>
      </div>
    </div>
  );
};
export default Post;
