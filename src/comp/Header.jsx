import '../css/Header.css'
import { Link } from 'react-router-dom';


 export  function Header () {
  return (
    <>
    
<header>
    <nav>
    <h6>Gestiones diarias de portines y documentación.</h6>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/wboard'>WBoard</Link></li>
    </ul>
</nav>
</header> 



   </>
      );
}

