import SUB from "../assets/img/SUB.jpeg";
import BEST from "../assets/img/BEST.jpeg";
import DIR from "../assets/img/DIR.jpg";
import ESG from "../assets/img/ESG.jpeg";

export default function Award() {
    const awards = [
        { title: "PAMA Terima Penghargaan di Subroto Award 2024", desc: "Penghargaan Subroto Bidang Pengembangan Kompetensi Sumber Daya Manusia Sektor Energi dan Sumber Daya Mineral.", image: SUB },
        { title: "Penghargaan Indonesia Best Workplace for Women Awards 2024", desc: "Penghargaan Indonesia Best Workplace for Women Awards 2024.", image: BEST },
        { title: "Penghargaan Indonesia Most Powerful Women 2024", desc: "Penghargaan ini diberikan oleh HerStory Indonesia sebagai bentuk apresiasi atas kontribusinya dalam mendukung green energy business.", image: DIR },
        { title: "Penghargaan Bidang Komunikasi ESG", desc: "Penghargaan ini diberikan oleh PR Indonesia kepada  PAMA sebagai perusahaan yang memiliki komitmen dan prinsip-prinsip Diversity, Equity, and Inclusion (DEI) dan Environmental, Social, and Governance (ESG).", image: ESG },
    ];

    return (
        <section id="award" className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-6 uppercase tracking-wide">
                    Awards
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                    Kami telah menerima berbagai penghargaan atas dedikasi kami dalam industri pertambangan, keselamatan kerja, dan keseimbangan alam.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {awards.map((award, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 bg-gray-800 p-6">
                        <img src={award.image} alt={award.title} className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" />
                        <h3 className="text-xl font-semibold text-yellow-400">{award.title}</h3>
                        <p className="text-gray-300 mt-2">{award.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
