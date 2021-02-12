import React from "react";
import ReactModal from 'react-modal';
import { X } from "phosphor-react";

type StateSet<V> = React.Dispatch<React.SetStateAction<V>>;

type Props = {
  hasCloseButton: boolean;
  isOpen: boolean;
  setIsOpen: StateSet<boolean>;
}

const Modal: React.FC<Props> = ({isOpen, setIsOpen, hasCloseButton}) => {
  const styles = {
    overlay: {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    },
    content: {
      inset: 'unset',
    }
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Example Modal"
      style={styles}
    >
      {hasCloseButton &&
       <div className="flex flex-auto flex-row-reverse">
         <button onClick={() => setIsOpen(false)}>
           <X size="20px" color="#4c6fea" weight="bold" />
         </button>
       </div>
      }
    </ReactModal>
  )
}

export default Modal;
