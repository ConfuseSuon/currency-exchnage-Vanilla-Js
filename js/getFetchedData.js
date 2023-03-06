import SelectorValue from "./loadOptions&Selector.js";
import {
  calculationofBuyCurrencey,
  calculationofSellCurrencey,
} from "./currencyCalculation.js";
const selector = new SelectorValue();

// Base Url and Request Options for API
const BASE_URL = "https://www.nrb.org.np";
let requestOptions = {
  method: "GET",
  redirect: "follow",
};

//  GET method on API to get response || value;
const getExchangeRate = async (date, amount, fromCountry, toCountry) => {
  selector.body.classList.add("cursor");
  selector.loader.innerHTML = "Getting Value...";
  const responseOfAPI = await fetch(
    BASE_URL +
      "/api/forex/v1/rates?" +
      "from=" +
      date +
      "&to=" +
      date +
      "&per_page=20&page=1",
    requestOptions
  );

  if (!responseOfAPI.ok) {
    throw new Error(`HTTP ERROR ! status: ${responseOfAPI.status}`);
  }
  selector.loader.innerHTML = "NRB-API";
  selector.body.classList.remove("cursor");

  const result = await responseOfAPI.json();

  let amountToBeConvert = amount;
  let fromCountryValue = fromCountry;
  let toCountryValue = toCountry;

  extractCalculatingCurrencyDetails(
    result,
    amountToBeConvert,
    fromCountryValue,
    toCountryValue
  );
};

// extracting only selected date of country currency value
export const extractCalculatingCurrencyDetails = (
  result,
  amountToBeConvert,
  fromCountryValue,
  toCountryValue
) => {
  let payLoad = result.data.payload;
  let rates = payLoad.map((item) => {
    return item.rates;
  });
  let output = [];
  for (let i = 0; i < rates.length; i++) {
    rates[i].filter((item) => {
      if (fromCountryValue === item.currency.iso3) {
        output.push(item);
      }
    });
    rates[i].filter((item) => {
      if (toCountryValue === item.currency.iso3) {
        output.push(item);
      }
    });
  }
  let amountToConvert = amountToBeConvert;
  calculationofBuyCurrencey(output, amountToConvert);
  calculationofSellCurrencey(output, amountToConvert);
};

export default getExchangeRate;
