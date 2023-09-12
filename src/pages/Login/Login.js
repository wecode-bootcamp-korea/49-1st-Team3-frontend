import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const saveUserId = event => {
    setUserId(event.target.value);
  };
  const saveUserPw = event => {
    setUserPw(event.target.value);
  };
  const login = () => {
    fetch('/data/login.json', {
      //TODO: 백에서 API완료되면 API주소넣어주기
      method: 'GET', // TODO: 백에서 로그인 기능 롼료되면 'POST'로 바꿔주기
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      // body: JSON.stringify({   // TODO: 백에서 로그인 기능완료되면 주석 해제하기
      //   email: userId,
      //   password: userPw,
      // }),
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('accessToken', data.accessToken);
          alert('로그인성공'); //TODO navigate 넣어주기주소
        } else {
          alert('로그인실패');
          setUserId('');
          setUserPw('');
        }
      });
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
            <input
              type="text"
              placeholder="이메일"
              value={userId}
              onChange={saveUserId}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={userPw}
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
            onClick={login}
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
