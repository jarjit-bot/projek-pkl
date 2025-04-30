export default function Career() {
    const jobs = [
      {
        title: "Health & Safety Officer",
        location: "Kalimantan, Indonesia",
        type: "Full-time",
        salary: "$535/Month",
      },
      {
        title: "Mine Infrastructure Engineer",
        location: "Sulawesi, Indonesia",
        type: "Full-time",
        salary: "$533/Month",
      },
      {
        title: "Operation Research Engineer",
        location: "Sumatera Selatan, Indonesia",
        type: "Full-time",
        salary: "$593/Month",
      },
      {
        title: "Scientific Analytic Engineer",
        location: "Kalimantan, Indonesia",
        type: "Full-time",
        salary: "$560/Month",
      },
    ];
  
    return (
      <section
        id="career"
        className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24"
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 uppercase mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Kami mencari individu berbakat dan berdedikasi untuk bergabung
            bersama kami dalam membangun masa depan industri tambang.
          </p>
        </div>
  
        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-[2rem] shadow-md text-center px-6 py-8 flex flex-col items-center justify-between h-full"
            >
              <h3 className="text-lg font-bold text-yellow-400 mb-4 leading-snug text-center">
                {job.title}
              </h3>
  
              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="bg-white text-black text-sm font-semibold px-3 py-1 rounded-full">
                  {job.type}
                </span>
                <span className="bg-white text-black text-sm font-semibold px-3 py-1 rounded-full">
                  {job.salary}
                </span>
              </div>
  
              <p className="text-gray-300 mb-6 text-sm">{job.location}</p>
  
              <button className="mt-auto bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-500 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  