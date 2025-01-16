import { useState } from 'react'
import './App.css'
import './tailwind.css'
import { Bank } from './types/bank.type'
import { AddBankModal } from './components/modals/bank/add-bank.modal'

function App() {
  const [totalSavings, setTotalSavings] = useState<number>(10000)
  const [banks, setBanks] = useState<Bank[]>([])
  const [addBankModalVisibility, setBankModalVisibility] = useState<boolean>(false)

  return (
    <>
      <h1>
        Total Savings: {parseInt(totalSavings.toFixed(2)).toLocaleString()}
      </h1>
      <div className="flex flex-row space-x-3">
        <h3>Bank 1: 10,000</h3>
        <h3>Bank 2: 4,000</h3>
      </div>
      <button onClick={() => setBankModalVisibility(true)}>Add Bank</button>

      {addBankModalVisibility && (
        <AddBankModal
          onSubmit={() => console.log("tst")}
          isVisble={addBankModalVisibility}
          onClose={() => setBankModalVisibility(false)}
        />
      )}
    </>
  );
}

export default App
