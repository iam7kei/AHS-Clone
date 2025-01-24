import { fn } from "@/types/global.type";

interface ModalProps {
  isVisble: boolean;
  onSubmit: fn;
  onClose: fn;
  children: React.ReactNode;
}

interface ModalTitleProps {
  children: React.ReactNode;
}

export const ModalTitle = ({ children }: ModalTitleProps) => {
  return <div className="modal-title flex justify-start">{children}</div>;
};

export const Modal = ({
  isVisble,
  onSubmit,
  onClose,
  children,
}: ModalProps) => {
  if (!isVisble) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content flex flex-col justify-between space-y-5 w-[30%]">
        {children}
        <div className="flex flex-row space-x-3 justify-end">
          <button className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
          <button className="btn btn-secondary " onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
