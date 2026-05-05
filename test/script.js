/*
    Edit these paths to your actual UI icon images.

    Available icon IDs:
    - "grandstar"
    - "powerstar"
    - "prankstercomet"
    - "greencomet"
    - "cometMedal"
*/
const iconPaths = {
    grandstar: "../images/ui/grandstar.png",
    powerstar: "../images/ui/powerstar.png",
    prankstercomet: "../images/ui/prankstercomet.png",
    greencomet: "../images/ui/greencomet.png"
};

const iconLabels = {
    grandstar: "Grand Star",
    powerstar: "Power Star",
    prankstercomet: "Prankster Comet",
    greencomet: "Green Comet",
    cometmedal: "Comet Medal"
};

const leftIconPriority = [
    "grandstar",
    "powerstar",
    "prankstercomet",
    "greencomet"
];

const galaxyList = document.querySelector("#galaxyList");

function renderGalaxies(items) {
    galaxyList.innerHTML = "";

    for (const galaxy of items) {
        const card = document.createElement("article");
        card.className = "galaxy-card";

        card.innerHTML = `
            <div class="galaxy-divider" aria-hidden="true"></div>

            <div class="galaxy-art" aria-hidden="true">
                <img src="${galaxy.image}" alt="">
            </div>

            <div class="galaxy-content">
                <h2 class="galaxy-title">${escapeHtml(galaxy.title)}</h2>
                ${galaxy.description ? `<p class="galaxy-description">${escapeHtml(galaxy.description)}</p>` : ""}

                <div class="galaxy-icons" aria-label="${getIconSummary(galaxy.icons)}">
                    ${renderLeftIcons(galaxy.icons)}
                </div>
            </div>

            ${renderCometMedalBadge(galaxy.icons)}
        `;

        galaxyList.appendChild(card);
    }
}

function renderLeftIcons(icons) {
    let html = "";

    for (const iconType of leftIconPriority) {
        const matchingIcons = icons.filter(icon => icon === iconType);

        for (const icon of matchingIcons) {
            html += imageIcon(icon);
        }
    }

    return html;
}

function renderCometMedalBadge(icons) {
    if (!icons.includes("cometMedal")) return "";

    return `
        <div class="collectible-badge" aria-label="Comet Medal">
            <img src="${iconPaths.cometMedal}" alt="">
        </div>
    `;
}

function imageIcon(iconType) {
    const src = iconPaths[iconType];
    const label = iconLabels[iconType];

    if (!src || !label) {
        console.warn(`Unknown icon type: ${iconType}`);
        return "";
    }

    return `
        <img
            class="icon"
            src="${src}"
            alt="${label}"
            draggable="false"
        >
    `;
}

function getIconSummary(icons) {
    const counts = {};

    for (const icon of icons) {
        counts[icon] = (counts[icon] || 0) + 1;
    }

    return Object.entries(counts)
        .map(([icon, count]) => {
            const label = iconLabels[icon] || icon;
            return count === 1 ? label : `${count} ${label}s`;
        })
        .join(", ");
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

renderGalaxies(galaxies);