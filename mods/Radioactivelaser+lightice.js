// Radioactive Laser and Ice Light Mod
elements.radioactive_laser = {
    color: "#39FF14", // Neon green
    category: "energy",
    state: "gas",
    density: 1,
    glow: 1, // Activates glow.js luminosity
    behavior: [
        "M1|M1|M1",
        "M1|XX|M1",
        "M1|M1|M1",
    ],
    tick: function(pixel) {
        for (var i = 0; i < adjacentCoords.length; i++) {
            var coord = adjacentCoords[i];
            if (!isEmpty(pixel.x+coord, pixel.y+coord, true)) {
                var otherPixel = pixelMap[pixel.x+coord][pixel.y+coord];
                if (otherPixel.element !== "radioactive_laser" && Math.random() < 0.1) {
                    otherPixel.element = "radiation"; 
                }
            }
        }
    }
};

elements.ice_light = {
    color: "#FFFF33", // Neon yellow
    behavior: behaviors.WALL, 
    category: "solids",
    state: "solid",
    glow: 0.8, // Slightly softer glow
    conduct: 0.5,
    tick: function(pixel) {
        for (var i = 0; i < adjacentCoords.length; i++) {
            var coord = adjacentCoords[i];
            if (!isEmpty(pixel.x+coord, pixel.y+coord, true)) {
                var otherPixel = pixelMap[pixel.x+coord][pixel.y+coord];
                if (otherPixel.temp > -200) {
                    otherPixel.temp -= 5; 
                }
            }
        }
    }
};
