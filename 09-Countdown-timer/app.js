const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let giveaway = document.querySelector('.giveaway');
let deadline = document.querySelector('.deadline');
let deadlineH4 = document.querySelectorAll('.deadline-format h4');

//현재 날짜
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//미래 날짜(현재 날짜 + 10일 9시로 맞춤)
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 9, 0, 0);

let year = futureDate.getFullYear();
let hours = format(futureDate.getHours());
let minutes = format(futureDate.getMinutes());
let month = format(futureDate.getMonth());
month = months[month];
let weekday = weekdays[futureDate.getDay()];
let date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

//남은 시간 계산하는 함수
let futureTime = futureDate.getTime();
function getRemaindingTime() {
    let today = new Date().getTime();

    let time = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let days = Math.floor(time / oneDay);
    let hours = Math.floor((time % oneDay) / oneHour);
    let minutes = Math.floor((time % oneHour) / oneMinute);
    let seconds = Math.floor((time % oneMinute) / 1000);

    let values = [days, hours, minutes, seconds];
    
    deadlineH4.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });

    if (time < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
}

function format(num) {
  if (num < 10) {
    return (num = `0${num}`);
  }
  return num;
}

let countdown = setInterval(getRemaindingTime, 1000);

getRemaindingTime();