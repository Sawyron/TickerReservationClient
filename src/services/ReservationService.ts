import { AxiosResponse } from 'axios';
import { ITrainResponse } from '../types/ITrainResponse';
import client from './Axios';
import { ITicketTypeResponse } from '../types/ITicketTypeResponse';
import { ITicketResponse } from '../types/ITicketResponse';
import { IClientTicketResponse } from '../types/IClientTicketResponse';

const ReservationService = {
  getAllTrains(): Promise<AxiosResponse<ITrainResponse[]>> {
    return client.get<ITrainResponse[]>('/Trains');
  },

  getTicketTypes(): Promise<AxiosResponse<ITicketTypeResponse[]>> {
    return client.get<ITicketTypeResponse[]>('/Tickets/types');
  },

  getFreeTickets(
    trainId: string,
    typeId: string
  ): Promise<AxiosResponse<ITicketResponse[]>> {
    return client.get<ITicketResponse[]>('/Tickets/free', {
      params: { TrainId: trainId, TypeId: typeId },
    });
  },

  purchaseTicket(ticketId: string) {
    return client.post('/Tickets/purchase', { ticketId: ticketId });
  },

  getClientTickets(): Promise<AxiosResponse<IClientTicketResponse[]>> {
    return client.get('/Tickets/my-tickets');
  },
};

export default ReservationService;
