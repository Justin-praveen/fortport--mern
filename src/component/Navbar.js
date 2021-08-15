import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>
              <div>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/feed">feed</Link>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Navbar
