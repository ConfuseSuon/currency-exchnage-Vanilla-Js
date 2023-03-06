import SelectorValue from "./loadOptions&Selector.js";
const selector = new SelectorValue();

// calculating of buy currency /////
export const calculationofBuyCurrencey = (output, amountToConvert) => {
  let fromCurrencyBuy = output[0].buy;
  console.log(fromCurrencyBuy);
  let fromCurrencyUnit = output[0].currency.unit;
  if (fromCurrencyUnit != 1) {
    fromCurrencyBuy = fromCurrencyBuy / fromCurrencyUnit;
    fromCurrencyUnit = 1;
  }

  let toCurrencyBuy = output[1].buy;
  let toCurrencyUnit = output[1].currency.unit;
  if (toCurrencyUnit != 1) {
    toCurrencyBuy = toCurrencyBuy / toCurrencyUnit;
    toCurrencyUnit = 1;
  }

  // converting fromBuy amount -> toBuy amount
  let buyResult = selector.buyResult;
  buyResult.value = (
    (amountToConvert * fromCurrencyBuy) /
    toCurrencyBuy
  ).toFixed(2);
};

// calculating of sell currency /////
export const calculationofSellCurrencey = (output, amountToConvert) => {
  let fromCurrencySell = output[0].sell;
  let fromCurrencyUnit = output[0].currency.unit;
  if (fromCurrencyUnit != 1) {
    fromCurrencySell = fromCurrencySell / fromCurrencyUnit;
    fromCurrencyUnit = 1;
  }

  let toCurrencySell = output[1].sell;
  let toCurrencyUnit = output[1].currency.unit;
  if (toCurrencyUnit != 1) {
    toCurrencySell = toCurrencySell / toCurrencyUnit;
    toCurrencyUnit = 1;
  }

  // converting fromSell amount -> toSell amount
  let sellResult = selector.sellResult;
  sellResult.value = (
    (amountToConvert * fromCurrencySell) /
    toCurrencySell
  ).toFixed(2);
};
