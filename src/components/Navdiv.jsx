import React from 'react';
import { Link } from 'react-router-dom';
const Navdiv = () => {
    return (
        
        <div
            className="login-signup"
            // style={{ display: isLoggedIn ? "hidden" : "flex" }}
        >
            <Link
                to="/login"
                style={{
                    marginRight: "50%",
                    color: "#dcdee2",
                }}
                
            >
                <h5>Login</h5>
            </Link>
            <Link
                to="/signup"
                style={{
                    color: "#dcdee2",
                }}
                
            >
                <h5>Signup</h5>
            </Link>
        </div>
    );
}

export default Navdiv