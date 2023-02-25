import React from "react";
import { Route, Routes } from "react-router-dom";

// import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <Routes>
            {/* <Route index element={<UserList users={users} />} /> */}
            <Route path="/accounts/signin" element={<SignIn/>} />
            </Routes>
        </div>
    );
};

// class SignInAndSignUpPage extends React.Component {
//     constructor() {
//       super();
//     };
  
//     render() {
//       return (
//         <div>
//           <Routes>
//             <Route path="signin" element={<SignIn/>}/>
//             {/* <Route path="/accounts/singup" element={<SignUp/>}/> */}
//           </Routes>
//         </div>
//       );
//     }
//   };

export default SignInAndSignUpPage;