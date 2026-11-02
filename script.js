// MOBILE MENU
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// COUNTDOWN
// Change this date when the actual event date and time are confirmed.
// Format: Year-Month-DayTHour:Minute:Second
const eventDate = new Date("2026-12-04T09:00:00");

function updateCountdown() {
  const now = new Date();
  const difference = eventDate - now;

  // If the event date has passed, show zero.
  if (difference <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Run once immediately, then update every second.
updateCountdown();
setInterval(updateCountdown, 1000);
