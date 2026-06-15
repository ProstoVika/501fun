const cards = [
    {
        value: "More than 12,000,000",
        theme: "hands",
        label: "delighted guests",
        image: "./images/Delighted guests.png",
        alt: "Hands illustration"
    },
    {
        value: "Find us in 50",
        theme: "globe",
        label: "countries",
        image: "./images/Find us.png",
        alt: "Globe illustration"
    },
    {
        value: "Over 800,000,000",
        theme: "darts",
        label: "darts thrown",
        image: "./images/Darts thrown.png",
        alt: "Dart illustration"
    }
];

const cardsGrid = document.querySelector("#cardsGrid");
const statsSection = document.querySelector("#statsSection");

const createCardTemplate = (card) => `
  <article class="stat-card ${card.theme}">
    <div class="stat-card__content">
      <h3 class="stat-card__value">${card.value}</h3>
      <p class="stat-card__label">${card.label}</p>
    </div>

    <img
      class="stat-card__image"
      src="${card.image}"
      alt="${card.alt}"
    >
  </article>
`;

const renderCards = () => {
    cardsGrid && (cardsGrid.innerHTML = cards.map(createCardTemplate).join(""));
};

const initScrollAnimation = () => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) return;

            statsSection?.classList.add("is-visible");
            observer.unobserve(statsSection);
        },
        { threshold: 0.3 }
    );

    statsSection && observer.observe(statsSection);
};
document.addEventListener("DOMContentLoaded", () => {
    renderCards();
    initScrollAnimation();
});