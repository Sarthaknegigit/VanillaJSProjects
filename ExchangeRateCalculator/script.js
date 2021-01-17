const currOne = document.getElementById("currency-one");
const amountOne = document.getElementById("amount-one");
const currTwo = document.getElementById("currency-two");
const amountTwo = document.getElementById("amount-two");

const swap = document.getElementById("swap");
const exchgRate = document.getElementById("rate");

function calculate() {
  const currOneVal = currOne.value;
  const currTwoVal = currTwo.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/26e4a7884a5388399cad766e/latest/${currOneVal}`
  )
    .then(res => res.json())
    .then(data => {
      const rate = data.conversion_rates[currTwoVal];

      exchgRate.innerText = `1 ${currOneVal} = ${rate} ${currTwoVal}`;

      amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
}

//Event Listeners

currOne.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
currTwo.addEventListener("change", calculate);
amountTwo.addEventListener("input", calculate);

swap.addEventListener("click", function() {
    const temp = currOne.value;
    currOne.value = currTwo.value;
    currTwo.value = temp;
    calculate();
});

calculate();
