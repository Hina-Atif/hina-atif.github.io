// Rotating Motivational Quotes
const quotes = [
  "Dream big, work hard, automate everything.",
  "Code, Deploy, Repeat.",
  "Efficiency is the key to DevOps success."
];

let quoteIndex = 0;
const quoteEl = document.querySelector('.popup-quote');

if(quoteEl) {
  setInterval(() => {
    quoteEl.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }, 4000);
}
