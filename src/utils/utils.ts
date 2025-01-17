export const parseLocaleString = (num: number, sign: boolean | never) => {
  const parsedNumber = parseInt(num.toFixed(2)).toLocaleString();
  const finalReturn = `${sign && "₱"}${parsedNumber}`;
  return finalReturn;
}