let bgColor = document.getElementById("bgColorInput");
let fontColor = document.getElementById("fontColorInput");
let fontSize = document.getElementById("fontSizeInput");
let fontWeight = document.getElementById("fontWeightInput");
let padding = document.getElementById("paddingInput");
let borderRadius = document.getElementById("borderRadiusInput");
let button = document.getElementById("customButton");
button.classList.add("d-none");

function apply() {
    button.classList.remove("d-none");
    button.style.backgroundColor = bgColor.value;
    button.style.color = fontColor.value;
    button.style.fontSize = fontSize.value;
    button.style.fontWeight = fontWeight.value;
    button.style.padding = padding.value;
    button.style.borderRadius = borderRadius.value;
}

function reset() {
    button.classList.add("d-none");
    button.style.backgroundColor = "";
    button.style.color = "";
    button.style.fontSize = "";
    button.style.fontWeight = "";
    button.style.padding = "";
    button.style.borderRadius = "";
    bgColor.value = "";
    fontColor.value = "";
    fontSize.value = "";
    fontWeight.value = "";
    padding.value = "";
    borderRadius.value = "";
}
