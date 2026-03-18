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
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      style={{
        width: "100%",
        height: "200px",
        backdropFilter: "blur(7px)",
        backgroundColor: "rgba(10, 20, 60, 0.55)",
        borderRadius: "20px",
        boxShadow: active
          ? "35px 35px 68px 0px rgba(59,130,246,0.5)"
          : "35px 35px 68px 0px rgba(59,130,246,0.12), inset -6px -6px 14px 0px rgba(59,130,246,0.2), inset 0px 8px 20px 0px rgba(20,50,110,0.35)",
        transition: "all 0.3s",
        cursor: "pointer",
        transform: active ? "scale(0.95)" : "scale(1)",
        border: active ? "1px solid rgba(59,130,246,0.6)" : "1px solid rgba(59,130,246,0.1)",
        padding: "14px",
        display: "flex",
        flexDirection: "column" as const,
        gap: "7px",
        color: "#F9F9F9",
      }}
    >
      {/* Icon */}
      <div style={{
        width: 32, height: 32, borderRadius: 10,
        background: type === "academic" ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.07)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        {type === "academic" ? (
          <svg width="16" height="16" fill="none" stroke={current ? "#60a5fa" : "#7ca0d4"} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        ) : (
          <svg width="16" height="16" fill="none" stroke="#93c5fd" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )}
      </div>

      {/* Title */}
      <p style={{ fontWeight: 600, fontSize: "12px", lineHeight: 1.35, color: "#e2e8f0" }}>{title}</p>

      {/* Institution */}
      <p style={{ color: "#93c5fd", fontSize: "10px", fontWeight: 500 }}>{institution}</p>

      {/* Divider */}
      <div style={{ width: 28, height: 1, background: "rgba(147,197,253,0.25)", marginTop: "auto" }} />

      {/* Period */}
      {current ? (
        <span style={{
          display: "inline-flex", alignItems: "center", gap: "5px",
          background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)",
          color: "#34d399", fontSize: "8px", letterSpacing: "0.07em",
          textTransform: "uppercase" as const, borderRadius: "999px",
          padding: "2px 8px", width: "fit-content",
        }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#34d399" }} />
          {period}
        </span>
      ) : (
        <span style={{
          fontSize: "10px", color: "#94a3b8",
          background: "rgba(255,255,255,0.05)", borderRadius: "999px",
          padding: "2px 8px", width: "fit-content",
        }}>
          {period}
        </span>
      )}
    </div>
  );
}
