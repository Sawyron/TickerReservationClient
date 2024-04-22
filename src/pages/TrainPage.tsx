import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReservationService from '../services/ReservationService';
import { ITrainResponse } from '../types/ITrainResponse';
import Train from '../components/Train/Train';

const TrainPage: FC = () => {
  const [trains, setTrains] = useState<ITrainResponse[]>([]);

  const navigate = useNavigate();

  const fetchTranis = useCallback(async () => {
    try {
      const response = await ReservationService.getAllTrains();
      setTrains(response.data);
    } catch (error) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    fetchTranis();
  }, [fetchTranis]);

  return (
    <ul>
      {trains.map(train => (
        <li key={train.id}>
          <Train name={train.name} />
        </li>
      ))}
    </ul>
  );
};

export default TrainPage;
