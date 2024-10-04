import { useState, useEffect } from "react";
import Theader from './temp/theader';
import Tfooter from './temp/tfooter';

export default function ShopPage() {
    const [loadstatus, setLoadStatus] = useState(true);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        if (loadstatus == true) {
            try {
                const fetchData = async () => {
                    const book = await fetch(
                        'http://localhost:3000/api/getData'
                    );
                    if (book.ok) {
                        const productJson = await book.json();
                        setProductData(productJson);
                    } else {
                        alert('error ไม่สามารถอ่านข้อมูลได้');
                    }
                }
                fetchData().catch(console.error);
                setLoadStatus(false)
                console.log('fetch data');
            } catch (error) {
                alert('error อ่านข้อมูลผิดพลาด');
            }
        }
    }, [loadstatus]);

    return (
        <>
            <Theader />
            <main className="bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h1 className="text-2xl font-bold mb-4">Shop</h1>
                        <div className="flex space-x-4 mb-4">
                            <img src="https://placehold.co/50x50" alt="Filter 1" className="rounded-full" />
                            <img src="https://placehold.co/50x50" alt="Filter 2" className="rounded-full" />
                            <img src="https://placehold.co/50x50" alt="Filter 3" className="rounded-full" />
                            <img src="https://placehold.co/50x50" alt="Filter 4" className="rounded-full" />
                        </div>
                        <div className="flex">
                            <aside className="w-1/4 p-4 bg-white rounded shadow">
                                <h2 className="text-xl font-bold mb-4">Filter</h2>
                                <div className="mb-4">
                                    <h3 className="font-bold mb-2">Other Products</h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2" />
                                            <span>Product 1</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2" />
                                            <span>Product 2</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2" />
                                            <span>Product 3</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-bold mb-2">Price</h3>
                                    <div className="flex items-center space-x-2">
                                        <input type="range" min="0" max="100" className="w-full" />
                                        <span>$0 - $100</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-bold mb-2">Color</h3>
                                    <div className="flex space-x-2">
                                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                                        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                                        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-bold mb-2">Size</h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2" />
                                            <span>Small</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2" />
                                            <span>Medium</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2" />
                                            <span>Large</span>
                                        </label>
                                    </div>
                                </div>
                            </aside>
                            <section className="w-3/4 p-4">
                                <div className="grid grid-cols-4 gap-4">
                                    {productData.map((item, index) =>
                                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                                            <img src={item.image} alt={item.id} className="rounded-lg mx-auto my-auto" />
                                            <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                                            <p className="text-gray-700 mb-2">{item.description}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-yellow-500"><i className="fas fa-star"></i>{item.rating}</span>
                                                <span className="text-gray-700">{item.price}</span>
                                            </div>
                                        </div>
                                    )
                                    }
                                </div>
                                <div className="text-center mt-4">
                                    <button className="bg-yellow-500 text-white px-4 py-2 rounded">Load More</button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Tfooter/>

        </>
    )
}