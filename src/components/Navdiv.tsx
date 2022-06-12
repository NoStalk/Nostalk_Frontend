import React from 'react';
import { Link } from 'react-router-dom';
const Navdiv: React.FC = () => {
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
                <h5>Login/Signup</h5>
            </Link>
        </div>
    );
}

export default Navdiv