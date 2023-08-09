import contact from '../utils/contact-us.png';
import bar from '../utils/map.png';
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="flex border-r-2">
            <div className="flex pt-16 flex-col h-screen p-3 bg-white shadow w-80">
                <div className="space-y-3">
                   
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm mt-12 mb-6 text-xl mt-12 mb-12 text-cyan-800 border hover:border-cyan-900 border-white">
                                <Link
                                    to="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <img className='w-10' alt="contacts" src={contact} />
                                    <span>Contacts</span>
                                </Link>
                            </li>
                            <li className="rounded-sm text-xl mt-12 mb-12 text-cyan-800 border hover:border-cyan-900 border-white  ">
                                <Link
                                    to="/dashboard"
                                    className="flex items-center p-2 space-x-3 rounded-md">
                                    <img className='w-10' src={bar} alt="graph" />
                                    <span>Charts And Maps</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}