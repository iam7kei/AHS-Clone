import { useEffect, useState, CSSProperties } from "react";
import { Bank, AddBankType } from "@/types/bank.type";
import { AddBankModal } from "@/components/bank/add-bank.modal";
import { BankTable } from "@/components/bank/table";
import { parseLocaleString, sortBanksByAmount } from "@/utils/utils";
import { getBankList, addBank } from "@/services/bank.service";
import { useQuery, useMutation } from "@tanstack/react-query";
import { PulseLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Home = () => {
  const [totalSavings, setTotalSavings] = useState<number>(0);
  const [banks, setBanks] = useState<Bank[]>([])
  const [addBankModalVisibility, setBankModalVisibility] =
    useState<boolean>(false);
  const {data: bankData, refetch: bankDataRefetch, isPending: bankDataIsPending} = useQuery({ queryKey: ["results"], queryFn: getBankList });
  const addBankMutation = useMutation({mutationFn: async (data: AddBankType) => {
    return addBank(data)
  },
  onSuccess: () => {
      bankDataRefetch()
  },
  onError: (data) => {
      console.error("Failed", data)
    }
  })
  const onAddBankSubmit = async (newBank: AddBankType) => {
    addBankMutation.mutate(newBank)  
  };

  useEffect(() => {
    if(bankDataIsPending) {
      return
    }

    const updatedTotalSavings = bankData?.data.reduce((totalSaving: number, currentBank: Bank) => {
      return totalSaving + currentBank.amount;
    }, 0);

    const sortedBanks = sortBanksByAmount(bankData?.data)
    setBanks(sortedBanks)

    setTotalSavings(updatedTotalSavings);
  }, [bankDataIsPending, bankData?.data]);

  return (
    <>
      <div className="flex flex-col space-y-10">
        <h1>Total Savings: {parseLocaleString(totalSavings, true)}</h1>
        <div className="flex flex-col space-x-3">
          {bankDataIsPending ? (
            <PulseLoader
              color={"black"}
              loading={true}
              cssOverride={override}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <BankTable data={banks} />
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
