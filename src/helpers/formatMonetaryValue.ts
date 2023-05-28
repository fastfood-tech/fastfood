/* eslint-disable no-nested-ternary */
export default function formatMonetaryValue(value: number): string {
  if (!value && value !== 0) return '###';

  const valueModulus = Math.sqrt(value ** 2) * 100;
  const stringValue = valueModulus.toString();

  let result = `${stringValue.substring(
    0,
    stringValue.length - 2,
  )},${stringValue.substring(stringValue.length - 2)}`;

  if (valueModulus < 9) result = `0,0${valueModulus.toFixed(2)}`;
  if (valueModulus < 99) result = `0,${valueModulus.toFixed(2)}`;

  return `R$ ${result}`;
}
