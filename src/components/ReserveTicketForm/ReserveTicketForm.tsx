import { FC, useCallback, useEffect, useState } from 'react';
import { ITrainResponse } from '../../types/ITrainResponse';
import { ITicketTypeResponse } from '../../types/ITicketTypeResponse';
import ReservationService from '../../services/ReservationService';
import { useNavigate } from 'react-router-dom';
import { ITicketResponse } from '../../types/ITicketResponse';
import TicketPurchaseForm from '../TicketPurchaseForm/TicketPurchaseForm';
import classes from './ReserveTicketForm.module.css';

const ReserveTicketsForm: FC = () => {
  const [selectedTrainId, setSelectedTrainId] = useState('');
  const [selectedTypeId, setSelectedTypeId] = useState('');
  const [trains, setTrains] = useState<ITrainResponse[]>([]);
  const [ticketTypes, setTicketTypes] = useState<ITicketTypeResponse[]>([]);
  const [tickets, setTickets] = useState<ITicketResponse[]>([]);

  const navigate = useNavigate();
  const fetchData = useCallback(async () => {
    try {
      const requests = [
        ReservationService.getAllTrains(),
        ReservationService.getTicketTypes(),
      ];
      const [trainData, typeData] = await Promise.all(requests);
      setTrains(trainData.data);
      setTicketTypes(typeData.data);
      setSelectedTrainId(trainData.data[0]?.id ?? '');
      setSelectedTypeId(typeData.data[0]?.id ?? '');
    } catch (error) {
      console.error(error);
      navigate('/login');
    }
  }, [navigate]);

  const purchaseTicket = useCallback(
    async (ticketId: string) => {
      try {
        await ReservationService.purchaseTicket(ticketId);
        navigate('/my-tickets');
      } catch (error) {
        console.error(error);
      }
    },
    [navigate]
  );

  const handleFind = async () => {
    try {
      const response = await ReservationService.getFreeTickets(
        selectedTrainId,
        selectedTypeId
      );
      setTickets(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div className={classes['select-container']}>
        <select onChange={e => setSelectedTrainId(e.target.value)}>
          {trains.map(train => (
            <option key={train.id} value={train.id}>
              {train.name}
            </option>
          ))}
        </select>
        <select
          value={selectedTypeId}
          onChange={e => setSelectedTypeId(e.target.value)}
        >
          {ticketTypes.map(ticketType => (
            <option key={ticketType.id} value={ticketType.id}>
              {ticketType.name}
            </option>
          ))}
        </select>
        <button onClick={handleFind}>Find</button>
      </div>
      <div className={classes['ticket-container']}>
        {tickets.map(ticket => (
          <TicketPurchaseForm
            key={ticket.id}
            placeNumber={ticket.placeNumber}
            onClick={() => purchaseTicket(ticket.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ReserveTicketsForm;
