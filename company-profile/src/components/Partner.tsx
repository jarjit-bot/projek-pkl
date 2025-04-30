import partner1 from "/src/assets/img/PT Bukit.png";
import partner2 from "/src/assets/img/Astra.png";
import partner3 from "/src/assets/img/Freeport.webp";
import partner4 from "/src/assets/img/Mitsu.png";
import partner5 from "/src/assets/img/KPC.webp";
import partner6 from "/src/assets/img/Vale.webp";

export default function Partner() {
    const partners = [
        { name: "PT Bukit Asam", logo: partner1 },
        { name: "Astra International", logo: partner2 },
        { name: "Freeport Indonesia", logo: partner3 },
        { name: "Mitsubishi Corporation", logo: partner4 },
        { name: "Kaltim Prima Coal", logo: partner5 },
        { name: "Vale Indonesia", logo: partner6 },
    ];

    return (
        <section id="partner" className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-6 uppercase tracking-wide">
                    Our Partners
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                    Kami bangga bermitra dengan berbagai perusahaan terkemuka dalam industri tambang dan energi.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {partners.map((partner, index) => (
                    <div 
                        key={index} 
                        className="flex justify-center items-center bg-white border border-gray-300 rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                    >
                        <img 
                            src={partner.logo} 
                            alt={partner.name} 
                            className="w-32 h-32 object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
