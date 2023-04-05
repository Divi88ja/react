import {Outlet, NavLink} from "react-router-dom";

export default function Navbar(){
    return<>
    {/* <ul>
        <li>
            <Link to="/" style={} ></Link>
        </li>
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/about" >About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul> */}
{/* 
<ul>
        <li>
            <NavLink to="/" ></NavLink>
        </li>
        <li>
            <NavLink to="/home" style={({isActive})=>
            {return {fontWeight: isActive ? "bold":"", 
            color: isActive ? "red":""}}} >Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" style={({isActive})=>
            {return {fontWeight: isActive ? "bold":"",
             "color": isActive ? "red":"" }}}  >About</NavLink>
        </li>
        <li>
            <NavLink to="/contact" style={({isActive})=>
            {return {fontWeight: isActive ? "bold":"",
             "color": isActive ? "red":"" }}}>Contact</NavLink>
        </li>
        <li>
            <NavLink to="*">Error</NavLink>
        </li>
    </ul>
    <Outlet />
*/}

<nav className="navbar navbar-expand-lg navbar-light bg1 nv">
  <div className="container-fluid">
    <img src="logo192.png" className="ig" alt="path" height="40px" width="40px" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse rt" id="navbarNav">
      <ul className="navbar-nav rt">
        <li className="nav-item">
        <NavLink  className="nav-link " to="/home" style={({isActive})=>
            {return {fontWeight: isActive ? "bold":"", 
            "color": isActive ? "red":""}}} >Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink  className="nav-link" to="/about" style={({isActive})=>
            {return {fontWeight: isActive ? "bold":"", 
            "color": isActive ? "red":""}}} >About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink  className="nav-link" to="/contact" style={({isActive})=>
            {return {fontWeight: isActive ? "bold":"", 
            "color": isActive ? "red":""}}} >Contact</NavLink>
        </li>
        {/* <li className="nav-item ms-3">

        <NavLink clasName="nav-link" to="/about" style={({isActive})=>
            {return {fontWeight: isActive ? "bold":"",
             "color": isActive ? "red":"" }}} >About</NavLink>
        </li>
        <li className="nav-item ms-3">
        <NavLink to="/contact" style={({isActive})=>
            {return {fontWeight: isActive ? "bold":"",
             "color": isActive ? "red":"" }}}>Contact</NavLink>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
<Outlet />
    </>
 
}