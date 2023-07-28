"use strict";

const numbers = document.querySelectorAll(".number");
const submitButton = document.querySelector('button');
const selectedText = document.querySelector('.thankYouSelected');
const inCardContent = document.querySelector('.inCardContent');
const thankYou = document.querySelector('.thankYou');

let selectedNumber = undefined;

for (let i = 0; i < numbers.length; i++) {
  const self = numbers[i];

  self.addEventListener("click", function () {
    let getElemWithClass = document.querySelector(".active");
    if (getElemWithClass !== null) {
      getElemWithClass.classList.remove("active");
    }
    self.classList.add("active");
    selectedNumber = self.innerHTML;
  });
}

submitButton.addEventListener('click', function () {
    console.log(selectedNumber);
    inCardContent.classList.add('hide');
    thankYou.classList.remove('hide');
    selectedText.innerHTML = `You selected ${selectedNumber} out of 5`
})