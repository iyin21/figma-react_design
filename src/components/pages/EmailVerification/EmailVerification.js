import "./EmailVerification.css";
import { Link } from 'react-router-dom';

const EmailVerification = () =>{
	return(
		<div className="container">
			<div className="split left">
				<img className="payment4" src="./images/PAYMENT5.png"/>
				
			</div>
			<div className="split right margin">
				<h3 className="head">Verify your email address</h3>
				<div className="first-text3">We have sent you an email with a link to verify your email address</div>
				<div className="form-group centered">
					<div className="col-sm-6">
						<button type="button" value="continue" className="btn btn-primary btn-block btn-style">Continue</button>
					</div>
				</div>		
			</div>
		</div>
	)
} 

export default EmailVerification;