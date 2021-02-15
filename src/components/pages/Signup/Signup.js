import "./Signup.css";
import { Link } from 'react-router-dom';
import IqubeLogo from "../../sections/IqubeLogo/IqubeLogo";
import Icons from "../../sections/Icons/Icons";

const Signup=() =>{
	return(
		<div className="container">
			<div className="split left">
				<IqubeLogo/>
				<img className="payment" src="./images/PAYMENT2.png"/>
				<div className="paragraph">Or signup with</div>
				<Icons/>
			</div>

			<div className="split right">
				<h2>Sign Up</h2>
				<div className="first-text">Enter your credentials to continue</div>
				<form className="form2">
					<div className="form-group centered"> 
						<div className="col-sm-6 input-icons">
							<i className="far fa-user icon"></i>
							<input type="text" name="name"  placeholder="" className="form-control form-control-lg" required/>
							<span className="floating-label">Name</span>
						</div>
					</div>
					<div className="form-group centered"> 
						<div className="col-sm-6 input-icons">
							<i className="fas fa-envelope-square icon"></i>
							<input type="email" name="email" id="email" placeholder="" className="form-control form-control-lg" required/>
							<span className="floating-label">Email</span>
						</div>
					</div>
					<div className="form-group centered"> 
						<div className="col-sm-6 input-icons">
							<i class="fas fa-mobile-alt icon"></i>
							<input type="tel" name="phone" id="phone" placeholder="" className="form-control form-control-lg" required/>
							<span className="floating-label">Phone</span>
						</div>
					</div>	
					<div className="form-group centered"> 
						<div className="col-sm-6 input-icons">
						<i className="fas fa-unlock-alt icon"></i>
							<input type="password" name="password" id="password" placeholder="" className="form-control form-control-lg" required/>
							<span className="floating-label">Password</span>
						</div>
					</div>	
					<div className="form-group centered">
						<div className="col-sm-6">
							<button type="button" value="signup" className="btn btn-primary btn-block btn-style">Sign up</button>
						</div>
					</div>	

				</form>	
				<div className="foot">Already have an account? <span><Link to="/" className="">Login <i class="fas fa-caret-right"></i></Link></span></div>	
			</div>
		</div>
	)
}

export default Signup;