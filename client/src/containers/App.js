import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

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
        <Route path="/signin" element={<SignInAndSignUpPage />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
};

export default App;