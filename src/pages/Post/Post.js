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
    fetch('http://10.58.52.59:8001/postList')
      .then(res => {
        return res.json();
      })
      .then(result => {
        setData(result.GET_READ);
      });
  }, []);

  return (
    <div className="post">
      <div className="postConTainNer">
        <div className="postList">
          {data.map(item => {
            return (
              <div className="postConTens" key={item}>
                <div>
                  <div className="proFileBox">
                    <div className="proFile">
                      <img src={`/img/${item.profileImage}`} alt="프로필사진" />
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
