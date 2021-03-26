import Logo from '../assests/img/Vishal-Logo.jpg'
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
function Header() {
    let history = useHistory();
    function logout() {
        history.push("/");
    }
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light p-lg-3 shadow">
        <div class="container">
            <a class="navbar-brand" href="#Vishal"> <img src={Logo} height="50px" alt="vishal" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link to="/Dashboard" class="nav-link" href="#Vishal">Dashboard<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/OrderHistory" class="nav-link" href="#Vishal">Order History<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/NewOrder" class="nav-link" href="#Vishal">New Order<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/Outstanding" class="nav-link" href="#Vishal">Outstanding<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item active">
                        <Link to="/Complaint" class="nav-link" href="#Vishal">Complaint<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#Vishal" id="navbarDropdownMenuLink" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Admin Panel
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item"href="#Vishal" onClick={logout}>Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </>
    )
}
export default Header;