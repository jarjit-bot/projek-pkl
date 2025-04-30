import { useState } from "react";
import img1 from "/src/assets/img/BBSO.jpeg";
import img2 from "/src/assets/img/KEBERAGAMAN.jpeg";
import img3 from "/src/assets/img/SMK.jpeg";
import img4 from "/src/assets/img/Persada.jpeg";
import img5 from "/src/assets/img/MUDIK.jpeg";
import img6 from "/src/assets/img/LULUS.jpg";

export default function Gallery() {
    const images = [img1, img2, img3, img4, img5, img6];
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="gallery" className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-6 uppercase tracking-wide">
                    Our Gallery
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                    Koleksi momen terbaik dari perjalanan dan pencapaian.
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer" onClick={() => setSelectedImage(image)}>
                        <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
                            View Image
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Selected" className="max-w-full max-h-[80vh] rounded-lg shadow-lg" />
                    <button className="absolute top-6 right-6 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition">
                        Close
                    </button>
                </div>
            )}
        </section>
    );
}
