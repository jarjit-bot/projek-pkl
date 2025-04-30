import news1 from "/src/assets/img/pama.png";
import news2 from "/src/assets/img/99.jpg";
import news3 from "/src/assets/img/Tanam.jpg";

export default function News() {
    const newsArticles = [
        {
            title: "Transisi ke Energi Terbarukan",
            description: "PAMA pelan-pelan bertransisi menuju energi terbarukan dan ramah lingkungan. Salah satunya melalui pemasangan pembangkil listrik tenaga surya (PLTS) di kantor pusat PAMA. External Department Head PAMA Gunawan Setiadi mengatakan pemasangan panel surya tersebut dilakukan dalam tiga tahap. Mulai dari Gedung PAMA 3, PAMA 2 dan skybridge, hingga berlanjut ke skybridge arah selatan. ",
            image: news1,
            date: "5 September 2023"
        },
        {
            title: "PAMA Bidik 99 Ribu Hektar Hutan di Papua",
            description: "PAMA, anak perusahaan PT United Tractors, bakal mendirikan perusahaan yang bergerak di bidang perlindungan hutan dan jasa lingkungan. Perusahaan yang didirikan PAMA bersama PT Kalimantan Prima Persada (KPP) tersebut rencananya beroperasi di Kabupaten Waropen, Papua.",
            image: news2,
            date: "5 September 2023"
        },
        {
            title: "Kurangi Emisi, PT PAMA Tanam Bakau di Pantai Limau Balikpapan",
            description: "PAMA melakukan penanaman pohon bakau di Pantai Limaru, Balikpapan, Kalimantan Timur, Selasa, 5 September 2023. Penanaman salah satu jenis tanaman mangrove tersebut menjadi bagian dari program peduli lingkungan yang digerakkan Corporate Social Responsibility (CSR).",
            image: news3,
            date: "5 September 2023"
        }
    ];

    return (
        <section id="news" className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-6 uppercase tracking-wide">
                    Latest News
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                    Tetap terupdate dengan berita terbaru dari perusahaan kami dalam industri pertambangan.
                </p>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {newsArticles.map((news, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                        <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <p className="text-sm text-gray-400">{news.date}</p>
                            <h3 className="text-xl font-bold text-yellow-400 mt-2">{news.title}</h3>
                            <p className="text-gray-300 mt-2">{news.description}</p>
                            <button className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
