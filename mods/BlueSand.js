blue_sand = {
  color: "#0394fc",
  behavior: behaviors.POWDER,
  category: "land",
  state: "solid"
};

elements.blue_sand = {
  color: "#0394fc",
  behavior: behaviors.POWDER,
  category: "land",
  state: "solid",
  density: 1200
};
// 1. Define the Molten Blue Sand element
elements.molten_blue_sand = {
    color: "#ff3c00",
    behavior: behaviors.LIQUID,
    category: "states",
    state: "liquid",
    density: 1100,
    temp: 900,
    // When it cools down below 600 degrees, it turns back into regular Blue Sand
    tempLow: 600,
    stateLow: "blue_sand",
};

// 2. Define the original Blue Sand element
elements.blue_sand = {
    color: "#0394fc",
    behavior: behaviors.POWDER,
    category: "land",
    state: "solid",
    density: 1200,
    // When it heats up past 800 degrees, it melts into Molten Blue Sand
    tempHigh: 800,
    stateHigh: "molten_blue_sand",
};
