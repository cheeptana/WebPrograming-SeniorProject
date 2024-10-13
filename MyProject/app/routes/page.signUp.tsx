import { useNavigate } from "@remix-run/react";
import { useState } from "react";

export default function ShopPage() {
    const navigate = useNavigate();

    const handleSubmit = async (e: { preventDefault: () => void; target: any; }) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        const resSignUp = await fetch(
            'http://localhost:3000/api/addSignUp',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formJson),
            }
        );

        try {
            if (resSignUp.ok) {
                const data = await resSignUp.json();
                alert(`${data.message}`);
                navigate('/');
            } else {
                const data = await resSignUp.json();
                alert(`${data.message}`);
                alert('[ERR] Failed to update the form.');
            }
        } catch (error) {
            alert('[ERR] An error occurred while updatting the form.');
        }
    }
    return (
        <body className="bg-gradient-to-r from-pink-500 to-orange-400">
            <main className="flex-grow bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://placehold.co/1200x800')" }}>
                <div className="bg-pink-500 bg-opacity-50 py-16 h-screen">
                    <div className="container mx-auto text-white">
                        <div className="mb-4">
                            <a href="#" className="text-white">Home</a> / <a href="#" className="text-white">My Account</a>
                        </div>
                        <h1 className="text-4xl font-bold mb-4">My Account</h1>
                        <h2 className="text-2xl mb-6">Sign Up</h2>
                        <p className="mb-6">You have account? <a href="./signIn" className="text-blue-300">Login</a></p>
                        <form className="space-y-4 text-black" method="POST"  onSubmit={handleSubmit}>
                            <div className="flex space-x-4">
                                <input type="text" name="fname" placeholder="First Name" className="w-1/2 px-4 py-2 rounded border" />
                                <input type="text" name="lname" placeholder="Last Name" className="w-1/2 px-4 py-2 rounded border" />
                            </div>
                            <input type="email" name="email" placeholder="Email" className="w-full px-4 py-2 rounded border" />
                            <div className="relative">
                                <input type="password" name="password" placeholder="Password" className="w-full px-4 py-2 rounded border" />
                                <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Sign Up</button>
                        </form>
                    </div>
                </div>
            </main>
            <footer></footer>
        </body>
    )
}