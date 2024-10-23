import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav>
      <ul className='nav-list'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/education'>Education</Link>
        </li>
        <li>
          <Link to='/experience'>Experience</Link>
        </li>
        <li>
          <Link to='/project'>Project</Link>
        </li>
        <li>
          <Link to='/calculator'>Calculator</Link>
        </li>
      </ul>
    </nav>
  );
}
