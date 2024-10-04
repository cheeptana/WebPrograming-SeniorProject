import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import Theader from './temp/theader';
import Tfooter from './temp/tfooter';

export default function ShopPage() {
    return (
        <body className="bg-gradient-to-r from-pink-500 to-orange-400">
            <header>
                <Theader />
            </header>
            <main className="flex-grow bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1200x800')" }}>
                        <div className="bg-pink-500 bg-opacity-50 py-16">
                            <div className="container mx-auto text-white">
                                <div className="mb-4">
                                    <a href="#" className="text-white">Home</a> / <a href="#" className="text-white">My Account</a>
                                </div>
                                <h1 className="text-4xl font-bold mb-4">My Account</h1>
                                <h2 className="text-2xl mb-6">Sign Up</h2>
                                <p className="mb-6">You have account? <a href="#" className="text-blue-300">Login</a></p>
                                <div className="flex space-x-4 mb-6">
                                    <button className="bg-white text-black px-4 py-2 rounded flex items-center">
                                        <i className="fab fa-google mr-2"></i> Google
                                    </button>
                                    <button className="bg-white text-black px-4 py-2 rounded flex items-center">
                                        <i className="fab fa-facebook mr-2"></i> Facebook
                                    </button>
                                </div>
                                <form className="space-y-4">
                                    <div className="flex space-x-4">
                                        <input type="text" placeholder="First Name" className="w-1/2 px-4 py-2 rounded border"/>
                                        <input type="text" placeholder="Last Name" className="w-1/2 px-4 py-2 rounded border"/>
                                    </div>
                                    <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded border"/>
                                    <div className="relative">
                                        <input type="password" placeholder="Password" className="w-full px-4 py-2 rounded border"/>
                                        <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
                                    </div>
                                    <div className="relative">
                                        <input type="password" placeholder="Enter keyword again" className="w-full px-4 py-2 rounded border"/>
                                        <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" className="mr-2"/>
                                        <span>Remember Me</span>
                                    </div>
                                    <button className="bg-blue-500 text-white px-6 py-2 rounded">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </main>
            <footer>
                <Tfooter />
            </footer>
        </body>
    )
}