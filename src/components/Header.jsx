import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header className="header">
            <Link to={{ pathname: "/"}}>
                <a href="" className="active">The Meal</a>
            </Link>
        </header>
    )
}
export default Header 