import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css';
import SignIn from '../pages/sign-up-and-sign-in/sign-in.page';
import SignUp from '../pages/sign-up-and-sign-in/sign-up.page';
import Settings from '../pages/settings/settings.components';

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
          <Route path="/settings" element={<Settings />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
};

export default App;