import { useEffect, useRef, useState } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

type Studio = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  freeHalls: number;
  rating: number;
};

const studios: Studio[] = [
  { id: "s1", name: 'ЖК "Большое Путилково"', lat: 55.8657, lng: 37.3927, freeHalls: 2, rating: 4.9 },
  { id: "s2", name: "Просторная, 7", lat: 55.8057, lng: 37.7149, freeHalls: 1, rating: 4.7 },
  { id: "s3", name: 'Коттеджный посёлок "Мечта-2"', lat: 56.0737, lng: 37.3724, freeHalls: 2, rating: 4.8 },
  { id: "s4", name: "Одинцовский парк культуры", lat: 55.6907, lng: 37.2502, freeHalls: 2, rating: 4.9 },
  { id: "s5", name: "Эко Бунино", lat: 55.5408, lng: 37.455, freeHalls: 1, rating: 4.7 },
  { id: "s6", name: 'ЖК "Остафьево"', lat: 55.5006, lng: 37.5192, freeHalls: 2, rating: 4.8 },
  { id: "s7", name: "Крымская, 10", lat: 55.6186, lng: 37.9583, freeHalls: 1, rating: 4.6 },
  { id: "s8", name: 'ЖК "Люберцы-2"', lat: 55.7003, lng: 37.8812, freeHalls: 2, rating: 4.8 },
  { id: "s9", name: 'ЖК "Люберцы-1"', lat: 55.698, lng: 37.875, freeHalls: 1, rating: 4.7 },
];

const CENTER: [number, number] = [37.6173, 55.7558];

const mapStyle: maplibregl.StyleSpecification = {
  version: 8,
  sources: {
    carto: {
      type: "raster",
      tiles: ["https://a.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png"],
      tileSize: 256,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    },
  },
  layers: [{ id: "carto", type: "raster", source: "carto" }],
};

export function StudiosScreen({ onOpenStudio }: { onOpenStudio: (studio: Studio) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const [selected, setSelected] = useState<Studio | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const bounds = studios.reduce(
      (b, s) => b.extend([s.lng, s.lat]),
      new maplibregl.LngLatBounds([studios[0].lng, studios[0].lat], [studios[0].lng, studios[0].lat])
    );

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: mapStyle,
      center: CENTER,
      zoom: 9,
      attributionControl: { compact: true },
    });
    mapRef.current = map;

    for (const s of studios) {
      const el = document.createElement("button");
      el.className = "map-studio-pin";
      el.innerHTML =
        '<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M4 11.5C4 7 7.6 4 12 4s8 3 8 7.5c0 3.8-3.2 6.6-6.4 8.7a2.9 2.9 0 0 1-3.2 0C7.2 18.1 4 15.3 4 11.5z" stroke="#EB3325" stroke-width="1.8"/><circle cx="12" cy="11" r="2.6" fill="#EB3325"/></svg>';
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        setSelected(s);
        map.flyTo({ center: [s.lng, s.lat], zoom: Math.max(map.getZoom(), 11) });
      });
      new maplibregl.Marker({ element: el, anchor: "bottom" }).setLngLat([s.lng, s.lat]).addTo(map);
    }

    const fit = () => {
      map.resize();
      map.fitBounds(bounds, { padding: 60, maxZoom: 10.5, animate: false });
    };
    const ro = new ResizeObserver(fit);
    ro.observe(containerRef.current);
    requestAnimationFrame(fit);

    return () => {
      ro.disconnect();
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const locate = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      mapRef.current?.flyTo({ center: [pos.coords.longitude, pos.coords.latitude], zoom: 14 });
    });
  };

  return (
    <div className="relative h-full flex flex-col">
      <div className="absolute top-3 left-4 right-4 z-[500] flex gap-2">
        <div className="flex-1 flex items-center gap-2 bg-white rounded-2xl px-3.5 py-3 shadow-lg">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
            <circle cx="11" cy="11" r="6.5" stroke="#8a8a8a" strokeWidth="1.8" />
            <path d="M20 20l-4.3-4.3" stroke="#8a8a8a" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span className="text-[13px] text-[#9a9a9a]">Поиск...</span>
        </div>
        <button className="w-11 h-11 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
            <path
              d="M4 7h11M18 7h2M4 12h5M12 12h8M4 17h13"
              stroke="#1A1A1A"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="14" cy="7" r="2" fill="#1A1A1A" />
            <circle cx="9" cy="12" r="2" fill="#1A1A1A" />
            <circle cx="17" cy="17" r="2" fill="#1A1A1A" />
          </svg>
        </button>
      </div>

      <div
        ref={containerRef}
        className="flex-1 w-full"
        onClick={() => setSelected(null)}
      />

      <button
        className="absolute bottom-24 right-4 z-[500] w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center"
        onClick={locate}
        aria-label="Моё местоположение"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <circle cx="12" cy="12" r="3" fill="#EB3325" />
          <path
            d="M12 3v3M12 18v3M3 12h3M18 12h3"
            stroke="#EB3325"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {selected && (
        <button
          onClick={() => onOpenStudio(selected)}
          className="absolute left-3 right-3 bottom-4 z-[500] flex items-center gap-3 bg-[#1A1A1A] border border-white/10 rounded-2xl p-3 shadow-2xl text-left"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#EB3325]/15 border border-[#EB3325]/30 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <rect x="4" y="4" width="16" height="16" rx="6" stroke="#EB3325" strokeWidth="1.8" />
              <path
                d="M8 15c1-1.5 2.2-2.2 4-2.2s3 .7 4 2.2M9 9.5h.01M13 9h4"
                stroke="#EB3325"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-[14px] font-semibold truncate">{selected.name}</p>
            <p className="text-white/50 text-[12px]">
              {selected.rating} · {selected.freeHalls} зала свободно
            </p>
          </div>
        </button>
      )}
    </div>
  );
}
