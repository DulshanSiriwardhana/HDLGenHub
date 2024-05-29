import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "react-feather";
import { User } from "react-feather";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import background from '../images/background.png'

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      //alert(parsedUser);
    }
  }, []);
  
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Handle sign-in logic, e.g., navigate to the login page
    navigate("/login");
  };
  const handleEdit = () => {
    navigate("/edituser");
  };
  const handleSignUp = () => {
    // Handle sign-up logic, e.g., navigate to the registration page
    navigate("/registration");
  };
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.info("You have been logged out successfully.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 2000);
  };

  if (user) {
    if (user.role === "student") {
      return (
        <header>
          <nav class="bg-white border-gray-100 fixed w-full z-20 border-b shadow-sm top-0 start-0">
            <div class="flex justify-between items-center p-2">
              <div class="flex font-semibold m-2 gap-2">
                <li class="block flex-initial text-gray-900 rounded hover:text-amber-700 md:mx-5">
                  <Link to="/">
                    <span style={{ color: "orange" }}>HDL </span> Gen Hub
                  </Link>
                </li>
                <div class="md:border-transparent border-r-2 border-gray-300 h-5"></div>

                <li class="block text-gray-900 rounded hover:text-black hover:scale-105 mx-5">
                  <Link to="/learn">Learn</Link>
                </li>
                <li class="block text-gray-900 rounded hover:text-black hover:scale-105 mx-5">
                  <Link to="/about">About</Link>
                </li>
                <li class="block text-gray-900 rounded hover:text-black hover:scale-105 mx-5">
                  <Link to="/help">Help</Link>
                </li>
              </div>

              <div class="flex sm:order-2 md:gap-5 gap-2 md:mr-5 items-center">
                <button
                  type="button"
                  data-collapse-toggle="navbar-search"
                  aria-controls="navbar-search"
                  aria-expanded="false"
                  class="sm:hidden text-gray-500 hover:bg-gray-10 rounded-lg text-sm p-2.5 me-1"
                >
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span class="sr-only">Search icon</span>
                </button>

                <div class="relative hidden sm:block">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span class="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    class="block w-full h-8 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
                    placeholder="Search..."
                  />
                </div>
                <div class="flex md:order-2 space-x-2 md:space-x-5 rtl:space-x-reverse">
                  <button
                    onClick={handleEdit}
                    type="button"
                    class="w-12 h-8 md:w-12 md:h-9 text-white bg-amber-500 hover:bg-amber-600 text-xs md:font-medium rounded-full md:text-sm px-2 text-center"
                  >
                    <User></User>
                  </button>
                  <button
                    onClick={handleLogOut}
                    type="button"
                    class="w-12 h-8 md:w-12 md:h-9 text-white bg-red-500 hover:bg-amber-600 text-xs md:font-medium rounded-3xl md:text-sm px-2 text-center"
                  >
                    <LogOut></LogOut>
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <ToastContainer />
        </header>
      );
    } else if (user.role === "teacher") {
      return (
        <header>
          <nav class="bg-white border-gray-100 fixed w-full z-20 border-b shadow-sm top-0 start-0">
            <div class="flex justify-between items-center p-2">
              <div class="flex font-semibold m-2 gap-2">
                <li class="block flex-initial text-gray-900 rounded hover:text-amber-700 md:mx-5">
                  <Link to="/">
                    <span style={{ color: "orange" }}>HDL </span> Gen Hub
                  </Link>
                </li>
                <div class="md:border-transparent border-r-2 border-gray-300 h-5"></div>

                <li class="block text-gray-900 rounded hover:text-black hover:scale-105 mx-5">
                  <Link to="/courses">Courses</Link>
                </li>
                <li class="block text-gray-900 rounded hover:text-black hover:scale-105 mx-5">
                  <Link to="/about">About</Link>
                </li>
                <li class="block text-gray-900 rounded hover:text-black hover:scale-105 mx-5">
                  <Link to="/help">Help</Link>
                </li>
              </div>

              <div class="flex sm:order-2 md:gap-5 gap-2 md:mr-5 items-center">
                <button
                  type="button"
                  data-collapse-toggle="navbar-search"
                  aria-controls="navbar-search"
                  aria-expanded="false"
                  class="sm:hidden text-gray-500 hover:bg-gray-10 rounded-lg text-sm p-2.5 me-1"
                >
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span class="sr-only">Search icon</span>
                </button>

                <div class="relative hidden sm:block">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span class="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    class="block w-full h-8 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
                    placeholder="Search..."
                  />
                </div>
                <div class="flex md:order-2 space-x-2 md:space-x-5 rtl:space-x-reverse">
                  <button
                    onClick={handleEdit}
                    type="button"
                    class="w-16 h-8 md:w-20 md:h-9 text-white bg-amber-500 hover:bg-amber-600 text-xs md:font-medium rounded-full md:text-sm px-2 text-center"
                  >
                    <User></User>
                  </button>
                  <button
                    onClick={handleLogOut}
                    type="button"
                    class="w-12 h-8 md:w-12 md:h-9 text-white bg-red-500 hover:bg-amber-600 text-xs md:font-medium rounded-3xl md:text-sm px-2 text-center"
                  >
                    <LogOut></LogOut>
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <ToastContainer />
        </header>
      );
    } else if (user.role === "admin") {
      return (
        <header>
          <nav class="bg-white border-gray-100 fixed w-full z-20 border-b shadow-sm top-0 start-0">
            <div class="flex justify-between items-center p-2">
              <div class="flex font-semibold m-2 gap-2">
                <li class="block flex-initial text-gray-900 rounded hover:text-amber-700 md:mx-5">
                  <Link to="/">
                    <span style={{ color: "orange" }}>HDL </span> Gen Hub
                  </Link>
                </li>
                <div class="md:border-transparent border-r-2 border-gray-300 h-5"></div>
                <li class="block text-gray-900 rounded hover:text-black hover:scale-105 ml-2">
                  <Link to="/setting">Settings</Link>
                </li>
              </div>
              <div class="flex sm:order-2 md:gap-5 gap-2 md:mr-5 items-center">
                <button
                  type="button"
                  data-collapse-toggle="navbar-search"
                  aria-controls="navbar-search"
                  aria-expanded="false"
                  class="sm:hidden text-gray-500 hover:bg-gray-10 rounded-lg text-sm p-2.5 me-1"
                >
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span class="sr-only">Search icon</span>
                </button>
                <div class="relative hidden sm:block">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span class="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    class="block w-full h-8 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
                    placeholder="Search..."
                  />
                </div>
                <div class="">
                  <button
                    onClick={handleLogOut}
                    type="button"
                    class="w-12 h-8 md:w-12 md:h-9 text-white bg-red-500 hover:bg-amber-600 text-xs md:font-medium rounded-3xl md:text-sm px-2 text-center"
                  >
                    <LogOut></LogOut>
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <ToastContainer />
        </header>
      );
    }
  }

    return (
      <header>
      <nav class="bg-white border-gray-100 fixed w-full z-20 border-b shadow-sm top-0 start-0">
        <div class="flex justify-between items-center p-2">
          <div class="flex font-semibold m-2 gap-2">
            <li class="block flex-initial text-gray-900 rounded hover:text-amber-700 md:mx-5">
              <Link to="/">
                <span style={{ color: "orange" }}>HDL </span> Gen Hub
              </Link>
            </li>
            <div class="md:border-transparent border-r-2 border-gray-300 h-5"></div>
            <li class="block text-gray-900 rounded hover:text-black hover:scale-105 ml-2">
              <Link to="/about">About</Link>
            </li>
            <li class="block text-gray-900 rounded hover:text-black hover:scale-105 md:mx-10 mx-5">
              <Link to="/help">Help</Link>
            </li>
          </div>

          <div class="flex sm:order-2 md:gap-5 gap-2 md:mr-5 items-center">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              class="sm:hidden text-gray-500 hover:bg-gray-10 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search icon</span>
            </button>

            <div class="relative hidden sm:block">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full h-8 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
                placeholder="Search..."
              />
            </div>
            <div class="flex md:order-2 space-x-2 md:space-x-5 rtl:space-x-reverse">
              <button
                onClick={handleSignIn}
                type="button"
                class="w-16 h-8 md:w-20 md:h-9 text-white bg-amber-500 hover:bg-amber-600 text-xs md:font-medium rounded-full md:text-sm px-2 text-center"
              >
                Sign In
              </button>
              <button
                onClick={handleSignUp}
                type="button"
                class="w-16 h-8 md:w-20 md:h-9 text-amber-500 bg-gray-300 hover:bg-amber-600 hover:text-white text-xs md:font-medium rounded-3xl md:text-sm px-2 text-center"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      <ToastContainer />
      </header>
    );
  }

export default Navbar;