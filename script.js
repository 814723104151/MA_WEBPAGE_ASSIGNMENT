const audio = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("audioToggle");

// Start as muted (recommended for autoplay)
audio.muted = true;
toggleBtn.textContent = "🔇";

toggleBtn.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false;
    audio.play();
    toggleBtn.textContent = "🔊";
  } else {
    audio.muted = true;
    toggleBtn.textContent = "🔇";
  }
});

const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".temple-card");

let currentIndex = 0;

// Get width of one card (including margin)
function getCardWidth() {
  return cards[0].offsetWidth + 20; // 20 = margin (10px left + 10px right)
}

function slide(direction) {
  const cardWidth = getCardWidth();
  const maxIndex = cards.length - Math.floor(document.querySelector(".slider-container").offsetWidth / cardWidth);

  currentIndex += direction;

  // Prevent going beyond limits
  if (currentIndex < 0) {
    currentIndex = 0;
  }

  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
