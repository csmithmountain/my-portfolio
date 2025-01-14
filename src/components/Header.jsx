import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <ul>
                <li><Link>About me</Link></li>
                <li>Art Portfolio</li>
                <li>Code Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Header