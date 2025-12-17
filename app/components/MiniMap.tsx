"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

import { Address } from "@/types/types";
import { formatAddress } from "@/lib/utils/formatAddress";
import { geocodeAddress } from "@/lib/services/geocodeAddress";
import "@/lib/utils/leafLetConfig";
import { minimalMarker } from "@/lib/utils/leafLetConfig";

interface Props {
  address: Address;
  height?: number;
  width?: number;
  dark?: boolean;
}
function getZoomFromAddress(address: Address): number {
  if (address.street && address.city) return 15;
  if (address.city && address.postalCode) return 13;
  if (address.city) return 11;
  if (address.state) return 6;
  return 4;
}

export default function LeafletMiniMap({
  address,
  height = 200,
  width = 200,
  dark = false,
}: Props) {
  const [coords, setCoords] = useState<LatLngExpression | null>(null);
  const fullAddress = formatAddress(address);

  const zoom = getZoomFromAddress(address);

  useEffect(() => {
    geocodeAddress(fullAddress).then((res) => {
      if (res) {
        setCoords([res.lat, res.lon]);
      }
    });
  }, [fullAddress]);

  if (!coords) {
    return (
      <div
        style={{ height }}
        className="w-full bg-gray-200 animate-pulse rounded-md"
      />
    );
  }

  return (
    <div className="w-full">
      <div style={{ height, width }} className=" overflow-hidden">
        <MapContainer
          center={coords}
          zoom={zoom}
          style={{ height: "100%", width: "100%" }}
          dragging={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer
            url={
              dark
                ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            }
          />

          {/* Marqueur discret */}
          <Marker position={coords} icon={minimalMarker} />
        </MapContainer>
      </div>
      <div>
        <p className="text-sm mt-1">{fullAddress}</p>
      </div>
    </div>
  );
}
