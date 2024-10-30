import { useEffect, useState } from "react";
import { useNavigate, Link } from "@remix-run/react";

export default function Theader() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<string | null>(null);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userId');
        setIsLoggedIn(null);
        navigate(`/`);
    }

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');

        setIsLoggedIn(loggedInStatus);
    }, []);

    return (
        <header className="bg-gray shadow-md">
                <div className="flex items-center space-x-3 justify-between bg-white p-2 shadow-md">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                    <div className="flex items-center">
                        <img src="https://placehold.co/40x40" alt="Company Logo" className="w-10 h-10" />
                        <span className="ml-2 font-bold text-lg">CBF_Toy</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="text-gray-600">Home</Link>
                        <Link to="/User/Shop" className="text-gray-600">Shop</Link>
                        <Link to="/User/About" className="text-gray-600">About Us</Link>
                        <Link to="/User/Contact" className="text-gray-600">Contact</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        {isLoggedIn ? (<>
                            <div className="relative">
                            <i className="fas fa-shopping-cart text-gray-600"></i>
                        </div>
                        <i className="fas fa-heart text-gray-600"></i>
                        <i className="fas fa-user text-gray-600"></i>
                        <div className="relative">
                            <input type="text" placeholder="Search" className="border rounded-full pl-4 pr-8 py-1" />
                            <i className="fas fa-search absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-600"></i>
                        </div>
                            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
                        </>
                        ) : (
                            <>
                                <Link to="/page/Login" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ">Login</Link>
                                <Link to="/page/signUp" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ">Register</Link>
                            </>
                        )}
                    </div>
            </div>
        </header>
    );
}