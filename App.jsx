import React, { useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import "./global.css"

const App = () => {
  let userRef = useRef();
  let passRef= useRef()
  let handleSubmit=(e)=>{
    e.preventDefault()
    let username=userRef.current.value
    let password=passRef.current.value
    toast.success("Signed up Sucessfully")
    localStorage.setItem("username" ,username)
    localStorage.setItem("password" ,password)
    userRef.current.value=""
    passRef.current.value=""
  }
  let handleLogin=(e)=>{
    e.preventDefault()
    let username=userRef.current.value
    let password=passRef.current.value
    let username1=localStorage.getItem("username")
    let password1=localStorage.getItem("password")
    if(username===username1 && password===password1){
      toast.success("Logged in Sucessfully")
    }
    else{
      toast.error("Invalid Username or Password")
    }
  }

  return (
    <div id='main'>
      <form action="" >
        <ToastContainer/>
        <label htmlFor="username">Username</label><br />
        <input type="text" id='username' ref={userRef}/><br />
        {/* <label htmlFor="email">Email</label><br />
        <input type="text" id='email' /><br />
        <label htmlFor="phone">Mobile Number</label><br />
        <input type="text" id='phone' /><br /> */}
        <label htmlFor="password">Password</label><br />
        <input type="password" id='password' ref={passRef}/><br />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default App

// import React, { Component } from 'react'
// import { HashRouter as Router, Route, NavLink } from "react-router-dom";
// import SignUpForm from "./pages/SignUpForm";
// import SignInForm from "./pages/SignInForm";
// import "./App.css";


// export default class App extends Component {
//   render() {
//     return (
//       <Router basename="/react-auth-ui/">
//         <div className="App">
//           <div className="appAside" />
//           <div className="appForm">
//             <div className="pageSwitcher">
//               <NavLink
//                 to="/sign-in"
//                 activeClassName="pageSwitcherItem-active"
//                 className="pageSwitcherItem"
//               >
//                 Sign In
//               </NavLink>
//               <NavLink
//                 exact
//                 to="/"
//                 activeClassName="pageSwitcherItem-active"
//                 className="pageSwitcherItem"
//               >
//                 Sign Up
//               </NavLink>
//             </div>

//             <div className="formTitle">
//               <NavLink
//                 to="/sign-in"
//                 activeClassName="formTitleLink-active"
//                 className="formTitleLink"
//               >
//                 Sign In
//               </NavLink>{" "}
//               or{" "}
//               <NavLink
//                 exact
//                 to="/"
//                 activeClassName="formTitleLink-active"
//                 className="formTitleLink"
//               >
//                 Sign Up
//               </NavLink>
//             </div>

//             <Route exact path="/" component={SignUpForm} />
//             <Route path="/sign-in" component={SignInForm} />
//           </div>
//         </div>
//       </Router>
//     )
//   }
// }

  
