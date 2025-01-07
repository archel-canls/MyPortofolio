// Greeting based on time of day
window.onload = function() {
    let greetingMessage = document.getElementById("greeting");
    let currentHour = new Date().getHours();

    if (currentHour < 12) {
        greetingMessage.innerHTML = "Selamat Pagi Teman-teman!";
    } else if (currentHour < 18) {
        greetingMessage.innerHTML = "Selamat Siang Teman-teman!";
    } else {
        greetingMessage.innerHTML = "Selamat Malam Teman-teman!";
    }
};
