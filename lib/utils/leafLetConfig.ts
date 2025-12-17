// utils/leafletIconFix.ts
import L from "leaflet";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export const minimalMarker = new L.DivIcon({
  className: "",
  html: `<div style="
    width: 10px;
    height: 10px;
    background: #111;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(0,0,0,0.15);
  "></div>`,
});
