import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
        }}
      >
        <svg
          width="34"
          height="28"
          viewBox="0 0 48 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 36L14.5 4H22.7L12.2 36H4Z" fill="#22d3ee" />
          <path d="M14.5 4H22.7L33.3 36H25.1L14.5 4Z" fill="#3b82f6" />
          <path d="M25.1 36L35.7 4H44L33.4 36H25.1Z" fill="#0284c7" />
          <circle cx="39.5" cy="8.5" r="3" fill="#22d3ee" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
