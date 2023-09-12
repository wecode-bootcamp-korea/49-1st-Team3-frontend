import React from 'react';
import './JoinDone.scss';
import { useNavigate } from 'react-router-dom';

const JoinDone = () => {
  const navigate = useNavigate();

  const joinDoneBtn = () => {
    navigate('/List');
  };

  const backBtn = () => {
    navigate('/Main');
  };

  return (
    <div className='joinDone'>
      <header className='back'>
        <div className='backImage'>
          <img src='/img/Back_arrow.png' alt='뒤로가기버튼' onClick={backBtn} />
        </div>
        <div className='backText'>뒤로</div>
      </header>
      <div className='container'>
        <div className='image'>
          <img src='/img/img1.png' alt='logo' />
          <div className='textBox'>
            <p className='doneText'>회원 가입되었습니다!</p>
            <p className='doneLogin'>이제 로그인해주세요.</p>
          </div>
        </div>
      </div>
      <input
        onClick={joinDoneBtn}
        type='button'
        className='joinDoneButton'
        value='확인'
      ></input>
    </div>
  );
};

export default JoinDone;
