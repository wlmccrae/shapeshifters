

// import { NavLink } from 'react-router-dom';
import ss_logo from "../imgs/logo_ss.png";

function Footer() {
    return (
        <>
        <footer>
            <div className="flex items-center justify-between flex-wrap bg-jet-stream-500 p-2" />
            <div className='"flex items-center flex-shrink-0 text-white mr-6"'>
                    <a href="/" alt="app-logo" />
                    <img src={ss_logo.png} alt="app-logo" height="75" width="140" />
            </div>

            <div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">ShapeShifters™</a>. All Rights Reserved.</span>
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
