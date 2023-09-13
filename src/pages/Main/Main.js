import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [nick, setNick] = useState('');

  const [isCheckEmail, setIsCheckEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  // const [isSubmit, setIsSubmitEnabled] = useState(false);

  const onChangeEmail = e => {
    const checkEmail = e.target.value;
    setEmail(checkEmail);
    const isValid = checkEmail.includes('@') && checkEmail.includes('.');
    setIsCheckEmail(isValid);
  };

  const onChangePw = e => {
    const checkPw = e.target.value;
    setPw(checkPw);
    const isValid = checkPw.length >= 10;
    setIsPassword(isValid);
  };

  const onChangePwCheck = e => {
    setPwCheck(e.target.value);
  };

  const onChangeNick = e => {
    setNick(e.target.value);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };

  const handleSubmit = () => {
    // email.includes('@') &&
    // email.includes('.') &&
    // pw.length <= 10

    const conditionA = email.includes('@') && email.includes('.');

    fetch('API주소', {
      method: 'POST',
      headers: {
        // Content-Type: "application/json;charset=utf-8",
        // authoriztion: 'token'
      },
      body: JSON.stringify({
        email: email,
        password: pw,
        passwordCheck: pwCheck,
        nickname: nick,
      }),
    })
      .then(res => {
        res.json();
      })
      .then(result => {
        if (pw !== pwCheck) {
          alert('비밀번호가 일치하지 않습니다.');
        } else if (!email.includes('@') || !email.includes('.')) {
          alert('형식에 맞춰 기입해주세요.');
        } else if (!conditionA || pw.length <= 10) {
          alert('ID, PW 재확인이 필요합니다');
        } else if (pw === pwCheck) {
          alert('가입완료!');
          navigate('/joindone');
        }
      });
  };

  return (
    <div className="joinInfo">
      <div className="header">
        <img src="./img/backArrow.png" alt="사진없음" onClick={goBack} />
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
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={onChangeEmail}
          />
          {!isCheckEmail && (
            <span style={{ color: 'red' }}>
              유효하지않은 이메일 주소입니다.
            </span>
          )}
          <input
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={onChangePw}
          />
          {!isPassword && (
            <span style={{ color: 'red' }}>
              비밀번호는 10자 이상이어야 합니다.
            </span>
          )}
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={pwCheck}
            onChange={onChangePwCheck}
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
            value={nick}
            onChange={onChangeNick}
          />
          <div className="folderForm">
            <button className="fileButton">파일선택</button>
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
          <div className="numberForm">
            <select>
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
            </select>
            <input
              className="numberWr"
              type="tel"
              placeholder="휴대폰 번호를 입력해주세요."
            />
          </div>
        </div>
        <div className="birthday">
          <label>
            <p className="fontOne">생일</p>
            <p className="fontTwo">선택 사항</p>
          </label>
          <div className="selectForm">
            <select className="selectBoxOne">
              <option value="1990년">1990년</option>
              <option value="1991년">1991년</option>
              <option value="1992년">1992년</option>
              <option value="1993년">1993년</option>
              <option value="1994년">1994년</option>
              <option value="1995년">1995년</option>
              <option value="1996년">1996년</option>
              <option value="1997년">1997년</option>
              <option value="1998년">1998년</option>
              <option value="1999년">1999년</option>
            </select>
            <select className="selectBoxTwo">
              <option value="1월">1월</option>
              <option value="2월">2월</option>
              <option value="3월">3월</option>
              <option value="4월">4월</option>
              <option value="5월">5월</option>
              <option value="6월">6월</option>
              <option value="7월">7월</option>
              <option value="8월">8월</option>
              <option value="9월">9월</option>
              <option value="10월">10월</option>
              <option value="11월">11월</option>
              <option value="12월">12월</option>
            </select>
            <select className="selectBoxThree">
              <option value="1일">1일</option>
              <option value="2일">2일</option>
              <option value="3일">3일</option>
              <option value="4일">4일</option>
              <option value="5일">5일</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <button className="joinBtn" onClick={handleSubmit}>
          회원가입
        </button>
      </div>
    </div>
  );
};
export default Main;
