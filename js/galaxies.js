const iconPaths = {
    grandstar: "/images/ui/grandstar.png",
    powerstar: "/images/ui/powerstar.png",
    prankstercomet: "/images/ui/prankstercomet.png",
    greencomet: "/images/ui/greencomet.png",
    cometMedal: "/images/ui/cometmedal.png",
    redstar: "/images/ui/redstar.png"
};

const iconLabels = {
    grandstar: "Grand Star",
    powerstar: "Power Star",
    prankstercomet: "Prankster Comet",
    greencomet: "Green Comet",
    cometMedal: "Comet Medal",
    redstar: "Red Star"
};

const leftIconPriority = [
    "grandstar",
    "powerstar",
    "prankstercomet",
    "greencomet",
    "redstar"
];

const hubs = [
    {
        id: "terrace",
        label: "Terrace",
        icon: "/images/galaxies/hub/terrace.png",
        background: "/images/galaxies/hub/terrace-bg.png",
        galaxies: [
            {
                title: "Good Egg Galaxy",
                image: "/images/galaxies/goodegg.png",
                href: "/galaxies/01-terrace/01-good-egg.html",
                icons: ["powerstar", "powerstar", "powerstar", "prankstercomet", "prankstercomet", "greencomet"]
            },
            {
                title: "Honeyhive Galaxy",
                image: "/images/galaxies/honeyhive.png",
                href: "/galaxies/01-terrace/02-honeyhive.html",
                icons: ["powerstar", "powerstar", "powerstar", "prankstercomet", "prankstercomet", "greencomet"]
            },
            {
                title: "Loopdeeloop Galaxy",
                image: "/images/galaxies/loopdeeloop.png",
                href: "/galaxies/01-terrace/03-loopdeeloop.html",
                icons: ["powerstar"]
            },
            {
                title: "Flipswitch Galaxy",
                image: "/images/galaxies/flipswitch.png",
                href: "/galaxies/01-terrace/04-flipswitch.html",
                icons: ["powerstar"]
            },
            {
                title: "Bowser Jr.'s Robot Reactor",
                image: "/images/galaxies/robotreactor.png",
                href: "/galaxies/01-terrace/05-bjr-robot-reactor.html",
                icons: ["grandstar"]
            },
            {
                title: "Sweet Sweet Galaxy",
                image: "/images/galaxies/sweetsweet.png",
                href: "/galaxies/01-terrace/06-sweet-sweet.html",
                icons: ["powerstar"]
            }
        ]
    },
    {
        id: "fountain",
        label: "Fountain",
        icon: "/images/galaxies/hub/fountain.png",
        background: "/images/galaxies/hub/fountain-bg.png",
        galaxies: [
            {
                title: "Space Junk Galaxy",
                image: "/images/galaxies/spacejunk.png",
                href: "/galaxies/02-fountain/01-space-junk.html",
                icons: ["powerstar", "powerstar", "powerstar", "prankstercomet", "prankstercomet", "greencomet"]
            },
            {
                title: "Rolling Green Galaxy",
                image: "/images/galaxies/rollinggreen.png",
                href: "/galaxies/02-fountain/02-rolling-green.html",
                icons: ["powerstar"]
            },
            {
                title: "Battlerock Galaxy",
                image: "/images/galaxies/battlerock.png",
                href: "/galaxies/02-fountain/03-battlerock.html",
                icons: ["powerstar", "powerstar", "powerstar", "prankstercomet", "prankstercomet", "greencomet"]
            },
            {
                title: "Hurry-Scurry Galaxy",
                image: "/images/galaxies/hurryscurry.png",
                href: "/galaxies/02-fountain/04-hurry-scurry.html",
                icons: ["powerstar"]
            },
            {
                title: "Bowser's Star Reactor",
                image: "/images/galaxies/starreactor.png",
                href: "/galaxies/02-fountain/05-bow-star-reactor.html",
                icons: ["grandstar"]
            },
            {
                title: "Sling Pod Galaxy",
                image: "/images/galaxies/slingpod.png",
                href: "/galaxies/02-fountain/06-sling-pod.html",
                icons: ["powerstar"]
            }
        ]
    },
    {
        id: "kitchen",
        label: "Kitchen",
        icon: "/images/galaxies/hub/kitchen.png",
        background: "/images/galaxies/hub/kitchen-bg.png",
        galaxies: [
            {
                title: "Beach Bowl Galaxy",
                image: "/images/galaxies/beachbowl.png",
                href: "/galaxies/03-kitchen/01-beach-bowl.html",
                icons: ["powerstar", "powerstar", "powerstar", "prankstercomet", "prankstercomet", "greencomet"]
            },
            {
                title: "Bubble Breeze Galaxy",
                image: "/images/galaxies/bubblebreeze.png",
                href: "/galaxies/03-kitchen/02-bubble-breeze.html",
                icons: ["powerstar"]
            },
            {
                title: "Ghostly Galaxy",
                image: "/images/galaxies/ghostly.png",
                href: "/galaxies/03-kitchen/03-ghostly.html",
                icons: ["powerstar", "powerstar", "powerstar", "prankstercomet", "prankstercomet", "greencomet"]
            },
            {
                title: "Buoy Base Galaxy",
                image: "/images/galaxies/buoybase.png",
                href: "/galaxies/03-kitchen/04-buoy-base.html",
                icons: ["powerstar", "greencomet"]
            },
            {
                title: "Bowser Jr.'s Airship Armada",
                image: "/images/galaxies/airshiparmada.png",
                href: "/galaxies/03-kitchen/05-bjr-airship-armada.html",
                icons: ["grandstar"]
            },
            {
                title: "Drip Drop Galaxy",
                image: "/images/galaxies/dripdrop.png",
                href: "/galaxies/03-kitchen/06-drip-drop.html",
                icons: ["powerstar"]
            }
        ]
    },
    {
        id: "bedroom",
        label: "Bedroom",
        icon: "/images/galaxies/hub/bedroom.png",
        background: "/images/galaxies/hub/terrace-bg.png",
        galaxies: [
            {
                title: "Gusty Garden Galaxy",
                image: "/images/galaxies/gustygarden.png",
                href: "/galaxies/04-bedroom/01-gusty-garden.html",
                icons: ["powerstar", "powerstar", "powerstar", "prankstercomet", "prankstercomet", "greencomet"]
            },
            {
                title: "Freezeflame Galaxy",
                image: "/images/galaxies/freezeflame.png",
                href: "/galaxies/04-bedroom/02-freezeflame.html",
                icons: ["powerstar", "powerstar", "powerstar", "prankstercomet", "prankstercomet", "greencomet"]
            },
            {
                title: "Dusty Dune Galaxy",
                image: "/images/galaxies/dustydune.png",
                href: "/galaxies/04-bedroom/03-dusty-dune.html",
                icons: ["powerstar", "powerstar", "powerstar", "prankstercomet", "prankstercomet", "greencomet", "greencomet"]
            },
            {
                title: "Honeyclimb Galaxy",
                image: "/images/galaxies/honeyclimb.png",
                href: "/galaxies/04-bedroom/04-honeyclimb.html",
                icons: ["powerstar"]
            },
            {
                title: "Bowser's Dark Matter Planet",
                image: "/images/galaxies/darkmatterplanet.png",
                href: "/galaxies/04-bedroom/05-bow-dark-matter-planet.html",
                icons: ["grandstar"]
            },
            {
                title: "Bigmouth Galaxy",
                image: "/images/galaxies/bigmouth.png",
                href: "/galaxies/04-bedroom/06-bigmouth.html",
                icons: ["powerstar"]
            }
        ]
    },
    {
        id: "engineroom",
        label: "Engine Room",
        icon: "/images/galaxies/hub/engineroom.png",
        background: "/images/galaxies/hub/fountain-bg.png",
        galaxies: [
            {
                title: "Gold Leaf Galaxy",
                image: "/images/galaxies/goldleaf.png",
                href: "/galaxies/05-engine/01-gold-leaf.html",
                icons: ["powerstar", "powerstar", "powerstar", "prankstercomet", "prankstercomet", "greencomet"]
            },
            {
                title: "Sea Slide Galaxy",
                image: "/images/galaxies/seaslide.png",
                href: "/galaxies/05-engine/02-sea-slide.html",
                icons: ["powerstar", "powerstar", "powerstar", "prankstercomet", "prankstercomet", "greencomet"]
            },
            {
                title: "Toy Time Galaxy",
                image: "/images/galaxies/toytime.png",
                href: "/galaxies/05-engine/03-toy-time.html",
                icons: ["powerstar", "powerstar", "powerstar", "prankstercomet", "prankstercomet", "greencomet"]
            },
            {
                title: "Bonefin Galaxy",
                image: "/images/galaxies/bonefin.png",
                href: "/galaxies/05-engine/04-bonefin.html",
                icons: ["powerstar"]
            },
            {
                title: "Bowser Jr.'s Lava Reactor",
                image: "/images/galaxies/lavareactor.png",
                href: "/galaxies/05-engine/05-bjr-lava-reactor.html",
                icons: ["grandstar"]
            },
            {
                title: "Sand Spiral Galaxy",
                image: "/images/galaxies/sandspiral.png",
                href: "/galaxies/05-engine/06-sand-spiral.html",
                icons: ["powerstar"]
            }
        ]
    },
    {
        id: "garden",
        label: "Garden",
        icon: "/images/galaxies/hub/garden.png",
        background: "/images/galaxies/hub/kitchen-bg.png",
        galaxies: [
            {
                title: "Deep Dark Galaxy",
                image: "/images/galaxies/deepdark.png",
                href: "/galaxies/06-garden/01-deep-dark.html",
                icons: ["powerstar", "powerstar", "powerstar", "prankstercomet", "prankstercomet", "greencomet"]
            },
            {
                title: "Dreadnought Galaxy",
                image: "/images/galaxies/dreadnought.png",
                href: "/galaxies/06-garden/02-dreadnought.html",
                icons: ["powerstar", "powerstar", "powerstar", "prankstercomet", "prankstercomet", "greencomet"]
            },
            {
                title: "Matter Splatter Galaxy",
                image: "/images/galaxies/mattersplatter.png",
                href: "/galaxies/06-garden/03-matter-splatter.html",
                icons: ["powerstar"]
            },
            {
                title: "Melty Molten Galaxy",
                image: "/images/galaxies/meltymolten.png",
                href: "/galaxies/06-garden/04-melty-molten.html",
                icons: ["powerstar", "powerstar", "powerstar", "prankstercomet", "prankstercomet", "greencomet"]
            },
            {
                title: "Snow Cap Galaxy",
                image: "/images/galaxies/snowcap.png",
                href: "/galaxies/06-garden/05-snow-cap.html",
                icons: ["powerstar"]
            }
        ]
    },
    {
        id: "gateway",
        label: "Gateway",
        icon: "/images/galaxies/hub/gateway.png",
        background: "/images/galaxies/hub/gateway-bg.png",
        galaxies: [
            {
                title: "Gateway Galaxy",
                image: "/images/galaxies/gateway.png",
                href: "/galaxies/00-observatory/01-gateway.html",
                icons: ["grandstar", "redstar"]
            },
            {
                title: "Bowser's Galaxy Reactor",
                image: "/images/galaxies/galaxyreactor.png",
                href: "/galaxies/00-observatory/02-bow-galaxy-generator.html",
                icons: ["grandstar"]
            },
            {
                title: "Boo's Boneyard Galaxy",
                image: "/images/galaxies/boosboneyard.png",
                href: "/galaxies/00-observatory/03-boos-boneyard.html",
                icons: ["powerstar"]
            }
        ]
    },
    {
        id: "trial",
        label: "Planet of Trials",
        icon: "/images/galaxies/hub/trials.png",
        background: "/images/galaxies/hub/trial-bg.png",
        galaxies: [
            {
                title: "Rolling Gizmo Galaxy",
                image: "/images/galaxies/rollinggizmo.png",
                href: "/galaxies/08-planet-of-trials/01-rolling-gizmo.html",
                icons: ["powerstar"]
            },
            {
                title: "Bubble Blast Galaxy",
                image: "/images/galaxies/bubbleblast.png",
                href: "/galaxies/08-planet-of-trials/02-bubble-blast.html",
                icons: ["powerstar"]
            },
            {
                title: "Loopdeeswoop Galaxy",
                image: "/images/galaxies/loopdeeswoop.png",
                href: "/galaxies/08-planet-of-trials/03-loopdeeswoop.html",
                icons: ["powerstar"]
            },
            {
                title: "Grand Finale Galaxy",
                image: "/images/galaxies/grandfinale.png",
                href: "/galaxies/08-planet-of-trials/04-grand-finale.html",
                icons: ["powerstar"]
            }
        ]
    }
];

const page = document.querySelector("#hubPage");
const galaxyList = document.querySelector("#galaxyList");
const hubSwitcher = document.querySelector("#hubSwitcher");
let activeHubId = "";
let transitionTimer = 0;
let settleTimer = 0;
let selectionRequestId = 0;
const imagePreloadCache = new Map();

function preloadImage(src) {
    if (!src) return Promise.resolve();

    if (imagePreloadCache.has(src)) {
        return imagePreloadCache.get(src);
    }

    const image = new Image();
    image.decoding = "async";
    image.src = src;

    const promise = image.decode
        ? image.decode().catch(() => {})
        : new Promise(resolve => {
            image.onload = resolve;
            image.onerror = resolve;
        });

    imagePreloadCache.set(src, promise);
    return promise;
}

function getFullGalaxyImage(galaxy) {
    return galaxy.image.replace(/\.png$/, "-full.png");
}

function preloadHubAssets(hub) {
    return Promise.all([
        preloadImage(hub.background),
        preloadImage(hub.icon),
        ...hub.galaxies.map(galaxy => preloadImage(galaxy.image))
    ]);
}

function warmInterfaceIcons() {
    for (const src of Object.values(iconPaths)) {
        preloadImage(src);
    }

    for (const hub of hubs) {
        preloadImage(hub.icon);
    }
}

function warmGalaxyPageImages(hub) {
    for (const galaxy of hub.galaxies) {
        preloadImage(getFullGalaxyImage(galaxy));
    }
}

function warmRemainingAssets(activeHub) {
    const warm = () => {
        for (const hub of hubs) {
            if (hub !== activeHub) {
                preloadImage(hub.background);
            }

            for (const galaxy of hub.galaxies) {
                preloadImage(galaxy.image);
                preloadImage(getFullGalaxyImage(galaxy));
            }
        }
    };

    if ("requestIdleCallback" in window) {
        window.requestIdleCallback(warm, { timeout: 1600 });
    } else {
        window.setTimeout(warm, 350);
    }
}

function renderHubButtons(activeHubId) {
    hubSwitcher.innerHTML = "";

    for (const hub of hubs) {
        const button = document.createElement("button");
        button.className = "hub-button";
        button.type = "button";
        button.setAttribute("aria-label", hub.label);
        button.setAttribute("aria-pressed", String(hub.id === activeHubId));
        button.dataset.hub = hub.id;

        button.innerHTML = `
            <span class="hub-button__body">
                <img src="${hub.icon}" alt="" draggable="false" decoding="async" loading="eager">
            </span>
            <span class="hub-button__label">${escapeHtml(hub.label)}</span>
        `;

        button.addEventListener("click", () => selectHub(hub.id));
        hubSwitcher.appendChild(button);
    }
}

function renderGalaxies(items) {
    galaxyList.innerHTML = "";

    for (const galaxy of items) {
        const card = document.createElement(galaxy.href ? "a" : "article");
        card.className = "galaxy-card";
        if (galaxy.href) {
            card.href = galaxy.href;
            card.setAttribute("aria-label", `${galaxy.title}: ${getIconSummary(galaxy.icons)}`);
        }

        card.innerHTML = `
            <div class="galaxy-divider" aria-hidden="true"></div>

            <div class="galaxy-art" aria-hidden="true">
                <img src="${galaxy.image}" alt="" decoding="async" loading="eager">
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

function setHubBackground(background) {
    page.style.setProperty("--hub-background", `url("${background}")`);
    page.style.setProperty("--hub-background-next", `url("${background}")`);
}

function selectHub(hubId, shouldUpdateHash = true, shouldAnimate = true) {
    const hub = hubs.find(item => item.id === hubId) || hubs[0];

    if (hub.id === activeHubId) return;

    const previousHubId = activeHubId;
    const requestId = ++selectionRequestId;

    window.clearTimeout(transitionTimer);
    window.clearTimeout(settleTimer);

    page.dataset.hub = hub.id;
    renderHubButtons(hub.id);

    if (shouldUpdateHash) {
        history.replaceState(null, "", `#${hub.id}`);
    }

    if (shouldAnimate && previousHubId) {
        galaxyList.classList.add("is-leaving");
    }

    preloadHubAssets(hub);

    const swapGalaxies = () => {
        if (requestId !== selectionRequestId) return;

        renderGalaxies(hub.galaxies);
        galaxyList.classList.remove("is-leaving");
        galaxyList.classList.add("is-entering");

        transitionTimer = window.setTimeout(() => {
            galaxyList.classList.remove("is-entering");
        }, 620);
    };

    const transitionBackground = () => {
        if (requestId !== selectionRequestId) return;

        page.style.setProperty("--hub-background-next", `url("${hub.background}")`);
        page.classList.toggle("is-transitioning", shouldAnimate && Boolean(previousHubId));

        settleTimer = window.setTimeout(() => {
            setHubBackground(hub.background);
            page.classList.remove("is-transitioning");
        }, shouldAnimate && previousHubId ? 420 : 0);
    };

    if (shouldAnimate && previousHubId) {
        transitionTimer = window.setTimeout(swapGalaxies, 170);
    } else {
        swapGalaxies();
    }

    preloadImage(hub.background).then(transitionBackground);

    activeHubId = hub.id;
    warmGalaxyPageImages(hub);
    warmRemainingAssets(hub);
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
            decoding="async"
            loading="eager"
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

const initialHub = location.hash.slice(1) || hubs[0].id;
const initialHubData = hubs.find(item => item.id === initialHub) || hubs[0];

warmInterfaceIcons();
setHubBackground(initialHubData.background);
selectHub(initialHubData.id, false, false);
