"use strict";

document.addEventListener("DOMContentLoaded", start);

// Sets variables, Hue, Saturation & Lightness to 0 (hsl)

let hex;
const HTML = {};

let color1H = 0;
let color1S = 0;
let color1L = 0;
let color2H = 0;
let color2S = 0;
let color2L = 0;
let color4H = 0;
let color4S = 0;
let color4L = 0;
let color5H = 0;
let color5S = 0;
let color5L = 0;

//Function start, selects color picker, base color and nuances in box 1,2,4,5 Box 3 is base color selected.
//Adds eventlisteners to harmonys, (clickable).
//Adds change of color picker and calls function showColor.

function start() {
  console.log("start");

  HTML.colorPicker = document.querySelector("#color_picker");
  HTML.baseColor = document.querySelector(".base_color");
  HTML.color1 = document.querySelector(".color_1");
  HTML.color2 = document.querySelector(".color_2");
  HTML.color4 = document.querySelector(".color_4");
  HTML.color5 = document.querySelector(".color_5");

  document.querySelector("#analogous").addEventListener("click", () => {
    console.log("analogous");
    analogous();
  });

  document.querySelector("#monochromatic").addEventListener("click", () => {
    console.log("monochromatic");
    monocromatic();
  });

  document.querySelector("#triad").addEventListener("click", () => {
    console.log("triad");
    triad();
  });

  document.querySelector("#complementary").addEventListener("click", () => {
    console.log("complementary");
    complementary();
  });

  document.querySelector("#compound").addEventListener("click", () => {
    console.log("compound");
    compound();
  });

  document.querySelector("#shades").addEventListener("click", () => {
    console.log("shades");
    shades();
  });

  HTML.colorPicker.addEventListener("change", showColor);
}

//Harmony functions: sets Hue, Saturation & Lightness for each harmony input.
//Calls function showColor.

function analogous() {
  color1H = 40;
  color1S = 0;
  color1L = 0;

  color2H = 20;
  color2S = 0;
  color2L = 0;

  color4H = 20;
  color4S = 0;
  color4L = 0;

  color5H = 40;
  color5S = 0;
  color5L = 0;
  showColor();
}

function monocromatic() {
  color1H = 0;
  color1S = 0;
  color1L = 20;

  color2H = 0;
  color2S = 0;
  color2L = 10;

  color4H = 0;
  color4S = 0;
  color4L = 10;

  color5H = 0;
  color5S = 0;
  color5L = 20;
  showColor();
}

function triad() {
  color1H = 120;
  color1S = 0;
  color1L = 0;

  color2H = 120;
  color2S = 0;
  color2L = 20;

  color4H = 120;
  color4S = 0;
  color4L = 20;

  color5H = 120;
  color5S = 0;
  color5L = 0;
  showColor();
}

function complementary() {
  color1H = 0;
  color1S = 0;
  color1L = 10;

  color2H = 0;
  color2S = 0;
  color2L = 20;

  color4H = 180;
  color4S = 0;
  color4L = 20;

  color5H = 180;
  color5S = 0;
  color5L = 0;
  showColor();
}

function compound() {
  color1H = 40;
  color1S = 0;
  color1L = 0;

  color2H = 20;
  color2S = 0;
  color2L = 0;

  color4H = 200;
  color4S = 0;
  color4L = 20;

  color5H = 180;
  color5S = 0;
  color5L = 0;
  showColor();
}

function shades() {
  color1H = 0;
  color1S = 0;
  color1L = 40;

  color2H = 0;
  color2S = 0;
  color2L = 20;

  color4H = 0;
  color4S = 0;
  color4L = 20;

  color5H = 0;
  color5S = 0;
  color5L = 40;
  showColor();
}

//Function showColor gets the hex value of colorpicker
//Calls function showHsl, ConvertRGBtoHSL,convertHEXtoRGB.

function showColor() {
  hex = HTML.colorPicker.value;

  showHSL(convertRGBtoHSL(convertHEXtoRGB(hex)));
}

//Function showHSL
//Sets the textcontent of the 5 color boxes in HEX, RGB & HSL Values.
//Styles the background color of the color boxes from the base color source.

function showHSL(hsl) {
  document.querySelector(".color_box_1>.hsl").textContent = `HSL(${hsl.h - color1H}, ${hsl.s - color1S}%, ${hsl.l - color1L}%)`;
  document.querySelector(".color_box_2>.hsl").textContent = `HSL(${hsl.h - color2H}, ${hsl.s - color2S}%, ${hsl.l - color2L}%)`;
  document.querySelector(".color_box_3>.hsl").textContent = `HSL(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  document.querySelector(".color_box_4>.hsl").textContent = `HSL(${hsl.h + color4H}, ${hsl.s + color4S}%, ${hsl.l + color4L}%)`;
  document.querySelector(".color_box_5>.hsl").textContent = `HSL(${hsl.h + color5H}, ${hsl.s + color5S}%, ${hsl.l + color5L}%)`;

  HTML.color1.style.backgroundColor = `HSL(${hsl.h - color1H}, ${hsl.s - color1S}%, ${hsl.l - color1L}%)`;
  HTML.color2.style.backgroundColor = `HSL(${hsl.h - color2H}, ${hsl.s - color2S}%, ${hsl.l - color2L}%)`;
  HTML.baseColor.style.backgroundColor = `HSL(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  HTML.color4.style.backgroundColor = `HSL(${hsl.h + color4H}, ${hsl.s + color4S}%, ${hsl.l + color4L}%)`;
  HTML.color5.style.backgroundColor = `HSL(${hsl.h + color5H}, ${hsl.s + color5S}%, ${hsl.l + color5L}%)`;

  document.querySelector(".color_box_1>.rgb").textContent = `RGB(${convertHSLtoRGB(hsl.h - color1H, hsl.s - color1S, hsl.l - color1L).r}, ${convertHSLtoRGB(hsl.h - color1H, hsl.s - color1S, hsl.l - color1L).g}, ${convertHSLtoRGB(hsl.h - color1H, hsl.s - color1S, hsl.l - color1L).b})`;
  document.querySelector(".color_box_2>.rgb").textContent = `RGB(${convertHSLtoRGB(hsl.h - color2H, hsl.s - color2S, hsl.l - color2L).r}, ${convertHSLtoRGB(hsl.h - color2H, hsl.s - color2S, hsl.l - color2L).g}, ${convertHSLtoRGB(hsl.h - color2H, hsl.s - color2S, hsl.l - color2L).b})`;
  document.querySelector(".color_box_3>.rgb").textContent = `RGB(${convertHSLtoRGB(hsl.h, hsl.s, hsl.l).r}, ${convertHSLtoRGB(hsl.h, hsl.s, hsl.l).g}, ${convertHSLtoRGB(hsl.h, hsl.s, hsl.l).b})`;
  document.querySelector(".color_box_4>.rgb").textContent = `RGB(${convertHSLtoRGB(hsl.h + color4H, hsl.s + color4S, hsl.l + color4L).r}, ${convertHSLtoRGB(hsl.h + color4H, hsl.s + color4S, hsl.l + color4L).g}, ${convertHSLtoRGB(hsl.h + color4H, hsl.s + color4S, hsl.l + color4L).b})`;
  document.querySelector(".color_box_5>.rgb").textContent = `RGB(${convertHSLtoRGB(hsl.h + color5H, hsl.s + color5S, hsl.l + color5L).r}, ${convertHSLtoRGB(hsl.h + color5H, hsl.s + color5S, hsl.l + color5L).g}, ${convertHSLtoRGB(hsl.h + color5H, hsl.s + color5S, hsl.l + color5L).b})`;

  document.querySelector(".color_box_1>.hex").textContent = convertHSLtoHEX(hsl.h - color1H, hsl.s - color1S, hsl.l - color1L).toUpperCase();
  document.querySelector(".color_box_2>.hex").textContent = convertHSLtoHEX(hsl.h - color2H, hsl.s - color2S, hsl.l - color2L).toUpperCase();
  document.querySelector(".color_box_3>.hex").textContent = convertHSLtoHEX(hsl.h, hsl.s, hsl.l).toUpperCase();
  document.querySelector(".color_box_4>.hex").textContent = convertHSLtoHEX(hsl.h - color4H, hsl.s - color4S, hsl.l - color4L).toUpperCase();
  document.querySelector(".color_box_5>.hex").textContent = convertHSLtoHEX(hsl.h - color5H, hsl.s - color5S, hsl.l - color5L).toUpperCase();
}

//Function convertHEXtoRGB(hex)
//parseInt the hex substring, and returns r,g,b.

function convertHEXtoRGB(hex) {
  const r = Number.parseInt(hex.substring(1, 3), 16);
  const g = Number.parseInt(hex.substring(3, 5), 16);
  const b = Number.parseInt(hex.substring(5, 7), 16);

  return { r, g, b };
}

//Function convertRGBtoHSL
//Converts RGB to HSL & returns parms/values.

function convertRGBtoHSL(rgb) {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  h = Math.floor(h);
  s = Math.floor(s);
  l = Math.floor(l);

  return { h, s, l };
}

//Function convertHSLtoRGB
//Converts HSL to RGB & returns parms/values
//Code taken from https://css-tricks.com/converting-color-spaces-in-javascript/

function convertHSLtoRGB(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return { r, g, b };
}

//Function convertHSLtoRGB
//Converts HSL to RGB & returns parms/values.
//Code taken from https://css-tricks.com/converting-color-spaces-in-javascript/

function convertHSLtoHEX(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}
