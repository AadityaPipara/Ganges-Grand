// We select all slider containers on the page
const allSliders = document.querySelectorAll('.slider');

allSliders.forEach((sliderElement) => {
    // Look for the container and cards ONLY inside this specific slider
    const container = sliderElement.querySelector('.card-container');
    let cards = container.querySelectorAll('.card');

    let index = 0;
    const originalCardsCount = cards.length;

    // Step 1: Clone the cards so the slider looks infinite
    // This takes the 4 cards (Page 3) or 10 cards (Page 5) and doubles them
    for (let i = 0; i < originalCardsCount; i++) {
        container.appendChild(cards[i].cloneNode(true));
    }

    // Update the cards list to include the clones
    const totalCardsWithClones = container.querySelectorAll('.card');

    function slide() {
        index++;

        // Get the current card width
        const cardElement = totalCardsWithClones[0];
        const cardWidth = cardElement.offsetWidth;
        
        // Get the gap dynamically from CSS (or 0 if not set)
        const style = window.getComputedStyle(container);
        const gap = parseInt(style.gap) || 0;

        // Move the container
        container.style.transition = "transform 0.6s ease-in-out";
        container.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;

        // Reset logic
        if (index >= originalCardsCount) {
            setTimeout(() => {
                container.style.transition = "none";
                container.style.transform = "translateX(0)";
                index = 0;
            }, 600);
        }
    }

    // Start the individual timer for this slider
    let autoSlide = setInterval(slide, 1500);

    // Pause this specific slider when mouse is over it
    sliderElement.addEventListener('mouseover', () => {
        clearInterval(autoSlide);
    });

    // Resume when mouse leaves
    sliderElement.addEventListener('mouseout', () => {
        autoSlide = setInterval(slide, 1500);
    });
});