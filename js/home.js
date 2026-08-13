const destinations = Array.from(document.querySelectorAll("[data-destination]"));

destinations.forEach((destination, index) => {
    destination.addEventListener("keydown", (event) => {
        let nextIndex = null;

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            nextIndex = (index + 1) % destinations.length;
        }

        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            nextIndex = (index - 1 + destinations.length) % destinations.length;
        }

        if (event.key === "Home") {
            nextIndex = 0;
        }

        if (event.key === "End") {
            nextIndex = destinations.length - 1;
        }

        if (nextIndex === null) return;

        event.preventDefault();
        destinations[nextIndex].focus();
    });
});
