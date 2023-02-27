import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css';
import SignIn from '../pages/sign-in/sign-in.component';
import SignUp from '../pages/sign-up/sign-up.component';

const NotFound = () => (
  <div>
    <h1>Sorry, this page isn't available</h1>
  </div>
);

class App extends React.Component {
  // constructor() {
  //   super();
  // };

  render() {
    return (
      <div>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
};

export default App;