import { useCallback, useEffect, useState } from 'react'
import './App.css'
import './tailwind.css'
import { Bank, AddBankType } from "./types/bank.type";
import { AddBankModal } from './components/modals/bank/add-bank.modal'
import { parseLocaleString } from './utils/utils';

function App() {
  const [totalSavings, setTotalSavings] = useState<number>(0)
  const [banks, setBanks] = useState<Bank[]>([])
  const [addBankModalVisibility, setBankModalVisibility] = useState<boolean>(false)

  const onAddBankSubmit = (newBank: AddBankType) => {
    const updatedBanks = [...banks];
    updatedBanks.push(newBank as Bank);
    setBanks(updatedBanks);
  };

  const renderBanks = useCallback(() => {
    return banks.map((item: Bank, index: number) => {
      return (
        <h3>
          {item.name}: {parseLocaleString(item.amount, true)}
        </h3>
      );
    })
    
  }, [banks])

  useEffect(() => {
    let updatedTotalSavings = banks.reduce((totalSaving, currentBank) => {
      return totalSaving + currentBank.amount
    }, 0)

    setTotalSavings(updatedTotalSavings);
  }, [banks])

  return (
    <>
      <h1>
        Total Savings: {parseLocaleString(totalSavings, true)}
      </h1>
      <div className="flex flex-row space-x-3">
        {renderBanks()}
      </div>
      <button onClick={() => setBankModalVisibility(true)}>Add Bank</button>

      {addBankModalVisibility && (
        <AddBankModal
          onSubmit={onAddBankSubmit}
          isVisble={addBankModalVisibility}
          onClose={() => setBankModalVisibility(false)}
        />
      )}
    </>
  );
}

export default App
