"use client";
import { useState } from "react";

interface Props {
  role: string;
  company: string;
  period: string;
  current: boolean;
  description: string;
}

export default function ExperienceCard({ role, company, period, current, description }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "190px",
        minHeight: "254px",
        background: "linear-gradient(344deg, rgba(4,12,40,1) 0%, rgba(2,6,20,1) 50%)",
        boxShadow: hovered
          ? "4px 6px 24px #0033aa44, 0 0 0 1px rgba(59,130,246,0.35)"
          : "4px 6px 14px #00000055, 0 0 0 1px rgba(59,130,246,0.12)",
        borderRadius: "10px",
        padding: "16px",
        transition: "all .3s",
        marginTop: hovered ? "-30px" : "0px",
        display: "flex",
        flexDirection: "column" as const,
        gap: "8px",
        overflow: "hidden",
        color: "#F9F9F9",
        flexShrink: 0,
      }}
    >
      {current && (
        <span style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
          color: "#34d399", fontSize: "9px", letterSpacing: "0.08em",
          textTransform: "uppercase", borderRadius: "999px", padding: "2px 8px", width: "fit-content",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399", display: "inline-block" }} />
          Atual
        </span>
      )}

      <p style={{ fontWeight: 600, fontSize: "13px", lineHeight: 1.35 }}>{role}</p>
      <p style={{ color: "#60a5fa", fontSize: "11px", fontWeight: 500 }}>{company}</p>
      <div style={{ width: 32, height: 1, background: "rgba(59,130,246,0.4)" }} />
      <p style={{ fontSize: "11px", color: current ? "#34d399" : "#6b7280" }}>{period}</p>
      <p style={{ fontSize: "11px", color: "#9ca3af", lineHeight: 1.6, marginTop: "auto" }}>{description}</p>
    </div>
  );
}
