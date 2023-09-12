import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import JoinDone from './pages/JoinDone/JoinDone';
import PostAdd from './pages/PostAdd/PostAdd';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/joindone" element={<JoinDone />} />
        <Route path="/postadd" element={<PostAdd />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
