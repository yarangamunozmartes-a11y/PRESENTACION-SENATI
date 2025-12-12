document.addEventListener("click", iniciarAtaque, { once: true });

/* ============================================================
    CONTROL DE ATAQUE
============================================================ */

function iniciarAtaque() {
    // Pequeño delay para que parezca real
    setTimeout(glitchPequeño, 100);     // 0.1s
    setTimeout(() => boomCMD(), 300);   // CMD primeros
    setTimeout(glitchExplosivo, 1200);  // glitch fuerte
    setTimeout(tormentaCMD, 1500);      // muchas ventanas
    setTimeout(spawnMegaExtraction, 5000);
    setTimeout(hackerLaugh, 8000);
    setTimeout(showFinalMessage, 12000);
}

/* ============================================================
    BLOQUEO TECLAS (no cerrar)
============================================================ */
document.addEventListener("keydown", (e) => {
    if (["F12", "Escape"].includes(e.key) || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
    }
});

/* ============================================================
    SONIDOS
============================================================ */
function playSound(name) {
    let audio = new Audio("audio/" + name);
    audio.volume = 1;
    audio.play();
}

/* ============================================================
    1) GLITCH PEQUEÑO INICIAL
============================================================ */
function glitchPequeño() {
    document.body.classList.add("glitch");

    playSound("glitch.mp3");

    setTimeout(() => {
        document.body.classList.remove("glitch");
    }, 300);
}

/* ============================================================
    2) PRIMERA OLEADA DE CMD
============================================================ */
function boomCMD() {
    playSound("alerta.mp3");

    // 4 CMD pequeños
    for (let i = 0; i < 4; i++) {
        setTimeout(spawnCMDSmall, i * 150);
    }

    // 3 medianos
    for (let i = 0; i < 3; i++) {
        setTimeout(spawnCMDMedium, 300 + i * 250);
    }

    // 1 grande
    setTimeout(spawnCMDLarge, 900);
}

/* ============================================================
    3) GLITCH EXPLOSIVO (estilo Hollywood)
============================================================ */
function glitchExplosivo() {
    document.body.classList.add("glitch-strong");

    playSound("glitch2.mp3");

    setTimeout(() => {
        document.body.classList.remove("glitch-strong");
    }, 500);
}

/* ============================================================
    4) GRAN TORMENTA DE CMD (MUCHOS)
============================================================ */
function tormentaCMD() {
    playSound("alarma.mp3");

    // 9 pequeños
    for (let i = 0; i < 9; i++) {
        setTimeout(spawnCMDSmall, i * 200);
    }

    // 7 medianos
    for (let i = 0; i < 7; i++) {
        setTimeout(spawnCMDMedium, 400 + i * 300);
    }

    // 3 grandes
    for (let i = 0; i < 3; i++) {
        setTimeout(spawnCMDLarge, 1000 + i * 1200);
    }
}

/* ============================================================
    CMD PEQUEÑO
============================================================ */
function spawnCMDSmall() {
    const d = document.createElement("div");
    d.classList.add("cmd-small");

    d.style.top = Math.random() * 80 + "%";
    d.style.left = Math.random() * 80 + "%";

    d.innerHTML = `
        C:\\system32> Ejecutando...<br>
        ping 192.168.${rand(255)}.${rand(255)}<br>
        HASH:${randText()}<br>
        LOG OK
    `;

    document.body.appendChild(d);
}

/* ============================================================
    CMD MEDIANO
============================================================ */
function spawnCMDMedium() {
    const d = document.createElement("div");
    d.classList.add("cmd-medium");

    d.style.top = Math.random() * 70 + "%";
    d.style.left = Math.random() * 70 + "%";

    let content = `
        ███  ANÁLISIS EN PROGRESO ███<br><br>
        Buscando vulnerabilidades...<br>
        Estado: CRÍTICO<br><br>
    `;

    for (let i = 0; i < 25; i++) {
        content += "LOG " + rand(999999) + "<br>";
    }

    d.innerHTML = content;
    document.body.appendChild(d);
}

/* ============================================================
    CMD GRANDE
============================================================ */
function spawnCMDLarge() {
    const d = document.createElement("div");
    d.classList.add("cmd-large");

    d.style.top = Math.random() * 50 + "%";
    d.style.left = Math.random() * 50 + "%";

    let content = `
        *** BRECHA DE SEGURIDAD DETECTADA ***<br>
        EXTRACCIÓN NO AUTORIZADA INICIADA...<br><br>
    `;

    for (let i = 0; i < 40; i++) {
        content += ">> " + randHex() + "<br>";
    }

    d.innerHTML = content;
    document.body.appendChild(d);
}

/* ============================================================
    5) MEGA EXTRACCIÓN
============================================================ */
function spawnMegaExtraction() {
    const panel = document.createElement("div");
    panel.classList.add("mega-extract");

    panel.innerHTML = `
        <h2>Extrayendo archivos del sistema...</h2>
        <div class="bar"><div id="mega-bar"></div></div>
        <pre id="mega-log"></pre>
    `;

    document.body.appendChild(panel);

    let bar = document.getElementById("mega-bar");
    let log = document.getElementById("mega-log");

    let pct = 0;

    let interval = setInterval(() => {
        pct += 3;
        bar.style.width = pct + "%";

        log.innerHTML +=
            "FILE /sys/kernel/" + randText() + ".dll extraído ✓\n";

        if (pct >= 100) {
            clearInterval(interval);
        }
    }, 120);
}

/* ============================================================
    6) RISA DEL HACKER
============================================================ */
function hackerLaugh() {
    const d = document.createElement("div");
    d.classList.add("hacker-face");
    d.innerHTML = `<img src="imagenes/hacker.jpg">`;

    document.body.appendChild(d);

    playSound("laugh.mp3");
}

/* ============================================================
    7) MENSAJE FINAL
============================================================ */
function showFinalMessage() {
    document.body.innerHTML = "";

    const screen = document.createElement("div");
    screen.classList.add("final-screen");
    screen.innerHTML = `<h1>Bienvenidos a Senati</h1>`;

    document.body.appendChild(screen);

    playSound("end.mp3");
}

/* ============================================================
    FUNCIONES AUXILIARES
============================================================ */
function rand(n = 100) {
    return Math.floor(Math.random() * n);
}

function randText() {
    return Math.random().toString(36).substring(2, 12);
}

function randHex() {
    return Math.random().toString(16).substring(2, 10);
}





