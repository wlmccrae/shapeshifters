import ss_logo from "../ss_logo.png";
import linkedin from "../imgs/linkedin.png";
import gitlab from "../imgs/gitlab.png";


function Footer() {
    return (
        <footer className="flex justify-center items-center mt-auto px-4 py-4 bg-gray-100 dark:bg-gray-100">
            <div className="flex flex-row items-center">
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" alt="app-logo" className="hover:underline">ShapeShifters™. All Rights Reserved. Engineers listed below.</a>
                    <img src={ss_logo} alt="app-logo" height="75" width="140" className="justify-content-left" />
                </span>
                <div className="flex  justify-evenly items-center ml-8">
                    <div>
                        <div className="flex items-center">
                            <p>
                                <a href="/">
                                    <img src={linkedin} alt="linked in logo" height="75" width="140" />
                                </a>
                            </p>
                            <ul className="flex space-x-4 ml-4">
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
                        <div className="flex items-center">
                            <p>
                                <a href="/">
                                    <img src={gitlab} alt="gitlab logo" height="75" width="140" />
                                </a>
                            </p>
                            <ul className="flex space-x-4 ml-4">
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
            </div>
        </footer >
    );
}

export default Footer;
