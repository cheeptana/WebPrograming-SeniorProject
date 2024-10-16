import { useEffect, useState } from "react";
import { useNavigate } from "@remix-run/react";

export default function Theader() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate(`/`);
    }

    useEffect(() => {
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            setIsLoggedIn(localStorage.getItem('isLoggedIn'));

        }
    }, [isLoggedIn]);

    return (
         isLoggedIn ?
            < header className="bg-white shadow-md" >
                <div className="bg-gray-100 p-2">
                    <div className="flex items-center justify-between bg-white p-2 shadow-md">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                        <div className="flex items-center">
                            <img src="https://placehold.co/40x40" alt="Company Logo" className="w-10 h-10" />
                            <span className="ml-2 font-bold text-lg">CBF_Toy</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="/" className="text-gray-600">Home</a>
                            <a href="/page/shop" className="text-gray-600">Shop</a>
                            <a href="/page/about" className="text-gray-600">About Us</a>
                            <a href="/page/contact" className="text-gray-600">Contact</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <i className="fas fa-shopping-cart text-gray-600"></i>
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">5</span>
                            </div>
                            <i className="fas fa-heart text-gray-600"></i>
                            <i className="fas fa-user text-gray-600"></i>
                            <div className="relative">
                                <input type="text" placeholder="Search" className="border rounded-full pl-4 pr-8 py-1" />
                                <i className="fas fa-search absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-600"></i>
                            </div>
                            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
                        </div>
                    </div>
                </div>
            </header > :
            < header className="bg-white shadow-md" >
                <div className="bg-gray-100 p-2">
                    <div className="flex items-center justify-between bg-white p-2 shadow-md">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                        <div className="flex items-center">
                            <img src="https://placehold.co/40x40" alt="Company Logo" className="w-10 h-10" />
                            <span className="ml-2 font-bold text-lg">CBF_Toy</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="/" className="text-gray-600">Home</a>
                            <a href="/page/shop" className="text-gray-600">Shop</a>
                            <a href="/page/about" className="text-gray-600">About Us</a>
                            <a href="/page/contact" className="text-gray-600">Contact</a>
                        </div>
                        <div>
                        <a href="/page/signIn" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-3 rounded">Login</a>
                        <a href="/page/signUp" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-3 rounded">Register</a>
                        </div>
                    </div>
                </div>
            </header>
    );
}