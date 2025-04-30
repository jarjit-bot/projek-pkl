import Trek from "../assets/img/Trek.jpg";
export default function Home() {
    return (
        <div
            className="relative  bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-start text-left px-8 md:px-16 lg:pl-24">
            {/* Overlay untuk mempergelap background agar teks lebih terbaca */}
            <div className="absolute inset-0">
                <img
                    src={Trek}
                    alt="radit"
                    className="w-full h-full object-cover bg-black opacity-50"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Konten utama */}
            <div className="relative z-10 max-w-[400px] text-white">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg leading-tight">
                    Transformasi Energi Menuju Masa Depan yang Lebih Hijau
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-200 md:text-gray-300">
                    Perubahan Menuju Energi yang Lebih Efisien
                </h2>
                <div className="mt-6">
                    <button className="bg-yellow-500 hover:bg-yellow-500 px-8 py-3 rounded-full text-lg font-semibold text-white shadow-lg transition-all duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}
