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

removeHidden("yes13YO", "hasChildren");
setHidden("no13YO", "hasChildren");

removeHidden("yesExtraHour", "hasExtraHourDiv");
setHidden("noExtraHour", "hasExtraHourDiv");

removeHidden("yesFeriado", "hasFeriadoDiv");
setHidden("noFeriado", "hasFeriadoDiv");

openBox(monthDayButton, monthDayBox);
openBox(extraHoursButton, extraHoursBox);
openBox(enterDataButton, dataEnterBox);
