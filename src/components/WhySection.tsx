import whyImage from "../assets/img/achievement.webp";

const ACHIEVEMENTS = [
  {
    title: "Debut di LokaNesia 2025",
    desc: "Malang Creative Center (MCC), hanya beberapa minggu setelah resmi berjalan.",
  },
  {
    title: "Kolaborasi SMA Negeri 1 Batu",
    desc: "Photobooth express hadir di acara sekolah dengan respons positif.",
  },
  {
    title: "Road to Malang Walking Race 2025",
    desc: "Mendokumentasikan momen peserta dengan cetak HD dan file digital.",
  },
];

const ARTICLE_URL =
  "https://timesindonesia.co.id/tekno/550852/photomateid-usaha-photobooth-express-karya-gen-z-yang-fleksibel-dan-kreatif";

const WhySection: React.FC = () => {
  return (
    <section id="why" className="bg-white scroll-mt-24">
      <div className="flex flex-col lg:flex-row">
        {/* Image Side */}
        <div className="lg:w-1/2">
          <img
            src={whyImage}
            alt="Photomate di Times Indonesia"
            className="w-full h-full object-cover min-h-[400px]"
          />
        </div>

        {/* Achievement / Content Side */}
        <div className="lg:w-1/2 bg-primary flex items-center">
          <div className="p-8 md:p-12 lg:p-16 text-white w-full">
            {/* Featured in */}
            <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-2">
              Diberitakan di
            </p>
            <p className="text-xl md:text-2xl font-bold mb-1">Times Indonesia</p>
            <p className="text-white/90 text-sm mb-6">
              Photomate.id, Usaha Photobooth Express Karya Gen Z yang Fleksibel dan Kreatif
            </p>

            {/* Achievement list */}
            <h3 className="text-lg font-bold mb-4">Pencapaian</h3>
            <ul className="space-y-4 mb-8">
              {ACHIEVEMENTS.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={ARTICLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Baca artikel lengkap
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
