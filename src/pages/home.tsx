import { useEffect, useState, CSSProperties } from "react";
import { Bank, AddBankType } from "@/types/bank.type";
import { AddBankModal } from "@/components/bank/add-bank.modal";
import { BankTable } from "@/components/bank/table";
import { parseLocaleString, sortBanksByAmount } from "@/utils/utils";
import { getBankList } from "@/services/bank.service";
import { useQuery } from "@tanstack/react-query";
import { PulseLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Home = () => {
  const [totalSavings, setTotalSavings] = useState<number>(0);
  const [banks, setBanks] = useState<Bank[]>([]);
  const [addBankModalVisibility, setBankModalVisibility] =
    useState<boolean>(false);
  const result = useQuery({ queryKey: ["results"], queryFn: getBankList });
  
  const onAddBankSubmit = (newBank: AddBankType) => {
    const updatedBanks = [...banks];
    updatedBanks.push(newBank as Bank);
    sortBanksByAmount(updatedBanks);
    setBanks(updatedBanks);
  };

  useEffect(() => {
    let updatedTotalSavings = banks.reduce((totalSaving, currentBank) => {
      return totalSaving + currentBank.amount;
    }, 0);

    setTotalSavings(updatedTotalSavings);
  }, [banks]);

  return (
    <>
      <div className="flex flex-col space-y-10">
        <h1>Total Savings: {parseLocaleString(totalSavings, true)}</h1>
        <div className="flex flex-col space-x-3">
          {result.isPending ? (
            <PulseLoader
              color={"black"}
              loading={true}
              cssOverride={override}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <BankTable data={result.data?.data} />
          )}
        </div>
        <button
          className="btn btn-primary"
          onClick={() => setBankModalVisibility(true)}
        >
          Add Bank
        </button>
      </div>
      {addBankModalVisibility && (
        <AddBankModal
          onSubmit={onAddBankSubmit}
          isVisble={addBankModalVisibility}
          onClose={() => setBankModalVisibility(false)}
        />
      )}
    </>
  );
};
