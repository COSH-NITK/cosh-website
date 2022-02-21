import './NotFound.scss';
import svg1 from './1.svg';
import svg2 from './2.svg';

import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className="notFoundDiv">
        <div className="illustrationDiv">
            <object type="image/svg+xml" data={svg2}  alt="Illustration 1" />
            <object type="image/svg+xml" data={svg1}  alt="Illustration 1" />
            <object type="image/svg+xml" data={svg2}  alt="Illustration 1" />
        </div>
        <h3>Congratulations, you’ve found the <span>404 page!</span></h3>
        <p>The page was not found. You may have mistyped the address or the page may have moved.</p>
        <Link to="/home" className="button-light">Go to home page</Link>
    </div>
  ) 
}

export default NotFound