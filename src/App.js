import { Route } from 'react-router-dom';
import './App.css';
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import PhoneVerification from "./components/pages/PhoneVerification/PhoneVerification";
import EmailVerification from "./components/pages/EmailVerification/EmailVerification";
import ForgotPassword from "./components/pages/ForgotPassword/ForgotPassword";
import Notification from "./components/pages/Notification/Notification";


function App() {
  return (
    <div>
      <Route exact path="/" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/verify-phonenumber" component={PhoneVerification}/>
      <Route exact path="/verify-email" component={EmailVerification}/>
      <Route exact path="/forgotpassword" component={ForgotPassword}/>
      <Route exact path="/notification" component={Notification}/>
      
    </div>
  );
}

export default App;
