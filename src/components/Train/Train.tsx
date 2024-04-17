import { FC } from 'react';

export interface ITrainProps {
  name: string;
}

const Train: FC<ITrainProps> = ({ name }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default Train;
