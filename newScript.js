const dataEnterBox = document.getElementById("dataEnterBox");
const enterDataButton = document.getElementById("enterDataButton");
const extraHoursButton = document.getElementById("extraHoursButton");
const extraHoursBox = document.getElementById("extraHoursBox");
const monthDayBox = document.getElementById("monthDayBox");
const monthDayButton = document.getElementById("monthDayButton");

const removeHidden = (yesButton, boxHidden) => {
  document.getElementById(yesButton).addEventListener("click", function () {
    document.getElementById(boxHidden).removeAttribute("hidden");
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

removeHidden("yesExtraHour", "hasExtraHourDiv");
setHidden("noExtraHour", "hasExtraHourDiv");

removeHidden("yesFeriado", "hasFeriadoDiv");
setHidden("noFeriado", "hasFeriadoDiv");

openBox(monthDayButton, monthDayBox);
openBox(extraHoursButton, extraHoursBox);

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
