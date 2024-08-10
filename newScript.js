const dataEnterBox = document.getElementById("dataEnterBox");
const enterDataButton = document.getElementById("enterDataButton");
const extraHoursButton = document.getElementById("extraHoursButton");
const extraHoursBox = document.getElementById("extraHoursBox");
const monthDayBox = document.getElementById("monthDayBox");
const monthDayButton = document.getElementById("monthDayButton");
const inputQtFilhos = document.getElementById("inputQtFilhos");
const inputQtHorasSeg = document.getElementById("inputQtHoras");
const inputQtHorasFeriado = document.getElementById("inputQtHorasFeriado");

const yesExtraHour = document.getElementById("yesExtraHour");
const noExtraHour = document.getElementById("noExtraHour");
const hasExtraHourDiv = document.getElementById("hasExtraHourDiv");

const yesFeriado = document.getElementById("yesFeriado");
const noFeriado = document.getElementById("noFeriado");
const hasFeriadoDiv = document.getElementById("hasFeriadoDiv");

enterDataButton.addEventListener("click", () => {
  if (
    dataEnterBox.style.height === "350px" ||
    dataEnterBox.style.height === "420px"
  ) {
    dataEnterBox.style.height = "70px";
    dataEnterBox.style.cursor = "pointer";
  } else if (document.getElementById("hasChildren").hasAttribute("hidden")) {
    dataEnterBox.style.height = "350px";
    dataEnterBox.style.cursor = "default";
  } else if (
    document.getElementById("hasChildren").hasAttribute("hidden") === false
  ) {
    dataEnterBox.style.height = "420px";
  }
});

document.getElementById("yes13YO").addEventListener("click", () => {
  dataEnterBox.style.height = "420px";
  setTimeout(() => {
    document.getElementById("hasChildren").removeAttribute("hidden");
  }, 1100);
});

document.getElementById("no13YO").addEventListener("click", () => {
  dataEnterBox.style.height = "350px";
  document.getElementById("hasChildren").setAttribute("hidden", "");
});

const removeHidden = (yesButton, boxHidden, input) => {
  document.getElementById(yesButton).addEventListener("click", function () {
    document.getElementById(boxHidden).removeAttribute("hidden");
    input.focus();
  });
};

const setHidden = (noButton, boxHiden) => {
  document.getElementById(noButton).addEventListener("click", function () {
    document.getElementById(boxHiden).setAttribute("hidden", "");
  });
};

const openBox = (h2Button, box) => {
  h2Button.addEventListener("click", function () {
    if (box.style.height === "490px") {
      box.style.height = "70px";
      box.style.cursor = "pointer";
    } else {
      box.style.height = "490px";
      box.style.cursor = "default";
    }
  });
};

extraHoursButton.addEventListener("click", () => {
  if (
    extraHoursBox.style.height === "70px" ||
    hasExtraHourDiv.hasAttribute("hidden") === false
  ) {
    extraHoursBox.style.height = "350px";
  } else if (
    extraHoursBox.style.height === "350px" &&
    hasExtraHourDiv.hasAttribute("hidden") &&
    hasFeriadoDiv.hasAttribute("hidden")
  ) {
    extraHoursBox.style.height = "70px";
  } else if (
    hasExtraHourDiv.hasAttribute("hidden") === false &&
    hasFeriadoDiv.hasAttribute("hidden") === false &&
    extraHoursBox.style.height === "500px"
  ) {
    extraHoursBox.style.height = "70px";
  }
});

yesExtraHour.addEventListener("click", () => {
  extraHoursBox.style.height = "420px";

  setTimeout(() => {
    hasExtraHourDiv.removeAttribute("hidden");
  }, 1400);
});

noExtraHour.addEventListener("click", () => {
  hasExtraHourDiv.setAttribute("hidden", "");
  if (hasFeriadoDiv.hasAttribute("hidden")) {
    extraHoursBox.style.height = "350px";
  } else {
    extraHoursBox.style.height = "500px";
  }
});

yesFeriado.addEventListener("click", () => {
  if (hasExtraHourDiv.hasAttribute("hidden")) {
    extraHoursBox.style.height = "400px";
  } else {
    extraHoursBox.style.height = "500px";
  }

  setTimeout(() => {
    hasFeriadoDiv.removeAttribute("hidden");
  }, 1400);
});

noFeriado.addEventListener("click", () => {
  hasFeriadoDiv.setAttribute("hidden", "");
  if (hasExtraHourDiv.hasAttribute("hidden") === false) {
    extraHoursBox.style.height = "400px";
  } else {
    extraHoursBox.style.height = "350px";
  }
});

openBox(monthDayButton, monthDayBox);
