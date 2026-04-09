import { useEffect } from "react";

const TIKTOK_EMBED_SCRIPT = "https://www.tiktok.com/embed.js";
const TIKTOK_PROFILE_URL = "https://www.tiktok.com/@photomate_id";

export default function TiktokEmbed() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${TIKTOK_EMBED_SCRIPT}"]`
    );

    if (existing) {
      existing.remove();
    }

    const script = document.createElement("script");
    script.src = TIKTOK_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Keseruan Nyata di Setiap Event
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Follow profil TikTok Photomate untuk update terbaru
        </p>

        <div className="flex justify-center">
          <blockquote
            className="tiktok-embed"
            cite={TIKTOK_PROFILE_URL}
            data-unique-id="photomate_id"
            data-embed-from="embed_page"
            data-embed-type="creator"
            style={{ maxWidth: "780px", minWidth: "288px", width: "100%" }}
          >
            <section>
              <a
                href="https://www.tiktok.com/@photomate_id?refer=creator_embed"
                target="_blank"
                rel="noopener noreferrer"
              >
                @photomate_id
              </a>
            </section>
          </blockquote>
        </div>
      </div>
    </section>
  );
}