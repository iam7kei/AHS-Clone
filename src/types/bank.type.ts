export type Bank = {
  id: number
  name: string
  type: "SAVINGS" | "CHECKING"
  amount: number
}

export type AddBankType = {
  id?: number;
  name: string;
  type: "SAVINGS" | "CHECKING" | null;
  amount: number;
};

export type AddBankSubmitFn = (newBank: AddBankType) => void;