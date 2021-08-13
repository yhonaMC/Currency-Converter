const currencyel_One = document.getElementById("currency-one");
const currencyel_Two = document.getElementById("currency-two");
const amountel_One = document.getElementById("amount-one");
const amountel_Two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// EventListener
currencyel_One.addEventListener("change", calcular);
amountel_One.addEventListener("input", calcular);
currencyel_Two.addEventListener("change", calcular);
amountel_Two.addEventListener("input", calcular);
swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calcular();
});

calcular();

function calcular() {
  const currency_One = currencyel_One.value;
  const currency_Two = currencyel_Two.value;

  fetch(
    `http://api.exchangeratesapi.io/v1/latest?access_key=3c9dd1dbb4efe76e6de0bdbd302e3dc9&${currency_One}`
  )
    .then((response) => response.json())
    .then((data) => {
      const convertion = data.rates[currency_Two];

      rateEl.innerHTML = `1 ${currency_One} = ${convertion} ${currency_Two} `;

      amountel_Two.value = (amountel_One.value * convertion).toFixed(2);
    });
}
