import { LevelMeta, StrikeZoneDimensions } from "@/lib/types";

export const LEVELS: LevelMeta[] = [
  {
    id: "little-league",
    name: "Little League",
    shortName: "LL",
    color: "text-green-700",
    bgColor: "bg-green-100",
    description: "Ages 9-12. Focuses on learning fundamentals with modified rules for safety and development.",
  },
  {
    id: "middle-school",
    name: "Middle School",
    shortName: "MS",
    color: "text-blue-700",
    bgColor: "bg-blue-100",
    description: "Ages 12-14. Transitional rules bridging youth and high school baseball.",
  },
  {
    id: "high-school",
    name: "High School",
    shortName: "HS",
    color: "text-purple-700",
    bgColor: "bg-purple-100",
    description: "NFHS rules. More advanced gameplay with standard field dimensions.",
  },
  {
    id: "ncaa",
    name: "NCAA",
    shortName: "NCAA",
    color: "text-orange-700",
    bgColor: "bg-orange-100",
    description: "College baseball with specific NCAA regulations and replay review.",
  },
  {
    id: "mlb",
    name: "MLB",
    shortName: "MLB",
    color: "text-red-700",
    bgColor: "bg-red-100",
    description: "Professional rules. The standard for the highest level of play.",
  },
];

export const STRIKE_ZONE_DIMENSIONS: StrikeZoneDimensions[] = [
  {
    level: "little-league",
    topRatio: 0.58,
    bottomRatio: 0.24,
    widthInches: 17,
    topDescription: "At the armpits",
    bottomDescription: "Top of the knees",
    notes: "Little League uses a slightly more generous zone to encourage swinging. Umpires are encouraged to call strikes on pitches near the zone.",
  },
  {
    level: "middle-school",
    topRatio: 0.56,
    bottomRatio: 0.26,
    widthInches: 17,
    topDescription: "Midpoint between shoulders and belt",
    bottomDescription: "Just below the kneecap",
    notes: "Similar to high school but umpires may give slightly more latitude as players develop.",
  },
  {
    level: "high-school",
    topRatio: 0.55,
    bottomRatio: 0.27,
    widthInches: 17,
    topDescription: "Midpoint between shoulders and top of pants",
    bottomDescription: "Bottom of the kneecap",
    notes: "NFHS defines the zone from the midpoint between the shoulders and the waist to the bottom of the knees.",
  },
  {
    level: "ncaa",
    topRatio: 0.54,
    bottomRatio: 0.27,
    widthInches: 17,
    topDescription: "Midpoint between shoulders and top of pants",
    bottomDescription: "Bottom of the kneecap",
    notes: "NCAA follows a similar definition to NFHS with emphasis on consistency across games.",
  },
  {
    level: "mlb",
    topRatio: 0.52,
    bottomRatio: 0.28,
    widthInches: 17,
    topDescription: "Midpoint between top of shoulders and top of uniform pants",
    bottomDescription: "Hollow beneath the kneecap",
    notes: "The official MLB strike zone. In practice, the called zone can vary slightly by umpire tendencies.",
  },
];

export function getLevelMeta(levelId: string): LevelMeta | undefined {
  return LEVELS.find((l) => l.id === levelId);
}
