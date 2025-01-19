export const parseLocaleString = (num: number, sign: boolean | never) => {
  const parsedNumber = parseInt(num.toFixed(2)).toLocaleString();
  const finalReturn = `${sign && "₱"}${parsedNumber}`;
  return finalReturn;
}

export const areFieldsEmpty = (obj: any) => {

  return Object.keys(obj).filter((item: string) => {
    console.log(item, obj);
    return !obj[item] ? item : null;
  });


}

export const objectFieldChecker = (obj: any) => {
  const objectKeys = Object.keys(obj)
  const checkResult = objectKeys.map((item: string) => {
    let checks: any = { item: {} }
    if (obj[item].required && obj[item].length === 0) {
      checks[item].required = true
    }
  })
}