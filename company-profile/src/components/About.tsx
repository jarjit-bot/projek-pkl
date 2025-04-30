import Tambang from "../assets/img/Tambang.webp"
export default function About() {
    return (
      <section id="about" className="bg-gray-900 text-white py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Bagian Gambar */}
          <div className="w-full md:w-1/2">
            <img
              src={Tambang}
              alt="About Us"
              className="rounded-2xl shadow-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
  
          {/* Bagian Teks */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-400 mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Kami Adalah Perusahaan Produsen Energi Kelas Dunia Yang Andal, Efisien dan Terbaik di Indonesia.
            Sebagai salah satu perusahaan energi terbesar di dunia, PT Pamapersada Nusantara memiliki kompetensi yang luas dan pemahaman mendalam dalam hal operasi & eksplorasi energi.
            </p>
  
            {/* Daftar Kelebihan */}
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-green-400 text-xl mr-3">✔</span>
                Menjaga Keseimbangan Alam
              </li>
              <li className="flex items-center">
                <span className="text-green-400 text-xl mr-3">✔</span>
                Membangun Harmoni Dengan Masyarakat
              </li>
              <li className="flex items-center">
                <span className="text-green-400 text-xl mr-3">✔</span>
                Mempertahankan Kinerja Dengan baik
              </li>
            </ul>
  
            {/* Tombol CTA */}
            <div className="mt-6">
              <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full text-lg font-semibold text-white shadow-lg transition-all duration-300">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  