import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleEmailChange, handlePasswordChange, reset, hideLoginModal } from "../features/auth/loginSlice";
import { useLoginMutation } from "../services/auth";
import Modal from "./Modal";

const Login = () => {
    const dispatch = useDispatch()
    const [login, { isError }] = useLoginMutation()
    const { fields, loginModal } = useSelector(state => state.login)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login({fields});
        if (!result.error) {
            dispatch(reset());
        }
    }

    return (
      <Modal
      visible={loginModal}
      onClose={() => dispatch(hideLoginModal())}
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="mt-4 bg-white shadow-md rounded-lg">
            <div className="h-2 bg-jet-stream-500 rounded-t-md"></div>
            <h2 className="text-2xl text-white bg-jet-stream-500 pb-3">
              Login to your account
            </h2>
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
                  onChange={(e) =>
                    dispatch(handlePasswordChange(e.target.value))
                  }
                ></input>
                {isError && (
                  <p className="mt-3 text-red-600 text-sm">
                    Invalid email or password. Please try again.
                  </p>
                )}
                <div className="flex justify-between items-baseline">
                  <button
                    type="submit"
                    className="mt-4 bg-jet-stream-500 text-white py-2 px-6 rounded-md hover:bg-jet-stream-600"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    );
}

export default Login;