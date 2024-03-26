// data.js
export const cards = [
  {
    title: "Startup Advisory\u00A0\u00A0\u00A0\u00A0\u00A0",
    imageUrl: "/cards/startup.svg", // replace with the actual image path
    link: "/card1",
  },
  {
    title: "Venture Capital and Fund Raising",
    imageUrl: "/cards/venture.svg", // replace with the actual image path
    link: "/card1",
  },
  {
    title: "Nominee Directors",
    imageUrl: "/cards/nominee.svg", // replace with the actual image path
    link: "/card1",
  },

  {
    title: "Intellectual Property",
    imageUrl: "/cards/intellectual.svg", // replace with the actual image path
    link: "/card1",
  },

  {
    title: "Company Secretarial",
    imageUrl: "/cards/company.svg", // replace with the actual image path
    link: "/card1",
  },

  {
    title: "Frontier Technology",
    imageUrl: "/cards/frontier.svg", // replace with the actual image path
    link: "/card1",
  },

  // Add more cards as needed
];

cards.forEach((card, index) => {
  card.fadeDuration = index * 300; // Set fadeDuration with a 200-millisecond difference
});
