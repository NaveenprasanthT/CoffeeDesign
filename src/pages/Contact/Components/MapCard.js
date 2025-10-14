"use client";
import React from "react";
import "./Styles/MapCard.css";

/**
 * Reusable Map Card Component
 * @param {string} address - Location address for the map.
 * @param {string} title - Optional label above the address.
 * @param {number} zoom - Map zoom level (1-21). Default 15.
 */
export default function MapCard({ address, title = "Address", zoom = 15 }) {
  const params = new URLSearchParams({
    q: address,
    z: String(zoom),
    output: "embed",
    hl: "en",
  });

  const src = `https://www.google.com/maps?${params.toString()}`;

  return (
    <section className="map-card" aria-label={`Map for ${address}`}>
      <header className="map-header">
        <div className="map-label">{title}</div>
        <p className="map-address" title={address}>
          {address}
        </p>
      </header>

      <div className="map-wrap">
        <iframe
          className="map-iframe"
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label={`Google Map showing ${address}`}
          title={`Google Map for ${address}`}
        />
      </div>

      <noscript>
        <div className="map-noscript">
          Maps preview requires JavaScript. Open in{" "}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              address
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Google Maps
          </a>
          .
        </div>
      </noscript>
    </section>
  );
}
