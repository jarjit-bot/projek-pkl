import { Link } from "react-router-dom";
import news1 from "/src/assets/img/sembako.png";
import news2 from "/src/assets/img/darah1.webp";
import news3 from "/src/assets/img/ikan.png";

export default function News() {
    const newsArticles = [
        {
            id: 1,
            title: "Berkah Ramadan 1446 H, PAMA Sebar Ratusan Paket Sembako ke Masyarakat Balikpapan",
            description: "(PAMA) Distrik Balikpapan Operation (BPOP) tahun ini kembali berbagi berkah di bulan suci Ramadan 1446 Hijriah.",
            image: news1,
            date: "28 Maret 2025",
        },
        {
            id: 2,
            title: "Bantu Misi Kemanusiaan PMI, PAMA Gelar Aksi Donor Darah",
            description: "Misi kemanusiaan dalam membantu Palang Merah Indonesia (PMI) Balikpapan untuk meningkatkan stok darah kembali dilakukan PT Pamapersada Nusantara Distrik Balikpapan Operation (PAMA BPOP).",
            image: news2,
            date: "28 Februari 2025",
        },
        {
            id: 3,
            title: "Dukung UMKM, PAMA Gelar Pelatihan Pembuatan Amplang Ikan Asin di Balikpapan",
            description: "Guna mendukung sektor ekonomi khususnya usaha mikro, kecil dan menengah (UMKM), PT Pamapersada Nusantara distrik Balikpapan Operation (PAMA BPOP) menggelar pelatihan pembuatan Amplang Ikan Asin.",
            image: news3,
            date: "03 Januari 2025",
        },
    ];

    return (
        <section id="news" className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-4 uppercase tracking-wide">
                    Latest News
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Tetap terupdate dengan berita terbaru dari perusahaan kami dalam industri pertambangan.
                </p>
            </div>

            {/* News Grid */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {newsArticles.map((news) => (
                    <div
                        key={news.id}
                        className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <p className="text-sm text-gray-400">{news.date}</p>
                            <h3 className="text-xl font-bold text-yellow-400 mt-2 leading-tight">
                                {news.title}
                            </h3>
                            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                                {news.description}
                            </p>
                            <div className="mt-auto pt-4">
                                <Link
                                    to={`/news/${news.id}`}
                                    className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-medium rounded-md hover:bg-yellow-500 transition"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
