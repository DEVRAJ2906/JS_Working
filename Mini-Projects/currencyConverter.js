let amount = document.querySelector("input");
let dropdowns = document.querySelectorAll("select");
let fromCurr = document.querySelector("#from");
let toCurr = document.querySelector("#to");
let showRate = document.querySelector("#print");
let btnExchange = document.querySelector("#exchange");
let flagFrom = document.querySelector("#flagFrom");
let flagTo = document.querySelector("#flagTo");

const BASE_URL =
  "https://latest.currency-api.pages.dev/v1/currencies";

for(let dropdown of dropdowns){
    for(let currCode in countryList){
        let option = document.createElement("option");
        option.innerText = `${currCode}`;
        option.value = `${currCode}`;
        if(currCode === "INR" && dropdown.id === "from"){
            option.selected = "selected";
        }else if(currCode === "USD" && dropdown.id === "to"){
            option.selected = "selected";
        }
        dropdown.append(option);
    }
}

const updateExchangeRate = async (evt) => {
    evt.preventDefault;
    if(amount.value === "" || amount.value < 1){
        amount.value = 1;
        amount.innerText = 1;
    }
    let amtVal = amount.value;
    const newURL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(newURL);
    let data = await response.json();
    let fromRate = data[fromCurr.value.toLowerCase()];
    let rate = fromRate[toCurr.value.toLowerCase()];
    let finalAmount = amtVal * rate;
    showRate.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

btnExchange.addEventListener("click", (evt) => {
    updateExchangeRate(evt);
});

window.addEventListener("load", (evt) => {
    amount.value = "1";
    updateExchangeRate(evt);
});

fromCurr.addEventListener("change", (evt) => {
    let selectedCurr = evt.target;
    let selectedCurrVal = selectedCurr.value;
    console.log(countryList[selectedCurrVal]);
    flagFrom.setAttribute("src",`https://flagsapi.com/${countryList[selectedCurrVal]}/flat/64.png`);
});

toCurr.addEventListener("change", (evt) => {
    let selectedCurr = evt.target;
    let selectedCurrVal = selectedCurr.value;
    console.log(countryList[selectedCurrVal]);
    flagTo.setAttribute("src",`https://flagsapi.com/${countryList[selectedCurrVal]}/flat/64.png`);
});