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

    if (banks.length === 0) {
      return (
        <tr>
          <td colSpan={2}>
            <div className="justify-center text-center items-center ">
              <h3 className='font-semibold'>No banks listed.</h3>
            </div>
          </td>
        </tr>
      );
    }

    return banks.map((item: Bank, index: number) => {
      
      return (
        <tr>
          <td>
            <h3>
              {item.name}
            </h3>
          </td>
          <td>
            <h3>
              {parseLocaleString(item.amount, true)}
            </h3>
          </td>
        </tr>
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
      <div className="flex flex-col space-y-10">
        <h1>Total Savings: {parseLocaleString(totalSavings, true)}</h1>
        <div className="flex flex-col space-x-3">
          <table className='border border-black'>
            <tr className='bg-gray-300'>
              <th>Bank</th>
              <th>Amount</th>
            </tr>
            {renderBanks()}
          </table>
        </div>
        <button onClick={() => setBankModalVisibility(true)}>Add Bank</button>
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
}

export default App
