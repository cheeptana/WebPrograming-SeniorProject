import Tfooter from "./temp/tfooter";
import Theader from "./temp/theader";
export default function UserAbout() {
    return (
        <>
        <header>
            <Theader/>
        </header>
            <main className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-12">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="mb-6">บริการการจัดจำหน่ายสินค้าตัวการ์ตูน สำหรับคนที่รักและชื่นชอบ Art Toy ด้วยชื่อ "CBF ARTTOY" ร้านของเรามีความตั้งใจในการสร้างสรรค์ผลงานที่มีคุณภาพและเป็นเอกลักษณ์เฉพาะตัวเพื่อให้การสะสมของคุณมีความสุขและสนุกไปกับมัน</p>
                    <div className="flex justify-center">
                        <img src="https://placehold.co/200x200" alt="Product Display" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </main>
            <section className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Profile</h2>
                        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
                        <p className="mb-6">Klara is an AI powered automated Solution Builder of Growth Strategy, Branding and Digital marketing planning for your business.</p>
                        <div className="flex justify-center">
                            <img src="https://placehold.co/300x300" alt="Mangcoding Store" className="rounded-lg shadow-lg" />
                        </div>
                        <p className="text-center mt-2 text-blue-500">Mangcoding Store</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.</p>
                        <p className="mb-6">Klara is an AI powered automated Solution Builder of Growth Strategy, Branding and Digital marketing planning for your business.</p>
                        <div className="flex justify-center">
                            <img src="https://placehold.co/300x300" alt="Mangcoding Store" className="rounded-lg shadow-lg" />
                        </div>
                        <p className="text-center mt-2 text-blue-500">Mangcoding Store</p>
                    </div>
                </div>
            </section>
            <footer>
                <Tfooter/>
            </footer>
        </>
    );
}