* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #090609;
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    overflow-x: hidden;
}


/* =========================
   BACKGROUND
========================= */

body::before {
    content: "";

    position: fixed;

    width: 450px;
    height: 450px;

    top: -180px;
    left: -180px;

    background: #e94f91;

    filter: blur(170px);

    opacity: 0.18;

    z-index: -2;
}

body::after {
    content: "";

    position: fixed;

    width: 450px;
    height: 450px;

    right: -180px;
    bottom: -180px;

    background: #8c46c2;

    filter: blur(170px);

    opacity: 0.18;

    z-index: -2;
}


/* =========================
   MUSIC BUTTON
========================= */

.music-button {
    position: fixed;

    top: 20px;
    right: 20px;

    width: 48px;
    height: 48px;

    border-radius: 50%;

    border: 1px solid
        rgba(255,255,255,0.2);

    background:
        rgba(255,255,255,0.08);

    color: white;

    font-size: 20px;

    cursor: pointer;

    z-index: 9999;

    backdrop-filter: blur(15px);

    transition: 0.3s;
}

.music-button:hover {
    transform: scale(1.1);
}


/* =========================
   OPENING
========================= */

.opening {
    min-height: 100vh;

    display: flex;

    justify-content: center;

    align-items: center;

    text-align: center;

    padding: 30px;
}

.opening-content {
    animation: fadeUp 1.2s ease;
}

.heart {
    font-size: 85px;

    color: #ff72a7;

    animation:
        heartbeat 1.5s infinite;
}

.small-title {
    font-size: 10px;

    letter-spacing: 4px;

    color: #aa99a5;

    text-transform: uppercase;
}

.opening h1 {
    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        clamp(70px,16vw,130px);

    line-height: 0.75;

    font-weight: 500;

    margin: 30px 0;
}

.opening h1 span {
    display: block;

    color: #ff77aa;

    font-style: italic;
}

.intro-text {
    max-width: 400px;

    color: #b6a8b2;

    line-height: 1.8;

    margin: 30px auto;
}


/* =========================
   MAIN BUTTON
========================= */

.main-button {
    padding:
        15px 28px;

    border: none;

    border-radius: 50px;

    color: white;

    background:
        linear-gradient(
            135deg,
            #ff5797,
            #9949c8
        );

    box-shadow:
        0 15px 40px
        rgba(255,70,140,0.25);

    transition: 0.3s;

    cursor: pointer;
}

.main-button:hover {
    transform:
        translateY(-4px);

    box-shadow:
        0 20px 50px
        rgba(255,70,140,0.4);
}

.main-button span {
    margin-left: 7px;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    padding: 30px;
}

.hero h1 {
    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        clamp(80px,18vw,160px);

    line-height: 0.72;

    font-weight: 500;

    margin: 30px 0;
}

.hero h1 span {
    display: block;

    color: #ff78aa;

    font-style: italic;
}

.subtitle {
    color: #b5a6b1;
}

.scroll {
    margin-top: 80px;

    color: #796b75;

    animation:
        floating 2s infinite;
}

.scroll span {
    font-size: 25px;
}

.scroll p {
    font-size: 9px;

    letter-spacing: 3px;

    text-transform: uppercase;
}


/* =========================
   SECTION
========================= */

.section {
    min-height: 90vh;

    padding:
        100px 25px;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    text-align: center;
}

.section h2 {
    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        clamp(45px,10vw,80px);

    line-height: 0.9;

    font-weight: 500;

    margin: 25px 0;
}

.paragraph {
    max-width: 550px;

    color: #b9aab5;

    line-height: 2;

    margin: 8px 0;
}

.line {
    width: 45px;

    height: 1px;

    background: #ff72a7;

    margin: 20px 0;
}


/* =========================
   PHOTOS
========================= */

.photos {
    width: 100%;

    max-width: 1000px;

    display: grid;

    grid-template-columns:
        repeat(3,1fr);

    gap: 18px;

    margin-top: 50px;
}

.photo-card {
    height: 420px;

    overflow: hidden;

    position: relative;

    border-radius:
        160px
        160px
        20px
        20px;

    background: #171017;

    border:
        1px solid
        rgba(255,255,255,0.1);
}

.photo-card.middle {
    transform:
        translateY(60px);
}

.photo-card img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    display: block;

    transition: 0.7s;
}

.photo-card:hover img {
    transform: scale(1.08);
}

.photo-card span {
    position: absolute;

    left: 20px;
    bottom: 15px;

    font-family:
        "Cormorant Garamond",
        serif;

    font-size: 20px;
}


/* =========================
   QUOTE
========================= */

.quote {
    min-height: 80vh;

    text-align: center;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    padding: 40px;
}

.quote-mark {
    font-family:
        "Cormorant Garamond",
        serif;

    color: #ff72a7;

    font-size: 100px;
}

.quote h2 {
    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        clamp(45px,9vw,80px);

    line-height: 0.9;

    font-weight: 500;
}

.quote p {
    margin-top: 20px;

    color: #9f8d9a;

    font-style: italic;
}


/* =========================
   LETTER
========================= */

.letter-box {
    width: 100%;

    max-width: 650px;

    padding:
        70px 30px;

    border:
        1px solid
        rgba(255,255,255,0.1);

    border-radius: 30px;

    background:
        rgba(255,255,255,0.035);

    backdrop-filter:
        blur(20px);
}

.letter-icon {
    font-size: 55px;

    margin-bottom: 15px;
}

.second-button {
    margin-top: 25px;

    padding:
        13px 25px;

    border-radius: 50px;

    border:
        1px solid
        rgba(255,255,255,0.3);

    background: transparent;

    color: white;

    cursor: pointer;

    transition: 0.3s;
}

.second-button:hover {
    background: white;

    color: black;
}


/* =========================
   MODAL
========================= */

.modal {
    position: fixed;

    inset: 0;

    display: none;

    align-items: center;

    justify-content: center;

    padding: 25px;

    z-index: 5000;
}

.modal.active {
    display: flex;
}

.modal-bg {
    position: absolute;

    inset: 0;

    background:
        rgba(0,0,0,0.85);

    backdrop-filter:
        blur(10px);
}

.letter-paper {
    position: relative;

    z-index: 2;

    width: 100%;

    max-width: 550px;

    max-height: 85vh;

    overflow-y: auto;

    padding:
        45px 35px;

    background:
        linear-gradient(
            145deg,
            #1b1019,
            #100a11
        );

    border:
        1px solid
        rgba(255,255,255,0.12);

    border-radius: 25px;

    animation:
        zoomIn 0.5s ease;
}

.close {
    position: absolute;

    top: 10px;
    right: 18px;

    border: none;

    background: none;

    color: white;

    font-size: 32px;

    cursor: pointer;
}

.paper-heart {
    color: #ff72a7;

    font-size: 45px;
}

.paper-title {
    font-size: 9px;

    letter-spacing: 4px;

    color: #987f8f;
}

.letter-paper h2 {
    font-family:
        "Cormorant Garamond",
        serif;

    font-size: 55px;

    line-height: 0.8;

    font-weight: 500;

    margin: 25px 0;
}

.letter-paper p {
    color: #c0b1bc;

    line-height: 1.9;

    margin: 15px 0;
}

.signature {
    color: #ff72a7 !important;

    font-style: italic;
}


/* =========================
   GIFT
========================= */

.gift-button {
    margin-top: 30px;

    padding:
        17px 30px;

    display: flex;

    align-items: center;

    gap: 10px;

    border: none;

    border-radius: 50px;

    color: white;

    background:
        linear-gradient(
            135deg,
            #ff5797,
            #9949c8
        );

    box-shadow:
        0 15px 40px
        rgba(255,70,140,0.25);

    cursor: pointer;

    transition: 0.3s;
}

.gift-button:hover {
    transform:
        translateY(-5px)
        scale(1.02);
}


/* =========================
   FINAL
========================= */

.final-screen {
    min-height: 100vh;

    position: relative;

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    padding: 30px;

    background:
        radial-gradient(
            circle at center,
            rgba(255,80,150,0.2),
            transparent 60%
        );
}

.final-content {
    position: relative;

    z-index: 10;

    animation:
        fadeUp 1s ease;
}

.final-heart {
    font-size: 85px;

    color: #ff5797;

    animation:
        heartbeat 1.4s infinite;
}

.final-content h1 {
    font-family:
        "Cormorant Garamond",
        serif;

    font-size:
        clamp(55px,11vw,100px);

    line-height: 0.85;

    font-weight: 500;

    margin: 30px 0;
}

.final-content h1 span {
    display: block;

    color: #ff72a7;

    font-style: italic;
}

.final-content p {
    color: #c1b2bd;

    line-height: 1.8;

    margin: 10px;
}

.cake {
    font-size: 75px;

    margin: 30px;
}

.end {
    color: #ff72a7 !important;

    font-style: italic;
}


/* =========================
   CONFETTI
========================= */

.confetti-piece {
    position: fixed;

    top: -30px;

    z-index: 20;

    pointer-events: none;

    animation:
        fall linear forwards;
}


/* =========================
   HIDDEN
========================= */

.hidden {
    display: none !important;
}


/* =========================
   ANIMATION
========================= */

@keyframes fadeUp {

    from {
        opacity: 0;

        transform:
            translateY(35px);
    }

    to {
        opacity: 1;

        transform:
            translateY(0);
    }
}

@keyframes zoomIn {

    from {
        opacity: 0;

        transform:
            scale(0.8);
    }

    to {
        opacity: 1;

        transform:
            scale(1);
    }
}

@keyframes heartbeat {

    0%,100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.15);
    }
}

@keyframes floating {

    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(10px);
    }
}

@keyframes fall {

    from {
        transform:
            translateY(-30px)
            rotate(0deg);

        opacity: 1;
    }

    to {
        transform:
            translateY(110vh)
            rotate(720deg);

        opacity: 0;
    }
}


/* =========================
   MOBILE
========================= */

@media (max-width: 700px) {

    .photos {
        grid-template-columns: 1fr;
    }

    .photo-card {
        height: 380px;
    }

    .photo-card.middle {
        transform: none;
    }

    .letter-paper {
        padding:
            40px 25px;
    }

    .letter-paper h2 {
        font-size: 48px;
    }
}