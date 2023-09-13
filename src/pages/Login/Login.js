import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userInfo;

  const saveUserInfo = event => {
    const { name, value } = event.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  let regex = new RegExp(
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  );

  const isActiveBtn = regex.test(email) && password.length >= 10;

  // const navigate = useNavigate();

  const login = () => {
    fetch('/data/login.json', {
      //TODO: 백에서 API완료되면 API주소넣어주기
      method: 'GET', // TODO: 백에서 로그인 기능 롼료되면 'POST'로 바꿔주기
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      // body: JSON.stringify({   // TODO: 백에서 로그인 기능완료되면 주석 해제하기
      //   email: email,
      //   password: password,
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
          setUserInfo('');
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
            <Input
              scale="large"
              placeholder="이메일"
              type="email"
              name="email"
              onChange={saveUserInfo}
            />
            <Input
              scale="large"
              placeholder="비밀번호"
              type="password"
              name="password"
              onChange={saveUserInfo}
            />
          </div>

          <input
            className="loginButton"
            type="button"
            value="로그인"
            disabled={isActiveBtn ? false : true}
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
