import { FC, useCallback, useEffect, useState } from 'react';
import { IClientTicketResponse } from '../../types/IClientTicketResponse';
import ClientTicket from '../../components/ClientTicket/ClientTicket';
import { useNavigate } from 'react-router-dom';
import ReservationService from '../../services/ReservationService';
import classes from './ClientTicketsPage.module.css';

const ClientTicketsPage: FC = () => {
  const [tickets, setTickets] = useState<IClientTicketResponse[]>([]);

  const navigate = useNavigate();

  const fetchTickets = useCallback(async () => {
    try {
      const response = await ReservationService.getClientTickets();
      setTickets(response.data);
    } catch (error) {
      console.error(error);
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  return (
    <div className={classes.container}>
      {tickets.map(ticket => (
        <ClientTicket
          key={ticket.id}
          trainName={ticket.trainName}
          placeNumber={ticket.placeNumber}
          type={ticket.typeName}
        />
      ))}
    </div>
  );
};

export default ClientTicketsPage;
