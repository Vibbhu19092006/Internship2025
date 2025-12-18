import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/App.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLogin, setLogin] = useState(true);

  const navigate = useNavigate(); 

  const handleLogin = () => {
    setLogin(false);
    navigate("/"); 
  };

  const handleLogout = () => {
    setLogin(true);
    navigate("/login");
  };

  return (
    <nav style={{ backgroundColor: "black", color: "aqua" }}>
      <ul className="ul">
        <li className="li"><Link to="/">Home</Link></li>
        <li className="li"><Link to="/about">About</Link></li>

        <li
          className="li dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Learning React
          {open && (
            <ul className="dropdown-menu">
              <li><Link to="/learn-react/usestate">useState</Link></li>
              <li><Link to="/learn-react/useeffect">useEffect</Link></li>
              <li><Link to="/learn-react/useeffect-api">useEffect API</Link></li>
              <li><Link to="/learn-react/useref">useRef</Link></li>
              <li><Link to="/learn-react/usememo">useMemo</Link></li>
              <li><Link to="/learn-react/usecallback">useCallback</Link></li>
            </ul>
          )}
        </li>

        <li className="li"><Link to="/contact">Contact</Link></li>

       
        <li className="li">
          {isLogin ? (
            <span
              style={{ cursor: "pointer" }}
              onClick={handleLogin}  
            >
              Login
            </span>
          ) : (
            <span
              style={{ cursor: "pointer" }}
              onClick={handleLogout}  
            >
              Logout
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
