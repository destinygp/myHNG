const updateDayOfTheWeek = () => {
  const weekDays = document.getElementById("currentDayOfTheWeek");
  const dayOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDayOfTheWeek = dayOfTheWeek[currentDate.getDay()];
  weekDays.textContent = `${currentDayOfTheWeek}`;
};

const getCurrentUTCTime = () => {
  const currentDate = new Date();
  const currentUTCTime = currentDate.getTime();
  return currentUTCTime;
};

const updateCurrentUTCTime = () => {
  const currentUTCTimeElement = document.getElementById("currentUTCTime");
  const currentUTCTime = getCurrentUTCTime();
  currentUTCTimeElement.textContent = `${currentUTCTime}`;
};

updateCurrentUTCTime();
updateDayOfTheWeek();
