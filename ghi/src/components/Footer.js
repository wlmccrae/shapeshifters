import ss_logo from "../ss_logo.png";
import linkedin from "../imgs/linkedin.png";
import gitlab from "../imgs/gitlab.png";


function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center mt-auto px-1 py-1 bg-jet-stream-500">
            <div className="flex flex-row items-center w-full justify-center">
                <span className="flex items-center text-sm text-gray-500 sm:text-center dark:text-gray-400 justify-center text-center">
                    <img src={ss_logo} alt="app-logo" height="75" width="140" className="mr-8" />
                    © 2023 ShapeShifters™. All Rights Reserved. Engineers listed below.
                </span>
            </div>
            <div className="flex justify-evenly items-center w-full">
                <div className="flex items-center">
                    <a
                        href="/" alt="app-logo" className="hover:underline">
                    </a>
                    <a href="/">
                        <img src={linkedin} alt="linked in logo" height="75" width="140" />
                    </a>
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
                    <a href="/">
                        <img src={gitlab} alt="gitlab logo" height="40" width="90" />
                    </a>
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
        </footer >
    );
}

export default Footer;
