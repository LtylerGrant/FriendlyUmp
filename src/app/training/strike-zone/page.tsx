"use client";

import { useLevel } from "@/context/LevelContext";
import { STRIKE_ZONE_DIMENSIONS } from "@/data/levels";
import StrikeZoneViewer from "@/components/strike-zone/StrikeZoneViewer";
import StrikeZoneComparison from "@/components/strike-zone/StrikeZoneComparison";
import Link from "next/link";

export default function StrikeZoneTrainerPage() {
  const { level } = useLevel();
  const dims = STRIKE_ZONE_DIMENSIONS.find((d) => d.level === level);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/training" className="hover:text-emerald-700">Training</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Strike Zone</span>
      </nav>

      <h1 className="text-3xl font-bold mb-2">Strike Zone Trainer</h1>
      <p className="text-gray-600 mb-8">
        Click anywhere on the zone to place a pitch and see if it&apos;s a ball or strike.
        Use the level selector in the nav to switch between playing levels and see how the zone changes.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Interactive zone */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Practice Calling Pitches</h2>
          <div className="flex justify-center">
            <StrikeZoneViewer level={level} interactive={true} width={340} height={430} />
          </div>
        </div>

        {/* Zone info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Zone Details</h2>
          {dims && (
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Boundaries</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Top of zone:</span>
                    <span className="font-medium">{dims.topDescription}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bottom of zone:</span>
                    <span className="font-medium">{dims.bottomDescription}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Width:</span>
                    <span className="font-medium">{dims.widthInches} inches (plate width)</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h3 className="font-medium text-emerald-900 mb-2">Level Notes</h3>
                <p className="text-sm text-emerald-800">{dims.notes}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Tips</h3>
                <ul className="text-sm text-gray-600 space-y-1.5 list-disc list-inside">
                  <li>The zone is 3-dimensional — any part of the ball crossing any part of the zone is a strike</li>
                  <li>Judge the zone based on the batter&apos;s natural stance, not a crouch</li>
                  <li>Consistency matters more than a &quot;perfect&quot; zone</li>
                  <li>The green rectangle represents the rulebook zone</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Comparison */}
      <div className="border-t pt-8">
        <StrikeZoneComparison />
      </div>
    </div>
  );
}
