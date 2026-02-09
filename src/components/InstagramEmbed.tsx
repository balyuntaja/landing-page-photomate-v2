import { useEffect } from "react";

const REELS = [
  "https://www.instagram.com/reel/DTpxJZIgTmm/",
  "https://www.instagram.com/reel/DSpYb7-gT74/",
  "https://www.instagram.com/reel/DS4BsMMkRCp/",
  "https://www.instagram.com/reel/DSxW2p6gUor/",
  "https://www.instagram.com/reel/DRmXHTLERpX/",
];

const INSTAGRAM_EMBED_SCRIPT = "https://www.instagram.com/embed.js";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export default function InstagramEmbedRow() {
  useEffect(() => {
    if (document.querySelector(`script[src="${INSTAGRAM_EMBED_SCRIPT}"]`)) {
      window.instgrm?.Embeds?.process();
      return;
    }

    const script = document.createElement("script");
    script.src = INSTAGRAM_EMBED_SCRIPT;
    script.async = true;
    script.onload = () => window.instgrm?.Embeds?.process();
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Keseruan Nyata di Setiap Event
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Cuplikan momen Photomate langsung dari Instagram
        </p>

        <div className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar">
          {REELS.map((url) => (
            <div
              key={url}
              className="shrink-0 w-[320px] overflow-hidden shadow-lg bg-white"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  View this post on Instagram
                </a>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
