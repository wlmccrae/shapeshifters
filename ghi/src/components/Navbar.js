import React from 'react';
import ss_logo from '../ss_logo.png';
import { useGetAccountQuery } from '../services/auth';
import { useDispatch, useSelector } from "react-redux";
import { showSignupModal, hideSignupModal } from '../features/auth/signupSlice';
import { showLoginModal, hideLoginModal } from '../features/auth/loginSlice';
import { useLogoutMutation } from '../services/auth';
import Modal from './Modal';
import Signup from './Signup';
import Login from './Login';

function NavBar() {
    const dispatch = useDispatch();
    const { data: account } = useGetAccountQuery()
    const { signupModal } = useSelector((state) => state.signup);
    const { loginModal } = useSelector((state) => state.login);
    const [logout] = useLogoutMutation();


    const loggedIn = () => (
      <div class="w-full px-4 block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-gun-powder-600 hover:font-bold mr-4"
          >
            Your Events
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-gun-powder-600 hover:font-bold mr-4"
          >
            Create Event
          </a>
        </div>
        <div className="flex space-x-4">
          <div>
            <button
              type="submit"
              onClick={logout}
              class="inline-block text-sm px-4 py-2 leading-none border rounded bg-jet-stream-600 text-gun-powder-600 border-jet-stream-600 hover:border-transparent hover:text-gun-powder-800 hover:bg-jet-stream-300 mt-4 lg:mt-0"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );

    const notLoggedIn = () => (
      <div className="flex space-x-4">
        <div>
          <button
            type="submit"
            onClick={() => dispatch(showSignupModal())}
            class="inline-block text-sm px-4 py-2 leading-none border rounded bg-jet-stream-600 border-jet-stream-600 text-gun-powder-600 hover:border-transparent hover:text-gun-powder-800 hover:bg-jet-stream-300 mt-4 lg:mt-0"
          >
            Sign Up
          </button>
        </div>
        <div>
          <button
            type="submit"
            onClick={() => dispatch(showLoginModal())}
            class="inline-block text-sm px-4 py-2 leading-none border rounded bg-jet-stream-600 text-gun-powder-600 border-jet-stream-600 hover:border-transparent hover:text-gun-powder-800 hover:bg-jet-stream-300 mt-4 lg:mt-0"
          >
            Login
          </button>
        </div>
      </div>
    );

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-jet-stream-500 p-2">
        <div className='"flex items-center flex-shrink-0 text-white mr-6"'>
          <img src={ss_logo} height="54" width="128" />
        </div>
        {account ? loggedIn() : notLoggedIn()}
      </nav>
      <div className="max-w-3xl mx-auto">
        <div className="text-center py-3">
          <Modal
            visible={signupModal}
            onClose={() => dispatch(hideSignupModal())}
            component={<Signup />}
          />
          <Modal
            visible={loginModal}
            onClose={() => dispatch(hideLoginModal())}
            component={<Login />}
          />
        </div>
      </div>
    </>
  );
}

export default NavBar;