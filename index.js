const pupularTopics = [
  {
    img: "./assets/imgs/BlogImage1.png",
    title: "Dream destinations to visit this year in Paris",
    date: "08.08.2024",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
  },
  {
    img: "./assets/imgs/BlogImage1.png",
    title: "Breathtaking first-person photos around Europe",
    date: "08.08.2024",

    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
  },
  {
    title: "What collectors need to know about authenticity",
    date: "08.08.2024",
    img: "./assets/imgs/BlogImage1.png",

    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
  },
  {
    img: "./assets/imgs/BlogImage1.png",
    title: "Instagram artists with great photography skills",
    date: "08.08.2024",

    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
  },
  {
    img: "./assets/imgs/BlogImage1.png",
    title: "Thins to know before visiting  Cave in Germany",
    date: "08.08.2024",

    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
  },
  {
    img: "./assets/imgs/BlogImage1.png",
    title: "Nina Smith vibrant work collab with Nike Dunk",
    date: "08.08.2024",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
  },
  {
    img: "./assets/imgs/BlogImage1.png",
    title: "Richard Norton photorealistic rendering as real photos",
    date: "08.08.2024",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
  },
  {
    img: "./assets/imgs/BlogImage1.png",
    title: "25 quality collectors toys inspired by famous films",
    date: "08.08.2024",
    description:
      "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
  },
];
const listPopular = document.querySelector(".list-popular");

function createPopularItem(item) {
  const li = document.createElement("li");
  li.className = "item-popular";

  li.innerHTML = `
      <img src="${item.img}" alt="${item.title}" />
      <span class="data-publication">${item.date}</span>
      <h2 class="title-item">${item.title}</h2>
      <p class="description-item">${item.description}</p>
    `;

  return li;
}

function renderPopularTopics(topics) {
  const fragment = document.createDocumentFragment();

  topics.forEach((item) => {
    const popularItem = createPopularItem(item);
    fragment.appendChild(popularItem);
  });

  listPopular.appendChild(fragment);
}

renderPopularTopics(pupularTopics);
