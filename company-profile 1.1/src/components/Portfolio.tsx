import PIT from "../assets/img/PIT.jpg";
import UNDER from "../assets/img/UNDER.jpeg";
import HEAVY from "../assets/img/HEAVY.webp";
import COAL from "../assets/img/COAL.webp";
import LOGIS from "../assets/img/LOGIS.jpg";
import SAFETY from "../assets/img/SAFETY.jpeg";

export default function Portfolio() {
    const projects = [
        { title: "Open-Pit Mining", image: PIT },
        { title: "Underground Mining", image: UNDER },
        { title: "Heavy Equipment", image: HEAVY },
        { title: "Coal Processing", image: COAL },
        { title: "Logistics & Transport", image: LOGIS },
        { title: "Mining Safety", image: SAFETY },
    ];

    return (
        <section id="portfolio" className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-500 mb-6 uppercase tracking-wide">
                    PORTFOLIO
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    Berikut adalah beberapa proyek pertambangan unggulan yang telah kami kerjakan.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-xl font-semibold text-yellow-400">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
