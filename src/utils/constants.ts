type TDictionary = {
  [key: string]: {
    [key: string]: number;
  };
};
type TWords = {
  [key: string]: number;
};

export const templates: TWords = {
  "**** ahead": 1,
  "Likely ****": 2,
  "If only I had a ****...": 3,
  "****, O ****": 4,
  "Ahh, ****...": 5,
  "No **** ahead": 6,
  "First off, ****": 7,
  "Didn't expect ****...": 8,
  "Behold, ****!": 9,
  "**** required ahead": 10,
  "Seek ****": 11,
  "Visions of ****...": 12,
  "Offer ****": 13,
  "****!": 14,
  "Be wary of ****": 15,
  "Still no ****...": 16,
  "Could this be a ****?": 17,
  "Praise the ****!": 18,
  "****?": 19,
  "Try ****": 20,
  "Why is it always ****?": 21,
  "Time for ****": 22,
  "Let there be ****": 23,
  "****...": 24,
};

export const words: TDictionary = {
  enemies: {
    enemy: 25,
    "weak foe": 26,
    "strong foe": 27,
    monster: 28,
    dragon: 29,
    boss: 30,
    sentry: 31,
    group: 32,
    pack: 33,
    decoy: 34,
    undead: 35,
    soldier: 36,
    knight: 37,
    cavalier: 38,
    archer: 39,
    sniper: 40,
    mage: 41,
    ordnance: 42,
    monarch: 43,
    lord: 44,
    "demi-human": 45,
    outsider: 46,
    giant: 47,
    horse: 48,
    dog: 49,
    wolf: 50,
    rat: 51,
    beast: 52,
    bird: 53,
    raptor: 54,
    snake: 55,
    crab: 56,
    prawn: 57,
    octopus: 58,
    bug: 59,
    scarab: 60,
    slug: 61,
    wraith: 62,
    skeleton: 63,
    monstrosity: 64,
    "ill-omened creature": 65,
  },
  people: {
    Tarnished: 66,
    warrior: 67,
    swordfighter: 68,
    knight: 69,
    samurai: 70,
    sorcerer: 71,
    cleric: 72,
    sage: 73,
    merchant: 74,
    teacher: 75,
    master: 76,
    friend: 77,
    lover: 78,
    "old dear": 79,
    "old codger": 80,
    angel: 81,
    "fat coinpurse": 82,
    pauper: 83,
    "good sort": 84,
    "wicked sort": 85,
    "plump sort": 86,
    "skinny sort": 87,
    "lovable sort": 88,
    "pathetic sort": 89,
    "strange sort": 90,
    "nimble sort": 91,
    "laggardly sort": 92,
    "invisible sort": 93,
    "unfathomable sort": 94,
    "giant sort": 95,
    sinner: 96,
    thief: 97,
    liar: 98,
    dastard: 99,
    traitor: 100,
    pair: 101,
    trio: 102,
    noble: 103,
    aristocrat: 104,
    hero: 105,
    champion: 106,
    monarch: 107,
    lord: 108,
    god: 109,
  },
  items: {
    item: 110,
    "necessary item": 111,
    "precious item": 112,
    something: 113,
    "something incredible": 114,
    "treasure chest": 115,
    corpse: 116,
    coffin: 117,
    trap: 118,
    armament: 119,
    shield: 120,
    bow: 121,
    "projectile weapon": 122,
    armor: 123,
    talisman: 124,
    skill: 125,
    sorcery: 126,
    incantation: 127,
    map: 128,
    material: 129,
    flower: 130,
    grass: 131,
    tree: 132,
    fruit: 133,
    seed: 134,
    mushroom: 135,
    tear: 136,
    crystal: 137,
    butterfly: 138,
    bug: 139,
    dung: 140,
    grace: 141,
    door: 142,
    key: 143,
    ladder: 144,
    lever: 145,
    lift: 146,
    spiritspring: 147,
    "sending gate": 148,
    "stone astrolabe": 149,
    "Birdseye Telescope": 150,
    message: 151,
    bloodstain: 152,
    Erdtree: 153,
    "Elden Ring": 154,
  },
  "battle techniques": {
    "close-quarters battle": 155,
    "ranged battle": 156,
    "horseback battle": 157,
    "luring out": 158,
    "defeating one-by-one": 159,
    "taking on all at once": 160,
    "rushing in": 161,
    stealth: 162,
    mimicry: 163,
    confusion: 164,
    pursuit: 165,
    fleeing: 166,
    summoning: 167,
    "circling around": 168,
    "jumping off": 169,
    "dashing through": 170,
    "brief respite": 171,
  },
  actions: {
    attacking: 172,
    "jump attack": 173,
    "running attack": 174,
    "critical hit": 175,
    "two-handing": 176,
    blocking: 177,
    parrying: 178,
    "guard counter": 179,
    sorcery: 180,
    incantation: 181,
    skill: 182,
    summoning: 183,
    throwing: 184,
    healing: 185,
    running: 186,
    rolling: 187,
    backstepping: 188,
    jumping: 189,
    crouching: 190,
    "target lock": 191,
    "item crafting": 192,
    gesturing: 193,
  },
  situations: {
    morning: 194,
    noon: 195,
    evening: 196,
    night: 197,
    "clear sky": 198,
    overcast: 199,
    rain: 200,
    storm: 201,
    mist: 202,
    snow: 203,
    patrolling: 204,
    procession: 205,
    crowd: 206,
    "surprise attack": 207,
    ambush: 208,
    "pincer attack": 209,
    "beating to a pulp": 210,
    battle: 211,
    reinforcements: 212,
    ritual: 213,
    explosion: 214,
    "high spot": 215,
    "defensible spot": 216,
    "climbable spot": 217,
    "bright spot": 218,
    "dark spot": 219,
    "open area": 220,
    "cramped area": 221,
    "hiding place": 222,
    "sniping spot": 223,
    "recon spot": 224,
    safety: 225,
    danger: 226,
    "gorgeous view": 227,
    detour: 228,
    "hidden path": 229,
    "secret passage": 230,
    shortcut: 231,
    "dead end": 232,
    "looking away": 233,
    unnoticed: 234,
    "out of stamina": 235,
  },
  places: {
    "high road": 236,
    checkpoint: 237,
    bridge: 238,
    castle: 239,
    fort: 240,
    city: 241,
    ruins: 242,
    church: 243,
    tower: 244,
    "camp site": 245,
    house: 246,
    cemetery: 247,
    "underground tomb": 248,
    tunnel: 249,
    cave: 250,
    evergaol: 251,
    "great tree": 252,
    cellar: 253,
    surface: 254,
    underground: 255,
    forest: 256,
    river: 257,
    lake: 258,
    bog: 259,
    mountain: 260,
    valley: 261,
    cliff: 262,
    waterside: 263,
    nest: 264,
    hole: 265,
  },
  directions: {
    east: 266,
    west: 267,
    south: 268,
    north: 269,
    ahead: 270,
    behind: 271,
    left: 272,
    right: 273,
    center: 274,
    up: 275,
    down: 276,
    edge: 277,
  },
  "body parts": {
    head: 278,
    stomach: 279,
    back: 280,
    arms: 281,
    legs: 282,
    rump: 283,
    tail: 284,
    core: 285,
    fingers: 286,
  },
  affinities: {
    physical: 286,
    standard: 287,
    striking: 288,
    slashing: 289,
    piercing: 290,
    fire: 291,
    lightning: 292,
    magic: 293,
    holy: 294,
    poison: 295,
    toxic: 296,
    "scarlet rot": 297,
    "blood loss": 298,
    frost: 299,
    sleep: 300,
    madness: 301,
    death: 302,
  },
  concepts: {
    life: 303,
    Death: 304,
    light: 305,
    dark: 306,
    stars: 307,
    fire: 308,
    Order: 309,
    chaos: 310,
    joy: 311,
    wrath: 312,
    suffering: 313,
    sadness: 314,
    comfort: 315,
    bliss: 316,
    misfortune: 317,
    "good fortune": 318,
    "bad luck": 319,
    hope: 320,
    despair: 321,
    victory: 322,
    defeat: 323,
    research: 324,
    faith: 325,
    abundance: 326,
    rot: 327,
    loyalty: 328,
    injustice: 329,
    secret: 330,
    opportunity: 331,
    pickle: 332,
    clue: 333,
    friendship: 334,
    love: 335,
    bravery: 336,
    vigor: 337,
    fortitude: 338,
    confidence: 339,
    distracted: 340,
    unguarded: 341,
    introspection: 342,
    regret: 343,
    resignation: 344,
    futility: 345,
    "on the brink": 346,
    betrayal: 347,
    revenge: 348,
    destruction: 349,
    recklessness: 350,
    calmness: 351,
    vigilance: 352,
    tranquility: 353,
    sound: 354,
    tears: 355,
    sleep: 356,
    depths: 357,
    dregs: 358,
    fear: 359,
    sacrifice: 360,
    ruin: 361,
  },
  phrases: {
    "good luck": 361,
    "look carefully": 362,
    "listen carefully": 363,
    "think carefully": 364,
    "well done": 365,
    "I did it!": 366,
    "I've failed...": 367,
    "here!": 368,
    "not here!": 369,
    "don't you dare!": 370,
    "do it!": 371,
    "I can't take this...": 372,
    "don't think": 373,
    "so lonely...": 374,
    "here again...": 375,
    "just getting started": 376,
    "stay calm": 377,
    "keep moving": 378,
    "turn back": 379,
    "give up": 380,
    "don't give up": 381,
    "help me...": 382,
    "I don't believe it...": 383,
    "too high up": 384,
    "I want to go home...": 385,
    "it's like a dream...": 386,
    "seems familiar...": 387,
    "beautiful...": 388,
    "you don't have the right": 389,
    "are you ready?": 390,
  },
};

export const conjunctions: TWords = {
  "and then": 391,
  or: 392,
  but: 393,
  therefore: 394,
  "in short": 395,
  except: 396,
  "by the way": 397,
  "so to speak": 398,
  "all the more": 399,
  ",": 400,
};
