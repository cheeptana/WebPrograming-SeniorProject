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
            <main className="gradient-bg min-h-screen flex items-center justify-center">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-6">
                    <div className="w-full md:w-1/2">
                        <div className="text-white mb-6">
                            <p className="text-sm">Home / <span className="font-bold">My Account</span></p>
                            <h1 className="text-4xl font-bold">My Account</h1>
                            <h2 className="text-2xl font-bold mt-4">Login</h2>
                            <p className="mt-2">Don't have account ? <a href="#" className="text-blue-600">Sign Up</a></p>
                        </div>
                        <div className="flex space-x-4 mb-6">
                            <button className="bg-white text-black py-2 px-4 rounded flex items-center">
                                <i className="fab fa-google mr-2"></i> Google
                            </button>
                            <button className="bg-white text-black py-2 px-4 rounded flex items-center">
                                <i className="fab fa-facebook-f mr-2"></i> Facebook
                            </button>
                        </div>
                        <form>
                            <div className="mb-4">
                                <label className="block text-white mb-2">Email</label>
                                <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded border" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white mb-2">Password</label>
                                <div className="relative">
                                    <input type="password" placeholder="Password" className="w-full px-4 py-2 rounded border" />
                                    <i className="fas fa-eye absolute right-3 top-3 text-gray-600"></i>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-6">
                                <label className="flex items-center text-white">
                                    <input type="checkbox" className="mr-2" /> Remember Me
                                </label>
                                <a href="#" className="text-white">Forget Password ?</a>
                            </div>
                            <button className="bg-white text-black py-2 px-4 rounded w-full">Login</button>
                        </form>
                    </div>
                    <div className="w-full md:w-1/2 mt-6 md:mt-0">
                        <img src="https://placehold.co/500x300" alt="Exciting Macaron Box" className="rounded shadow-lg" />
                    </div>
                </div>
            </main>
            <footer>
                <Tfooter />
            </footer>
        </body>
    )
}