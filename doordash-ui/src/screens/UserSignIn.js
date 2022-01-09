import SimpleNav from "../components/SimpleNav";
import "../styles/auth.css";
function UserSignIn() {
    return (
        <div className="sign-in-page">
            <SimpleNav/>
            <div className="sign-in">
                <div className="log-in-container">
                    <h2>Sign In</h2>
                    <p>New to DoorDash? <span>Sign Up</span></p>
                    <div className="login-buttons">
                        <button id="facebook"><img src="/facebook_icon.png"/>Continue with Facebook</button>
                        <button id="google"> <img src="/google_icon.png"/>Continue with Google</button>
                        <button id="apple"> <img src="/apple_icon.png"/>Continue with Apple</button>
                    </div>
                    <p>continue with email</p>
                    <form>
                        <label>Email</label>
                        <br/>
                        <input />
                        <br/>
                        <label>Password</label>
                        <br/>
                        <input type="password"/>
                    </form>
                    <button id="sign-in-button">Sign In</button>
                    
                </div>
            </div>
            <div className="footer-signin">

            </div>
        </div>
    )
}

export default UserSignIn;