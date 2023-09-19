import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-orange-400 text-white">
            <h2>Navbar</h2>
            <nav className="flex gap-6 text-sky-700">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
            </nav>
        </div>
    );
};

export default Header;