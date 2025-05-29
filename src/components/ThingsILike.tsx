const images = [
  { alt: "Twitter", src: "/images/x1.svg" },
  { alt: "RCB", src: "/images/rcb.svg" },
  { alt: "City", src: "/images/city.svg" },
  { alt: "YouTube", src: "/images/yt.svg" },
  { alt: "amen", src: "/images/spotify.svg" },
  { alt: "Reddit", src: "/images/reddit.svg" },
];

export default function ThingsILike() {
  const repeated = [...images, ...images]; // for infinite loop

  return (
    <div class="pb-2 overflow-hidden">
      <h2 class="text-lg font-bold text-white mb-2 select-none">Things I Like</h2>

      <div class="relative w-full overflow-hidden group">
        <div
          class="flex group-hover:[animation-play-state:paused]"
          style={{
            animation: "scroll-left 15s linear infinite",
            width: `${(repeated.length / 4) * 100}%`,
          }}
        >
          {repeated.map((item, i) => (
            <div
              key={i}
              style={{
                width: "25%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 10px",
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  height: item.alt === "Silicon Valley" ? "60px" : "80px",
                  width: item.alt === "Silicon Valley" ? "120px" : "80px",
                  objectFit: "contain",
                  alignSelf: item.alt === "Silicon Valley" ? "flex-end" : "center",
                  marginBottom: item.alt === "Silicon Valley" ? "10px" : "0",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.15)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
