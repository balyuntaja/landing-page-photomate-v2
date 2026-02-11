import { useEffect, useState } from "react";
import heroCollage from "../assets/img/hero_photomate.webp";

const DURATION_MS = 1800;
const EVENT_TARGET = 70;
const SESI_TARGET = 2713;

function useCountUp(end: number, startOnMount: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startOnMount) return;
    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (startTime == null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(easeOut * end));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, startOnMount]);

  return value;
}

function formatSesi(n: number) {
  return n.toLocaleString("id-ID");
}

const Hero: React.FC = () => {
  const countEvent = useCountUp(EVENT_TARGET, true);
  const countSesi = useCountUp(SESI_TARGET, true);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white pt-28 pb-8 md:pt-32 md:pb-12"
    >
      {/* Card besar hitam berisi konten */}
      <div className="w-full container mx-auto px-4 md:px-6">
        <div className="bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl min-h-[72vh] flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center p-6 md:p-10 lg:p-12">
            {/* LEFT: TEXT */}
            <div className="max-w-xl order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Cetak Foto{" "}
                <span className="bg-linear-to-r from-purple-400 via-orange-400 to-yellow-400 text-transparent bg-clip-text">
                  Instant
                </span>{" "}
                Langsung dibawa{" "}
                <span className="bg-linear-to-r from-blue-400 via-pink-400 to-pink-600 text-transparent bg-clip-text">
                  Pulang
                </span>{" "}
              </h1>

              <p className="text-base md:text-lg text-white/90 mb-4 leading-relaxed">
                Photomate hadir, mengubah momen jadi cerita berharga. Kami
                dirancang untuk memeriahkan momen lintas generasi dengan
                kualitas dan harga terjangkau. Kami menyediakan layanan
                photobooth untuk berbagai acara anda, mulai dari wedding, event,
                hingga suasana akrab di komunitas kreatif dan kafe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-light transition"
                >
                  Lihat Produk
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 text-white border border-white/30 font-semibold hover:bg-white/20 transition"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
            {/* RIGHT: MARQUEE — lebar diisi penuh, panjang (3369px) utuh tidak terpotong */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden order-1 lg:order-2 bg-[#0d0d0d]">
              <div className="absolute inset-0 overflow-hidden">
                <div className="hero-marquee-inner flex flex-col w-full">
                  <img
                    src={heroCollage}
                    alt="Photobooth gallery"
                    className="w-full h-auto shrink-0 block"
                  />
                  <img
                    src={heroCollage}
                    alt=""
                    aria-hidden
                    className="w-full h-auto shrink-0 block"
                  />
                </div>
              </div>

              {/* Stats overlay - pojok kanan bawah */}
              <div className="absolute bottom-4 right-6 left-4 md:left-auto md:w-[240px] bg-black/50 backdrop-blur-sm rounded-2xl px-6 py-5 border border-white/10">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold tabular-nums bg-linear-to-r from-pink-400 to-yellow-400 text-transparent bg-clip-text">
                      {countEvent}
                    </p>
                    <p className="text-xs md:text-sm text-white/80">Event</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold tabular-nums bg-linear-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
                      {formatSesi(countSesi)}
                    </p>
                    <p className="text-xs md:text-sm text-white/80">
                      Sesi Foto
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
