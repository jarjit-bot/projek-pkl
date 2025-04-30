import hendra from "/src/assets/img/Hendra.png";
import ari from "/src/assets/img/Ari.png";
import djony from "/src/assets/img/joni.jpg";
import chiew from "/src/assets/img/Chiew.jpg";

export default function Team() {
    const member = [
        { name: "Hendra Hutahean", role: "President Director", image: hendra },
        { name: "Ari  Sutrisno", role: "Director", image: ari },
        { name: "Djony Bunarto Tjondro", role: "President Commissioner", image: djony },
        { name: "Frans Kesuma", role: "Commissioner", image: chiew },
    ];

    return (
        <section id="team" className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-24">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-6 uppercase tracking-wide">
                    MEET OUR TEAM
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    Tim kami terdiri dari para profesional yang berpengalaman dan berdedikasi untuk membawa perusahaan ke tingkat berikutnya.
                </p>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {member.map((member, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-bold text-yellow-400">{member.name}</h3>
                            <p className="text-gray-300 mt-2">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
