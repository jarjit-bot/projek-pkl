import { FaIndustry, FaTruckMoving, FaTools, FaHardHat, FaLeaf, FaRoute } from "react-icons/fa";

export default function Services() {
    const services = [
        { 
            title: "Mining Exploration", 
            desc: "Eksplorasi tambang untuk menemukan dan mengevaluasi potensi sumber daya mineral.",
            icon: <FaIndustry className="text-yellow-400 text-5xl" />
        },
        { 
            title: "Heavy Equipment Rental", 
            desc: "Penyewaan alat berat untuk mendukung operasional pertambangan dengan efisiensi tinggi.",
            icon: <FaTruckMoving className="text-yellow-400 text-5xl" />
        },
        { 
            title: "Mine Development", 
            desc: "Perencanaan dan pengembangan tambang dengan teknologi canggih dan metode yang ramah lingkungan.",
            icon: <FaTools className="text-yellow-400 text-5xl" />
        },
        { 
            title: "Coal & Mineral Processing", 
            desc: "Pengolahan batubara dan mineral untuk meningkatkan nilai tambah dan efisiensi produksi.",
            icon: <FaHardHat className="text-yellow-400 text-5xl" />
        },
        { 
            title: "Environmental & Safety", 
            desc: "Layanan keselamatan kerja dan pengelolaan lingkungan sesuai regulasi pertambangan.",
            icon: <FaLeaf className="text-yellow-400 text-5xl" />
        },
        { 
            title: "Logistics & Transportation", 
            desc: "Solusi logistik dan transportasi untuk distribusi hasil tambang dengan aman dan efisien.",
            icon: <FaRoute className="text-yellow-400 text-5xl" />
        },
    ];

    return (
        <section id="services" className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-500 mb-6 uppercase tracking-wide">
                    OUR SERVICES
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    PT PAMAPERSADA NUSANTARA menyediakan berbagai layanan untuk mendukung industri pertambangan dengan teknologi modern, efisiensi tinggi, dan kepatuhan terhadap standar keselamatan dan lingkungan.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl text-center hover:scale-105 transition-all duration-300 border border-gray-700 flex flex-col items-center"
                    >
                        <div className="flex justify-center items-center mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{service.title}</h3>
                        <p className="text-gray-300">{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
