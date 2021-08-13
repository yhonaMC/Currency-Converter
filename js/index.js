const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// EventListener
currencyEl_one.addEventListener("change", calcular);
amountEl_one.addEventListener("input", calcular);
currencyEl_two.addEventListener("change", calcular);
amountEl_two.addEventListener("input", calcular);
swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calcular();
});

calcular();

function calcular() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(
    `http://api.exchangeratesapi.io/v1/latest?access_key=3c9dd1dbb4efe76e6de0bdbd302e3dc9&${currency_one}`
  )
    .then((response) => response.json())
    .then((data) => {
      const convertion = data.rates[currency_two];

      rateEl.innerHTML = `1 ${currency_one} = ${convertion} ${currency_two} `;

      amountEl_two.value = (amountEl_one.value * convertion).toFixed(2);
    });
}
