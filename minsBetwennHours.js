// *                  CODERBYTE BEGINNER CHALLENGE                                        *
// *                                                                                      *
// *  Counting Minutes I                                                                  *
// *  Using the JavaScript language, have the function CountingMinutesI(str) take the     *
// *  str parameter being passed which will be two times (each properly formatted with    *
// *  a colon and am or pm) separated by a hyphen and return the total number of minutes  *
// *  between the two times. The time will be in a 12 hour clock format. For example:     *
// *  if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am     *
// *  the output should be 1320.                                                          *
// *

//split the string into two timeS - end/start
//identify if it's am or pm
//if it's pm add 12 so its 24 hours
//figure out where the am or pm is am/pm am/am pm/pm pm/am

const getTimeInMinutes = (timeStr) => {
  const timeOneTempArray = timeStr.split("");
  const timeOneAmPm = timeOneTempArray
    .splice(timeOneTempArray.length - 2, timeOneTempArray.length)
    .join("");
  const timeOneClock = timeOneTempArray.join("");
  let [timeOneHours, timeOneMinutes] = timeOneClock
    .split(":")
    .map((time) => parseInt(time));
  timeOneHours = timeOneAmPm === "pm" ? timeOneHours + 12 : timeOneHours;
  return timeOneHours * 60 + timeOneMinutes;
};
const countingMinutes = (timeStr) => {
  const [timeOne, timeTwo] = timeStr.split("-");
  const timeOneInMinutes = getTimeInMinutes(timeOne);
  const timeTwoInMinutes = getTimeInMinutes(timeTwo);
  return timeTwoInMinutes > timeOneInMinutes
    ? timeTwoInMinutes - timeOneInMinutes
    : 1440 - timeOneInMinutes + timeTwoInMinutes;
};
console.log(countingMinutes("1:00pm-11:00am"));
