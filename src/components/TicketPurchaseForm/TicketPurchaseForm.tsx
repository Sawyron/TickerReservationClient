import { FC } from 'react';
import classes from './TicketPurchaseForm.module.css';

export interface ITicketPurchaseFormProps {
  placeNumber: number;
  onClick: () => void;
}

const TicketPurchaseForm: FC<ITicketPurchaseFormProps> = ({
  placeNumber,
  onClick,
}) => {
  return (
    <div className={classes.container}>
      <p className={classes['place-number']}>{placeNumber}</p>
      <button className={classes['reserve-button']} onClick={onClick}>
        Reserve
      </button>
    </div>
  );
};

export default TicketPurchaseForm;
