import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return(
    <div>
      <ul>
        <li><Link to=".">Home</Link></li>
        <li><a href="./login">Login</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
