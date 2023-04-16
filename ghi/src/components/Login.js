import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleEmailChange, handlePasswordChange, reset } from "../features/auth/loginSlice";
import { useLoginMutation } from "../services/auth";

const Login = () => {
    const dispatch = useDispatch()
    const [login] = useLoginMutation()
    const { fields } = useSelector(state => state.login)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit');
        console.log({fields});
        // const { email, password } = fields;
        console.trace(login({fields}));
        console.trace(dispatch(reset()));
    }

    return (

      // <div className="relative flex min-h-screen text-gray-800 lex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="mt-4 bg-white shadow-md rounded-lg">
          <div className="h-2 bg-morning-glory-500 rounded-t-md"></div>
          <h2 className="text-2xl text-white bg-morning-glory-500 pb-3">
            Login to your account
          </h2>
          {/* <div className="h-2 bg-morning-glory-500"></div> */}
          <form onSubmit={handleSubmit}>
            <div className="px-8 py-6">
              <label className="block font-light semibold float-left">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                value={fields.username}
                onChange={(e) => dispatch(handleEmailChange(e.target.value))}
              ></input>
              <label className="block mt-3 font-light semibold float-left ">
                Password
              </label>
              <input
                type="password"
                placeholder="password"
                className="border font-light w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                value={fields.password}
                onChange={(e) => dispatch(handlePasswordChange(e.target.value))}
              ></input>
              <div className="flex justify-between items-baseline">
                <button
                  type="submit"
                  className="mt-4 bg-morning-glory-500 text-white py-2 px-6 rounded-md hover:bg-morning-glory-600"
                >
                  Login
                </button>
                {/* <a href="#" className="text-sm hover:underline">Signup here</a> */}
              </div>
            </div>
          </form>
        </div>
      </div>
      // </div>
    );
}

export default Login;