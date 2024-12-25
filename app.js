// script.js
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const keys = document.querySelectorAll(".key");
  
    keys.forEach((key) => {
      key.addEventListener("click", () => {
        const keyValue = key.textContent;
  
        if (keyValue === "Backspace") {
          display.value = display.value.slice(0, -1);
        } else if (keyValue === "Enter") {
          display.value += "\n";
        } else if (keyValue === "Space") {
          display.value += " ";
        } else if (keyValue !== "Shift" && keyValue !== "Ctrl" && keyValue !== "Alt" && keyValue !== "Caps Lock") {
          display.value += keyValue;
        }
      });
    });
  });
  