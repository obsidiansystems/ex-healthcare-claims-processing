import React, { Dispatch, SetStateAction } from "react";
import ReactModal from 'react-modal';
import { X } from "phosphor-react";

type Props = {
  body: React.ReactNode;
  hasCloseButton: boolean;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  theme: { blue: string };
}

const Modal: React.FC<Props> = ({active, setActive, hasCloseButton, body, theme}) => {
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
      isOpen={active}
      onRequestClose={() => setActive(false)}
      contentLabel="Example Modal"
      style={styles}
    >
      {hasCloseButton &&
       <div className="flex flex-auto flex-row-reverse">
         <button onClick={() => setActive(false)}>
           <X size="20px" color={theme.blue} weight="bold" />
         </button>
       </div>
      }
      {body}
    </ReactModal>
  )
}

export default Modal;
