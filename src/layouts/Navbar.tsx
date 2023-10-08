import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">All Books</Link>
          </li>
          <li>
            <Link to="/add-book">Add New</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
