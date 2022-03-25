"use strict";

const d = document;
const submit_button = d.querySelector(".submit-btn");
const thank_you_card = d.querySelector(".thank-you-state-card");
const valores_rating = d.querySelectorAll(".rating-value-box button");
const result = d.querySelector(".rating");
console.log(valores_rating);

console.dir(result);

Array.from(valores_rating).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const valueRating = e.target.textContent;
    result.textContent = valueRating;
  });
});

submit_button.addEventListener("click", () => {
  thank_you_card.classList.toggle("show-card");
});
