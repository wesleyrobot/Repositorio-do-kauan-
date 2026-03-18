"use client";
import { useState } from "react";

interface Props {
  title: string;
  institution: string;
  period: string;
  current?: boolean;
  type: "academic" | "course";
}

export default function EducationCard({ title, institution, period, current, type }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        minHeight: "220px",
        backgroundColor: "rgba(5, 12, 35, 0.85)",
        borderRadius: "16px",
        border: `1px solid ${hovered ? "rgba(59,130,246,0.9)" : "rgba(59,130,246,0.5)"}`,
        boxShadow: hovered
          ? "0 0 18px rgba(59,130,246,0.8), 0 0 40px rgba(59,130,246,0.3), inset 0 0 20px rgba(59,130,246,0.08)"
          : "0 0 10px rgba(59,130,246,0.5), 0 0 25px rgba(59,130,246,0.15), inset 0 0 12px rgba(59,130,246,0.05)",
        transition: "all 0.35s ease",
        cursor: "pointer",
        padding: "20px",
        display: "flex",
        flexDirection: "column" as const,
        gap: "10px",
        color: "#F9F9F9",
      }}
    >
      {/* Icon */}
      <div style={{
        width: 40, height: 40, borderRadius: 12,
        background: "rgba(59,130,246,0.15)",
        border: "1px solid rgba(59,130,246,0.3)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        {type === "academic" ? (
          <svg width="20" height="20" fill="none" stroke="#60a5fa" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        ) : (
          <svg width="20" height="20" fill="none" stroke="#60a5fa" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )}
      </div>

      {/* Title */}
      <p style={{ fontWeight: 700, fontSize: "15px", lineHeight: 1.35, color: "#ffffff" }}>{title}</p>

      {/* Institution */}
      <p style={{ color: "#94a3b8", fontSize: "12px" }}>{institution}</p>

      {/* Divider */}
      <div style={{ width: "100%", height: 1, background: "rgba(59,130,246,0.2)", marginTop: "auto" }} />

      {/* Period */}
      {current ? (
        <span style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)",
          color: "#34d399", fontSize: "11px", letterSpacing: "0.04em",
          borderRadius: "999px", padding: "3px 10px", width: "fit-content",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399", animation: "pulse 2s infinite" }} />
          {period}
        </span>
      ) : (
        <span style={{
          fontSize: "12px", color: "#cbd5e1",
          background: "rgba(59,130,246,0.08)",
          border: "1px solid rgba(59,130,246,0.2)",
          borderRadius: "999px", padding: "3px 12px", width: "fit-content",
        }}>
          {period}
        </span>
      )}
    </div>
  );
}
