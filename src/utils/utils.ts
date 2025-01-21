import { Bank } from "../types/bank.type";

export const parseLocaleString = (num: number, sign: boolean | never) => {
  const parsedNumber = parseFloat(num.toFixed(2)).toLocaleString();
  const finalReturn = `${sign && "₱"}${parsedNumber}`;
  return finalReturn;
}

export const areFieldsEmpty = (obj: any) => {
  return Object.keys(obj).filter((item: string) => {
    return !obj[item] ? item : null;
  });
}

export const sortBanksByAmount = (banks: Bank[]) => {
  return banks.sort((a,b) => {
    if (a.amount > b.amount) return -1;
    if (a.amount < b.amount) return 1;
    return 0
  })
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
