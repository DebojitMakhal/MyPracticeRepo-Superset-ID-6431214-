import React,{ useState } from "react";

function LoginLogout() {
    const [loginStatus,setLoginStatus]=useState(false);
    const handleLogin=()=>{
        setLoginStatus(true);
    }
    const handleLogOut=()=>{
        setLoginStatus(false);
    }
    return(
        <div style={{margin: "50px",marginLeft: "300px"}}>
            {!loginStatus && (
                <div>
                    <h1>Please Sign up</h1>
                    <button onClick={handleLogin}>Login</button>
                </div>

            )
            }
            {loginStatus && (
                <div>
                    <h1>Welcome Back</h1>
                    <button onClick={handleLogOut}>Login</button>
                </div>

            )
            }
        </div>
    )
}
export default LoginLogout;