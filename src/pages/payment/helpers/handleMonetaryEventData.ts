import { ChangeEvent } from 'react';

export default function handleMonetaryEventData(
  e: ChangeEvent<HTMLInputElement>,
) {
  const lastAlphanumericKey = (e.nativeEvent as InputEvent)?.data;
  const currentValue = e.target.value;

  if (lastAlphanumericKey === null || /^[0-9]$/.test(lastAlphanumericKey))
    return parseInt(currentValue.replace(/,|R|\$|\s/g, ''), 10);

  return parseInt(
    currentValue.replace(/,|R|\$|\s/g, '').replace(lastAlphanumericKey, ''),
    10,
  );
}
