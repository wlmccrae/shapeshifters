import { useLogoutMutation } from "../services/auth";

const Logout = () => {
    const [logout] = useLogoutMutation();
    return (
        <button
            className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600"
            onClick={logout}
        >
            Logout
        </button>
    );
}

export default Logout;