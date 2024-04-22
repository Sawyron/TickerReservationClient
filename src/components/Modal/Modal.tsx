import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, isOpen }) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog ref={dialog} className={classes.modal}>
      {children}
    </dialog>,
    document.getElementById('modal')!
  );
};

export default Modal;
