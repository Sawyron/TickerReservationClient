import { FC } from 'react';
import classes from './ClientTicket.module.css';

export interface IClientTicketProps {
  trainName: string;
  placeNumber: number;
  type: string;
}

const ClientTicket: FC<IClientTicketProps> = ({
  placeNumber,
  type,
  trainName,
}) => {
  return (
    <div className={classes.container}>
      <p>{`train: ${trainName}`}</p>
      <p>{`place number: ${placeNumber}`}</p>
      <p>{`type: ${type}`}</p>
    </div>
  );
};

export default ClientTicket;
