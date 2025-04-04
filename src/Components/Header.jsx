import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { loginSuccess, loginUser, logout } from "../redux/authSlice";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { users, token } = useSelector((state) => state.auth);

  const userName = users?.name || "Guest";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(userName);
  

  useEffect(() => {
      dispatch(loginUser());
    }, [dispatch]);

  function handleLogout() {
    dispatch(logout());
    setDropdownOpen(false);
    navigate("/login");
  }


  return (
    <header className="bg-blue-600 p-4 shadow-md flex justify-between items-center">
      {/* Project Name */}
      <h1 className="text-white text-xl font-bold">Project Dashboard</h1>

      {/* Profile & Dropdown */}
      <div className="relative">
        {/* Profile Image */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          
          <img
            src="https://i.pravatar.cc/40" 
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Logout
            </button>
            <button
              onClick={""}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Help
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
