import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const saveUserId = event => {
    setUserId(event.target.value);
  };
  const saveUserPw = event => {
    setUserPw(event.target.value);
  };
  return (
    <div className="login">
      <div className="allLoginBox">
        <div className="logoBox">
          <img className="logoImg" src="/img/logo.png" alt="로고" />
          <img className="logoImg2" src="/img/logo2.png" alt="로고" />
        </div>

        <div className="allJoinBox">
          <div className="idPW">
            <input type="text" placeholder="이메일" onChange={saveUserId} />
            <input
              type="password"
              placeholder="비밀번호"
              onChange={saveUserPw}
            />
          </div>

          <input
            style={{
              backgroundColor:
                userId.includes('@') && userPw.length >= 10 ? null : 'gray',
            }}
            className="loginButton"
            type="button"
            value="로그인"
            disabled={
              userId.includes('@') && userPw.length >= 10 ? false : true
            }
          />

          <div className="loginOption">
            <Link className="join" to="/main">
              회원가입
            </Link>
            <div></div>
            <span>비밀번호 찾기</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
