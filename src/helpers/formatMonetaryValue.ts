/* eslint-disable no-nested-ternary */
export function formatMonetaryCents(value: number): string {
  if (!value && value !== 0) return '';

  const valueModulus = Math.sqrt(value ** 2);
  const stringValue = valueModulus.toString();

  let result = `${stringValue.substring(
    0,
    stringValue.length - 2,
  )},${stringValue.substring(stringValue.length - 2)}`;

  if (valueModulus < 99) result = `0,${valueModulus}`;
  if (valueModulus < 9) result = `0,0${valueModulus}`;

  return `R$ ${result}`;
}

export default function formatMonetaryValue(value: number) {
  return formatMonetaryCents(parseInt((value * 100).toFixed(2), 10));
}
