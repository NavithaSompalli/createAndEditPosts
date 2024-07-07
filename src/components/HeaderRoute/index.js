import { Link } from 'react-router-dom';
import './index.css';

const HeaderRoute = () => (
  <nav className='nav-container'>
    <h1>Snapsify</h1>
    
      <ul className='buttons-container'>
        <li><Link to='/createpost'>Create Post</Link></li>
        <li><Link to='/'>Posts Display</Link></li>
        
      </ul>
   
  </nav>
);

export default HeaderRoute;
