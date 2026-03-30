"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { UmpireLevel } from "@/lib/types";
import { loadProgress, setCurrentLevel } from "@/lib/progress";

interface LevelContextType {
  level: UmpireLevel;
  setLevel: (level: UmpireLevel) => void;
}

const LevelContext = createContext<LevelContextType>({
  level: "high-school",
  setLevel: () => {},
});

export function LevelProvider({ children }: { children: ReactNode }) {
  const [level, setLevelState] = useState<UmpireLevel>("high-school");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const progress = loadProgress();
    setLevelState(progress.currentLevel);
    setMounted(true);
  }, []);

  const setLevel = (newLevel: UmpireLevel) => {
    setLevelState(newLevel);
    setCurrentLevel(newLevel);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LevelContext.Provider value={{ level, setLevel }}>
      {children}
    </LevelContext.Provider>
  );
}

export function useLevel() {
  return useContext(LevelContext);
}
