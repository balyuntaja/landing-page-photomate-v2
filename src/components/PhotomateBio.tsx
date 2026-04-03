import { FaInstagram, FaWhatsapp, FaTiktok, FaGlobe } from "react-icons/fa";
import backgroundPink from "../assets/img/pink.png";
import logoImg from "../assets/img/logophotomateblue.png";
import iftarNalaImg from "../assets/img/album_photostrip/Iftar_nala.webp";
import ruangRiangImg from "../assets/img/album_photostrip/Ruangriang.webp";
import hmeFtpUbImg from "../assets/img/album_photostrip/HME_FTP_UB.webp";

const photostrips = [
  {
    title: "Photomate x Iftar Nala",
    image: iftarNalaImg,
    link: "https://fotoshare.co/e/Ds5d7QWXZH1Rq1nAIAK6g",
  },
  {
    title: "Photomate x Ruang Riang",
    image: ruangRiangImg,
    link: "https://dreamboothstudio.com/id/gallery/events/69a86d59ede3ebdccd074598",
  },
  {
    title: "Photomate x HME FTP UB",
    image: hmeFtpUbImg,
    link: "https://fotoshare.co/e/m542SWPh0dO2taBj7A87L",
  },
];

export default function PhotomateBio() {
  return (
    <div
      className="min-h-screen text-primary px-4 py-10"
      style={{
        backgroundImage: `url(${backgroundPink})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "auto",
      }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="flex items-center gap-4">
          <img src={logoImg} className="w-20 h-20 rounded-full" alt="photomate.id logo" />
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold tracking-wide">photomate.id</h1>
            <p className="text-base font-medium leading-relaxed text-primary max-w-md">
            Capture memories with your mate! 📸 <br /> Curious? Explore more on our website.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-3 text-xl">
              <a
                href="https://www.instagram.com/photomateid_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/6287787405280"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.tiktok.com/@photomate_id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
              <a
                href="https://photomate.id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90"
                aria-label="Website"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>

        {/* Photostrip Section */}
        <div className="mt-10">
          <h2 className="text-center mb-4 text-lg font-semibold">Link Photostrip</h2>

          <div className="-mx-4 px-4">
            <div className="flex gap-4 overflow-x-auto no-scrollbar">
              {photostrips.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-[200px]"
                >
                  {/* Image (200x200 FIXED) */}
                  <div className="w-[200px] h-[200px] rounded-2xl overflow-hidden bg-[#E6D3B3]">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover"
                      alt={item.title}
                    />
                  </div>

                  {/* Title BELOW */}
                  <div className="mt-2 text-base font-semibold text-center text-primary">
                    {item.title}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-10">
          <h2 className="text-center mb-4 text-lg font-semibold">Contact Us at</h2>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/6287787405280"
              className="grid grid-cols-[28px_1fr_28px] items-center gap-3 bg-primary text-white px-4 py-4 rounded-xl hover:bg-primary-dark transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-xl justify-self-center" />
              <span className="text-base font-semibold text-center">WhatsApp</span>
              <span aria-hidden />
            </a>

            <a
              href="https://www.instagram.com/photomateid_/"
              className="grid grid-cols-[28px_1fr_28px] items-center gap-3 bg-primary text-white px-4 py-4 rounded-xl hover:bg-primary-dark transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl justify-self-center" />
              <span className="text-base font-semibold text-center">Instagram</span>
              <span aria-hidden />
            </a>

            <a
              href="https://www.tiktok.com/@photomate_id"
              className="grid grid-cols-[28px_1fr_28px] items-center gap-3 bg-primary text-white px-4 py-4 rounded-xl hover:bg-primary-dark transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="text-xl justify-self-center" />
              <span className="text-base font-semibold text-center">TikTok</span>
              <span aria-hidden />
            </a>

            <a
              href="https://photomate.id"
              className="grid grid-cols-[28px_1fr_28px] items-center gap-3 bg-primary text-white px-4 py-4 rounded-xl hover:bg-primary-dark transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe className="text-xl justify-self-center" />
              <span className="text-base font-semibold text-center">Website</span>
              <span aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
