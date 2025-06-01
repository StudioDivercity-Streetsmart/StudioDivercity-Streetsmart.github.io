document.addEventListener("DOMContentLoaded", function () {
  console.log("Carousel script started.");

  const carouselContainer = document.querySelector(".js-carousel-container");
  const track = document.querySelector(".js-carousel-track");
  const moreMythsBtn = document.getElementById("moreMythsBtn");

  if (!carouselContainer || !track || !moreMythsBtn) {
    return;
  }

  let originalCards = Array.from(track.children);
  if (originalCards.length === 0) {
    return;
  }

  let currentIndex = 0; // Actual index in the track (including all clones)
  let cardWidthWithMargin = 0;
  let isTransitioning = false;
  const transitionSpeed = 600;
  // Clone enough cards for smooth looping. For 4 originals, cloning 3 on each side is robust.
  const cardsToCloneCount = Math.min(originalCards.length, 3); // Ensure we don't try to clone more than exist
  let isInitialView = true;
  let unhidePrependedClonesAfterFirstSlide = false;

  function setupInfiniteScroll() {
    const originalCardsHTML = originalCards.map((card) => card.outerHTML).join("");
    track.innerHTML = originalCardsHTML; // Reset with original cards
    originalCards = Array.from(track.children); // Re-reference original cards

    for (let i = 0; i < cardsToCloneCount; i++) {
      // Clone from the end of the original set
      const originalCardToClone = originalCards[originalCards.length - 1 - (i % originalCards.length)];
      if (originalCardToClone) {
        const clone = originalCardToClone.cloneNode(true);
        clone.classList.add("js-prepended-clone");
        clone.classList.add("initially-hidden"); // <<< ADDED: Hide prepended clones initially
        track.insertBefore(clone, track.firstChild);
      }
    }

    console.log(`Appending ${cardsToCloneCount} clones...`);
    for (let i = 0; i < cardsToCloneCount; i++) {
      // Clone from the start of the original set
      const originalCardToClone = originalCards[i % originalCards.length];
      if (originalCardToClone) {
        const clone = originalCardToClone.cloneNode(true);
        // Appended clones don't need special initial hiding for this specific problem
        track.appendChild(clone);
      }
    }
    currentIndex = cardsToCloneCount; // Start at the first "real" card's actual index in the track
    console.log("Initial currentIndex (actual track index) set to:", currentIndex);
  }

  function calculateCardWidth() {
    if (track.children.length > cardsToCloneCount) {
      const cardToMeasure = track.children[cardsToCloneCount]; // Measure the first "real" card
      const cardStyle = window.getComputedStyle(cardToMeasure);
      const cardMarginRight = parseFloat(cardStyle.marginRight) || 0;
      cardWidthWithMargin = cardToMeasure.offsetWidth + cardMarginRight;
      console.log(`Calculated cardWidthWithMargin: ${cardWidthWithMargin} (offsetWidth: ${cardToMeasure.offsetWidth}, marginRight: ${cardMarginRight})`);
      if (cardWidthWithMargin === 0) console.warn("Card width is 0. Carousel may not move. Check CSS.");
    } else {
      console.error("Cannot calculate card width: Not enough cards or incorrect setup.");
      cardWidthWithMargin = 0;
    }
  }

  function updateCarouselPosition(enableTransition = true) {
    // Allow initial set even if cardWidth is 0, it will get calculated.
    if (cardWidthWithMargin === 0 && !isInitialView && currentIndex !== cardsToCloneCount) {
      console.warn("Card width is 0, transform not applied for non-initial update.");
      return;
    }

    let newTransformX;

    if (isInitialView) {
      if (cardWidthWithMargin > 0 && carouselContainer) {
        // Ensure cardWidth is calculated for initial precise placement
        const containerWidth = carouselContainer.offsetWidth;
        const leftOffset = containerWidth * 0.07;
        newTransformX = -(currentIndex * cardWidthWithMargin) + leftOffset;
      } else {
        newTransformX = -currentIndex * (carouselContainer.offsetWidth * 0.47); // Rough guess
      }
    } else {
      newTransformX = -currentIndex * cardWidthWithMargin;
    }

    if (enableTransition && !isInitialView) {
      track.style.transition = `transform ${transitionSpeed / 1000}s ease-in-out`;
    } else {
      track.style.transition = "none";
    }

    track.style.transform = `translateX(${newTransformX}px)`;
  }

  moreMythsBtn.addEventListener("click", () => {
    if (isTransitioning) {
      return;
    }
    if (cardWidthWithMargin === 0) {
      calculateCardWidth();
      if (cardWidthWithMargin === 0) {
        console.error("Card width still 0 after recalculation. Cannot move carousel.");
        return;
      }
    }

    isTransitioning = true;

    if (isInitialView) {
      isInitialView = false;
      unhidePrependedClonesAfterFirstSlide = true;
      console.log("Exiting initial view. Prepended clones will be unhidden after this first slide animation completes.");
    }

    currentIndex++; // Increment to the next logical card position
    console.log("currentIndex incremented to (actual track index):", currentIndex);

    updateCarouselPosition(true); // Start the slide animation

    // This timeout runs AFTER the slide animation completes
    setTimeout(() => {
      const jumpThreshold = cardsToCloneCount + originalCards.length;
      console.log(`After slide. Current actual track index: ${currentIndex}, Jump threshold: ${jumpThreshold}`);

      if (currentIndex >= jumpThreshold) {
        // Check if a jump to the beginning is needed
        currentIndex = cardsToCloneCount; // Reset to the first "real" card's actual index
        updateCarouselPosition(false); // Perform the jump instantly (no transition)
      }

      if (unhidePrependedClonesAfterFirstSlide) {
        track.querySelectorAll(".js-prepended-clone.initially-hidden").forEach((clone) => {
          clone.classList.remove("initially-hidden");
        });
        console.log("Prepended clones unhidden (opacity restored).");
        unhidePrependedClonesAfterFirstSlide = false; // Reset this flag so it only happens once
      }

      isTransitioning = false;
    }, transitionSpeed);
  });

  // --- INITIAL SETUP ---
  console.log("Performing initial setup...");
  setupInfiniteScroll();
  calculateCardWidth();
  updateCarouselPosition(false);

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      console.log("Window resized.");
      const oldCardWidth = cardWidthWithMargin;
      calculateCardWidth();
      if (cardWidthWithMargin !== oldCardWidth || (oldCardWidth === 0 && cardWidthWithMargin !== 0)) {
        updateCarouselPosition(false); // This will re-apply initial or regular logic based on isInitialView
      }
    }, 250);
  });
});
