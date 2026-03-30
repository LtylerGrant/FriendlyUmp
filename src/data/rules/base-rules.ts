import { BaseRule } from "@/lib/types";

export const BASE_RULES: BaseRule[] = [
  // Strike Zone
  {
    id: "sz-001",
    category: "strike-zone",
    title: "Strike Zone Definition",
    summary: "The strike zone is the area over home plate between the batter's knees and midpoint of the torso.",
    details: "The strike zone is a three-dimensional area over home plate. The top is defined as the midpoint between the top of the batter's shoulders and the top of the uniform pants. The bottom is the hollow beneath the kneecap. The width is the 17-inch width of home plate. The zone is determined by the batter's stance as they prepare to swing at a pitched ball.",
    appliesTo: "all",
  },
  {
    id: "sz-002",
    category: "strike-zone",
    title: "Called Third Strike",
    summary: "A batter is out on a third strike, whether swinging or called.",
    details: "When a batter accumulates three strikes, they are out. A called third strike occurs when the umpire judges the pitch to be in the strike zone and the batter does not swing. The batter may not advance to first base on a called third strike (uncaught third strike rules vary by level).",
    appliesTo: "all",
  },

  // Pitching
  {
    id: "pitch-001",
    category: "pitching",
    title: "Balk - Failure to Come Set",
    summary: "A pitcher must come to a complete stop in the set position before delivering a pitch with runners on base.",
    details: "With runners on base, the pitcher must come to a discernible stop with the ball in the glove at or near the body before delivering the pitch. Failure to stop constitutes a balk, and all runners advance one base.",
    appliesTo: "all",
  },
  {
    id: "pitch-002",
    category: "pitching",
    title: "Balk - Faking a Throw to First",
    summary: "The pitcher may not fake a throw to first base while in contact with the rubber.",
    details: "A pitcher on the rubber who fakes a throw to first base without completing the throw commits a balk. The pitcher must disengage the rubber before faking a throw to first base.",
    appliesTo: ["high-school", "ncaa", "mlb"],
  },
  {
    id: "pitch-003",
    category: "pitching",
    title: "Pitch Count / Inning Limits",
    summary: "Some levels impose pitch count or inning limits to protect young arms.",
    details: "Pitch count rules are designed to prevent arm injuries in developing players. The specific limits vary by age and level. Mandatory rest periods are required after reaching certain pitch count thresholds.",
    appliesTo: ["little-league", "middle-school"],
  },
  {
    id: "pitch-004",
    category: "pitching",
    title: "Illegal Pitch",
    summary: "A pitch delivered with an illegal motion or from an illegal position.",
    details: "An illegal pitch includes quick-pitching (delivering before the batter is set), pitching while not in contact with the rubber, or applying a foreign substance to the ball. Penalties vary by level.",
    appliesTo: "all",
  },

  // Batting
  {
    id: "bat-001",
    category: "batting",
    title: "Batting Out of Order",
    summary: "A batter who bats out of the lineup order may be called out on appeal.",
    details: "If a batter bats out of turn and the defensive team appeals before the next pitch, the batter who should have batted is called out. If not appealed before the next pitch, the at-bat stands and the next batter in order follows.",
    appliesTo: "all",
  },
  {
    id: "bat-002",
    category: "batting",
    title: "Designated Hitter",
    summary: "A designated hitter may bat in place of the pitcher.",
    details: "The DH rule allows a player to bat in place of the pitcher without playing a defensive position. The DH must be declared before the game begins and remains in the lineup for the entire game unless substituted.",
    appliesTo: ["ncaa", "mlb"],
  },

  // Base Running
  {
    id: "br-001",
    category: "base-running",
    title: "Stealing Bases",
    summary: "Runners may attempt to advance to the next base at their own risk.",
    details: "Base stealing is legal at most levels, though restrictions apply at lower levels. The runner may attempt to advance as soon as the pitch is released (or leaves the pitcher's hand). Rules about when stealing is allowed vary significantly by level.",
    appliesTo: "all",
  },
  {
    id: "br-002",
    category: "base-running",
    title: "Infield Fly Rule",
    summary: "With runners on first and second (or bases loaded) and less than 2 outs, a fair fly ball in the infield results in an automatic out.",
    details: "The infield fly rule prevents the defense from intentionally dropping a pop-up to turn a double or triple play. The batter is automatically out regardless of whether the ball is caught. Runners may advance at their own risk. The umpire must call 'Infield Fly' while the ball is in the air.",
    appliesTo: "all",
  },
  {
    id: "br-003",
    category: "base-running",
    title: "Running Lane Interference",
    summary: "A batter-runner must stay within the running lane on the way to first base.",
    details: "The last half of the distance from home to first base has a 3-foot running lane on the foul side. If the batter-runner runs outside this lane and interferes with the fielder taking the throw at first base, they may be called out for interference.",
    appliesTo: "all",
  },

  // Fielding
  {
    id: "fld-001",
    category: "fielding",
    title: "Obstruction",
    summary: "A fielder not in possession of the ball or not making a play may not impede a runner.",
    details: "Obstruction occurs when a fielder who is not in possession of the ball and not in the act of fielding the ball impedes the progress of any runner. The penalty depends on whether a play is being made on the obstructed runner.",
    appliesTo: "all",
  },

  // Interference
  {
    id: "int-001",
    category: "interference",
    title: "Batter Interference",
    summary: "A batter may not interfere with the catcher's attempt to throw out a runner.",
    details: "If a batter interferes with the catcher's fielding or throwing by stepping out of the batter's box or making any movement that hinders the catcher, the batter is out and runners return to their original bases.",
    appliesTo: "all",
  },
  {
    id: "int-002",
    category: "interference",
    title: "Runner Interference",
    summary: "A runner must avoid a fielder attempting to field a batted ball.",
    details: "A runner who interferes with a fielder attempting to field a batted ball is out. This includes intentionally running into a fielder or intentionally deflecting the course of a batted ball. The ball is dead and other runners return to the last base legally touched.",
    appliesTo: "all",
  },
  {
    id: "int-003",
    category: "interference",
    title: "Spectator / Coach Interference",
    summary: "Spectators or coaches may not interfere with live balls or players.",
    details: "If a spectator reaches onto the playing field and interferes with a ball in play, the umpire shall impose penalties to nullify the interference. If a coach physically assists a runner, the runner is out.",
    appliesTo: "all",
  },

  // Equipment
  {
    id: "eq-001",
    category: "equipment",
    title: "Bat Specifications",
    summary: "Bats must meet specific size, weight, and material requirements for each level.",
    details: "Baseball bats vary significantly by level. Rules govern maximum length, diameter, weight drop, and material (wood, aluminum, composite). Non-conforming bats result in the batter being called out and possible ejection.",
    appliesTo: "all",
  },
  {
    id: "eq-002",
    category: "equipment",
    title: "Protective Equipment",
    summary: "Catchers and batters must wear approved protective equipment.",
    details: "Catchers must wear a helmet, mask, throat guard, chest protector, shin guards, and a protective cup. Batters must wear an approved batting helmet. Requirements for additional protection (face guards, arm guards) vary by level.",
    appliesTo: "all",
  },

  // Game Management
  {
    id: "gm-001",
    category: "game-management",
    title: "Game Length",
    summary: "The number of innings and time limits vary by playing level.",
    details: "Game length differs across levels. Professional games are 9 innings with no time limit. Other levels may use fewer innings or impose time limits to manage game duration.",
    appliesTo: "all",
  },
  {
    id: "gm-002",
    category: "game-management",
    title: "Mercy Rule / Run Rule",
    summary: "A game may be ended early if one team has an insurmountable lead.",
    details: "Many levels implement a mercy rule (run rule) to end games when one team has a large lead after a certain number of innings. This respects the losing team's dignity and manages field time.",
    appliesTo: ["little-league", "middle-school", "high-school", "ncaa"],
  },
  {
    id: "gm-003",
    category: "game-management",
    title: "Ejection Authority",
    summary: "Umpires have the authority to eject players, coaches, and spectators.",
    details: "The umpire may eject any participant for unsportsmanlike conduct, arguing balls and strikes, or using profanity. At lower levels, umpires are encouraged to use warnings before ejection. The ejected person must leave the vicinity of the playing field.",
    appliesTo: "all",
  },
];
