import "./ForgotPassword.css";
import { Link } from 'react-router-dom';
const ForgotPasword = () =>{
	return(
		<div className="container-background">
			<div className="contain">
				<img className="payment4" src="./images/lock2.png"/>
				<div className="text2">
					<div className="">Forgot your password?</div>
					<div className=""> oh no!</div>
				</div>	
				<div className="text3">
					<div className="">Enter your email address below</div>
					<div className="">to reset your password.</div>
				</div>	
				<div className="form-group centered new"> 
					<div className="col-sm-6 input-icons">
						<i className="fas fa-envelope-square icon"></i>
						<input type="email" name="email"  placeholder="" className="inputText form-control form-control-lg" required/>
						<span className="floating-label">Email</span>
					</div>
				</div>	
				<div className="form-group centered">
					<div className="col-sm-6">
						<button type="button" value="continue" className="btn btn-primary btn-block">Reset Password </button>
					</div>
				</div>		
			</div>	
		</div>
	)
} 

export default ForgotPasword;