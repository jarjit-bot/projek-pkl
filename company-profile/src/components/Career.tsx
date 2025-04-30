export default function Career() {
    const jobs = [
        { title: "Chief Surveyor", location: "Kalimantan, Indonesia", type: "Full-time" },
        { title: "Mine Infrastructure Engineer", location: "Sulawesi, Indonesia", type: "Full-time" },
        { title: "Operation Research  Engineer", location: "Sumatra Selatan, Indonesia", type: "Full-time" },
        { title: "Scientific Analytic engineer", location: "Kalimantan, Indonesia", type: "Full-time" },
    ];

    return (
        <section id="career" className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-6 uppercase tracking-wide">
                    Join Our Team
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                    Kami mencari individu berbakat dan berdedikasi untuk bergabung bersama kami dalam membangun masa depan industri tambang.
                </p>
            </div>

            {/* Job Listings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {jobs.map((job, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-2">{job.title}</h3>
                        <p className="text-gray-300">{job.location}</p>
                        <span className="block text-sm text-gray-400 mt-1">{job.type}</span>
                        <button className="mt-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
