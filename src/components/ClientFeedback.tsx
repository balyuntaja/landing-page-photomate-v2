interface Testimonial {
  quote: string;
  name: string;
  roleOrEvent: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Pelayanan photobooth untuk wedding kami sangat memuaskan. Hasil foto tajam dan cetakan berkualitas. Tim responsif dan profesional. Highly recommended!",
    name: "Budi & Siti",
    roleOrEvent: "Wedding, Malang",
    rating: 5,
  },
  {
    quote: "Photomate dipakai di acara corporate kami. Tamu antusias, hasil cetak rapi, dan ada online album yang memudahkan semua. Terima kasih Photomate!",
    name: "Andi Wijaya",
    roleOrEvent: "Corporate Event, Surabaya",
    rating: 5,
  },
  {
    quote: "Booking mudah, harga transparan, dan hasilnya sesuai ekspektasi. Untuk birthday party anak saya, semua tamu senang bisa bawa pulang foto langsung.",
    name: "Dewi Kusuma",
    roleOrEvent: "Birthday Party, Jakarta",
    rating: 5,
  },
];

const ClientFeedback: React.FC = () => {
  return (
    <section id="client-feedback" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Client Feedback
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Apa kata mereka yang sudah menggunakan layanan Photomate
        </p>
        <span className="block w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-6 italic">"{item.quote}"</p>

              {/* Author */}
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-primary">{item.roleOrEvent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
