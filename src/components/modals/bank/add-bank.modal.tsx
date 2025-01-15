import React, {useState} from "react";
import { fn } from "../../../types/global.type";

interface AddBankModalProps {
  isVisble: boolean
  onSubmit: fn,
  onClose: fn
}

export const AddBankModal = ({ isVisble, onSubmit, onClose }: AddBankModalProps) => {

  const [bankName, setBankName] = useState<string>("")

  return (
    <div className="modal-overlay">
      <div className="modal-content flex flex-col space-y-5 justify-between w-[30%]">
        <div className="modal-title flex justify-start">
          <h2 className="font-bold">Add Bank</h2>
        </div>
        <div className="modal-body w-full">
          <input
            type="text"
            value={bankName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setBankName(e.target.value)
            }
            className="border-2 rounded-md p-3 w-full"
            placeholder="Enter bank name"
          />
        </div>
        <div className="flex flex-row space-x-3 justify-end">
          <button className="border border-black" onClick={onSubmit}>
            Submit
          </button>
          <button className="border border-black bg-gray-100" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};