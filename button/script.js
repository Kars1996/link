// JavaScript used to set randomness for particles.
// Could be done via SSR

function RANDOM(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var PARTICLES = document.querySelectorAll(".particle");
PARTICLES.forEach(function (P) {
    P.setAttribute(
        "style",
        "\n\t\t--x: " +
            RANDOM(20, 80) +
            ";\n\t\t--y: " +
            RANDOM(20, 80) +
            ";\n\t\t--duration: " +
            RANDOM(6, 20) +
            ";\n\t\t--delay: " +
            RANDOM(1, 10) +
            ";\n\t\t--alpha: " +
            RANDOM(40, 90) / 100 +
            ";\n\t\t--origin-x: " +
            (Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)) +
            "%;\n\t\t--origin-y: " +
            (Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)) +
            "%;\n\t\t--size: " +
            RANDOM(40, 90) / 100 +
            ";\n\t"
    );
});
