import "./PhoneVerification.css";
import { Link } from 'react-router-dom'
const PhoneVerification = () =>{
	return(
		<div className="container">
			<div className="split left">
				<img className="payment3" src="./images/PAYMENT4.png"/>
				
			</div>
			<div className="split right margin">
				<div className="head">Verify your phone number</div>
				<div className="first-text2">We have sent you an OTP PIN via SMs to the number you entered.</div>
				<div className="form-group centered form-style"> 
					<div className="col-sm-6 input-icons">
						<i className="fas fa-unlock-alt icon"></i>
						<input type="password" name="pin" id="pin"  inputmode="numeric" placeholder="" className="form-control form-control-lg" required />
						<span className="floating-label">Pin</span>
					</div>
				</div>

				<div className="form-group centered">
					<div className="col-sm-6">
						<button type="button" value="continue" className="btn btn-primary btn-block btn-style1">Verify</button>
					</div>
				</div>	
				<div className="footer">Verify your email address by clicking on the the link sent to your email</div>		
			</div>
		</div>
	)
} 

export default PhoneVerification;