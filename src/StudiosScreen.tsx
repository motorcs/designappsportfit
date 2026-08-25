import { useMemo } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Studio = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  freeHalls: number;
  rating: number;
};

const studios: Studio[] = [
  { id: "s1", name: "Stop For Fit — Путилково", lat: 55.8586, lng: 37.394, freeHalls: 2, rating: 4.9 },
  { id: "s2", name: "Stop For Fit — Химки", lat: 55.8967, lng: 37.4297, freeHalls: 1, rating: 4.7 },
  { id: "s3", name: "Stop For Fit — Мосрентген", lat: 55.5993, lng: 37.4569, freeHalls: 2, rating: 4.8 },
];

const CENTER: [number, number] = [55.7558, 37.6173];

function redPinIcon(label: string) {
  return L.divIcon({
    className: "",
    html: `<div class="map-pin-chip">${label}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
}

function LocateButton() {
  const map = useMap();
  return (
    <button
      className="absolute bottom-24 right-4 z-[500] w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center"
      onClick={() => map.locate({ setView: true, maxZoom: 14 })}
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
  );
}

export function StudiosScreen({ onOpenStudio }: { onOpenStudio: (studio: Studio) => void }) {
  const icons = useMemo(
    () => studios.map((s) => redPinIcon(String(s.freeHalls))),
    []
  );

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

      <MapContainer
        center={CENTER}
        zoom={10}
        zoomControl={false}
        attributionControl={true}
        className="flex-1 w-full"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          maxZoom={19}
        />
        {studios.map((s, i) => (
          <Marker
            key={s.id}
            position={[s.lat, s.lng]}
            icon={icons[i]}
            eventHandlers={{ click: () => onOpenStudio(s) }}
          />
        ))}
        <LocateButton />
      </MapContainer>

      <button
        onClick={() => onOpenStudio(studios[0])}
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
          <p className="text-white text-[14px] font-semibold truncate">{studios[0].name}</p>
          <p className="text-white/50 text-[12px]">
            {studios[0].rating} · {studios[0].freeHalls} зала свободно
          </p>
        </div>
      </button>
    </div>
  );
}
