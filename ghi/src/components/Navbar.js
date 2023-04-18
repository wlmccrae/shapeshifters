import React from 'react';
import ss_logo from '../ss_logo.png';
import { useGetAccountQuery } from '../services/auth';


function NavBar() {
    const { data: account } = useGetAccountQuery()

    const loggedIn = () => (
      <div class="w-full px-4 block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold mr-4"
          >
            Your Events
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold mr-4"
          >
            Create Event
          </a>
        </div>
        <div className="flex space-x-4">
          <div>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-morning-glory-800 hover:bg-white mt-4 lg:mt-0"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    );

    const notLoggedIn = () => (
        <div className='flex space-x-4'>
            <div>
              <a
                href="#"
                class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-morning-glory-800 hover:bg-slate mt-4 lg:mt-0"
              >
                Sign Up
              </a>
            </div>
            <div>
              <a
                href="#"
                class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-morning-glory-800 hover:bg-white mt-4 lg:mt-0"
              >
                Login
              </a>
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
    </>
  );
}

export default NavBar;