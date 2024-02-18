
import React from 'react'
import { Link } from 'react-router-dom';
function Sidebar(){
    return(
        <div className="Sidebar">
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
        </div>
    )
}

export default Sidebar