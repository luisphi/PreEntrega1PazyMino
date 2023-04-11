import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {

    return (
        <div id="navBar">
            <Link to="/">
                <img src="images/logo_habitanto.png" alt="Habitanto" width={100} />
            </Link>
            <nav>
                <ul id='navMenu'>
                    <li><Link to="/category/Vinos">Vinos</Link></li>
                    <li><Link to="/category/Aperitivos">Aperitivos</Link></li>
                    <li><Link to="/category/Espumantes">Espumantes</Link></li>
                    <li><Link to="/category/Cervezas">Cervezas</Link></li>

                    <li><CartWidget /></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
