import Dirganala from "../assets/img/client/Dirganala.jpg";
import FH from "../assets/img/client/FH.png";
import GolioHub from "../assets/img/client/Golio Hub.jpg";
import LogoBEMFisip from "../assets/img/client/Logo BEM Fisip.png";
import LogoCheckinFest from "../assets/img/client/logo Checkin Fest.png";
import LogoEDA from "../assets/img/client/Logo EDA.png";
import LogoEMUB from "../assets/img/client/logo EM UB.png";
import LogoFHUB from "../assets/img/client/Logo FH UB.png";
import LogoGKM from "../assets/img/client/Logo GKM.png";
import LogoIndomaret from "../assets/img/client/Logo Indomaret Festival 2 1.png";
import LogoInterschoolar from "../assets/img/client/Logo Interschoolar.png";
import LogoKozi from "../assets/img/client/LOGO KOZI-putih.png";
import LogoMavens from "../assets/img/client/Logo Mavens.png";
import LogoRabraw2 from "../assets/img/client/Logo Rabraw 2.png";
import LogoRania from "../assets/img/client/logo rania.png";
import LogoSMABA from "../assets/img/client/Logo SMABA.png";
import LogoSocietoUB from "../assets/img/client/Logo Societo UB.png";
import LogoSyrene from "../assets/img/client/Logo Syrene Exhibition.png";
import LogoUB from "../assets/img/client/Logo UB.png";
import Lokanesia from "../assets/img/client/Lokanesia 3.png";
import MWRLogo from "../assets/img/client/MWR LOGO.png";
import PrestonFestival from "../assets/img/client/Preston Festival.jpg";
import Rabraw from "../assets/img/client/Rabraw.png";
import SCE2026 from "../assets/img/client/SCE 2026.jpg";
import TeenRocket from "../assets/img/client/Teen Rocket.png";

const logos = [
  { src: Dirganala, alt: "Dirganala" },
  { src: FH, alt: "FH" },
  { src: GolioHub, alt: "Golio Hub" },
  { src: LogoBEMFisip, alt: "BEM Fisip" },
  { src: LogoCheckinFest, alt: "Checkin Fest" },
  { src: LogoEDA, alt: "EDA" },
  { src: LogoEMUB, alt: "EM UB" },
  { src: LogoFHUB, alt: "FH UB" },
  { src: LogoGKM, alt: "GKM" },
  { src: LogoIndomaret, alt: "Indomaret Festival" },
  { src: LogoInterschoolar, alt: "Interschoolar" },
  { src: LogoKozi, alt: "KOZI" },
  { src: LogoMavens, alt: "Mavens" },
  { src: LogoRabraw2, alt: "Rabraw" },
  { src: LogoRania, alt: "Rania" },
  { src: LogoSMABA, alt: "SMABA" },
  { src: LogoSocietoUB, alt: "Societo UB" },
  { src: LogoSyrene, alt: "Syrene Exhibition" },
  { src: LogoUB, alt: "Universitas Brawijaya" },
  { src: Lokanesia, alt: "Lokanesia" },
  { src: MWRLogo, alt: "MWR" },
  { src: PrestonFestival, alt: "Preston Festival" },
  { src: Rabraw, alt: "Rabraw" },
  { src: SCE2026, alt: "SCE 2026" },
  { src: TeenRocket, alt: "Teen Rocket" },
];

const Client: React.FC = () => {
  return (
    <section id="clients" className="bg-white py-16 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h3 className="text-center text-xl md:text-2xl font-bold text-primary mb-10">
          Trusted by Our Clients
        </h3>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient fade kiri */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white to-transparent z-10" />
          {/* Gradient fade kanan */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white to-transparent z-10" />

          {/* Marquee Track */}
          <div className="flex w-max client-marquee-track gap-12">
            {/* Loop 1 */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center min-w-[120px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}

            {/* Loop 2 (duplikat biar seamless) */}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center min-w-[120px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
