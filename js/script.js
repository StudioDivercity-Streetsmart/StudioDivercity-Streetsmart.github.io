document.addEventListener("DOMContentLoaded", function () {
  console.log("Carousel script started.");

  const carouselContainer = document.querySelector(".js-carousel-container");
  const track = document.querySelector(".js-carousel-track");
  const moreMythsBtn = document.getElementById("moreMythsBtn");

  if (!carouselContainer || !track || !moreMythsBtn) {
    console.error("Essential carousel elements not found!");
    return;
  }

  let originalCards = Array.from(track.children);
  if (originalCards.length === 0) {
    console.error("No cards found in the carousel track initially.");
    return;
  }
  console.log("Initial original cards count:", originalCards.length);

  let currentIndex = 0; // Actual index in the track (including all clones)
  let cardWidthWithMargin = 0;
  let isTransitioning = false;
  const transitionSpeed = 600;
  // Clone enough cards for smooth looping. For 4 originals, cloning 3 on each side is robust.
  const cardsToCloneCount = Math.min(originalCards.length, 3); // Ensure we don't try to clone more than exist
  let isInitialView = true;
  let unhidePrependedClonesAfterFirstSlide = false;

  function setupInfiniteScroll() {
    console.log("Setting up infinite scroll...");
    const originalCardsHTML = originalCards.map((card) => card.outerHTML).join("");
    track.innerHTML = originalCardsHTML; // Reset with original cards
    originalCards = Array.from(track.children); // Re-reference original cards

    console.log(`Prepending ${cardsToCloneCount} clones...`);
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
    console.log("Total cards in track (with clones):", track.children.length);
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
    console.log(`Updating position. Target actual track currentIndex: ${currentIndex}, enableTransition: ${enableTransition}, isInitialView: ${isInitialView}`);
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
        console.log(`INITIAL VIEW transformX: ${newTransformX}px (based on card at index ${currentIndex} starting at 30% left)`);
      } else {
        // Fallback if card width isn't ready, try to at least center somewhat or use a rough estimate
        // This case should ideally not be hit if calculateCardWidth runs first.
        newTransformX = -currentIndex * (carouselContainer.offsetWidth * 0.47); // Rough guess
        console.warn("INITIAL VIEW using fallback transformX due to cardWidth=0 or no container.");
      }
    } else {
      newTransformX = -currentIndex * cardWidthWithMargin;
      console.log(`REGULAR SLIDE transformX: ${newTransformX}px`);
    }

    if (enableTransition && !isInitialView) {
      track.style.transition = `transform ${transitionSpeed / 1000}s ease-in-out`;
      console.log("Transition ENABLED with ease-in-out");
    } else {
      track.style.transition = "none";
      console.log("Transition DISABLED (initial set, jump, or isInitialView still true)");
    }

    track.style.transform = `translateX(${newTransformX}px)`;
    console.log(`Track transformed to: translateX(${newTransformX}px) for actual track index ${currentIndex}`);
  }

  moreMythsBtn.addEventListener("click", () => {
    console.log("------------------------------------");
    console.log("More Myths button clicked.");

    if (isTransitioning) {
      console.log("Click ignored: Carousel is already transitioning.");
      return;
    }
    if (cardWidthWithMargin === 0) {
      console.warn("Click ignored: Card width is 0. Attempting recalculation...");
      calculateCardWidth();
      if (cardWidthWithMargin === 0) {
        console.error("Card width still 0 after recalculation. Cannot move carousel.");
        return;
      }
    }

    isTransitioning = true; // Prevent further clicks during animation

    if (isInitialView) {
      isInitialView = false; // We are now leaving the special initial state
      // VVVVVV KEY CHANGE VVVVVV
      unhidePrependedClonesAfterFirstSlide = true; // Mark that clones need unhiding AFTER this current slide animation
      // ^^^^^^ KEY CHANGE ^^^^^^
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
        console.log(`Jump condition met: currentIndex ${currentIndex} >= jumpThreshold ${jumpThreshold}`);
        console.log("Executing jump...");
        currentIndex = cardsToCloneCount; // Reset to the first "real" card's actual index
        updateCarouselPosition(false); // Perform the jump instantly (no transition)
      }

      // VVVVVV KEY ADDITION/MODIFICATION VVVVVV
      // If this was the first slide out of the initial view, unhide the prepended clones now
      if (unhidePrependedClonesAfterFirstSlide) {
        track.querySelectorAll(".js-prepended-clone.initially-hidden").forEach((clone) => {
          clone.classList.remove("initially-hidden");
        });
        console.log("Prepended clones unhidden (opacity restored).");
        unhidePrependedClonesAfterFirstSlide = false; // Reset this flag so it only happens once
      }
      // ^^^^^^ KEY ADDITION/MODIFICATION ^^^^^^

      isTransitioning = false; // Allow clicks again
      console.log("Slide/Jump animation sequence complete. isTransitioning set to false. New currentIndex:", currentIndex);
    }, transitionSpeed); // Delay matches the CSS transition duration
  });

  // --- INITIAL SETUP ---
  console.log("Performing initial setup...");
  setupInfiniteScroll(); // Sets up clones and initial currentIndex
  calculateCardWidth(); // Calculate width AFTER clones are in the DOM
  updateCarouselPosition(false); // Apply initial position (uses isInitialView logic, no transition)

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      console.log("Window resized.");
      const oldCardWidth = cardWidthWithMargin;
      calculateCardWidth();
      if (cardWidthWithMargin !== oldCardWidth || (oldCardWidth === 0 && cardWidthWithMargin !== 0)) {
        console.log("Card width changed/initialized on resize, re-syncing position.");
        updateCarouselPosition(false); // This will re-apply initial or regular logic based on isInitialView
      }
    }, 250);
  });

  console.log("Carousel initialized successfully.");
});
