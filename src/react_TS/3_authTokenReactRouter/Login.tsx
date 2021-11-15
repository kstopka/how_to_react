// import * as React from "react";
// import { useState } from "react";

// // interface LoginProps {}
// //NOTE: podczas loginu ma przejsc na home
// //NOTE: jaki powienin być typ setToken
// const Login = ({ setToken }: { setToken: any }) => {
//     const [userName, setUserName] = useState("");
//     const [password, setPassword] = useState("");
//     const { correctUserName, correctPassword } = {
//         correctUserName: "123",
//         correctPassword: "qwe",
//     };
//     const handleChangeLogin = (e: any) => {

//         //validacja
//         const login = e.target.value;
//         setUserName(login);
//     };
//     const handleChangePassword = (e: any) => {
//         const password = e.target.value;
//         setPassword(password);
//     };
//     const handleFormSubmit = (e: { preventDefault: () => void }) => {
//         e.preventDefault();
//         if (userName !== correctUserName || password !== correctPassword) {
//             alert("wrong login or passowrd");
//         }
//         setToken(true);
//     };

//     //NOTE: jeżeli jest zalogowany to wrzuca na home
//     //NOTE: zmienia token na ten poprawny
//     //control inputs
//     //uncontrol
//     return (
//         <div>
//             <h1>Login</h1>
//             <form onSubmit={handleFormSubmit}>
//                 <label>
//                     <p>Username</p>
//     //NOTE: zmienia token na ten poprawny
//     //control inputs
//     //uncontrol
//     return (
//         <div>
//             <h1>Login</h1>
//             <form on{!userNameField.error&& Submit={userNameField.handleFormSubm}it}>
//                 <label>
// rpattendnrrn
//                     <small>{error}</small>                    <p>Username</p>
//                     <input type="text" onChange={handleChangeLogin} />
//                 </label>
// rpattendnrrn
//                     <small>{error}</small>                    <p>Username</p>
//     //NOTE: zmienia token na ten poprawny
//     //control inputs
//     //uncontrol
//     return (
//         <div>
//             <h1>Login</h1>
//             <form on{!userNameField.error&& Submit={userNameField.handleFormSubm}it}>
//                 <label>
// rpattendnrrn
//                     <small>{error}</small>                    <p>Username</p>
//                     <input type="text" onChange={handleChangeLogin} />
//                 </label>
//                 <label>
//                     <p>Password</p>
//                     <input type="password" onChange={handleChangePassword} />
//                 </label>
//                 <div>
//                     <button type="submit">Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Login;
