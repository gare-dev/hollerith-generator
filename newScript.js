document.getElementById("yes13YO").addEventListener("click", function () {
  document.getElementById("hasChildren").removeAttribute("hidden");
});


document.getElementById("no13YO").addEventListener("click", function () {
  document.getElementById("hasChildren").setAttribute("hidden", "");
});


document.getElementById("yesExtraHour").addEventListener("click", function () {
  document.getElementById("hasExtraHourDiv").removeAttribute("hidden");
});


document.getElementById("noExtraHour").addEventListener("click", function () {
  document.getElementById("hasExtraHourDiv").setAttribute("hidden", "");
});


document.getElementById("yesFeriado").addEventListener("click", function () {
  document.getElementById("hasFeriadoDiv").removeAttribute("hidden");
});

document.getElementById("noFeriado").addEventListener("click", function () {
  document.getElementById("hasFeriadoDiv").setAttribute("hidden", "");
});


const dataEnterBox = document.getElementById("dataEnterBox");
const enterDataButton = document.getElementById("enterDataButton");

enterDataButton.addEventListener("click", function () {
  if (dataEnterBox.style.height === "460px") {
    dataEnterBox.style.height = "70px";
    enterDataButton.style.cursor = "pointer";
  } else {
    dataEnterBox.style.height = "460px";
    dataEnterBox.style.cursor = "default";
  }
});

const extraHoursButton = document.getElementById("extraHoursButton");
const extraHoursBox = document.getElementById("extraHoursBox");

extraHoursButton.addEventListener("click", function () {
  if (extraHoursBox.style.height === "490px") {
    extraHoursBox.style.height = "70px";
    extraHoursBox.style.cursor = "pointer"
  } else {
    extraHoursBox.style.height = "490px";
    extraHoursBox.style.cursor = "default"

  }
});

const monthDayBox = document.getElementById("monthDayBox");
const monthDayButton = document.getElementById("monthDayButton");

monthDayButton.addEventListener("click", function () {
  if (monthDayBox.style.height === "490px") {
    monthDayBox.style.height = "70px";
    monthDayBox.style.cursor = "pointer"
  } else {
    monthDayBox.style.height = "490px";
    monthDayBox.style.cursor = "default"
  }
});
