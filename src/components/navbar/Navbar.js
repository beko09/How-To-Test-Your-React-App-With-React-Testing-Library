import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
    return <div className="bg-gray-800 px-[40px]">
        <div className="flex flex-row items-center  justify-between py-6  w-full">
            <h1 className="text-white">{title}</h1>
            <nav className="flex flex-row justify-between gap-4">
                <Link className="text-white hover:text-teal-100" to="/">Home</Link>
                <Link className="text-white hover:text-teal-100" to="/about">About</Link>
            </nav>
        </div >
    </div >;
};

export default Navbar;
