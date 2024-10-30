import { useState, useEffect, useMemo } from "react";
import Theader from './temp/theader';
import Tfooter from './temp/tfooter';

export default function ShopPage() {
    const [loadstatus, setLoadStatus] = useState(true);
    const [productData, setProductData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 2000]);

    useEffect(() => {
        if (loadstatus) {
            const fetchData = async () => {
                try {
                    const res = await fetch('http://localhost:3000/api/getProduct');
                    if (!res.ok) throw new Error('ไม่สามารถอ่านข้อมูลได้');
                    const productJson = await res.json();
                    setProductData(productJson);
                    setFilteredData(productJson);
                } catch (error) {
                    alert(error.message);
                }
            }
            fetchData();
            setLoadStatus(false);
        }
    }, [loadstatus]);

    const filteredProducts = useMemo(() => {
        let filtered = productData;

        if (searchTerm) {
            filtered = filtered.filter(item =>
                item.productname.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategories.length > 0) {
            filtered = filtered.filter(item =>
                selectedCategories.includes(item.productcategory)
            );
        }

        filtered = filtered.filter(item =>
            item.productprice >= priceRange[0] && item.productprice <= priceRange[1]
        );

        return filtered;
    }, [searchTerm, selectedCategories, priceRange, productData]);

    useEffect(() => {
        setFilteredData(filteredProducts);
    }, [filteredProducts]);

    return (
        <>
            <Theader />
            <main className="bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h1 className="text-2xl font-bold mb-4">Shop</h1>
                        <div className="flex">
                            <aside className="w-1/4 p-4 bg-white rounded shadow">
                                <h2 className="text-xl font-bold mb-4">Filter</h2>
                                <div className="mb-4">
                                    <h3 className="font-bold mb-2">ชื่อสินค้า</h3>
                                    <input
                                        type="text"
                                        placeholder="ค้นหาสินค้า..."
                                        className="border border-gray-300 p-2 rounded w-full"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-bold mb-2">ประเภท</h3>
                                    <div className="space-y-2">
                                        {['ของเล่นตัวละคร', 'ของเล่นสร้างสรรค์', 'ของเล่นการศึกษา'].map((category) => (
                                            <label key={category} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="mr-2"
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setSelectedCategories(prev => [...prev, category]);
                                                        } else {
                                                            setSelectedCategories(prev => prev.filter(c => c !== category));
                                                        }
                                                    }}
                                                />
                                                <span>{category}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-bold mb-2">ราคา</h3>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="range"
                                            min="0"
                                            max="2000"
                                            className="w-full"
                                            value={priceRange[0]}
                                            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                                        />
                                        <span>${priceRange[0]} - ${priceRange[1]}</span>
                                    </div>
                                </div>
                            </aside>
                            <section className="w-3/4 p-4">
                                <div className="grid grid-cols-5 gap-4">
                                    {filteredData.map((product) => (
                                        <div key={product} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                                            <a href={`./Product/${product.productSKU}`}>
                                                <img className="w-full h-48 object-cover rounded-t-lg" src={product.productimg} alt={product.productname} />
                                                <div className="p-5">
                                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                                                        {product.productname}
                                                    </h5>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-yellow-500 font-semibold">Stock: {product.productstok}</span>
                                                        <span className="w-10 bg-green-100 text-green-800 text-xs font-semibold p-1 rounded">{product.productprice}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center mt-4">
                                    <button className="bg-yellow-500 text-white px-4 py-2 rounded">Load More</button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Tfooter />

        </>
    )
}