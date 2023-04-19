import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSignupMutation } from "../services/auth";
import {
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handleZipCodeChange,
    handlePasswordChange,
    handlePasswordConfirmationChange,
    error,
    reset,
} from "../features/auth/signupSlice"

const Signup = () => {
  const dispatch = useDispatch();
  const [signup] = useSignupMutation();
  const { fields } = useSelector((state) => state.signup);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( fields.password !== fields.password_confirmation) {
      dispatch(error("PASSWORDS DO NOT MATCH. TRY AGAIN!"))
      return;
    }
    signup({
      fields
    });
    dispatch(reset());
  };

  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="mt-4 bg-white shadow-md rounded-lg">
        <div className="h-2 bg-jet-stream-500 rounded-t-md"></div>
        <h2 className="text-2xl text-white bg-jet-stream-500 pb-3">Signup for an account</h2>
        <form onSubmit={handleSubmit}>
          <div className="px-8 py-6">
            <div className="flex justify-between items-baseline">
              <input
                type="text"
                placeholder="First Name"
                className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                value={fields.first_name}
                onChange={(e) =>
                  dispatch(handleFirstNameChange(e.target.value))
                }
              ></input>
              <input
                type="text"
                placeholder="Last Name"
                className="border w-full h-5 px-3 py-5 mt-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                value={fields.last_name}
                onChange={(e) => dispatch(handleLastNameChange(e.target.value))}
              ></input>
            </div>
            <input
              type="text"
              placeholder="Email"
              className="border w-full h-5 px-3 py-5 mt-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
              value={fields.email}
              onChange={(e) => dispatch(handleEmailChange(e.target.value))}
            ></input>
            <input
              type="text"
              placeholder="Zip Code"
              className="border w-full h-5 px-3 py-5 mt-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
              value={fields.zip_code}
              onChange={(e) => dispatch(handleZipCodeChange(e.target.value))}
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="border w-full h-5 px-3 py-5 mt-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
              value={fields.password}
              onChange={(e) => dispatch(handlePasswordChange(e.target.value))}
            ></input>
            <input
              type="password"
              placeholder="Password Confirmation"
              className="border w-full h-5 px-3 py-5 mt-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
              value={fields.password_confirmation}
              onChange={(e) =>
                dispatch(handlePasswordConfirmationChange(e.target.value))
              }
            ></input>
            <div className="flex justify-between items-baseline">
              <button
                type="submit"
                className="mt-4 bg-jet-stream-500 text-white py-2 px-6 rounded-md hover:bg-jet-stream-600"
              >
                Signup
              </button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
