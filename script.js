document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("music");
    const musicButton = document.getElementById("musicButton");

    const startButton = document.getElementById("startButton");
    const opening = document.getElementById("opening");
    const main = document.getElementById("main");

    const letterButton = document.getElementById("letterButton");
    const letterModal = document.getElementById("letterModal");
    const closeLetter = document.getElementById("closeLetter");
    const modalBackground = document.getElementById("modalBackground");

    const giftButton = document.getElementById("giftButton");
    const finalScreen = document.getElementById("finalScreen");
    const confetti = document.getElementById("confetti");


    /* =========================
       BUKA KEJUTAN
    ========================== */

    startButton.addEventListener("click", function () {

        opening.classList.add("hidden");
        main.classList.remove("hidden");

        // Mulai musik setelah user melakukan klik
        music.play()
            .then(function () {
                musicButton.textContent = "♫";
            })
            .catch(function (error) {
                console.log("Musik tidak dapat diputar:", error);
            });

        // Scroll ke atas
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================
       TOMBOL MUSIK
    ========================== */

    musicButton.addEventListener("click", function () {

        if (music.paused) {

            music.play()
                .then(function () {
                    musicButton.textContent = "♫";
                })
                .catch(function (error) {
                    console.log("Musik gagal diputar:", error);
                });

        } else {

            music.pause();
            musicButton.textContent = "🔇";

        }

    });


    /* =========================
       BUKA SURAT
    ========================== */

    letterButton.addEventListener("click", function () {

        letterModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });


    /* =========================
       TUTUP SURAT
    ========================== */

    closeLetter.addEventListener("click", function () {

        letterModal.classList.remove("active");

        document.body.style.overflow = "";

    });


    /* =========================
       KLIK BACKGROUND MODAL
    ========================== */

    modalBackground.addEventListener("click", function () {

        letterModal.classList.remove("active");

        document.body.style.overflow = "";

    });


    /* =========================
       BUKA HADIAH
    ========================== */

    giftButton.addEventListener("click", function () {

        finalScreen.classList.remove("hidden");

        finalScreen.scrollIntoView({
            behavior: "smooth"
        });

        createConfetti();

    });


    /* =========================
       CONFETTI
    ========================== */

    function createConfetti() {

        confetti.innerHTML = "";

        const symbols = ["♥", "♡", "✦", "✧", "•"];

        for (let i = 0; i < 80; i++) {

            const piece = document.createElement("div");

            piece.classList.add("confetti-piece");

            piece.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            piece.style.left =
                Math.random() * 100 + "vw";

            piece.style.fontSize =
                (Math.random() * 15 + 10) + "px";

            piece.style.animationDuration =
                (Math.random() * 3 + 3) + "s";

            piece.style.animationDelay =
                Math.random() * 2 + "s";

            confetti.appendChild(piece);
        }

    }

});
