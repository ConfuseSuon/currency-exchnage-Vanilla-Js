import getExchangeRate from "./getFetchedData.js";
import SelectorValue from "./loadOptions&Selector.js";

const selector = new SelectorValue();

// validation on Input Value
export const validationOnInput = () => {
  const validationOnDateInput = () => {
    if (!selector.inputDate.value) {
      let dateObj = new Date();
      let month = dateObj.getUTCMonth() + 1; //months from 1-12
      let day = dateObj.getUTCDate();
      let year = dateObj.getUTCFullYear();
      let date;

      if (month < 9 && day < 9) {
        date = year + "-" + "0" + month + "-" + "0" + day;
        selector.inputDate.value = date;
      } else {
        date = year + "-" + month + "-" + day;
        selector.input.value = date;
      }

      selector.inputDate.addEventListener("input", () => {
        if (
          selector.inputDate.value > date ||
          selector.inputDate.value < "2021-01-01"
        ) {
          selector.loader.innerHTML = "Invalid Date";
        } else {
          selector.loader.innerHTML = "NRB-API";
        }
      });
    }
  };

  validationOnDateInput();
};

// recieve a propmted userInput
export const sendUserInput = async () => {
  selector.form.addEventListener("submit", (e) => {
    e.preventDefault();
    let date = selector.inputDate.value;
    let amount = selector.inputAmount.value;
    let fromCountry = selector.fromSelect.value;
    let toCountry = selector.toSelect.value;
    // validation on amount and country
    if (!selector.inputAmount.value) {
      selector.loader.innerHTML = "Invalid Amount";
    } else if (!selector.fromSelect.value || !selector.toSelect.value) {
      selector.loader.innerHTML = "Select Country";
    } else {
      selector.loader.innerHTML = "NRB-API";
      getExchangeRate(date, amount, fromCountry, toCountry);
    }
  });
};
