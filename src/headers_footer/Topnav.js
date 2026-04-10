import "./Topnav.css";
import { Navigate, useNavigate } from "react-router";

const Topnav = () => {

const navigate = useNavigate()

const NaviHome = () => {
navigate('/')
}


return (

<div>

<div className="topnav">
<div className="topnav-center">
<li onClick={NaviHome}><a>Home</a></li>
</div>
</div>

</div>

);
};

export default Topnav;