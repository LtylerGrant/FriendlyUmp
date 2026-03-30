"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UmpireLevel } from "@/lib/types";
import { STRIKE_ZONE_DIMENSIONS } from "@/data/levels";

interface StrikeZoneViewerProps {
  level: UmpireLevel;
  interactive?: boolean;
  showLabel?: boolean;
  width?: number;
  height?: number;
}

interface PitchDot {
  x: number;
  y: number;
  isStrike: boolean;
}

const BATTER_HEIGHT = 280;
const PLATE_Y = 310;
const PLATE_WIDTH = 80;
const CENTER_X = 150;

export default function StrikeZoneViewer({
  level,
  interactive = false,
  showLabel = true,
  width = 300,
  height = 380,
}: StrikeZoneViewerProps) {
  const [pitches, setPitches] = useState<PitchDot[]>([]);
  const [lastCall, setLastCall] = useState<string | null>(null);

  const dims = STRIKE_ZONE_DIMENSIONS.find((d) => d.level === level);
  if (!dims) return null;

  const zoneTop = PLATE_Y - BATTER_HEIGHT * dims.topRatio;
  const zoneBottom = PLATE_Y - BATTER_HEIGHT * dims.bottomRatio;
  const zoneHeight = zoneBottom - zoneTop;
  const zoneLeft = CENTER_X - PLATE_WIDTH / 2;

  function isInZone(x: number, y: number): boolean {
    return x >= zoneLeft && x <= zoneLeft + PLATE_WIDTH && y >= zoneTop && y <= zoneBottom;
  }

  function handleClick(e: React.MouseEvent<SVGSVGElement>) {
    if (!interactive) return;
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const scaleX = 300 / rect.width;
    const scaleY = 380 / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    const strike = isInZone(x, y);
    setPitches((prev) => [...prev, { x, y, isStrike: strike }]);
    setLastCall(strike ? "STRIKE!" : "BALL!");
    setTimeout(() => setLastCall(null), 1500);
  }

  return (
    <div className="inline-block">
      {showLabel && (
        <p className="text-center text-sm font-medium text-gray-600 mb-2">
          {dims.level.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
        </p>
      )}
      <svg
        viewBox="0 0 300 380"
        width={width}
        height={height}
        className={`bg-gray-900 rounded-lg ${interactive ? "cursor-crosshair" : ""}`}
        onClick={handleClick}
      >
        {/* Batter silhouette (simplified) */}
        <g opacity={0.3}>
          {/* Head */}
          <circle cx={CENTER_X} cy={PLATE_Y - BATTER_HEIGHT * 0.85} r={14} fill="#666" />
          {/* Body */}
          <rect
            x={CENTER_X - 18}
            y={PLATE_Y - BATTER_HEIGHT * 0.78}
            width={36}
            height={BATTER_HEIGHT * 0.45}
            rx={8}
            fill="#666"
          />
          {/* Legs */}
          <rect x={CENTER_X - 16} y={PLATE_Y - BATTER_HEIGHT * 0.33} width={12} height={BATTER_HEIGHT * 0.3} rx={4} fill="#666" />
          <rect x={CENTER_X + 4} y={PLATE_Y - BATTER_HEIGHT * 0.33} width={12} height={BATTER_HEIGHT * 0.3} rx={4} fill="#666" />
          {/* Bat */}
          <line x1={CENTER_X + 18} y1={PLATE_Y - BATTER_HEIGHT * 0.7} x2={CENTER_X + 55} y2={PLATE_Y - BATTER_HEIGHT * 0.85} stroke="#888" strokeWidth={4} strokeLinecap="round" />
        </g>

        {/* Strike zone */}
        <motion.rect
          x={zoneLeft}
          y={zoneTop}
          width={PLATE_WIDTH}
          height={zoneHeight}
          fill="rgba(34, 197, 94, 0.15)"
          stroke="rgba(34, 197, 94, 0.8)"
          strokeWidth={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: zoneTop, height: zoneHeight }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          key={level}
        />

        {/* Zone grid lines */}
        {[1, 2].map((i) => (
          <g key={`grid-${i}`}>
            <line
              x1={zoneLeft + (PLATE_WIDTH / 3) * i}
              y1={zoneTop}
              x2={zoneLeft + (PLATE_WIDTH / 3) * i}
              y2={zoneTop + zoneHeight}
              stroke="rgba(34, 197, 94, 0.3)"
              strokeWidth={1}
              strokeDasharray="4,4"
            />
            <line
              x1={zoneLeft}
              y1={zoneTop + (zoneHeight / 3) * i}
              x2={zoneLeft + PLATE_WIDTH}
              y2={zoneTop + (zoneHeight / 3) * i}
              stroke="rgba(34, 197, 94, 0.3)"
              strokeWidth={1}
              strokeDasharray="4,4"
            />
          </g>
        ))}

        {/* Zone boundary labels */}
        <text x={zoneLeft + PLATE_WIDTH + 8} y={zoneTop + 4} fill="#22c55e" fontSize={9} opacity={0.8}>
          {dims.topDescription}
        </text>
        <text x={zoneLeft + PLATE_WIDTH + 8} y={zoneBottom + 4} fill="#22c55e" fontSize={9} opacity={0.8}>
          {dims.bottomDescription}
        </text>

        {/* Home plate */}
        <polygon
          points={`${CENTER_X - 42},${PLATE_Y + 5} ${CENTER_X - 42},${PLATE_Y + 15} ${CENTER_X},${PLATE_Y + 28} ${CENTER_X + 42},${PLATE_Y + 15} ${CENTER_X + 42},${PLATE_Y + 5}`}
          fill="#e5e7eb"
          stroke="#9ca3af"
          strokeWidth={1}
        />

        {/* Pitch dots */}
        {pitches.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={6}
            fill={p.isStrike ? "#22c55e" : "#ef4444"}
            opacity={0.8}
            stroke="white"
            strokeWidth={1.5}
          />
        ))}

        {/* Call overlay */}
        <AnimatePresence>
          {lastCall && (
            <motion.text
              x={CENTER_X}
              y={60}
              textAnchor="middle"
              fill={lastCall === "STRIKE!" ? "#22c55e" : "#ef4444"}
              fontSize={32}
              fontWeight="bold"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {lastCall}
            </motion.text>
          )}
        </AnimatePresence>

        {/* Interactive hint */}
        {interactive && pitches.length === 0 && (
          <text x={CENTER_X} y={50} textAnchor="middle" fill="#9ca3af" fontSize={12}>
            Click to place a pitch
          </text>
        )}
      </svg>

      {interactive && pitches.length > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setPitches([]);
          }}
          className="mt-2 text-sm text-gray-500 hover:text-gray-700 w-full text-center"
        >
          Clear pitches
        </button>
      )}
    </div>
  );
}
