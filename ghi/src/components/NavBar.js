import { NavLink } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import logo_ss from '../imgs/logo_ss.png'

function NavBar () {



    return (
      <nav
        className="bg-conch-200
         fixed w-full z-20 top-0 left-0 border-b border-gray-200"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            className="block py-2 pl-3 pr-4 text-white bg-gulf-stream-700 rounded md:bg-transparent md:text-morning-glory-500 md:p-0"
            to="/"
          >
            ShapeShifters
          </NavLink>
          {/* IMPORT IMG LOGO HERE */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white :
                     700"
            >
              <li>
                <NavLink
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-conch-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0>"
                  to=""
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-conch-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  to=""
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default NavBar;
