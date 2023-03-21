const ginDays = ["Friday", "Saturday", "Sunday"];
const gin = document.querySelector("#gin");

const date = new Date(),
  locale = "ie";

function getDayName() {
  return date.toLocaleDateString(locale, { weekday: "long" });
}

function howSoonIsNow() {
  return date.getHours();
}

function isItGinOClock() {
  if (
    ginDays.includes(getDayName()) &&
    howSoonIsNow() >= 17 &&
    howSoonIsNow() <= 22
  ) {
    gin.classList.add("gin--yes");
    gin.classList.remove("gin--no");
    gin.innerHTML = `<h2 class="gin__title">Yes<br>it's Gin O'Clock!</h2>`;
  } else {
    gin.classList.add("gin--no");
    gin.classList.remove("gin--yes");
    gin.innerHTML = `<h2 class="gin__title">Sorry<br>Not yet!</h2>`;
  }
}

isItGinOClock();

setInterval(() => {
  isItGinOClock();
}, 60000);
