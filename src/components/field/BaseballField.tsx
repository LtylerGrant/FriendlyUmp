"use client";

interface BaseballFieldProps {
  width?: number;
  height?: number;
  runners?: { base: 1 | 2 | 3; label?: string }[];
  highlightZones?: string[];
  children?: React.ReactNode;
}

const HOME = { x: 250, y: 420 };
const FIRST = { x: 380, y: 290 };
const SECOND = { x: 250, y: 160 };
const THIRD = { x: 120, y: 290 };
const MOUND = { x: 250, y: 300 };

const BASE_POSITIONS: Record<number, { x: number; y: number }> = {
  1: FIRST,
  2: SECOND,
  3: THIRD,
};

const ZONE_HIGHLIGHTS: Record<string, { path: string; color: string }> = {
  infield: {
    path: `M${HOME.x},${HOME.y} L${FIRST.x},${FIRST.y} L${SECOND.x},${SECOND.y} L${THIRD.x},${THIRD.y} Z`,
    color: "rgba(234, 179, 8, 0.2)",
  },
  "home-plate": {
    path: `M${HOME.x - 25},${HOME.y - 25} L${HOME.x + 25},${HOME.y - 25} L${HOME.x + 25},${HOME.y + 25} L${HOME.x - 25},${HOME.y + 25} Z`,
    color: "rgba(239, 68, 68, 0.3)",
  },
  "first-base": {
    path: `M${FIRST.x - 25},${FIRST.y - 25} L${FIRST.x + 25},${FIRST.y - 25} L${FIRST.x + 25},${FIRST.y + 25} L${FIRST.x - 25},${FIRST.y + 25} Z`,
    color: "rgba(59, 130, 246, 0.3)",
  },
  "second-base": {
    path: `M${SECOND.x - 25},${SECOND.y - 25} L${SECOND.x + 25},${SECOND.y - 25} L${SECOND.x + 25},${SECOND.y + 25} L${SECOND.x - 25},${SECOND.y + 25} Z`,
    color: "rgba(59, 130, 246, 0.3)",
  },
  "shortstop-area": {
    path: `M170,200 L220,200 L220,260 L170,260 Z`,
    color: "rgba(168, 85, 247, 0.3)",
  },
  "running-lane": {
    path: `M${HOME.x + 10},${HOME.y} L${FIRST.x},${FIRST.y} L${FIRST.x + 15},${FIRST.y + 10} L${HOME.x + 25},${HOME.y + 10} Z`,
    color: "rgba(234, 179, 8, 0.3)",
  },
};

export default function BaseballField({
  width = 500,
  height = 480,
  runners = [],
  highlightZones = [],
  children,
}: BaseballFieldProps) {
  return (
    <svg viewBox="0 0 500 480" width={width} height={height} className="bg-emerald-900 rounded-lg">
      {/* Outfield grass */}
      <ellipse cx={250} cy={250} rx={230} ry={200} fill="#2d6a3f" />

      {/* Infield dirt */}
      <polygon
        points={`${HOME.x},${HOME.y} ${FIRST.x + 20},${FIRST.y} ${SECOND.x},${SECOND.y - 20} ${THIRD.x - 20},${THIRD.y}`}
        fill="#c4956a"
      />

      {/* Infield grass */}
      <polygon
        points={`${HOME.x},${HOME.y - 40} ${FIRST.x - 15},${FIRST.y + 10} ${SECOND.x},${SECOND.y + 25} ${THIRD.x + 15},${THIRD.y + 10}`}
        fill="#2d8a4e"
      />

      {/* Foul lines */}
      <line x1={HOME.x} y1={HOME.y} x2={30} y2={80} stroke="white" strokeWidth={2} />
      <line x1={HOME.x} y1={HOME.y} x2={470} y2={80} stroke="white" strokeWidth={2} />

      {/* Base paths */}
      <line x1={HOME.x} y1={HOME.y} x2={FIRST.x} y2={FIRST.y} stroke="white" strokeWidth={1.5} opacity={0.6} />
      <line x1={FIRST.x} y1={FIRST.y} x2={SECOND.x} y2={SECOND.y} stroke="white" strokeWidth={1.5} opacity={0.6} />
      <line x1={SECOND.x} y1={SECOND.y} x2={THIRD.x} y2={THIRD.y} stroke="white" strokeWidth={1.5} opacity={0.6} />
      <line x1={THIRD.x} y1={THIRD.y} x2={HOME.x} y2={HOME.y} stroke="white" strokeWidth={1.5} opacity={0.6} />

      {/* Pitcher's mound */}
      <circle cx={MOUND.x} cy={MOUND.y} r={16} fill="#c4956a" stroke="#a0785a" strokeWidth={1} />
      <rect x={MOUND.x - 10} y={MOUND.y - 2} width={20} height={4} fill="white" rx={1} />

      {/* Bases */}
      <rect x={FIRST.x - 8} y={FIRST.y - 8} width={16} height={16} fill="white" transform={`rotate(45,${FIRST.x},${FIRST.y})`} />
      <rect x={SECOND.x - 8} y={SECOND.y - 8} width={16} height={16} fill="white" transform={`rotate(45,${SECOND.x},${SECOND.y})`} />
      <rect x={THIRD.x - 8} y={THIRD.y - 8} width={16} height={16} fill="white" transform={`rotate(45,${THIRD.x},${THIRD.y})`} />

      {/* Home plate */}
      <polygon
        points={`${HOME.x},${HOME.y + 10} ${HOME.x - 8},${HOME.y + 4} ${HOME.x - 8},${HOME.y - 4} ${HOME.x + 8},${HOME.y - 4} ${HOME.x + 8},${HOME.y + 4}`}
        fill="white"
      />

      {/* Batter's boxes */}
      <rect x={HOME.x - 30} y={HOME.y - 18} width={18} height={36} fill="none" stroke="white" strokeWidth={1} opacity={0.5} />
      <rect x={HOME.x + 12} y={HOME.y - 18} width={18} height={36} fill="none" stroke="white" strokeWidth={1} opacity={0.5} />

      {/* Highlight zones */}
      {highlightZones.map((zone) => {
        const highlight = ZONE_HIGHLIGHTS[zone];
        if (!highlight) return null;
        return (
          <path
            key={zone}
            d={highlight.path}
            fill={highlight.color}
            stroke={highlight.color.replace(/[\d.]+\)$/, "0.6)")}
            strokeWidth={2}
          />
        );
      })}

      {/* Runners */}
      {runners.map((runner, i) => {
        const pos = BASE_POSITIONS[runner.base];
        if (!pos) return null;
        return (
          <g key={i}>
            <circle cx={pos.x} cy={pos.y - 20} r={10} fill="#3b82f6" stroke="white" strokeWidth={2} />
            {runner.label && (
              <text x={pos.x} y={pos.y - 17} textAnchor="middle" fill="white" fontSize={9} fontWeight="bold">
                {runner.label}
              </text>
            )}
          </g>
        );
      })}

      {children}
    </svg>
  );
}
