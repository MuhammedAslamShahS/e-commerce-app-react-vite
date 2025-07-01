import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
                <h1>Dev-shop</h1>
            </Link>
            <Link to="/logout">
                <button className="logout-button">Log Out</button>
            </Link>
        </header>
    );
};

export default Header;
