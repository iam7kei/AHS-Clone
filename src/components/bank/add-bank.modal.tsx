import React, {useState} from "react";
import { fn } from "../../types/global.type";
import { Modal, ModalTitle } from "@/components/common/modal"
import { AddBankType, AddBankSubmitFn } from "../../types/bank.type";
import { areFieldsEmpty } from "../../utils/utils";

interface AddBankModalProps {
  isVisble: boolean;
  onSubmit: AddBankSubmitFn;
  onClose: fn;
}

type BankFieldType = {
  type: string;
  label: string;
  placeholder: string;
  options?: string[]
};

const BANK_FIELDS: { [key: string]: BankFieldType } = {
  name: {
    type: "text",
    label: "Name",
    placeholder: "Enter bank name",
  },
  type: {
    type: "select",
    label: "Bank Type",
    placeholder: "Select bank type",
    options: [
      "SAVINGS",
      "CHECKING"
    ]
  },
  amount: {
    type: "number",
    label: "Amount",
    placeholder: "Enter amount",
  },
};

const DEFAULT_ADD_BANK_DATA: AddBankType = {
  name: "",
  type: null,
  amount: 0
}

export const AddBankModal = ({ isVisble, onSubmit, onClose }: AddBankModalProps) => {

  const [addBankData, setAddBankData] = useState<AddBankType>(DEFAULT_ADD_BANK_DATA)
  const [errorMessage, setErrorMsesage] = useState<string>("")

  const handleInputChange = (
    field: keyof AddBankType,
    value: string | number
  ) => {
    const parsedValue = BANK_FIELDS[field].type == 'number' ? parseFloat(value as string) : value
    setAddBankData((prevData) => ({ ...prevData, [field]: parsedValue }));
  };

  const handleOnClose = () => {
    setAddBankData(DEFAULT_ADD_BANK_DATA)
    onClose()
  }
  
  const handleOnSubmit = () => {

    const areAddBankFieldsEmpty = areFieldsEmpty(addBankData)
    if (areAddBankFieldsEmpty.length > 0) {
      setErrorMsesage("Please fill up empty fields")
      return
    }
  
    onSubmit({
      ...addBankData,
      type: !addBankData.type ? "SAVINGS" : addBankData.type,
    });
    handleOnClose();
    setAddBankData(DEFAULT_ADD_BANK_DATA);
  };

 const renderBankFields = () => {
   return Object.keys(BANK_FIELDS).map((item, index) => {
     const bankField = BANK_FIELDS[item];
     return (
       <div key={index} className="flex flex-col justify-start text-left">
         <label className="font-medium">{bankField.label}</label>
         {bankField.type === "select" ? (
           <select
             value={addBankData[item as keyof AddBankType] || ""}
             onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
               handleInputChange(item as keyof AddBankType, e.target.value)
             }
             className="border-2 rounded-md p-3 w-full"
           >
             <option disabled value={""}>
               {BANK_FIELDS[item].placeholder}
             </option>
             {bankField.options?.map((option) => (
               <option key={option} value={option}>
                 {option}
               </option>
             ))}
           </select>
         ) : (
           <input
             type={bankField.type}
             value={addBankData[item as keyof AddBankType] || ""}
             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
               handleInputChange(item as keyof AddBankType, e.target.value)
             }
             className="border-2 rounded-md p-3 w-full"
             placeholder={bankField.placeholder}
           />
         )}
       </div>
     );
   });
 };

  return (
    <Modal
      isVisble={isVisble}
      onSubmit={handleOnSubmit}
      onClose={handleOnClose}
    >
      <ModalTitle>
        <h2 className="font-bold">Add Bank</h2>
      </ModalTitle>
      <div className="modal-body w-full space-y-5">{renderBankFields()}</div>
      <div>
        <h4 className="text-red-500">{errorMessage}</h4>
      </div>
    </Modal>
  );
};