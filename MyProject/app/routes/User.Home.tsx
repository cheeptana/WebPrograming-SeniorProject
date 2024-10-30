import { useState, useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import Theader from './temp/theader';
import Tfooter from './temp/tfooter';

export default function HomePage() {
  const navigate = useNavigate();
  const [loadstatus, setLoadStatus] = useState(true);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    if (loadstatus == true) {
      try {
        const fetchData = async () => {
          const book = await fetch(
            'http://localhost:3000/api/getProduct'
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
    <body>
      <header>
        <Theader />
      </header>
      <main>
        <section className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Get random fun for what you want</h1>
          <p className="mb-8">สนุกกับการสุ่มของเล่นที่คุณต้องการ</p>
          <button className="bg-white text-pink-500 font-bold py-2 px-4 rounded">Shop Now</button>
          <div className="mt-8 flex justify-center space-x-4">
            <img src="../img/home_header1.png" width={200} height={200} alt="Toy 1" className="rounded-lg" />
            <img src="../img/home_header2.png" width={200} height={200} alt="Toy 2" className="rounded-lg" />
            <img src="../img/home_header3.png" width={200} height={200} alt="Toy 3" className="rounded-lg" />
          </div>
        </section>
        <section className="bg-white py-8">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Choose Your Category</h2>
            <p className="text-gray-700 mb-8">CBF Arttoy</p>
            <div className="flex justify-center space-x-4">
              <img src="../img/home_catagory1.jpg" width={200} height={200} alt="Category 1" className="rounded-lg " />
              <img src="../img/home_catagory2.jpg" width={200} height={200} alt="Category 2" className="rounded-lg" />
              <img src="../img/home_catagory3.jpg" width={200} height={200} alt="Category 3" className="rounded-lg" />
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-8">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Our Best Seller Product</h2>
            <div className="grid grid-cols-4 gap-4">
              {productData.slice(0, 8).map((item, index) =>
                <div key={index} className="bg-white border border-gray-200 ">
                  <a href="#">
                    <img className="rounded-t-lg" src={item.productimg} alt={item.productname} />
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.productname}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item.productdsc}
                      </p>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-center py-16">
          <div className="flex items-center justify-center h-500">
            <div className="flex items-center space-x-8">
              <button className="text-3xl text-white">
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="flex flex-col items-center">
                <img src="https://placehold.co/200x300" alt="Product image of a cute plush toy with bunny ears" className="w-64 h-64 object-cover" />
              </div>
              <button className="text-3xl text-white">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="ml-16 text-white">
              <h1 className="text-4xl font-bold">LABUBU V2</h1>
              <div className="mt-4">
                <span className="text-lg">Color</span>
                <div className="flex space-x-2 mt-2">
                  <div className="w-6 h-6 bg-white rounded-full border"></div>
                  <div className="w-6 h-6 bg-pink-500 rounded-full border"></div>
                  <div className="w-6 h-6 bg-green-500 rounded-full border"></div>
                  <div className="w-6 h-6 bg-brown-500 rounded-full border"></div>
                  <div className="w-6 h-6 bg-purple-500 rounded-full border"></div>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div className="flex items-center">
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                  <i className="fas fa-star text-yellow-400"></i>
                </div>
                <span className="ml-2">(20k)</span>
              </div>
              <div className="mt-4 text-4xl font-bold">1190$</div>
              <p className="mt-4">LABUBU V2 สินค้าจาก POPMART ที่มีรายละเอียดน่ารัก อ่อนโยน</p>
              <button className="mt-8 px-6 py-3 bg-purple-600 text-white font-bold rounded-lg">Order Now</button>
            </div>
          </div>
        </section>
        <main className="bg-gray-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
            <div className="flex justify-center space-x-8">
              <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
                <div className="flex items-center mb-4">
                  <img src="https://placehold.co/50x50" alt="Client Image" className="rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold">Frikaldia</h3>
                    <p className="text-gray-500">Client</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400"><i className="fas fa-star"></i></span>
                  <span className="text-yellow-400"><i className="fas fa-star"></i></span>
                  <span className="text-yellow-400"><i className="fas fa-star"></i></span>
                  <span className="text-yellow-400"><i className="fas fa-star"></i></span>
                  <span className="text-yellow-400"><i className="fas fa-star"></i></span>
                </div>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus."</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
                <div className="flex items-center mb-4">
                  <img src="https://placehold.co/50x50" alt="Client Image" className="rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold">Frikaldia</h3>
                    <p className="text-gray-500">Client</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400"><i className="fas fa-star"></i></span>
                  <span className="text-yellow-400"><i className="fas fa-star"></i></span>
                  <span className="text-yellow-400"><i className="fas fa-star"></i></span>
                  <span className="text-yellow-400"><i className="fas fa-star"></i></span>
                  <span className="text-yellow-400"><i className="fas fa-star"></i></span>
                </div>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus."</p>
              </div>
            </div>
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-4">Look For Models Now</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
            </div>
            <div className="flex justify-center mt-8">
              <img src="../img/home_modal1.jpg" height={300} width={150} alt="Model Image 1" className="mx-2" />
              <img src="../img/home_modal2.jpg" height={300} width={150} alt="Model Image 2" className="mx-2" />
              <img src="../img/home_modal3.jpg" height={300} width={150} alt="Model Image 3" className="mx-2" />
            </div>
          </div>
        </main>
      </main>
      <footer>
        <Tfooter />
      </footer>
    </body>
  );
}