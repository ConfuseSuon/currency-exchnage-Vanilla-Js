import { country_list } from "./countryList.js";

// all selector
export default class SelectorValue {
  constructor() {
    this.inputDate = document.querySelector('input[type="date"]');
    this.inputAmount = document.querySelector('input[type="number"]');
    this.getExchangeRateButton = document.querySelector("button");
    this.form = document.querySelector("form");
    this.fromSelect = document.getElementById("fromSelect");
    this.toSelect = document.getElementById("toSelect");
    this.buyResult = document.getElementById("buyingResult");
    this.sellResult = document.getElementById("sellingResult");
    this.exchangeIcon = document.querySelector(".icon");
    this.loader = document.getElementById("loader");
    this.imgsrc = document.querySelector("img");
    this.body = document.querySelector("body");
  }
}

// loading select - options value
const selector = new SelectorValue();
for (let currencyCode in country_list) {
  let optionTag = `<option value= ${currencyCode}>${currencyCode}</option>`;
  selector.fromSelect.insertAdjacentHTML("beforeend", optionTag);
  selector.toSelect.insertAdjacentHTML("beforeend", optionTag);
}
