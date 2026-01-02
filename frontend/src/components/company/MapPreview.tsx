"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface MapPreviewProps {
  address: string;
}

export default function MapPreview({ address }: MapPreviewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const markerRef = useRef<maplibregl.Marker | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isNoAddress, setIsNoAddress] = useState(false);

  // Init map
  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: [
              "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
              "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
              "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
            ],
            tileSize: 256,
          },
        },
        layers: [
          {
            id: "osm",
            type: "raster",
            source: "osm",
            paint: {
              "raster-saturation": -1,
            },
          },
        ],
      },
      center: [0, 0],
      zoom: 2,
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  // Geocoding + marker
  useEffect(() => {
    if (!map.current || !address) return;

    const geocode = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            address
          )}`
        );
        const data = await res.json();

        // 🚫 Adresse invalide
        if (!data.length) {
          setIsNoAddress(true);
          return;
        }

        const lon = parseFloat(data[0].lon);
        const lat = parseFloat(data[0].lat);

        // Supprime ancien marker
        markerRef.current?.remove();

        // 📍 Marker simple et visible
        const el = document.createElement("div");
        el.className = "relative group cursor-pointer";

        const img = document.createElement("div");
        img.className = "size-6 rounded-full bg-[var(--primary)]";

        const pointer = document.createElement("div");
        pointer.className =
          "absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-[var(--primary)]";

        el.appendChild(img);
        el.appendChild(pointer);

        markerRef.current = new maplibregl.Marker({ element: el })
          .setLngLat([lon, lat])
          .addTo(map.current!);

        map.current!.setCenter([lon, lat]);
        map.current!.setZoom(17);
        map.current!.scrollZoom.disable();
        map.current!.boxZoom.disable();
        map.current!.dragRotate.disable();
        map.current!.dragPan.disable();
        map.current!.keyboard.disable();
        map.current!.doubleClickZoom.disable();
        map.current!.touchZoomRotate.disable();
      } catch (err) {
        console.error("Erreur geocoding :", err);
      } finally {
        setIsLoading(false);
      }
    };

    geocode();
  }, [address]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-[var(--primary)]">
        <span className="text-[var(--primaryText)]">Loading map...</span>
      </div>
    );
  }

  if (isNoAddress) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-[var(--primary)]">
        <span className="text-[var(--primaryText)]">
          No valid address provided
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}
