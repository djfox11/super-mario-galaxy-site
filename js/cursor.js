const cursorContainer = document.getElementById("cursorContainer");
const cursorMain = document.getElementById("cursorMain");
const cursorDuplicate = document.getElementById("cursorDuplicate");
const cursorShadow = document.getElementById("cursorShadow");

const POSITIONS_LENGTH = 48;
const INTERPOLATION_STEPS = 8;

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let lastMouseX = mouseX;
let lastMouseY = mouseY;
let cursorOverButton = false;
let cursorOpacity = 1;

const positions = Array.from({ length: POSITIONS_LENGTH }, () => [mouseX, mouseY]);
const trailEls = [];

for (let i = 0; i < POSITIONS_LENGTH; i++) {
    const img = document.createElement("img");
    img.className = "cursor-trail";
    img.src = "/images/cursor/cursor-trail.webp";
    img.alt = "";
    cursorContainer.appendChild(img);
    trailEls.push(img);
}

function setCursorOverButtonState(target) {
    if (!(target instanceof Element)) {
        cursorOverButton = false;
        return;
    }

    cursorOverButton = Boolean(
        target.closest("button, a, [role='button'], #clickable")
    );
}

function onMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursorOpacity = 1;
    setCursorOverButtonState(event.target);
}

function updatePositions() {
    for (let i = 0; i < INTERPOLATION_STEPS; i++) {
        positions.push([
            lastMouseX + ((mouseX - lastMouseX) / INTERPOLATION_STEPS) * i,
            lastMouseY + ((mouseY - lastMouseY) / INTERPOLATION_STEPS) * i
        ]);
        positions.shift();
    }

    lastMouseX = mouseX;
    lastMouseY = mouseY;
}

function renderCursor() {
    const latest = positions[positions.length - 1];
    const mainTransform = `translate(${latest[0]}px, ${latest[1]}px)`;

    cursorMain.style.transform = mainTransform;
    cursorMain.style.opacity = String(cursorOpacity);

    cursorDuplicate.style.transform = mainTransform;
    cursorDuplicate.style.opacity = "0";

    cursorShadow.style.transform = mainTransform;
    cursorShadow.style.opacity = String(cursorOpacity * 0.55);

    for (let i = 0; i < positions.length; i++) {
        const pos = positions[i];
        const ratio = i / positions.length;

        trailEls[i].style.transform = `translate(${pos[0]}px, ${pos[1]}px)`;
        trailEls[i].style.opacity = String(cursorOpacity * (i / positions.length));
        trailEls[i].style.filter = `blur(${3 * (1 - ratio)}px)`;
        trailEls[i].style.width = `${ratio * 16}px`;
        trailEls[i].style.height = `${ratio * 16}px`;
        trailEls[i].style.marginLeft = `${ratio * -8}px`;
        trailEls[i].style.marginTop = `${ratio * -8}px`;
    }
}

function animate() {
    window.requestAnimationFrame(animate);
    updatePositions();
    renderCursor();
}

function triggerDuplicate() {
    cursorDuplicate.classList.add("duplicated");
    cursorDuplicate.style.opacity = "1";

    setTimeout(() => {
        cursorDuplicate.classList.remove("duplicated");
        cursorDuplicate.style.opacity = "0";
    }, 2600);
}

window.addEventListener("mousemove", onMouseMove);

document.addEventListener("mouseout", (event) => {
    if (!event.relatedTarget && !event.toElement) {
        cursorOpacity = 0;
    }
});

document.addEventListener("mouseenter", () => {
    cursorOpacity = 1;
});

document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "d") {
        triggerDuplicate();
    }
});

animate();
