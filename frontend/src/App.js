import React from "react";

import Header from "./components/Header";
import Route from "./components/Route";
import FinalBoard from './components/FinalBoard';
import ColorSelect from "./components/ColorSelect";
import Translate from "./components/Translate";
import Categories from "./components/Categories";
import Search from "./components/Search";
import Home from "./components/Home";
import Login from "./components/Login";
import Subscribe from "./components/Subscribe";
import MyPage from "./components/Mypage";

export default () => {
  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Categories />
      </Route>
      <Route path="/mypage">
        <MyPage />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/color-select">
        <ColorSelect />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/all">
        <FinalBoard />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/subscribe">
        <Subscribe />
      </Route>
    </div>
  );
};