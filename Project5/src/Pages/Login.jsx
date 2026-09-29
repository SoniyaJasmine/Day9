import { useState } from "react";
import "./Login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="login-page">

      <div className="login-box">

        {/* =========================
            LOGIN / SIGNUP TABS
        ========================= */}

        <div className="auth-tabs">

          <button
            className={isLogin ? "auth-tab active" : "auth-tab"}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "auth-tab active" : "auth-tab"}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>

        </div>


        {/* =========================
            FORM AREA
        ========================= */}

        <div className="auth-form">

          {isLogin ? (

            /* =====================
               LOGIN FORM
            ===================== */

            <>
              <h2>Login to my Account</h2>


              {/* EMAIL */}

              <div className="auth-field">

                <label>Email</label>

                <input
                  type="email"
                  placeholder="Enter Email"
                />

              </div>


              {/* PASSWORD */}

              <div className="auth-field">

                <label>Password</label>

                <input
                  type="password"
                  placeholder="Enter Password"
                />

              </div>


              {/* LOGIN BUTTON */}

              <button className="auth-submit">
                Login & Continue
              </button>


              {/* FORGOT PASSWORD */}

              <button className="forgot-password">
                Forgot Password
              </button>

            </>

          ) : (

            /* =====================
               SIGN UP FORM
            ===================== */

            <>
              <h2>New User? Sign up Now</h2>


              {/* EMAIL */}

              <div className="auth-field">

                <label>Email</label>

                <input
                  type="email"
                  placeholder="Enter Email"
                />

              </div>


              {/* PASSWORD */}

              <div className="auth-field">

                <label>Password</label>

                <input
                  type="password"
                  placeholder="Enter Password"
                />

              </div>


              {/* CONFIRM PASSWORD */}

              <div className="auth-field">

                <label>Confirm Password</label>

                <input
                  type="password"
                  placeholder="Confirm Password"
                />

              </div>


              {/* SIGN UP BUTTON */}

              <button className="auth-submit">
                Sign Up & Continue
              </button>

            </>

          )}

        </div>

      </div>

    </main>
  );
}

export default Login;