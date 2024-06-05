let scrollSpeed = 50;
let scrollInterval;
let isScrolling = false;

export function toggleScroll() {
  if (isScrolling) {
    stopScroll();
  } else {
    startScroll();
  }
}

export function startScroll() {
  clearInterval(scrollInterval);
  scrollInterval = setInterval(() => {
    window.scrollBy(0, 1);
  }, scrollSpeed);
  const scrollButton = document.getElementById("scrollButton");
  if (scrollButton) {
    scrollButton.innerText = "Stopp";
  }
  isScrolling = true;
}

export function stopScroll() {
  clearInterval(scrollInterval);
  const scrollButton = document.getElementById("scrollButton");
  if (scrollButton) {
    scrollButton.innerText = "Scroll";
  }
  isScrolling = false;
}

export function increaseSpeed() {
  if (scrollSpeed > 10) {
    scrollSpeed -= 10;
    if (isScrolling) {
      startScroll();
    }
  }
}

export function decreaseSpeed() {
  scrollSpeed += 10;
  if (isScrolling) {
    startScroll();
  }
}

export function toggleMode() {
  const body = document.body;
  const modeButton = document.getElementById("modeButton");
  if (body.classList.contains("day-mode")) {
    body.classList.remove("day-mode");
    modeButton.innerText = "🌘";
  } else {
    body.classList.add("day-mode");
    modeButton.innerText = "🌖";
  }
}
