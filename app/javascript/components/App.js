import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Greeting from "./Greeting";
import store from "../store/createStore";

const App = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Greeting />}  />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;