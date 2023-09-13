import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Post from './pages/Post/Post';
import JoinDone from './pages/JoinDone/JoinDone';
import PostAdd from './pages/PostAdd/PostAdd';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/post" element={<Post />} />
        <Route path="/joindone" element={<JoinDone />} />
        <Route path="/postadd" element={<PostAdd />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
