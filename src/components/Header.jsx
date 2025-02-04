import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div>
                <h1>C. Smithmountain</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/code-portfolio">Code Portfolio</Link></li>
                        <li><Link to="/art-portfolio">Art Portfolio</Link></li>
                        <li><Link to="/about-me">About Me</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header