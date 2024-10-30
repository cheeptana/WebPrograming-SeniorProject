import Theader from "./temp/theader";
import Tfooter from "./temp/tfooter";

export default function ConPage() {
    return (
        <>
            <header>
                <Theader />
            </header>
            <body className="bg-gradient-to-r from-pink-500 to-orange-400">
                <div className="w-full max-w-4xl mx-auto p-8">
                    <nav className="text-black mb-8">
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:underline text-black">Home</a></li>
                            <li>/</li>
                            <li><a href="#" className="hover:underline text-black">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="text-white mb-8">
                        <h1 className="text-4xl font-bold text-white">Contact</h1>
                        <p className="text-white">สามารถติดต่อสอบถามเราได้ที่</p>
                    </div>
                    <div className="flex space-x-8 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                            <div className="flex items-center mb-4">
                                <i className="fas fa-map-marker-alt text-blue-500 text-2xl"></i>
                                <h2 className="ml-4 text-xl font-bold text-black">Location</h2>
                            </div>
                            <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                            <div className="flex items-center mb-4">
                                <i className="fas fa-phone-alt text-blue-500 text-2xl"></i>
                                <h2 className="ml-4 text-xl font-bold text-black">Contact</h2>
                            </div>
                            <p className="text-black">T-shirt123@gmail.com</p>
                            <p className="text-black">(021) 12345678</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                        <h2 className="text-2xl font-bold text-center mb-8 text-black">Send a Message</h2>
                        <form className="space-y-4">
                            <div className="flex space-x-4">
                                <input type="text" placeholder="First Name" className="w-1/2 p-4 border border-gray-300 rounded-lg" />
                                <input type="text" placeholder="Last Name" className="w-1/2 p-4 border border-gray-300 rounded-lg" />
                            </div>
                            <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-lg" />
                            <textarea placeholder="Description" className="w-full p-4 border border-gray-300 rounded-lg h-32"></textarea>
                            <div className="text-center">
                                <button type="submit" className="bg-gradient-to-r from-pink-500 to-yellow-500 text-black py-2 px-8 rounded-lg shadow-lg">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </body>
            <footer>
                <Tfooter />
            </footer>

        </>
    );
}