

// import { NavLink } from 'react-router-dom';
import ss_logo from "../imgs/logo_ss.png";

function Footer() {
    return (
        <>
            <footer>
                <div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" alt="app-logo" className="hover:underline">ShapeShifters™. All Rights Reserved.</a>
                        <img src={ss_logo.png} alt="app-logo" height="75" width="140" />
                    </span>
                    <div>
                        <div>
                            <p>Linked In</p>
                            <ul>
                                <li>Emily</li>
                                <li>Victoria</li>
                                <li>Lotus</li>
                                <li>Kane</li>
                                <li>Michael</li>
                            </ul>
                        </div>
                        <div>
                            <p>Gitlab</p>
                            <ul>
                                <li>Emily</li>
                                <li>Victoria</li>
                                <li>Lotus</li>
                                <li>Kane</li>
                                <li>Michael</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
