import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Grant } from "../assets";
import { LoginComponent } from "../components";
import { setLoading } from "../redux/loading";
import "./style.scss";
const Login = ({darkMode}) => {
  const location = useLocation();

  const [auth, setAuth] = useState(false);

  const { user } = useSelector((state) => state);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      if (location?.pathname === "/login/auth") {
        setAuth(true);
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 1000);
      } else {
        setAuth(false);
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 1000);
      }
    }
  }, [location]);

  return (
    <div className="Auth ">
      <div className={`inner ${darkMode ? "bg-black transition ease-in-out duration-300" : "bg-cover bg-center transition ease-out duration-300"}`}>
  {auth ? (
          <LoginComponent />
        ) : (
          <div className="suggection">
            <div>
              <Grant darkMode={darkMode} />
            </div>
            <div >
            
              
            <p className={`${darkMode ? "text-white" : "text-black"}`}>
          Welcome to GE CoPilot™
        </p>
        <p className={`${darkMode ? "text-white" : "text-black"}`}>
          Log in or Sign up with your account to continue
        </p>
            </div>

            <div className="btns">
              <button
                onClick={() => {
                  navigate("/login/auth");
                }}
              >
                Log in
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        )}

        <div className="bottum">
          
        </div>
      </div>
    </div>
  );
};

export default Login;
