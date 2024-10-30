import { useState, useEffect } from 'react';
import { useNavigate } from '@remix-run/react';


export default function LoginPage() {
    const navigate = useNavigate();

    const handleLogin = async (e: { preventDefault: () => void; target: any; }) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const fromJson = Object.fromEntries(formData.entries());

        //--Past 1
        try {
            const response = await fetch('http://localhost:3000/api/accountLogin',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(fromJson),
                });

            if (response.ok) {
                const data = await response.json();
                if (data.islogin === true) {
                    alert('Login Successfull');
                    localStorage.setItem('isLoggedIn','true');
                    localStorage.setItem('userId', data.uid);
                    switch (data.role) {
                        case 'admin':
                            navigate('/Admin/Home');
                            break;
                        case 'staff':
                            navigate('/Staff/Home');
                            break;
                        case 'user':
                            navigate('/User/Home');
                            break;
                        default:
                            navigate('/');
                    }
                } else {
                    alert(`Login Failed`);
                }

            } else {
                alert('Invalid Credentials, try again');
                localStorage.setItem('isLoggedIn','false');
            }
        } catch (error) {
            console.error(`[ERR] ${error}`);
        }
    }

    return (
        <body className="bg-gradient-to-r from-pink-500 to-orange-400">
            <main className="flex-grow bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://placehold.co/1200x800')" }}>
                <div className="bg-pink-500 bg-opacity-50 py-16 h-screen">
                    <div className="container mx-auto text-white">
                        <div className="mb-4">
                            <p className="text-sm">Home / <span className="font-bold">My Account</span></p>
                            <h1 className="text-4xl font-bold">My Account</h1>
                            <h2 className="text-2xl font-bold mt-4">Login</h2>
                            <p className="mt-2">Don't have account ? <a href="./signUp" className="text-blue-600">Sign Up</a></p>
                        </div>
                        <form className='text-black' method='POST' onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label className="block text-white mb-2">Email</label>
                                <input type="email" autoFocus name='userEmail' placeholder="Email"
                                    className="w-full px-4 py-2 rounded border" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white mb-2">Password</label>
                                <div className="relative">
                                    <input type="password" name='userPasswd' placeholder="password"
                                        className="w-full px-4 py-2 rounded border" required />
                                    <i className="fas fa-eye absolute right-3 top-3 text-gray-600"></i>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-6">
                                <a href="#" className="text-white">Forget Password ?</a>
                            </div>
                            <button type='submit' className="bg-white text-black py-2 px-4 rounded w-full">Login</button>
                        </form>
                    </div>
                </div>
            </main>
            <footer>
            </footer>
        </body>
    )
}