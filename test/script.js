const book = document.querySelector("#book");
const pages = Array.from(document.querySelectorAll(".page"));
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const pageStatus = document.querySelector("#pageStatus");

let currentPage = 0;
let isAnimating = false;

function getAnimationDuration() {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--duration")
    .trim();

  if (value.endsWith("ms")) {
    return Number.parseFloat(value);
  }

  if (value.endsWith("s")) {
    return Number.parseFloat(value) * 1000;
  }

  return 950;
}

function updateBook() {
  pages.forEach((page, index) => {
    page.classList.remove(
      "is-current",
      "is-next",
      "is-flipped",
      "is-hidden"
    );

    page.style.zIndex = String(pages.length - index);

    if (index < currentPage) {
      page.classList.add("is-flipped");
      page.style.zIndex = String(index);
    }

    if (index === currentPage) {
      page.classList.add("is-current");
      page.style.zIndex = "700";
    }

    if (index === currentPage + 1) {
      page.classList.add("is-next");
      page.style.zIndex = "600";
    }

    if (index > currentPage + 1) {
      page.classList.add("is-hidden");
    }
  });

  prevBtn.disabled = currentPage === 0 || isAnimating;
  nextBtn.disabled = currentPage === pages.length - 1 || isAnimating;

  pageStatus.textContent = `${currentPage + 1} / ${pages.length}`;
}

function lockControls() {
  isAnimating = true;
  prevBtn.disabled = true;
  nextBtn.disabled = true;
}

function unlockControls() {
  isAnimating = false;
  updateBook();
}

function flipNext() {
  if (isAnimating || currentPage >= pages.length - 1) return;

  lockControls();

  const page = pages[currentPage];

  page.classList.add("is-flipping");

  requestAnimationFrame(() => {
    page.classList.add("is-flipped");
  });

  window.setTimeout(() => {
    page.classList.remove("is-flipping");
    currentPage += 1;
    unlockControls();
  }, getAnimationDuration());
}

function flipPrev() {
  if (isAnimating || currentPage <= 0) return;

  lockControls();

  currentPage -= 1;

  const page = pages[currentPage];

  page.classList.add("is-reversing");
  page.classList.remove("is-hidden");

  updateBook();

  requestAnimationFrame(() => {
    page.classList.remove("is-flipped");
  });

  window.setTimeout(() => {
    page.classList.remove("is-reversing");
    unlockControls();
  }, getAnimationDuration());
}

function handleBookClick(event) {
  const clickedInteractiveElement = event.target.closest(
    "button, a, input, textarea, select, label"
  );

  if (clickedInteractiveElement) return;

  const clickX = event.clientX;
  const screenMiddle = window.innerWidth / 2;

  if (clickX < screenMiddle) {
    flipPrev();
  } else {
    flipNext();
  }
}

function handleKeyboard(event) {
  const activeElement = document.activeElement;
  const isTyping =
    activeElement &&
    ["INPUT", "TEXTAREA", "SELECT"].includes(activeElement.tagName);

  if (isTyping) return;

  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    flipNext();
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    flipPrev();
  }

  if (event.key === "Home") {
    event.preventDefault();
    goToPage(0);
  }

  if (event.key === "End") {
    event.preventDefault();
    goToPage(pages.length - 1);
  }
}

function goToPage(pageIndex) {
  if (isAnimating) return;

  const safeIndex = Math.max(0, Math.min(pageIndex, pages.length - 1));
  currentPage = safeIndex;
  updateBook();
}

prevBtn.addEventListener("click", flipPrev);
nextBtn.addEventListener("click", flipNext);
book.addEventListener("click", handleBookClick);
window.addEventListener("keydown", handleKeyboard);

updateBook();