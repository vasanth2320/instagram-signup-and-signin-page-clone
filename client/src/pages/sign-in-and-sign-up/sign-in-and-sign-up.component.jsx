import React from "react";
import { Route, Routes } from "react-router-dom";

// import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";
import './sign-in-and-sign-up.styles.scss';


const SignInAndSignUpPage = (page) => {
    return (
        <div className="sign-in-and-sign-up">
            {/* <Routes>
                <Route path="/accounts/signin" element={<SignIn />} />
            </Routes> */}
            {/* <SignIn /> */}
            {console.log(page)}
        </div>
    );
};

export default SignInAndSignUpPage;