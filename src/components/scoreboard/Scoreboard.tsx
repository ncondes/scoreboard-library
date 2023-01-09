import { FC } from 'react';
import { IMatch } from '../../interfaces';
import { Match } from './Match';

interface Props {
   data: IMatch[];
}

export const Scoreboard: FC<Props> = ({ data }) => {
   return (
      <div className="scoreboard">
         <h2>Scoreboard</h2>
         <div className="scoreboard-labels">
            <span>ID</span>
            <span>Match</span>
         </div>
         <ul>
            {data.map((match) => (
               <Match key={match.id} {...match} />
            ))}
         </ul>
      </div>
   );
};
