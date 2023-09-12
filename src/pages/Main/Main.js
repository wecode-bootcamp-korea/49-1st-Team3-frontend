import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nick, setNick] = useState('');
  const [isCheckEmail, setIsCheckEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isSubmit, setIsSubmitEnabled] = useState(false);

  const onChangeEmail = e => {
    const checkEmail = e.target.value;
    setEmail(checkEmail);
    const isValid = checkEmail.includes('@') && checkEmail.includes('.');
    setIsCheckEmail(isValid);
  };

  const onChangePassword = e => {
    const checkPassword = e.target.value;
    setPassword(checkPassword);
    const isValid = checkPassword.length >= 10;
    setIsPassword(isValid);
  };

  const onChangePasswordCheck = e => {
    setPasswordCheck(e.target.value);
  };

  const onChangeNick = e => {
    setNick(e.target.value);
  };

  const handleSubmit = () => {
    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      alert('비밀번호가 일치합니다.');
      // navigate('/');
    }
  };
  return (
    <div className="joinInfo">
      <div className="header">
        <img src="./img/backArrow.png" alt="사진없음" />
        <span className="backFont">뒤로</span>
      </div>
      <div className="container">
        <div className="pageTitle">
          <p>회원가입</p>
        </div>
        <div className="basicInfo">
          <label>
            <p className="fontOne">기본 정보</p>
            <p className="fontTwo">필수 사항</p>
          </label>
          <input type="email" placeholder="이메일" onChange={onChangeEmail} />
          {!isCheckEmail && (
            <p style={{ color: 'red' }}>유효하지않은 이메일 주소입니다.</p>
          )}
          <input
            type="password"
            placeholder="비밀번호"
            onChange={onChangePassword}
          />
          {!isPassword && (
            <p style={{ color: 'red' }}>비밀번호는 10자 이상이어야 합니다.</p>
          )}
          <input
            type="password"
            placeholder="비밀번호 확인"
            onChange={onChangePasswordCheck}
          />
        </div>
        <div className="nick">
          <label>
            <p className="fontOne">닉네임</p>
            <p className="fontTwo">선택 사항</p>
          </label>
          <input
            className="nick-1"
            type="text"
            placeholder="닉네임"
            onChange={onChangeNick}
          />
          <div className="folderChoice">
            <button>파일선택</button>
            <input
              className="nick-2"
              type="text"
              placeholder="파일을 선택해주세요."
            />
          </div>
        </div>
        <div className="phone">
          <label>
            <p className="fontOne">전화번호</p>
            <p className="fontTwo">선택 사항</p>
          </label>
          <select>
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
          </select>
          <input type="tel" placeholder="휴대폰 번호를 입력해주세요." />
        </div>
        <div className="birthday">
          <label>
            <p className="fontOne">생일</p>
            <p className="fontTwo">선택 사항</p>
          </label>
          <input type="text" placeholder="년도" />
          <input type="text" placeholder="월" />
          <input type="text" placeholder="일" />
        </div>
      </div>
      <div>
        <button
          className={isPassword ? 'joinBtn' : 'joinBtnDisabled'}
          onClick={handleSubmit}
          disabled={isPassword ? false : true}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};
export default Main;
