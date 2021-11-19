import React, { useState, useEffect } from "react";

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
import unsplash from "./api/unsplash";


function  App() {

  const [pins, setNewPins] = useState([])

  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/photos", {
      params: {
        query: term
      }
    });
  };

  const onSearchSubmit = (term) => {
      console.log("on search submit", term)
      getImages(term).then((res) => {
        let results = res.data;

        let newPins = [
          ...results,
          ...pins,
          
        ]

        newPins.sort(function(a,b) {
          return 0.5 - Math.random();
        });
        setNewPins(newPins);

      })
  }

  const getNewPins = () => {
    let promises = [];
    let pinData = [];

    let pins = ['ocean', 'Tokyo', 'dogs', 'cats', 'bali']

    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data; 

          pinData = pinData.concat(results);

          pinData.sort(function (a,b) {
            return 0.5 - Math.random();
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });
  };

  useEffect(()  => {
    getNewPins();
  },  []);

  return (
    <div className="ui container">
      <Header onSubmit={onSearchSubmit}/>
      <Route path="/">
        <Home pins={pins}/>
      </Route>
      <Route path="/mypage">
        <MyPage />
      </Route>
      <Route path="/categories">
        <Categories />
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

export default App;