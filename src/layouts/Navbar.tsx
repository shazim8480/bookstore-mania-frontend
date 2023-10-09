import { auth } from "@/lib/firebase";
import { setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    console.log("Logout");
    signOut(auth).then(() => {
      // Sign-out done.
      dispatch(setUser(null));
    });
  };

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

          {!user?.email && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </>
          )}
          {user.email && <button onClick={handleLogout}>Logout</button>}
        </ul>
      </div>
    </div>
  );
}
