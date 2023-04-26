

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
                                <li>
                                    <a
                                        href="www.linkedin.com/in/emily-arai/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Emily
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/wmccrae/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Lotus
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/victoriapratt/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Victoria
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/kane-rodriguez/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Kane
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/kane-michael/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Michael
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p>Gitlab</p>
                            <ul>
                                <li>
                                    <a
                                        href="https://gitlab.com/emi.rai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Emily
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://gitlab.com/wmccrae"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Lotus
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://gitlab.com/victoriagfpratt"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Victoria
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://gitlab.com/kanearo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Kane
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://gitlab.com/512kma"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Michael
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
