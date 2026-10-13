// Sandboxels Mod: Blue Sand & Molten Blue Sand
// Auto-generated mod file

elements.molten_blue_sand = {
    color: "#ff3c00",
    behavior: behaviors.LIQUID,
    category: "states",
    state: "liquid",
    density: 1100,
    temp: 900,
    tempLow: 600,
    stateLow: "blue_sand",
};

elements.blue_sand = {
    color: "#0394fc",
    behavior: behaviors.POWDER,
    category: "land",
    state: "solid",
    density: 1200,
    tempHigh: 800,
    stateHigh: "molten_blue_sand",
};
