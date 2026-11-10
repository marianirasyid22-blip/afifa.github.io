
const birthday = new Date("2026-11-13T00:00:00+08:00").getTime();

function updateCountdown() {
    const now = Date.now();
    const distance = birthday - now;

    if (distance <= 0) {
        document.getElementById("countdown").classList.add("hidden");
        document.getElementById("date").classList.add("hidden");
        document.getElementById("finished").classList.remove("hidden");
        return;
    }

    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance / 3600000) % 24);
    const minutes = Math.floor((distance / 60000) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

function toggleTheme() {
    document.body.classList.toggle("monochrome");
}

function showSurprise() {
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("surpriseBtn").classList.add("hidden");
}

updateCountdown();
setInterval(updateCountdown, 1000);
