"use client";

import { LEVELS, STRIKE_ZONE_DIMENSIONS } from "@/data/levels";
import StrikeZoneViewer from "./StrikeZoneViewer";

export default function StrikeZoneComparison() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Compare Strike Zones Across Levels</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {LEVELS.map((level) => {
          const dims = STRIKE_ZONE_DIMENSIONS.find((d) => d.level === level.id);
          return (
            <div key={level.id} className="text-center">
              <StrikeZoneViewer
                level={level.id}
                interactive={false}
                showLabel={true}
                width={160}
                height={200}
              />
              {dims && (
                <p className="text-xs text-gray-500 mt-1">
                  Top: {(dims.topRatio * 100).toFixed(0)}% &middot; Bottom: {(dims.bottomRatio * 100).toFixed(0)}%
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
