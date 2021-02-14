import "./Login.css";
import { Link } from 'react-router-dom';
import IqubeLogo from "../../sections/IqubeLogo/IqubeLogo";
import Icons from "../../sections/Icons/Icons";

const Login=() =>{
	return(
		<div className="container">
			<div className="split left">
				<IqubeLogo/>
				<img className="payment" src="./images/PAYMENT1.png"/>
				<div className="paragraph">Or login with</div>
				<Icons/>
				
			</div>
			<div className="split right">
				<h2 className="head1">Login</h2>
				<div className="first-text1">Enter your email and password</div>
				<form className="form1">
					<div className="form-group centered"> 
						<div className="col-sm-6 input-icons">
							<i className="fas fa-envelope-square icon"></i>
							<input type="email" name="email"  placeholder="" className="inputText form-control form-control-lg" required/>
							<span className="floating-label">Email</span>
						</div>
					</div>
					<div className="form-group centered"> 
						<div className="col-sm-6 input-icons">
							<i className="fas fa-unlock-alt icon"></i>
							<input type="password" name="password" id="password" placeholder="" className="form-control form-control-lg" required/>
							<span className="floating-label">Password</span>
						</div>
					</div>	
					<div className="form-group"> 
						<div className="col-sm-6">
							<div className="custom-control custom-switch move">
	  							<input type="checkbox" className="custom-control-input"id="rememberMe"/>
	  							<label className="custom-control-label" for="rememberMe">Remember me</label>
	  							<Link className="link1" to="/forgotpassword" >Forgot password?</Link>
							</div>
						</div>
					</div>	
					
					<div className="form-group centered">
						<div className="col-sm-6">
							<button type="button" value="Log in" className="btn btn-primary btn-block">Log in</button>
						</div>
					</div>	

				</form>	
				<div className="footer">Don't have an account? <Link to="/signup" >Sign up <i class="fas fa-caret-right"></i></Link></div>	
			</div>
		</div>
	)
}
 
export default Login; 